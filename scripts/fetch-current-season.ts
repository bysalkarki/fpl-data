import fs from 'fs';

async function buildDefaultData() {
  const [bootRes, fixRes, standingsRes] = await Promise.all([
    fetch('https://fantasy.premierleague.com/api/bootstrap-static/'),
    fetch('https://fantasy.premierleague.com/api/fixtures/'),
    fetch('https://fantasy.premierleague.com/api/leagues-classic/314/standings/')
  ]);
  const boot = await bootRes.json();
  const fixtures = await fixRes.json();
  const standings = await standingsRes.json();

  const currentGwObj = boot.events.find((e: any) => e.is_current) || boot.events.find((e: any) => e.is_next) || boot.events[0];
  const currentGw = currentGwObj ? currentGwObj.id : 1;

  const teamMap = new Map();
  boot.teams.forEach((t: any) => teamMap.set(t.id, { name: t.name, short_name: t.short_name }));

  const fixtureLookup = new Map();
  fixtures.filter((f: any) => f.event >= currentGw && f.event <= currentGw + 4).forEach((f: any) => {
    if (!fixtureLookup.has(f.team_h)) fixtureLookup.set(f.team_h, []);
    const hArr = fixtureLookup.get(f.team_h);
    if (hArr.length < 5) {
      hArr.push({
        event: f.event,
        opponent_short: teamMap.get(f.team_a)?.short_name || 'OPP',
        opponent_name: teamMap.get(f.team_a)?.name || 'Opponent',
        is_home: true,
        difficulty: f.team_h_difficulty || 3
      });
    }
    if (!fixtureLookup.has(f.team_a)) fixtureLookup.set(f.team_a, []);
    const aArr = fixtureLookup.get(f.team_a);
    if (aArr.length < 5) {
      aArr.push({
        event: f.event,
        opponent_short: teamMap.get(f.team_h)?.short_name || 'OPP',
        opponent_name: teamMap.get(f.team_h)?.name || 'Opponent',
        is_home: false,
        difficulty: f.team_a_difficulty || 3
      });
    }
  });

  const allPlayers = boot.elements.map((el: any) => {
    const teamInfo = teamMap.get(el.team) || { name: 'PL Club', short_name: 'PLC' };
    return {
      id: el.id,
      web_name: el.web_name,
      first_name: el.first_name,
      second_name: el.second_name,
      team: el.team,
      team_short: teamInfo.short_name,
      team_name: teamInfo.name,
      element_type: el.element_type,
      now_cost: el.now_cost,
      form: el.form || '0.0',
      total_points: el.total_points,
      event_points: el.event_points || 0,
      selected_by_percent: el.selected_by_percent || '0',
      ict_index: el.ict_index || '0',
      expected_goals: el.expected_goals || '0',
      expected_assists: el.expected_assists || '0',
      expected_goal_involvements: el.expected_goal_involvements || '0',
      status: el.status || 'a',
      news: el.news || '',
      chance_of_playing_next_round: el.chance_of_playing_next_round,
      points_per_game: el.points_per_game || '0',
      goals_scored: el.goals_scored || 0,
      assists: el.assists || 0,
      clean_sheets: el.clean_sheets || 0,
      bonus: el.bonus || 0,
      fixtures: fixtureLookup.get(el.team) || [],
      price_change_event: el.cost_change_event ? el.cost_change_event / 10 : 0,
    };
  });

  const top20ManagersRaw = standings.standings.results.slice(0, 20);
  const picksPromises = top20ManagersRaw.map((m: any) =>
    fetch(`https://fantasy.premierleague.com/api/entry/${m.entry}/event/${currentGw}/picks/`)
      .then(r => r.ok ? r.json() : null)
      .catch(() => null)
  );
  const picksResults = await Promise.all(picksPromises);

  const top20Managers = top20ManagersRaw.map((m: any, idx: number) => {
    const pData = picksResults[idx] || {};
    const picks = pData.picks || [];
    const captainPick = picks.find((p: any) => p.is_captain);
    const vicePick = picks.find((p: any) => p.is_vice_captain);

    let defs = 0, mids = 0, fwds = 0;
    picks.slice(0, 11).forEach((p: any) => {
      const pl = allPlayers.find((x: any) => x.id === p.element);
      if (pl) {
        if (pl.element_type === 2) defs++;
        else if (pl.element_type === 3) mids++;
        else if (pl.element_type === 4) fwds++;
      }
    });
    const formation = defs && mids && fwds ? `${defs}-${mids}-${fwds}` : '3-5-2';

    return {
      rank: m.rank,
      last_rank: m.last_rank || m.rank,
      entry_id: m.entry,
      player_name: m.player_name,
      entry_name: m.entry_name,
      overall_points: m.total,
      event_total: m.event_total,
      total_transfers: pData.entry_history?.event_transfers || 0,
      event_transfers: pData.entry_history?.event_transfers || 0,
      event_transfers_cost: pData.entry_history?.event_transfers_cost || 0,
      bank: pData.entry_history?.bank || 0,
      value: pData.entry_history?.value || 1000,
      active_chip: pData.active_chip || null,
      chips_history: pData.active_chip ? [{ name: pData.active_chip, event: currentGw }] : [],
      picks: picks.map((p: any) => ({
        element: p.element,
        position: p.position,
        multiplier: p.multiplier,
        is_captain: p.is_captain,
        is_vice_captain: p.is_vice_captain
      })),
      captain_id: captainPick?.element,
      vice_captain_id: vicePick?.element,
      formation
    };
  });

  const helperCode = `
export function computeTop20Consensus(
  managers: FPLManager[],
  players: FPLPlayer[]
): Top20Consensus {
  const totalManagers = managers.length || 1;
  const playerMap = new Map(players.map((p) => [p.id, p]));

  const ownershipMap = new Map<number, number>();
  const captaincyMap = new Map<number, number>();
  const formationMap = new Map<string, number>();
  const chipsMap: Record<string, number> = {};

  let totalValue = 0;
  let totalGwPts = 0;
  let highestGw = { score: 0, manager: '', team: '' };

  managers.forEach((m) => {
    totalValue += m.value;
    totalGwPts += m.event_total;

    if (m.event_total > highestGw.score) {
      highestGw = {
        score: m.event_total,
        manager: m.player_name,
        team: m.entry_name,
      };
    }

    if (m.active_chip) {
      chipsMap[m.active_chip] = (chipsMap[m.active_chip] || 0) + 1;
    }

    if (m.formation) {
      formationMap.set(m.formation, (formationMap.get(m.formation) || 0) + 1);
    }

    m.picks.forEach((pick) => {
      ownershipMap.set(pick.element, (ownershipMap.get(pick.element) || 0) + 1);
      if (pick.is_captain) {
        captaincyMap.set(pick.element, (captaincyMap.get(pick.element) || 0) + 1);
      }
    });
  });

  const topOwnedPlayers = Array.from(ownershipMap.entries())
    .map(([id, count]) => {
      const p = playerMap.get(id) || {
        id,
        web_name: 'Player #' + id,
        first_name: 'FPL',
        second_name: 'Player',
        team: 1,
        team_short: 'PL',
        team_name: 'Premier League',
        element_type: 3 as const,
        now_cost: 60,
        form: '5.0',
        total_points: 50,
        event_points: 6,
        selected_by_percent: '10.0',
        ict_index: '50.0',
        expected_goals: '1.0',
        expected_assists: '1.0',
        expected_goal_involvements: '2.0',
        status: 'a' as const,
        news: '',
        chance_of_playing_next_round: 100,
        points_per_game: '5.0',
        goals_scored: 2,
        assists: 2,
        clean_sheets: 1,
        bonus: 3,
        fixtures: [],
      };
      return {
        player: p,
        count,
        percent: Math.round((count / totalManagers) * 100),
      };
    })
    .sort((a, b) => b.count - a.count);

  const captaincyDistribution = Array.from(captaincyMap.entries())
    .map(([id, count]) => {
      const p = playerMap.get(id) || {
        id,
        web_name: 'Player #' + id,
        first_name: 'FPL',
        second_name: 'Player',
        team: 1,
        team_short: 'PL',
        team_name: 'Premier League',
        element_type: 3 as const,
        now_cost: 100,
        form: '8.0',
        total_points: 100,
        event_points: 10,
        selected_by_percent: '30.0',
        ict_index: '100.0',
        expected_goals: '5.0',
        expected_assists: '4.0',
        expected_goal_involvements: '9.0',
        status: 'a' as const,
        news: '',
        chance_of_playing_next_round: 100,
        points_per_game: '7.0',
        goals_scored: 5,
        assists: 4,
        clean_sheets: 0,
        bonus: 10,
        fixtures: [],
      };
      return {
        player: p,
        count,
        percent: Math.round((count / totalManagers) * 100),
      };
    })
    .sort((a, b) => b.count - a.count);

  const formationDistribution = Array.from(formationMap.entries())
    .map(([formation, count]) => ({
      formation,
      count,
      percent: Math.round((count / totalManagers) * 100),
    }))
    .sort((a, b) => b.count - a.count);

  return {
    topOwnedPlayers,
    captaincyDistribution,
    formationDistribution,
    activeChipsCount: chipsMap,
    averageTeamValue: Math.round((totalValue / totalManagers) * 10) / 10,
    averageGwPoints: Math.round(totalGwPts / totalManagers),
    highestGwScore: highestGw,
  };
}
`;

  const output = `import { FPLPlayer, FPLManager, Top20Consensus } from '../types';

export const CURRENT_GAMEWEEK = ${currentGw};

export const INITIAL_PLAYERS: FPLPlayer[] = ${JSON.stringify(allPlayers, null, 2)};

export const INITIAL_TOP20_MANAGERS: FPLManager[] = ${JSON.stringify(top20Managers, null, 2)};
${helperCode}`;

  fs.writeFileSync('./src/data/defaultData.ts', output, 'utf-8');
  console.log(`Generated defaultData.ts with ${allPlayers.length} players and ${top20Managers.length} managers for GW${currentGw}`);
}

buildDefaultData();
