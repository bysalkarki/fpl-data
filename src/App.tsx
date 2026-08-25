import React, { useState, useEffect } from 'react';
import { FPLPlayer, FPLManager, Top20Consensus, AIScoutResponse, ManagerPick } from './types';
import { Top20Leaderboard } from './components/Top20Leaderboard';
import { AIScoutRoom } from './components/AIScoutRoom';
import { TemplateConsensus } from './components/TemplateConsensus';
import { MyTeamAnalyzer } from './components/MyTeamAnalyzer';
import { FormEdgeRadar } from './components/FormEdgeRadar';
import { PlayerModal } from './components/PlayerModal';
import { 
  Trophy, 
  Sparkles, 
  PieChart, 
  Shield, 
  Flame, 
  RefreshCw, 
  Zap, 
  Bookmark,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  Layers,
  BarChart3
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'top20' | 'ai-scout' | 'consensus' | 'my-team' | 'radar'>('top20');
  
  // Core Datasets
  const [managers, setManagers] = useState<FPLManager[]>([]);
  const [players, setPlayers] = useState<FPLPlayer[]>([]);
  const [consensus, setConsensus] = useState<Top20Consensus | null>(null);
  const [scoutReport, setScoutReport] = useState<AIScoutResponse | null>(null);
  const [selectedManager, setSelectedManager] = useState<FPLManager | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<FPLPlayer | null>(null);
  const [watchlist, setWatchlist] = useState<number[]>([1, 4, 18]); // Default watchlisted
  
  // User Team State
  const [userTeam, setUserTeam] = useState<{
    id: number;
    player_name: string;
    name: string;
    overall_points: number;
    overall_rank: number;
    event_total: number;
    bank: number;
    value: number;
    picks: ManagerPick[];
  }>({
    id: 120245,
    player_name: 'Dull Menate',
    name: 'LOCKER DOOR',
    overall_points: 131,
    overall_rank: 1,
    event_total: 131,
    bank: 0,
    value: 1000,
    picks: [],
  });

  // UI Loading states
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingScout, setIsLoadingScout] = useState(false);
  const [isLoadingTeam, setIsLoadingTeam] = useState(false);
  const [gameweek, setGameweek] = useState<number>(1);

  // Initial Data Bootstrap
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setIsLoading(true);
    try {
      // 1. Fetch Players
      const pRes = await fetch('/api/fpl/players');
      const pData = await pRes.json();
      const loadedPlayers: FPLPlayer[] = pData.players || [];
      setPlayers(loadedPlayers);

      // 2. Fetch Top 20 & Consensus
      const top20Res = await fetch('/api/fpl/top20');
      const top20Data = await top20Res.json();
      if (top20Data.managers && top20Data.managers.length > 0) {
        setManagers(top20Data.managers);
        setSelectedManager(top20Data.managers[0]);
      }
      if (top20Data.consensus) {
        setConsensus(top20Data.consensus);
      }
      if (top20Data.gameweek) {
        setGameweek(top20Data.gameweek);
      }

      // 3. Fetch default user team
      const initialTeamId = top20Data?.managers?.[0]?.entry_id ? String(top20Data.managers[0].entry_id) : '120245';
      await loadUserTeam(initialTeamId);

      // 4. Initial AI Scout Briefing
      fetchScoutBriefing();
    } catch (err) {
      console.error('Error bootstrapping FPL application:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchScoutBriefing = async (customQuestion?: string) => {
    setIsLoadingScout(true);
    try {
      const res = await fetch('/api/gemini/scout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userTeam: userTeam.picks.map(p => p.element),
          focusArea: 'Top 20 Strategy, High-ROI Differentials, and Form Formations',
          question: customQuestion,
        }),
      });
      const data = await res.json();
      if (data.data) {
        setScoutReport(data.data);
      }
    } catch (err) {
      console.error('Error fetching Gemini AI Scout:', err);
    } finally {
      setIsLoadingScout(false);
    }
  };

  const loadUserTeam = async (teamId: string) => {
    setIsLoadingTeam(true);
    try {
      const res = await fetch(`/api/fpl/team/${teamId}`);
      const data = await res.json();
      if (data.entry) {
        setUserTeam(data.entry);
      }
    } catch (err) {
      console.error(`Failed to load team ${teamId}:`, err);
    } finally {
      setIsLoadingTeam(false);
    }
  };

  const handleManualSync = async () => {
    setIsRefreshing(true);
    await fetchInitialData();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleToggleWatchlist = (player: FPLPlayer) => {
    setWatchlist(prev => 
      prev.includes(player.id) ? prev.filter(id => id !== player.id) : [...prev, player.id]
    );
  };

  const handleSelectPlayerByName = (name: string) => {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const found = players.find(p => 
      p.web_name.toLowerCase().replace(/[^a-z]/g, '').includes(cleanName) ||
      `${p.first_name} ${p.second_name}`.toLowerCase().replace(/[^a-z]/g, '').includes(cleanName)
    );
    if (found) {
      setSelectedPlayer(found);
    }
  };

  const eliteLeaderPoints = managers[0]?.overall_points || 1845;
  const avgPoints = consensus?.averageGwPoints || 68;

  return (
    <div className="min-h-screen bg-[#020408] text-slate-200 flex flex-col font-sans selection:bg-[#00ff85] selection:text-black antialiased">
      {/* Global Immersive Header */}
      <header className="bg-[#04070d] border-b border-slate-800/50 sticky top-0 z-40 text-white shadow-2xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Title from Immersive UI */}
            <div 
              className="flex items-center space-x-3.5 cursor-pointer group select-none"
              onClick={() => setActiveTab('top20')}
            >
              <div className="w-10 h-10 bg-[#00ff85] rounded-xl shadow-[0_0_15px_rgba(0,255,133,0.4)] flex items-center justify-center text-black font-black italic tracking-tighter text-lg transition-transform group-hover:scale-105">
                S
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase">
                    ELITE SCOUT
                  </h1>
                  <span className="text-[#00ff85] text-[10px] font-bold px-2 py-0.5 border border-[#00ff85]/30 rounded uppercase tracking-wider bg-[#00ff85]/5 shadow-[0_0_10px_rgba(0,255,133,0.15)]">
                    Gameweek {gameweek} Live
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5 hidden sm:block">
                  Global Top 20 Real-Time Intelligence
                </p>
              </div>
            </div>

            {/* Middle Quick Metrics Bar (from Immersive UI) */}
            <div className="hidden md:flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Average GW</p>
                <p className="text-xl font-mono font-black text-white">{avgPoints} pts</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Elite Leader</p>
                <p className="text-xl font-mono font-black text-[#00ff85]">{eliteLeaderPoints}</p>
              </div>
            </div>

            {/* Right Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                id="btn-sync-live"
                onClick={handleManualSync}
                disabled={isRefreshing}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800/80 transition-all cursor-pointer"
                title="Sync Live FPL API & Top 20"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-[#00ff85] ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Syncing...' : 'Sync Live'}</span>
              </button>

              <button
                id="btn-header-optimize"
                onClick={() => setActiveTab('my-team')}
                className="bg-[#38003c] hover:bg-[#4d0052] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(56,0,60,0.5)] border border-purple-500/30 transition-all cursor-pointer hover:scale-102 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Optimize My Team</span>
              </button>
            </div>
          </div>

          {/* Navigation Bar matching the sleek Immersive theme */}
          <div className="flex items-center space-x-1 sm:space-x-2 py-2 border-t border-slate-800/50 overflow-x-auto no-scrollbar">
            <button
              id="nav-top20"
              onClick={() => setActiveTab('top20')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'top20'
                  ? 'bg-slate-800 text-[#00ff85] border border-[#00ff85]/30 shadow-[0_0_10px_rgba(0,255,133,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Global Top 20 Tracker</span>
            </button>

            <button
              id="nav-consensus"
              onClick={() => setActiveTab('consensus')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'consensus'
                  ? 'bg-slate-800 text-[#00ff85] border border-[#00ff85]/30 shadow-[0_0_10px_rgba(0,255,133,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <PieChart className="w-3.5 h-3.5" />
              <span>Top 20 Template Heatmap</span>
            </button>

            <button
              id="nav-radar"
              onClick={() => setActiveTab('radar')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'radar'
                  ? 'bg-slate-800 text-[#00ff85] border border-[#00ff85]/30 shadow-[0_0_10px_rgba(0,255,133,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>The Edge: Form Index</span>
            </button>

            <button
              id="nav-my-team"
              onClick={() => setActiveTab('my-team')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'my-team'
                  ? 'bg-slate-800 text-[#00ff85] border border-[#00ff85]/30 shadow-[0_0_10px_rgba(0,255,133,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>My Squad Architect</span>
            </button>

            <button
              id="nav-ai-scout"
              onClick={() => setActiveTab('ai-scout')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ai-scout'
                  ? 'bg-[#38003c] text-white border border-purple-500/50 shadow-[0_0_15px_rgba(56,0,60,0.5)]'
                  : 'text-purple-300 hover:text-white hover:bg-purple-950/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>AI Grandmaster Scout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main App Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#080c16] border border-[#00ff85]/40 text-[#00ff85] shadow-[0_0_20px_rgba(0,255,133,0.2)] flex items-center justify-center animate-spin">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white font-mono">ESTABLISHING SECURE SCOUT LINK...</h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Syncing live top 20 managers, player points, and AI models</p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-200">
            {activeTab === 'top20' && (
              <Top20Leaderboard
                managers={managers}
                onSelectPlayer={(p) => setSelectedPlayer(p)}
                selectedManager={selectedManager}
                onSelectManager={(m) => setSelectedManager(m)}
              />
            )}

            {activeTab === 'ai-scout' && (
              <AIScoutRoom
                scoutReport={scoutReport}
                isLoading={isLoadingScout}
                onRefreshScout={fetchScoutBriefing}
                onSelectPlayerByName={handleSelectPlayerByName}
              />
            )}

            {activeTab === 'consensus' && consensus && (
              <TemplateConsensus
                consensus={consensus}
                onSelectPlayer={(p) => setSelectedPlayer(p)}
              />
            )}

            {activeTab === 'my-team' && (
              <MyTeamAnalyzer
                userTeam={userTeam}
                top20Consensus={consensus}
                onSelectPlayer={(p) => setSelectedPlayer(p)}
                onLoadTeamId={loadUserTeam}
                isLoadingTeam={isLoadingTeam}
                onLaunchAIScout={() => {
                  setActiveTab('ai-scout');
                  fetchScoutBriefing('Audit my team against the World Top 20 and find my top 2 transfer upgrades.');
                }}
              />
            )}

            {activeTab === 'radar' && (
              <FormEdgeRadar
                players={players}
                onSelectPlayer={(p) => setSelectedPlayer(p)}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
              />
            )}
          </div>
        )}
      </main>

      {/* Immersive Dark Footer */}
      <footer className="h-10 bg-[#04070d] border-t border-slate-800/50 flex items-center px-4 sm:px-8 justify-between text-[10px] text-slate-500 uppercase tracking-widest font-mono">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff85] animate-pulse"></span>
          <span>SECURE SCOUT LINK ACTIVE</span>
        </span>
        <span className="hidden sm:inline">ENCRYPTION: AES-256-GCM</span>
        <span>NODE: LHR-SC-01</span>
      </footer>

      {/* Global Player Modal */}
      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        top20OwnershipPercent={
          selectedPlayer
            ? consensus?.topOwnedPlayers.find(t => t.player.id === selectedPlayer.id)?.percent || 0
            : 0
        }
        onAddToWatchlist={handleToggleWatchlist}
        isWatchlisted={selectedPlayer ? watchlist.includes(selectedPlayer.id) : false}
      />
    </div>
  );
}
