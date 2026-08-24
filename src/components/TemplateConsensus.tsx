import React from 'react';
import { Top20Consensus, FPLPlayer } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Flame, Crown, Shield, Users, Layers, Award, TrendingUp, Sparkles } from 'lucide-react';

interface TemplateConsensusProps {
  consensus: Top20Consensus;
  onSelectPlayer: (player: FPLPlayer) => void;
}

export const TemplateConsensus: React.FC<TemplateConsensusProps> = ({
  consensus,
  onSelectPlayer,
}) => {
  const { topOwnedPlayers, captaincyDistribution, formationDistribution, averageTeamValue, averageGwPoints, highestGwScore } = consensus;

  // Prepare top 10 owned chart data
  const top10ChartData = topOwnedPlayers.slice(0, 10).map((item) => ({
    name: item.player.web_name,
    top20Percent: item.percent,
    globalPercent: parseFloat(item.player.selected_by_percent || '0'),
    player: item.player,
    team: item.player.team_short,
  }));

  const captaincyChartData = captaincyDistribution.map((item) => ({
    name: item.player.web_name,
    value: item.percent,
    count: item.count,
    player: item.player,
  }));

  const formationChartData = formationDistribution.map((f) => ({
    name: f.formation,
    value: f.percent,
    count: f.count,
  }));

  const COLORS = ['#00ff85', '#38bdf8', '#a855f7', '#eab308', '#e90052', '#06b6d4'];

  return (
    <div className="w-full space-y-6">
      {/* Top Banner Stats from Immersive UI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00ff85]/10 border border-[#00ff85]/30 flex items-center justify-center text-[#00ff85] shrink-0 shadow-[0_0_15px_rgba(0,255,133,0.2)]">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
              Top 20 Avg Team Value
            </span>
            <span className="text-2xl font-black font-mono text-white">
              £{averageTeamValue.toFixed(1)}m
            </span>
            <span className="text-[10px] text-[#00ff85] font-mono block mt-0.5">
              +£{(averageTeamValue - 100).toFixed(1)}m elite budget gain
            </span>
          </div>
        </div>

        <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
              Top 20 Avg GW Points
            </span>
            <span className="text-2xl font-black font-mono text-[#00ff85]">
              {averageGwPoints} pts
            </span>
            <span className="text-[10px] text-purple-400 font-mono block mt-0.5">
              Benchmark Global Avg: ~52 pts
            </span>
          </div>
        </div>

        <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
              Gameweek High Score
            </span>
            <span className="text-2xl font-black font-mono text-white">
              {highestGwScore.score} pts
            </span>
            <span className="text-[10px] text-slate-400 truncate block mt-0.5">
              By {highestGwScore.manager}
            </span>
          </div>
        </div>
      </div>

      {/* Main Analysis Visualizers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top 20 Ownership vs Global Game Bar Chart */}
        <div className="lg:col-span-8 bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/50">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#00ff85]" />
                Top 20 Template Ownership Matrix (%)
              </h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                Comparing player ownership in World Top 20 (Neon Green) vs. 11M+ Global (Sky)
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#00ff85]">
                <span className="w-2.5 h-2.5 rounded bg-[#00ff85] inline-block shadow-[0_0_8px_rgba(0,255,133,0.5)]"></span> Top 20 %
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2.5 h-2.5 rounded bg-sky-400 inline-block"></span> Global %
              </span>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={top10ChartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                onClick={(data: any) => {
                  if (data && data.activePayload && data.activePayload[0]) {
                    onSelectPlayer(data.activePayload[0].payload.player);
                  }
                }}
              >
                <XAxis
                  dataKey="name"
                  stroke="#64748b"
                  fontSize={10}
                  tickLine={false}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                />
                <YAxis stroke="#64748b" fontSize={10} domain={[0, 100]} unit="%" tickLine={false} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="bg-[#04070d] border border-slate-700/80 p-3 rounded-lg shadow-2xl text-xs text-white">
                          <div className="font-bold text-sm text-[#00ff85] font-mono">{d.name} ({d.team})</div>
                          <div className="mt-1 space-y-0.5 text-slate-300 font-mono text-[11px]">
                            <div>Top 20 Ownership: <span className="font-bold text-[#00ff85]">{d.top20Percent}%</span></div>
                            <div>Global Ownership: <span className="font-bold text-sky-400">{d.globalPercent}%</span></div>
                            <div>Ownership Delta: <span className="font-bold text-amber-400">{(d.top20Percent - d.globalPercent).toFixed(1)}%</span></div>
                          </div>
                          <div className="text-[9px] text-slate-500 mt-1 uppercase font-bold">Click to view player metrics</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="top20Percent" fill="#00ff85" radius={[4, 4, 0, 0]} />
                <Bar dataKey="globalPercent" fill="#38bdf8" radius={[4, 4, 0, 0]} opacity={0.6} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Captaincy Distribution & Consensus */}
        <div className="lg:col-span-4 bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4 flex flex-col justify-between">
          <div className="pb-3 border-b border-slate-800/50">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              Captaincy Consensus
            </h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Top 20 (C) Armband allocation</p>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={captaincyChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {captaincyChartData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="bg-[#04070d] border border-slate-700/80 p-2 rounded-lg text-xs text-white font-mono">
                          <span className="font-bold text-[#00ff85]">{d.name}</span>: {d.value}% ({d.count}/20 managers)
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800/50 font-mono">
            {captaincyChartData.map((item, idx) => (
              <div
                key={item.name}
                onClick={() => onSelectPlayer(item.player)}
                className="flex items-center justify-between text-xs py-1 px-2 rounded-md hover:bg-slate-800/40 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                  ></span>
                  <span className="font-sans font-bold text-slate-200">{item.name}</span>
                </div>
                <span className="font-bold text-[#00ff85] text-xs">
                  {item.value}% ({item.count} mgrs)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ownership Heatmap (Top 20) Pill Section - directly from Immersive UI */}
      <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00ff85] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00ff85]" />
              Ownership Heatmap (Top 20 Consensus)
            </h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
              Assets ranked by top 20 ownership concentration
            </p>
          </div>
          <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded bg-[#04070d] text-[#00ff85] border border-slate-800">
            FORMATION: {formationChartData[0]?.name || '3-4-3'} ({formationChartData[0]?.value || 70}%)
          </span>
        </div>

        {/* Heatmap Pill Bars as in Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {topOwnedPlayers.slice(0, 10).map((item) => {
            const isDifferential = item.percent <= 20;
            return (
              <div
                key={item.player.id}
                onClick={() => onSelectPlayer(item.player)}
                className="w-full bg-[#04070d] h-8 rounded-lg overflow-hidden relative border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-all group"
              >
                <div
                  className={`h-full ${isDifferential ? 'bg-[#38003c] border-r border-purple-400' : 'bg-[#00ff85]'}`}
                  style={{ width: `${item.percent}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-between px-3 text-[11px] font-bold uppercase tracking-wider font-mono">
                  <span className={`${item.percent > 40 && !isDifferential ? 'text-black' : 'text-white'}`}>
                    {item.player.web_name} ({item.player.team_short})
                  </span>
                  <span className={`${item.percent > 40 && !isDifferential ? 'text-black font-black' : 'text-[#00ff85] font-black'}`}>
                    {item.percent}% {isDifferential ? '• DIFFERENTIAL!' : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
