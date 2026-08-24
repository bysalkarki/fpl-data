import React, { useState } from 'react';
import { FPLPlayer, ManagerPick } from '../types';
import { PitchView } from './PitchView';
import { Shield, Sparkles, RefreshCw, AlertTriangle, CheckCircle2, TrendingUp, Search, Zap, User } from 'lucide-react';

interface MyTeamAnalyzerProps {
  userTeam: {
    id: number;
    player_name: string;
    name: string;
    overall_points: number;
    overall_rank: number;
    event_total: number;
    bank: number;
    value: number;
    picks: ManagerPick[];
  };
  top20Consensus: any;
  onSelectPlayer: (player: FPLPlayer) => void;
  onLoadTeamId: (id: string) => void;
  isLoadingTeam: boolean;
  onLaunchAIScout: () => void;
}

export const MyTeamAnalyzer: React.FC<MyTeamAnalyzerProps> = ({
  userTeam,
  top20Consensus,
  onSelectPlayer,
  onLoadTeamId,
  isLoadingTeam,
  onLaunchAIScout,
}) => {
  const [inputTeamId, setInputTeamId] = useState('');

  // Calculate Overlap and Missing Must-Haves
  const userElementIds = new Set(userTeam.picks.map((p) => p.element));
  const top15Consensus = (top20Consensus?.topOwnedPlayers || []).slice(0, 15);

  const sharedAssets = top15Consensus.filter((item: any) => userElementIds.has(item.player.id));
  const missingMustHaves = top15Consensus.filter(
    (item: any) => !userElementIds.has(item.player.id) && item.percent >= 60
  );

  const overlapPercentage = Math.round((sharedAssets.length / 15) * 100);

  const handleFetch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputTeamId.trim()) {
      onLoadTeamId(inputTeamId.trim());
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Team ID Importer & Overview Card in Immersive UI Style */}
      <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-[#00ff85]/10 text-[#00ff85] border border-[#00ff85]/30 uppercase tracking-wider">
                Squad Gap & Edge Analyzer
              </span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                VS. WORLD TOP 20 TEMPLATE
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white mt-1">
              {userTeam.name} ({userTeam.player_name})
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Overall Rank: <span className="font-bold text-white">#{userTeam.overall_rank.toLocaleString()}</span> • Points: <span className="font-bold text-[#00ff85]">{userTeam.overall_points} pts</span>
            </p>
          </div>

          {/* Search/Load by FPL Team ID form */}
          <form onSubmit={handleFetch} className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                id="fpl-team-id-input"
                type="number"
                placeholder="Enter FPL Team ID (e.g. 1148293)"
                value={inputTeamId}
                onChange={(e) => setInputTeamId(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#04070d] border border-slate-800/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff85]/60 focus:ring-1 focus:ring-[#00ff85]/40"
              />
            </div>
            <button
              id="load-my-team-btn"
              type="submit"
              disabled={isLoadingTeam}
              className="px-3.5 py-2 bg-[#00ff85] hover:bg-[#00ff85]/90 text-black rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,255,133,0.3)] cursor-pointer"
            >
              {isLoadingTeam ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Search className="w-3.5 h-3.5" />
              )}
              <span className="uppercase font-mono tracking-wider">Import Squad</span>
            </button>
          </form>
        </div>
      </div>

      {/* Alignment Matrix & Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Template Overlap Meter */}
        <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Top 20 Template Overlap
            </span>
            <span className="text-xs font-mono font-bold text-[#00ff85]">
              {sharedAssets.length} / 15 players
            </span>
          </div>

          <div className="my-2">
            <div className="flex items-baseline justify-between mb-1 font-mono">
              <span className="text-3xl font-black text-white">
                {overlapPercentage}%
              </span>
              <span className="text-[10px] text-slate-400 uppercase">
                {overlapPercentage >= 75
                  ? 'Strong Alignment'
                  : overlapPercentage >= 50
                  ? 'Moderate Template'
                  : 'High Differential Variance'}
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#04070d] rounded-full overflow-hidden border border-slate-800/80">
              <div
                className="h-full bg-[#00ff85] transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(0,255,133,0.5)]"
                style={{ width: `${overlapPercentage}%` }}
              ></div>
            </div>
          </div>

          <span className="text-[10px] text-slate-500 mt-1">
            Sharing core template shields against massive red arrows during high-effective-ownership gameweeks.
          </span>
        </div>

        {/* Missing Must-Haves Alert */}
        <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl md:col-span-2 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#e90052] uppercase tracking-widest flex items-center gap-1.5 font-mono">
              <AlertTriangle className="w-3.5 h-3.5" />
              High-Risk Non-Owned Assets ({missingMustHaves.length})
            </span>
            <span className="text-[10px] text-slate-500 font-mono">&gt;60% Top 20 Ownership</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-1">
            {missingMustHaves.length > 0 ? (
              missingMustHaves.map((item: any) => (
                <div
                  key={item.player.id}
                  onClick={() => onSelectPlayer(item.player)}
                  className="p-2.5 bg-[#04070d] border border-rose-500/30 rounded-lg flex items-center justify-between cursor-pointer hover:border-rose-500/60 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">
                      {item.player.web_name}
                    </span>
                    <span className="text-[10px] px-1 py-0.2 rounded bg-rose-500/10 font-mono text-rose-400 border border-rose-500/20">
                      {item.player.team_short}
                    </span>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="font-bold text-[#e90052]">
                      {item.percent}% owned
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-xs text-[#00ff85] font-medium flex items-center gap-1.5 p-3 bg-[#04070d] border border-[#00ff85]/30 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                All top elite heavyweights (&gt;60% owned) are currently in your squad!
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800/50">
            <span className="text-[10px] text-slate-500">Want tailored transfer suggestions?</span>
            <button
              id="ai-scout-squad-audit-btn"
              onClick={onLaunchAIScout}
              className="text-xs font-bold text-[#00ff85] hover:text-[#00ff85]/80 flex items-center gap-1 font-mono uppercase tracking-wider cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              Ask AI Transfer Doctor &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Pitch View for User Squad */}
      <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00ff85]" />
              Your Active Gameweek Squad Lineup
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Bank: £{(userTeam.bank / 10).toFixed(1)}m • Value: £{(userTeam.value / 10).toFixed(1)}m • Gameweek Points: {userTeam.event_total} pts
            </p>
          </div>

          <button
            id="launch-ai-doctor-btn"
            onClick={onLaunchAIScout}
            className="px-4 py-2 bg-[#38003c] hover:bg-[#4d0052] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(56,0,60,0.5)] border border-purple-500/40 transition-all cursor-pointer hover:scale-102"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="font-mono uppercase tracking-wider">AI Squad Edge Doctor</span>
          </button>
        </div>

        <PitchView
          picks={userTeam.picks}
          onSelectPlayer={onSelectPlayer}
          showPoints={true}
        />
      </div>
    </div>
  );
};
