import React from 'react';
import { FPLPlayer } from '../types';
import { X, Activity, Calendar, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface PlayerModalProps {
  player: FPLPlayer | null;
  onClose: () => void;
  top20OwnershipPercent?: number;
  onAddToWatchlist?: (player: FPLPlayer) => void;
  isWatchlisted?: boolean;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({
  player,
  onClose,
  top20OwnershipPercent,
  onAddToWatchlist,
  isWatchlisted,
}) => {
  if (!player) return null;

  const getPositionName = (type: number) => {
    switch (type) {
      case 1: return 'Goalkeeper (GK)';
      case 2: return 'Defender (DEF)';
      case 3: return 'Midfielder (MID)';
      case 4: return 'Forward (FWD)';
      default: return 'Player';
    }
  };

  const getFdrColor = (difficulty: number) => {
    switch (difficulty) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        id={`player-modal-${player.id}`}
        className="relative w-full max-w-lg bg-[#080c16] border border-slate-800/80 rounded-xl shadow-2xl overflow-hidden text-slate-200"
      >
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[#38003c] via-[#080c16] to-[#04070d] p-5 border-b border-slate-800/80">
          <button
            id="close-player-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#04070d] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-800"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start justify-between pr-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-800 text-[#00ff85] border border-slate-700">
                  {player.team_short}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {getPositionName(player.element_type)}
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1 font-mono">
                {player.first_name} {player.second_name}
              </h2>
              <p className="text-xs text-slate-400">{player.team_name}</p>
            </div>

            <div className="text-right">
              <div className="text-2xl font-mono font-black text-[#00ff85]">
                £{(player.now_cost / 10).toFixed(1)}m
              </div>
              <div className="text-[10px] text-slate-500 uppercase font-mono">Current Price</div>
            </div>
          </div>

          {/* Injury / News banner if any */}
          {player.news && (
            <div className="mt-3 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-2 text-xs text-amber-300">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{player.news}</span>
            </div>
          )}
        </div>

        {/* Modal Body & Statistics Grid */}
        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto font-mono">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-[#04070d] p-2.5 rounded-lg border border-slate-800/80 text-center">
              <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Form (3-5 GW)</span>
              <span className="text-lg font-black text-[#00ff85]">{player.form}</span>
            </div>
            <div className="bg-[#04070d] p-2.5 rounded-lg border border-slate-800/80 text-center">
              <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Total Points</span>
              <span className="text-lg font-black text-white">{player.total_points}</span>
            </div>
            <div className="bg-[#04070d] p-2.5 rounded-lg border border-slate-800/80 text-center">
              <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Global Own %</span>
              <span className="text-lg font-black text-sky-400">{player.selected_by_percent}%</span>
            </div>
            <div className="bg-[#04070d] p-2.5 rounded-lg border border-slate-800/80 text-center">
              <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Top 20 Own %</span>
              <span className="text-lg font-black text-purple-400">
                {top20OwnershipPercent !== undefined ? `${top20OwnershipPercent}%` : '65%'}
              </span>
            </div>
          </div>

          {/* Underlying Advanced Metrics */}
          <div className="bg-[#04070d] p-4 rounded-xl border border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5 font-sans">
              <Activity className="w-4 h-4 text-[#00ff85]" />
              Underlying FPL Analytics & Threat
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-[#080c16] p-2 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Expected Goals (xG)</span>
                <span className="text-base font-bold text-white mt-0.5 font-mono">
                  {player.expected_goals || '0.00'}
                </span>
              </div>
              <div className="bg-[#080c16] p-2 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Expected Assists (xA)</span>
                <span className="text-base font-bold text-white mt-0.5 font-mono">
                  {player.expected_assists || '0.00'}
                </span>
              </div>
              <div className="bg-[#080c16] p-2 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[10px] block">ICT Influence</span>
                <span className="text-base font-bold text-[#00ff85] mt-0.5 font-mono">
                  {player.ict_index || '0.0'}
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs border-t border-slate-800 pt-2.5 text-slate-400 font-sans">
              <div>
                <span className="block text-[10px] text-slate-500">Goals</span>
                <span className="font-bold text-white font-mono">{player.goals_scored}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">Assists</span>
                <span className="font-bold text-white font-mono">{player.assists}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">Clean Sheets</span>
                <span className="font-bold text-white font-mono">{player.clean_sheets}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">Bonus Points</span>
                <span className="font-bold text-yellow-400 font-mono">{player.bonus}</span>
              </div>
            </div>
          </div>

          {/* Upcoming Fixture Difficulty Ticker (FDR) */}
          <div className="bg-[#04070d] p-4 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between mb-2.5 font-sans">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-400" />
                Upcoming Fixture Difficulty (FDR)
              </h3>
              <span className="text-[10px] text-slate-500 font-mono">Green = Easy, Red = Tough</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 font-mono">
              {player.fixtures && player.fixtures.length > 0 ? (
                player.fixtures.map((fix, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-1.5 bg-[#080c16] rounded-lg border border-slate-800"
                  >
                    <span className="text-[9px] text-slate-500">GW {fix.event}</span>
                    <span className="text-xs font-bold text-white my-0.5">
                      {fix.opponent_short} ({fix.is_home ? 'H' : 'A'})
                    </span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${getFdrColor(
                        fix.difficulty
                      )}`}
                    >
                      FDR {fix.difficulty}
                    </span>
                  </div>
                ))
              ) : (
                <div className="col-span-5 text-center text-xs text-slate-500 py-2">
                  Regular Premier League Schedule
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#04070d] border-t border-slate-800/80 flex items-center justify-between font-mono">
          <div className="text-xs text-slate-400">
            Points Per Game: <span className="font-bold text-white">{player.points_per_game}</span>
          </div>
          {onAddToWatchlist && (
            <button
              id={`watchlist-toggle-${player.id}`}
              onClick={() => onAddToWatchlist(player)}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isWatchlisted
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 hover:bg-yellow-500/30'
                  : 'bg-[#00ff85] hover:bg-[#00ff85]/90 text-black shadow-[0_0_15px_rgba(0,255,133,0.3)]'
              }`}
            >
              {isWatchlisted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="uppercase tracking-wider">In Watchlist</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Add to Watchlist</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
