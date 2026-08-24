import React, { useState } from 'react';
import { AIScoutResponse } from '../types';
import { Sparkles, Crown, Zap, Send, Shield, AlertCircle, TrendingUp, HelpCircle, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

interface AIScoutRoomProps {
  scoutReport: AIScoutResponse | null;
  isLoading: boolean;
  onRefreshScout: (customQuestion?: string) => void;
  onSelectPlayerByName?: (name: string) => void;
}

export const AIScoutRoom: React.FC<AIScoutRoomProps> = ({
  scoutReport,
  isLoading,
  onRefreshScout,
  onSelectPlayerByName,
}) => {
  const [question, setQuestion] = useState('');

  const quickPrompts = [
    'Who is the highest ceiling captain pick for GW 26?',
    'Find me 3 underpriced defenders with clean sheet potential under £5.0m',
    'Should I sell Haaland to fund Salah + Palmer double premium?',
    'What is the optimal chip strategy for upcoming double gameweeks?',
  ];

  const handleAsk = (promptText: string) => {
    setQuestion(promptText);
    onRefreshScout(promptText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onRefreshScout(question.trim());
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header Banner with Immersive UI Styling */}
      <div className="bg-gradient-to-r from-[#38003c] via-[#080c16] to-[#04070d] p-6 rounded-xl border border-purple-500/40 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-[#00ff85]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#00ff85] text-black flex items-center gap-1 shadow-[0_0_10px_rgba(0,255,133,0.4)]">
                <Sparkles className="w-3 h-3 fill-black" />
                Gemini AI Grandmaster Scout
              </span>
              <span className="text-[10px] text-[#00ff85] font-mono uppercase tracking-widest">
                LIVE TACTICAL ENGINE
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">
              Tactical Intelligence & Decision Doctor
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl mt-1">
              Synthesizing data from the World Top 20 managers, underlying xGI / fixture difficulty models, and differential volatility to give you the winning edge.
            </p>
          </div>

          <button
            id="refresh-scout-btn"
            onClick={() => onRefreshScout()}
            disabled={isLoading}
            className="px-4 py-2 bg-[#00ff85] hover:bg-[#00ff85]/90 text-black font-black rounded-lg text-xs flex items-center gap-2 transition-all shrink-0 shadow-[0_0_15px_rgba(0,255,133,0.3)] cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="uppercase tracking-wider font-mono">{isLoading ? 'Synthesizing...' : 'Regenerate Tactical Edge'}</span>
          </button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="bg-[#080c16] p-8 rounded-xl border border-slate-800/80 text-center space-y-3 shadow-2xl">
          <div className="w-10 h-10 border-2 border-[#00ff85] border-t-transparent rounded-full animate-spin mx-auto shadow-[0_0_15px_rgba(0,255,133,0.3)]"></div>
          <p className="text-xs uppercase tracking-widest font-mono text-slate-300">
            Analyzing Top 20 Manager squads & evaluating expected goals algorithms...
          </p>
        </div>
      )}

      {/* Main Intelligence Grid */}
      {scoutReport && !isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Captaincy Verdict Card */}
          <div className="lg:col-span-6 bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  Gameweek Captaincy Verdict
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#04070d] text-yellow-400 border border-yellow-500/20">
                  Floor vs Ceiling
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3.5 bg-[#04070d] border border-[#00ff85]/30 rounded-xl shadow-[0_0_10px_rgba(0,255,133,0.05)]">
                  <span className="text-[9px] uppercase font-bold text-[#00ff85] block mb-1 font-mono tracking-wider">
                    Safe Essential Pick (High Floor)
                  </span>
                  <div className="text-base font-black text-white font-mono">
                    {scoutReport.captaincyVerdict.bestPick}
                  </div>
                </div>

                <div className="p-3.5 bg-[#04070d] border border-purple-500/30 rounded-xl shadow-[0_0_10px_rgba(168,85,247,0.05)]">
                  <span className="text-[9px] uppercase font-bold text-purple-400 block mb-1 font-mono tracking-wider">
                    Differential Boom (Rank Booster)
                  </span>
                  <div className="text-base font-black text-white font-mono">
                    {scoutReport.captaincyVerdict.differentialPick}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed bg-[#04070d] p-3.5 rounded-xl border border-slate-800/80">
                <span className="text-[#00ff85] font-bold font-mono uppercase text-[10px] block mb-1">Tactical Rationale:</span>
                <p>{scoutReport.captaincyVerdict.rationale}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/50 text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>Top 20 Consensus: Salah (70%), Palmer (20%)</span>
            </div>
          </div>

          {/* Top 20 Elite Meta Trends */}
          <div className="lg:col-span-6 bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00ff85]" />
                World Top 20 Strategic Patterns
              </h3>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Live Meta Flow</span>
            </div>

            <div className="space-y-2.5">
              {scoutReport.top20TrendInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#04070d] border border-slate-800/80 text-xs text-slate-300"
                >
                  <span className="w-5 h-5 rounded bg-[#00ff85]/10 text-[#00ff85] border border-[#00ff85]/30 font-bold font-mono flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Differential Edge Picks */}
          <div className="lg:col-span-12 bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Top Differential Edge Picks (&lt;15% Ownership)
                </h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                  Explosive upside targets overlooked by the general template
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#04070d] text-[#00ff85] border border-[#00ff85]/20">
                Rank Acceleration Assets
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {scoutReport.differentialEdgePicks.map((diff, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectPlayerByName && onSelectPlayerByName(diff.player)}
                  className="group p-4 rounded-xl bg-[#04070d] border border-slate-800/80 hover:border-[#00ff85]/60 hover:shadow-[0_0_15px_rgba(0,255,133,0.15)] transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-200 font-mono">
                        {diff.team}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#00ff85]">
                        {diff.price} • {diff.ownership} own
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#00ff85] transition-colors font-mono">
                      {diff.player}
                    </h4>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                      {diff.reason}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-right">
                    <span className="text-[10px] font-bold text-[#00ff85] flex items-center justify-end gap-1 font-mono uppercase">
                      Inspect Metrics &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Squad Transfer Doctor */}
          {scoutReport.userTeamAudit && (
            <div className="lg:col-span-12 bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#00ff85]" />
                  AI Transfer Doctor: Personalized Squad Audit
                </h3>
                <span className="text-xs font-mono font-bold text-[#00ff85]">
                  {scoutReport.userTeamAudit.overlapScore}% Template Match
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#00ff85] flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Squad Strengths
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {scoutReport.userTeamAudit.strengths.map((str, i) => (
                      <li key={i} className="flex items-start gap-1.5 bg-[#04070d] p-2 rounded-lg border border-slate-800/60">
                        <span className="text-[#00ff85] font-bold font-mono">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#e90052] flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" /> Key Vulnerabilities
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {scoutReport.userTeamAudit.vulnerabilities.map((vuln, i) => (
                      <li key={i} className="flex items-start gap-1.5 bg-[#04070d] p-2 rounded-lg border border-slate-800/60">
                        <span className="text-[#e90052] font-bold font-mono">•</span>
                        <span>{vuln}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Transfers Box */}
              {scoutReport.userTeamAudit.recommendedTransfers && scoutReport.userTeamAudit.recommendedTransfers.length > 0 && (
                <div className="mt-3 p-4 bg-[#04070d] rounded-xl border border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 font-mono">
                    Recommended Optimal Moves:
                  </span>
                  <div className="space-y-2">
                    {scoutReport.userTeamAudit.recommendedTransfers.map((tr, i) => (
                      <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs bg-[#080c16] p-2.5 rounded-lg border border-slate-800/50">
                        <div className="flex items-center gap-2 font-mono">
                          <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20 text-xs">
                            OUT: {tr.out}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                          <span className="px-2 py-0.5 rounded bg-[#00ff85]/10 text-[#00ff85] font-bold border border-[#00ff85]/20 text-xs">
                            IN: {tr.in}
                          </span>
                        </div>
                        <span className="text-slate-400 text-xs sm:max-w-md">
                          {tr.reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Interactive AI Tactical Ask Bar */}
      <div className="bg-[#080c16] p-5 rounded-xl border border-slate-800/80 shadow-2xl space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#00ff85]" />
          Ask Gemini AI Scout Any FPL Dilemma
        </h3>

        {/* Quick prompt chips */}
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(q)}
              className="text-xs px-3 py-1.5 rounded-lg bg-[#04070d] hover:bg-slate-800 text-slate-300 hover:text-[#00ff85] border border-slate-800/80 transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Custom Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <input
            id="ai-scout-custom-question"
            type="text"
            placeholder="E.g. Is Isak triple captaincy viable this week? Who to replace Saka with?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-[#04070d] border border-slate-800/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff85]/60 focus:ring-1 focus:ring-[#00ff85]/40"
          />
          <button
            id="send-ai-scout-question-btn"
            type="submit"
            disabled={isLoading}
            className="px-4 py-2.5 bg-[#00ff85] hover:bg-[#00ff85]/90 text-black font-black rounded-lg text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,255,133,0.3)] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="uppercase font-mono tracking-wider">Consult Scout</span>
          </button>
        </form>
      </div>
    </div>
  );
};
