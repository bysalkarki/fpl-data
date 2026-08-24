import React from 'react';
import { Trophy, Sparkles, PieChart, Shield, BarChart3, RefreshCw } from 'lucide-react';

interface NavbarProps {
  activeTab: 'top20' | 'ai-edge' | 'consensus' | 'my-team' | 'players';
  setActiveTab: (tab: 'top20' | 'ai-edge' | 'consensus' | 'my-team' | 'players') => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  gameweek: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onRefresh,
  isRefreshing,
  gameweek
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('top20')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Trophy className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  FPL World Elite
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  GW {gameweek} Live
                </span>
              </div>
              <p className="text-xs text-slate-400">Top 20 Global Intel & Squad Architect</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
            <button
              id="nav-tab-top20"
              onClick={() => setActiveTab('top20')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'top20'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Top 20 World</span>
            </button>

            <button
              id="nav-tab-ai-edge"
              onClick={() => setActiveTab('ai-edge')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'ai-edge'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI Edge & Form</span>
            </button>

            <button
              id="nav-tab-consensus"
              onClick={() => setActiveTab('consensus')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'consensus'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <PieChart className="w-4 h-4" />
              <span>Top 20 Consensus</span>
            </button>

            <button
              id="nav-tab-my-team"
              onClick={() => setActiveTab('my-team')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'my-team'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>My Team Architect</span>
            </button>

            <button
              id="nav-tab-players"
              onClick={() => setActiveTab('players')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'players'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Player Matrix</span>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center space-x-3">
            <button
              id="btn-live-refresh"
              onClick={onRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer"
              title="Refresh Top 20 & Live Points"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span className="hidden sm:inline">{isRefreshing ? 'Syncing...' : 'Sync Live'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Tabs */}
        <div className="flex md:hidden overflow-x-auto py-2 space-x-2 no-scrollbar border-t border-slate-800/60">
          <button
            onClick={() => setActiveTab('top20')}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer ${
              activeTab === 'top20' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Top 20 World
          </button>
          <button
            onClick={() => setActiveTab('ai-edge')}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer ${
              activeTab === 'ai-edge' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            AI Edge & Form
          </button>
          <button
            onClick={() => setActiveTab('consensus')}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer ${
              activeTab === 'consensus' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Consensus
          </button>
          <button
            onClick={() => setActiveTab('my-team')}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer ${
              activeTab === 'my-team' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            My Team
          </button>
          <button
            onClick={() => setActiveTab('players')}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer ${
              activeTab === 'players' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Player Matrix
          </button>
        </div>
      </div>
    </header>
  );
};
