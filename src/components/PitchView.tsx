import React from 'react';
import { ManagerPick, FPLPlayer } from '../types';
import { Shield, Zap, Flame, Crown, AlertCircle } from 'lucide-react';

interface PitchViewProps {
  picks: ManagerPick[];
  captainId?: number;
  viceCaptainId?: number;
  onSelectPlayer?: (player: FPLPlayer) => void;
  showPoints?: boolean;
  activeChip?: string | null;
}

export const PitchView: React.FC<PitchViewProps> = ({
  picks,
  captainId,
  viceCaptainId,
  onSelectPlayer,
  showPoints = true,
  activeChip,
}) => {
  const starters = picks.filter((p) => p.position <= 11);
  const bench = picks.filter((p) => p.position > 11).sort((a, b) => a.position - b.position);

  const gkp = starters.filter((p) => p.player?.element_type === 1);
  const def = starters.filter((p) => p.player?.element_type === 2);
  const mid = starters.filter((p) => p.player?.element_type === 3);
  const fwd = starters.filter((p) => p.player?.element_type === 4);

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

  const renderPlayerCard = (pick: ManagerPick, isBench = false) => {
    const player = pick.player;
    if (!player) return null;

    const isCap = pick.is_captain || pick.element === captainId;
    const isVice = pick.is_vice_captain || pick.element === viceCaptainId;
    const nextFix = player.fixtures && player.fixtures[0];
    const formNum = parseFloat(player.form || '0');

    return (
      <div
        key={pick.position}
        id={`pitch-player-${player.id}`}
        onClick={() => onSelectPlayer && onSelectPlayer(player)}
        className={`group relative flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-108 select-none ${
          isBench ? 'opacity-80 hover:opacity-100' : ''
        }`}
        style={{ width: '80px' }}
      >
        {/* Captaincy Badge */}
        {isCap && (
          <span className="absolute -top-2.5 -right-1 z-20 w-5 h-5 rounded-full bg-[#00ff85] text-black font-black text-[10px] flex items-center justify-center border border-black shadow-[0_0_10px_rgba(0,255,133,0.6)]">
            C
          </span>
        )}
        {isVice && !isCap && (
          <span className="absolute -top-2.5 -right-1 z-20 w-5 h-5 rounded-full bg-slate-300 text-slate-900 font-black text-[10px] flex items-center justify-center border border-black shadow-md">
            V
          </span>
        )}

        {/* Player Jersey / Club Box */}
        <div className="relative w-11 h-11 rounded-xl bg-[#060a12] border border-[#00ff85]/40 shadow-lg flex items-center justify-center text-white overflow-hidden group-hover:border-[#00ff85] group-hover:shadow-[0_0_12px_rgba(0,255,133,0.4)] transition-all">
          <span className="text-[11px] font-black tracking-tight text-white font-mono">
            {player.team_short}
          </span>

          {/* Form Flag */}
          {formNum >= 7.0 && (
            <span className="absolute bottom-0 inset-x-0 bg-[#00ff85] text-black text-[7px] font-black uppercase tracking-tighter text-center leading-tight">
              HOT
            </span>
          )}
        </div>

        {/* Player Name and Points Label */}
        <div className="mt-1 w-full bg-[#04070d]/95 text-white rounded-md text-center px-1 py-0.5 shadow-xl border border-slate-800/80 backdrop-blur-md">
          <p className="text-[10px] font-bold truncate leading-tight tracking-tight text-slate-100">
            {player.web_name}
          </p>
          <div className="flex items-center justify-between text-[8.5px] text-slate-400 px-0.5 mt-0.5">
            <span className="font-semibold text-slate-400 font-mono">
              £{(player.now_cost / 10).toFixed(1)}
            </span>
            {showPoints ? (
              <span className="font-bold text-[#00ff85] font-mono">
                {isCap ? player.event_points * 2 : player.event_points} pts
              </span>
            ) : (
              <span className="text-[#00ff85] font-mono">{player.form}</span>
            )}
          </div>
        </div>

        {/* Next Fixture Pill */}
        {nextFix && (
          <div
            className={`mt-0.5 text-[8px] font-bold px-1 rounded truncate max-w-full font-mono ${getFdrColor(
              nextFix.difficulty
            )}`}
          >
            {nextFix.opponent_short} ({nextFix.is_home ? 'H' : 'A'})
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Active Chip Banner */}
      {activeChip && (
        <div className="mb-2 px-3 py-1 rounded-full bg-[#38003c] border border-purple-500/40 text-purple-200 text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,0,60,0.5)]">
          <Zap className="w-3.5 h-3.5 fill-[#00ff85] text-[#00ff85]" />
          <span className="uppercase font-mono tracking-wider">Active Chip: {activeChip}</span>
        </div>
      )}

      {/* The Pitch Container with Immersive Dark Turf & Emerald Boundary */}
      <div
        className="w-full max-w-2xl rounded-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden border border-slate-800 select-none"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0, 255, 133, 0.08) 0%, rgba(2, 6, 12, 0.98) 100%),
            repeating-linear-gradient(0deg, #040914, #040914 40px, #060f20 40px, #060f20 80px)
          `,
          minHeight: '440px',
        }}
      >
        {/* Pitch Tactical Markings */}
        <div className="absolute inset-x-8 top-0 h-20 border-b border-x border-[#00ff85]/20 rounded-b-xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-10 border-b border-x border-[#00ff85]/20 rounded-b-lg pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#00ff85]/20 pointer-events-none" />
        <div className="absolute top-1/2 inset-x-0 h-px bg-[#00ff85]/20 pointer-events-none" />
        <div className="absolute inset-x-8 bottom-0 h-20 border-t border-x border-[#00ff85]/20 rounded-t-xl pointer-events-none" />

        {/* Pitch Lines Formation Layers */}
        <div className="relative z-10 flex flex-col justify-between h-full space-y-6 sm:space-y-7 py-2">
          {/* Goalkeepers Line */}
          <div className="flex justify-center items-center gap-4">
            {gkp.map((p) => renderPlayerCard(p))}
          </div>

          {/* Defenders Line */}
          <div className="flex justify-around items-center px-2">
            {def.map((p) => renderPlayerCard(p))}
          </div>

          {/* Midfielders Line */}
          <div className="flex justify-around items-center px-1">
            {mid.map((p) => renderPlayerCard(p))}
          </div>

          {/* Forwards Line */}
          <div className="flex justify-around items-center px-4">
            {fwd.map((p) => renderPlayerCard(p))}
          </div>
        </div>
      </div>

      {/* Substitutes / Bench Section */}
      <div className="w-full max-w-2xl mt-3 bg-[#04070d] rounded-xl p-3 border border-slate-800/80 shadow-xl">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
            <span>Substitutes Bench</span>
          </span>
          <span className="text-[10px] text-slate-500 font-mono">ORDER: GK • SUB 1 • SUB 2 • SUB 3</span>
        </div>

        <div className="flex justify-around items-center pt-1">
          {bench.map((p, idx) => (
            <div key={p.position} className="flex flex-col items-center">
              <span className="text-[9px] font-mono text-slate-500 mb-0.5">
                {idx === 0 ? 'GKP 2' : `Sub ${idx}`}
              </span>
              {renderPlayerCard(p, true)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
