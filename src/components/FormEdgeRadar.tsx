import React, { useState } from 'react';
import { FPLPlayer } from '../types';
import { Flame, Search, Zap, ArrowUpDown, PlusCircle, CheckCircle2, Star } from 'lucide-react';

interface FormEdgeRadarProps {
  players: FPLPlayer[];
  onSelectPlayer: (player: FPLPlayer) => void;
  watchlist: number[];
  onToggleWatchlist: (player: FPLPlayer) => void;
}

export const FormEdgeRadar: React.FC<FormEdgeRadarProps> = ({
  players,
  onSelectPlayer,
  watchlist,
  onToggleWatchlist,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPos, setSelectedPos] = useState<number | 'all'>('all');
  const [differentialOnly, setDifferentialOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'form' | 'xgi' | 'total_points' | 'now_cost' | 'ict_index'>('form');

  const filteredPlayers = [...players]
    .filter((p) => {
      const matchesSearch =
        p.web_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.team_short.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.team_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPos = selectedPos === 'all' || p.element_type === selectedPos;
      const matchesDiff = !differentialOnly || parseFloat(p.selected_by_percent || '0') <= 15.0;
      return matchesSearch && matchesPos && matchesDiff;
    })
    .sort((a, b) => {
      if (sortBy === 'form') return parseFloat(b.form || '0') - parseFloat(a.form || '0');
      if (sortBy === 'xgi') return parseFloat(b.expected_goal_involvements || '0') - parseFloat(a.expected_goal_involvements || '0');
      if (sortBy === 'total_points') return b.total_points - a.total_points;
      if (sortBy === 'now_cost') return b.now_cost - a.now_cost;
      if (sortBy === 'ict_index') return parseFloat(b.ict_index || '0') - parseFloat(a.ict_index || '0');
      return 0;
    });

  const getPositionBadge = (type: number) => {
    switch (type) {
      case 1:
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">GK</span>;
      case 2:
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">DEF</span>;
      case 3:
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-[#00ff85]/10 text-[#00ff85] border border-[#00ff85]/30">MID</span>;
      case 4:
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30">FWD</span>;
      default:
        return null;
    }
  };

  const getFdrBg = (diff: number) => {
    switch (diff) {
      case 1:
      case 2:
        return 'bg-[#00ff85]/20 text-[#00ff85] border border-[#00ff85]/40';
      case 3:
        return 'bg-slate-800 text-slate-300 border border-slate-700';
      case 4:
        return 'bg-[#e90052]/20 text-[#e90052] border border-[#e90052]/40';
      case 5:
        return 'bg-rose-950 text-rose-300 border border-rose-800';
      default:
        return 'bg-slate-800 text-slate-300';
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Search and Filters Bar in Immersive UI Style */}
      <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              id="search-players-to-watch"
              type="text"
              placeholder="Search player name, team (e.g. Palmer, Arsenal, MCI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#04070d] border border-slate-800/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff85]/60 focus:ring-1 focus:ring-[#00ff85]/40"
            />
          </div>

          {/* Differential Edge Toggle */}
          <button
            id="differential-toggle-btn"
            onClick={() => setDifferentialOnly(!differentialOnly)}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              differentialOnly
                ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] font-black'
                : 'bg-[#04070d] text-slate-300 hover:text-white border border-slate-800/80'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${differentialOnly ? 'fill-black' : 'text-yellow-400'}`} />
            <span className="font-mono uppercase tracking-wider">Differential Edge (&lt;15% Owned)</span>
          </button>
        </div>

        {/* Sub filters: Position & Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/50">
          {/* Position Tabs */}
          <div className="flex items-center gap-1 bg-[#04070d] p-1 rounded-lg border border-slate-800/80 text-xs font-mono">
            {(
              [
                { id: 'all', label: 'All Positions' },
                { id: 1, label: 'Goalkeepers' },
                { id: 2, label: 'Defenders' },
                { id: 3, label: 'Midfielders' },
                { id: 4, label: 'Forwards' },
              ] as const
            ).map((pos) => (
              <button
                key={pos.id}
                id={`filter-pos-${pos.id}`}
                onClick={() => setSelectedPos(pos.id)}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedPos === pos.id
                    ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>

          {/* Sort Metrics */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3" /> Sort:
            </span>
            <div className="flex bg-[#04070d] p-1 rounded-lg border border-slate-800/80 text-xs font-mono">
              <button
                id="sort-form-btn"
                onClick={() => setSortBy('form')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  sortBy === 'form'
                    ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Live Form
              </button>
              <button
                id="sort-xgi-btn"
                onClick={() => setSortBy('xgi')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  sortBy === 'xgi'
                    ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                xGI Threat
              </button>
              <button
                id="sort-pts-btn"
                onClick={() => setSortBy('total_points')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  sortBy === 'total_points'
                    ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Total Points
              </button>
              <button
                id="sort-cost-btn"
                onClick={() => setSortBy('now_cost')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  sortBy === 'now_cost'
                    ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Price
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Players Cards Grid in Immersive UI Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.map((player) => {
          const isWatchlisted = watchlist.includes(player.id);
          const isDifferential = parseFloat(player.selected_by_percent || '0') <= 15.0;

          return (
            <div
              key={player.id}
              id={`player-card-${player.id}`}
              className="bg-[#080c16] rounded-xl border border-slate-800/80 shadow-2xl hover:border-[#00ff85]/60 hover:shadow-[0_0_15px_rgba(0,255,133,0.15)] transition-all duration-200 p-4.5 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {getPositionBadge(player.element_type)}
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {player.team_short}
                    </span>
                    {isDifferential && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 uppercase tracking-wider font-mono">
                        Differential
                      </span>
                    )}
                  </div>

                  <button
                    id={`toggle-watchlist-${player.id}`}
                    onClick={() => onToggleWatchlist(player)}
                    title={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      isWatchlisted
                        ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                        : 'text-slate-500 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {isWatchlisted ? <CheckCircle2 className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
                  </button>
                </div>

                {/* Player Name and Club */}
                <div
                  onClick={() => onSelectPlayer(player)}
                  className="cursor-pointer group flex items-start justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#00ff85] transition-colors font-mono">
                      {player.web_name}
                    </h4>
                    <span className="text-xs text-slate-500 font-sans">{player.team_name}</span>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-base font-black text-white">
                      £{(player.now_cost / 10).toFixed(1)}m
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {player.selected_by_percent}% own
                    </span>
                  </div>
                </div>

                {/* Performance Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 my-3 text-center text-xs font-mono">
                  <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[9px] text-slate-500 block font-semibold uppercase">Form (3-5 GW)</span>
                    <span className="text-sm font-black text-[#00ff85]">
                      {player.form}
                    </span>
                  </div>
                  <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[9px] text-slate-500 block font-semibold uppercase">xGI Threat</span>
                    <span className="text-sm font-black text-sky-400">
                      {player.expected_goal_involvements || '0.0'}
                    </span>
                  </div>
                  <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[9px] text-slate-500 block font-semibold uppercase">Total Points</span>
                    <span className="text-sm font-black text-white">
                      {player.total_points}
                    </span>
                  </div>
                </div>

                {/* Fixture Difficulty Ticker (FDR) */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-mono">
                    Next Fixtures (FDR):
                  </span>
                  <div className="grid grid-cols-4 gap-1 font-mono">
                    {player.fixtures && player.fixtures.slice(0, 4).map((f, idx) => (
                      <div
                        key={idx}
                        className={`py-1 rounded text-center text-[10px] font-bold ${getFdrBg(f.difficulty)}`}
                      >
                        {f.opponent_short} ({f.is_home ? 'H' : 'A'})
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3.5 pt-3 border-t border-slate-800/50 flex items-center justify-between font-mono">
                <span className="text-xs text-slate-500">
                  {player.goals_scored}G • {player.assists}A • {player.bonus}B
                </span>
                <button
                  id={`view-player-details-${player.id}`}
                  onClick={() => onSelectPlayer(player)}
                  className="text-xs font-bold text-[#00ff85] hover:text-[#00ff85]/80 flex items-center gap-1 cursor-pointer uppercase tracking-wider"
                >
                  View Edge Radar &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
