import React from 'react';
import { Top20Consensus, FPLPlayer } from '../types';
import { 
  Crown, 
  TrendingUp, 
  Layers, 
  Shield,
  Percent,
  Sparkles
} from 'lucide-react';

interface ConsensusAnalyticsProps {
  consensus: Top20Consensus | null;
  onPlayerClick: (player: FPLPlayer) => void;
}

export const ConsensusAnalytics: React.FC<ConsensusAnalyticsProps> = ({
  consensus,
  onPlayerClick
}) => {
  if (!consensus) {
    return (
      <div className="p-8 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
        Loading Top 20 Consensus analytics...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Avg Squad Value</span>
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <p className="text-2xl font-black text-white">£{consensus.average_team_value}m</p>
          <p className="text-[11px] text-emerald-400 font-medium mt-1">+£6.2m budget growth</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Avg Bank Reserve</span>
            <span className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
              <Shield className="w-4 h-4" />
            </span>
          </div>
          <p className="text-2xl font-black text-white">£{consensus.average_bank}m</p>
          <p className="text-[11px] text-slate-400 mt-1">Flexible for mini-swaps</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Top Captaincy Choice</span>
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <Crown className="w-4 h-4" />
            </span>
          </div>
          <p className="text-2xl font-black text-amber-300">
            {consensus.captain_breakdown[0]?.player.web_name || 'Salah'}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            {consensus.captain_breakdown[0]?.percentage || 75}% Top 20 share
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Preferred Formation</span>
            <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
              <Layers className="w-4 h-4" />
            </span>
          </div>
          <p className="text-2xl font-black text-white">
            {consensus.formation_breakdown[0]?.formation || '3-5-2'}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            {consensus.formation_breakdown[0]?.count || 12} of 20 elite managers
          </p>
        </div>
      </div>

      {/* Main Dual Grid: Top 20 Ownership vs Overall Gap & Captain Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Top 20 Template Ownership & Meta Locks (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Top 20 Template Ownership vs Overall</h3>
                <p className="text-xs text-slate-400">Where the world's elite diverge from the casual public</p>
              </div>
            </div>
          </div>

          <div className="space-y-3.5 mt-4">
            {consensus.most_owned_players.slice(0, 8).map(({ player, count, percentage }) => {
              const gap = percentage - player.selected_by_percent;
              const isHighGap = gap > 20;

              return (
                <div
                  key={player.id}
                  onClick={() => onPlayerClick(player)}
                  className="bg-slate-950/70 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 rounded-xl p-3 transition cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {player.position}
                      </span>
                      <span className="font-bold text-white text-sm hover:text-emerald-400 transition">
                        {player.web_name}
                      </span>
                      <span className="text-xs text-slate-400">({player.team_short})</span>
                      <span className="text-xs font-semibold text-emerald-400">£{player.price}m</span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs">
                      <span className="font-bold text-emerald-400">{percentage}% Top 20</span>
                      <span className="text-slate-500">vs</span>
                      <span className="text-slate-400">{player.selected_by_percent}% Overall</span>
                    </div>
                  </div>

                  {/* Dual Comparison Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex relative">
                    {/* Top 20 Bar */}
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {/* Difference Badge */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
                    <span>Owned by {count}/20 world leaders</span>
                    {isHighGap && (
                      <span className="text-amber-300 font-bold">
                        ⚡ +{gap.toFixed(0)}% Elite Differential Advantage
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Captaincy Breakdown & Top 20 Differentials (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Captaincy Breakdown */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Top 20 Captaincy Distribution</h3>
                <p className="text-xs text-slate-400">Gameweek 26 active armband picks</p>
              </div>
            </div>

            <div className="space-y-3">
              {consensus.captain_breakdown.map(({ player, count, percentage }) => (
                <div key={player.id} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">
                      C
                    </span>
                    <div>
                      <span className="font-bold text-white text-sm">{player.web_name}</span>
                      <span className="text-xs text-slate-400 block">{player.team_name}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-base font-black text-amber-300">{percentage}%</span>
                    <span className="text-[10px] text-slate-400 block">({count} managers)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elite Differentials Discovered in Top 20 */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Top 20 Secret Differentials</h3>
                <p className="text-xs text-slate-400">Low overall ownership but high elite trust</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {consensus.top_differentials.map(({ player, count, description }) => (
                <div
                  key={player.id}
                  onClick={() => onPlayerClick(player)}
                  className="bg-slate-950/80 hover:bg-slate-900 border border-purple-500/30 rounded-xl p-3 cursor-pointer transition"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-purple-300 text-sm">{player.web_name}</span>
                      <span className="text-xs text-slate-400">£{player.price}m</span>
                    </div>
                    <span className="text-[11px] font-bold text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                      {Math.round((count / 20) * 100)}% of Top 20
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-tight mt-1">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
