import React, { useState } from 'react';
import { FPLManager, FPLPlayer } from '../types';
import { PitchView } from './PitchView';
import { Trophy, Eye, Search, TrendingUp, TrendingDown, Minus, Crown, Zap, Shield, ArrowUpDown, ChevronRight, UserCheck } from 'lucide-react';

interface Top20LeaderboardProps {
  managers: FPLManager[];
  onSelectPlayer: (player: FPLPlayer) => void;
  selectedManager: FPLManager | null;
  onSelectManager: (manager: FPLManager) => void;
}

export const Top20Leaderboard: React.FC<Top20LeaderboardProps> = ({
  managers,
  onSelectPlayer,
  selectedManager,
  onSelectManager,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'rank' | 'event_total' | 'overall_points' | 'value'>('rank');

  const filteredManagers = [...managers]
    .filter((m) =>
      m.player_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.entry_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.country_name && m.country_name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'rank') return a.rank - b.rank;
      if (sortBy === 'event_total') return b.event_total - a.event_total;
      if (sortBy === 'overall_points') return b.overall_points - a.overall_points;
      if (sortBy === 'value') return b.value - a.value;
      return 0;
    });

  const getRankDelta = (rank: number, lastRank: number) => {
    if (!lastRank || rank === lastRank) {
      return <Minus className="w-3 h-3 text-slate-600" />;
    }
    if (rank < lastRank) {
      return (
        <span className="flex items-center text-[#00ff85] text-[10px] font-bold">
          <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +{lastRank - rank}
        </span>
      );
    }
    return (
      <span className="flex items-center text-[#e90052] text-[10px] font-bold">
        <TrendingDown className="w-2.5 h-2.5 mr-0.5" /> -{rank - lastRank}
      </span>
    );
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Filter / Search Bar in Immersive Dark Style */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#080c16] p-4 rounded-xl border border-slate-800/80 shadow-xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            id="search-top20-managers"
            type="text"
            placeholder="Search by manager name, team, or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#04070d] border border-slate-800/80 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff85]/60 focus:ring-1 focus:ring-[#00ff85]/40"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3" /> Sort:
          </span>
          <div className="flex bg-[#04070d] p-1 rounded-lg border border-slate-800/80 text-xs font-mono">
            <button
              id="sort-by-rank-btn"
              onClick={() => setSortBy('rank')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                sortBy === 'rank'
                  ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Rank
            </button>
            <button
              id="sort-by-gw-points-btn"
              onClick={() => setSortBy('event_total')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                sortBy === 'event_total'
                  ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GW Pts
            </button>
            <button
              id="sort-by-value-btn"
              onClick={() => setSortBy('value')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                sortBy === 'value'
                  ? 'bg-slate-800 text-[#00ff85] font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Squad Value
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left is Global Top 20 Tracking, Right is Pitch Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Top 20 Leaderboard List */}
        <div className="lg:col-span-6 bg-[#080c16] rounded-xl border border-slate-800/80 overflow-hidden shadow-2xl flex flex-col">
          {/* Card Header matching Design HTML */}
          <div className="p-4 bg-slate-800/30 border-b border-slate-800/50 flex justify-between items-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-yellow-500" />
              Global Top 20 Tracking ({filteredManagers.length})
            </h3>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              Live Intel Feed
            </span>
          </div>

          <div className="divide-y divide-slate-800/30 overflow-x-auto">
            {filteredManagers.map((m) => {
              const isSelected = selectedManager?.entry_id === m.entry_id;
              const capPick = m.picks?.find(p => p.is_captain || p.element === m.captain_id);
              const capName = capPick?.player?.web_name || 'Salah';

              return (
                <div
                  key={m.entry_id}
                  id={`manager-card-${m.rank}`}
                  onClick={() => onSelectManager(m)}
                  className={`p-3.5 transition-colors duration-150 cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-800/60 border-l-2 border-[#00ff85]'
                      : 'hover:bg-slate-800/20'
                  }`}
                >
                  {/* Rank Badge */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex flex-col items-center justify-center w-7 shrink-0">
                      {m.rank === 1 ? (
                        <span className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20 text-xs font-bold font-mono">
                          1
                        </span>
                      ) : m.rank === 2 ? (
                        <span className="w-6 h-6 rounded-full bg-slate-400/10 text-slate-400 flex items-center justify-center border border-slate-400/20 text-xs font-bold font-mono">
                          2
                        </span>
                      ) : m.rank === 3 ? (
                        <span className="w-6 h-6 rounded-full bg-orange-800/10 text-orange-400 flex items-center justify-center border border-orange-800/20 text-xs font-bold font-mono">
                          3
                        </span>
                      ) : (
                        <span className="text-xs font-bold font-mono text-slate-500">
                          {m.rank}
                        </span>
                      )}
                      <div className="mt-0.5">{getRankDelta(m.rank, m.last_rank)}</div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 font-sans">
                        <span className="font-bold text-white text-sm truncate">
                          {m.player_name}
                        </span>
                        {m.country_name && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800/80 text-slate-400 font-mono shrink-0">
                            {m.country_name}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 truncate flex items-center gap-2 mt-0.5 font-sans">
                        <span>{m.entry_name}</span>
                        <span>•</span>
                        <span className="text-slate-400 text-[11px] font-sans">
                          {capName} <span className="text-slate-500">(C)</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Points & Stats */}
                  <div className="flex items-center gap-4 shrink-0 font-mono">
                    <div className="text-center">
                      <span className="text-[10px] text-slate-500 uppercase block">GW</span>
                      <span className="text-xs font-bold text-[#00ff85]">
                        +{m.event_total}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase block">Total</span>
                      <span className="text-sm font-bold text-white">
                        {m.overall_points.toLocaleString()}
                      </span>
                    </div>

                    <button
                      id={`inspect-manager-${m.rank}-btn`}
                      className={`p-1.5 rounded-md text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#00ff85] text-black shadow-[0_0_10px_rgba(0,255,133,0.3)]'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Squad Pitch Inspector */}
        <div className="lg:col-span-6 sticky top-28 space-y-4">
          {selectedManager ? (
            <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
              {/* Manager Header Profile */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800/50">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 uppercase tracking-wider">
                      Rank #{selectedManager.rank} Worldwide
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">ID: {selectedManager.entry_id}</span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-white mt-1">
                    {selectedManager.entry_name}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Manager: <span className="font-semibold text-slate-200">{selectedManager.player_name}</span> ({selectedManager.country_name})
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black font-mono text-[#00ff85]">
                    {selectedManager.overall_points.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold font-mono">
                    GW Score: <span className="text-white">+{selectedManager.event_total}</span>
                  </div>
                </div>
              </div>

              {/* Quick stats metrics */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">Squad Value</span>
                  <span className="font-mono font-bold text-white text-sm">
                    £{(selectedManager.value / 10).toFixed(1)}m
                  </span>
                </div>
                <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">In The Bank</span>
                  <span className="font-mono font-bold text-[#00ff85] text-sm">
                    £{(selectedManager.bank / 10).toFixed(1)}m
                  </span>
                </div>
                <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">GW Moves</span>
                  <span className="font-mono font-bold text-white text-sm">
                    {selectedManager.event_transfers}
                  </span>
                </div>
                <div className="bg-[#04070d] p-2 rounded-lg border border-slate-800/80">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">Total Moves</span>
                  <span className="font-mono font-bold text-white text-sm">
                    {selectedManager.total_transfers}
                  </span>
                </div>
              </div>

              {/* Pitch Rendering */}
              <PitchView
                picks={selectedManager.picks}
                captainId={selectedManager.captain_id}
                viceCaptainId={selectedManager.vice_captain_id}
                onSelectPlayer={onSelectPlayer}
                activeChip={selectedManager.active_chip}
              />
            </div>
          ) : (
            <div className="bg-[#080c16] p-8 rounded-xl border border-slate-800/80 text-center text-slate-500">
              <Eye className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              <p className="text-xs uppercase font-bold tracking-wider">Select any manager from the Top 20 to view their live squad pitch</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
