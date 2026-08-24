export type ElementType = 1 | 2 | 3 | 4; // 1: GK, 2: DEF, 3: MID, 4: FWD

export interface FixtureDifficulty {
  event: number;
  opponent_short: string;
  opponent_name: string;
  is_home: boolean;
  difficulty: number; // 1 to 5 (FDR)
}

export interface FPLPlayer {
  id: number;
  web_name: string;
  first_name: string;
  second_name: string;
  team: number;
  team_short: string;
  team_name: string;
  element_type: ElementType;
  now_cost: number; // in tenths (e.g. 105 = 10.5m)
  form: string; // e.g. "7.8"
  total_points: number;
  event_points: number;
  selected_by_percent: string; // e.g. "45.2"
  top20_ownership_percent?: number; // Calculated e.g. 85.0
  ict_index: string;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  status: 'a' | 'd' | 'i' | 's' | 'u'; // available, doubtful, injured, suspended, unavailable
  news: string;
  chance_of_playing_next_round: number | null;
  points_per_game: string;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  bonus: number;
  fixtures: FixtureDifficulty[];
  price_change_event?: number;
}

export interface ManagerPick {
  element: number;
  position: number; // 1-15 (1-11 starting, 12-15 bench)
  multiplier: number; // 1, 2 (captain), 3 (triple captain), 0 (bench)
  is_captain: boolean;
  is_vice_captain: boolean;
  player?: FPLPlayer;
}

export interface ChipPlay {
  name: 'wildcard' | 'freehit' | '3xc' | 'bboost' | 'manager';
  event: number;
  time?: string;
}

export interface FPLManager {
  rank: number;
  last_rank: number;
  entry_id: number;
  player_name: string;
  entry_name: string;
  overall_points: number;
  event_total: number;
  total_transfers: number;
  event_transfers: number;
  event_transfers_cost: number;
  bank: number;
  value: number;
  country_name?: string;
  country_code?: string;
  active_chip: string | null;
  chips_history: ChipPlay[];
  picks: ManagerPick[];
  captain_id?: number;
  vice_captain_id?: number;
  formation?: string; // e.g. "3-5-2"
}

export interface Top20Consensus {
  topOwnedPlayers: {
    player: FPLPlayer;
    count: number;
    percent: number;
  }[];
  captaincyDistribution: {
    player: FPLPlayer;
    count: number;
    percent: number;
  }[];
  formationDistribution: {
    formation: string;
    count: number;
    percent: number;
  }[];
  activeChipsCount: Record<string, number>;
  averageTeamValue: number;
  averageGwPoints: number;
  highestGwScore: {
    score: number;
    manager: string;
    team: string;
  };
}

export interface UserSquad {
  teamName: string;
  managerName?: string;
  teamId?: number;
  bank: number;
  freeTransfers: number;
  picks: ManagerPick[];
}

export interface AIScoutResponse {
  gameweekSummary: string;
  top20TrendInsights: string[];
  captaincyVerdict: {
    bestPick: string;
    differentialPick: string;
    rationale: string;
  };
  differentialEdgePicks: {
    player: string;
    team: string;
    price: string;
    ownership: string;
    reason: string;
  }[];
  userTeamAudit?: {
    overlapScore: number;
    strengths: string[];
    vulnerabilities: string[];
    recommendedTransfers: {
      out: string;
      in: string;
      reason: string;
    }[];
  };
}
