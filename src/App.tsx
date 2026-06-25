import { useEmpire } from '@/hooks/useEmpire';
import type { Zone } from '@/types';
import DashboardScreen from '@/sections/DashboardScreen';
import CouncilScreen from '@/sections/CouncilScreen';
import ModulesScreen from '@/sections/ModulesScreen';
import PodcastScreen from '@/sections/PodcastScreen';
import CombatScreen from '@/sections/CombatScreen';
import MarketScreen from '@/sections/MarketScreen';
import FlashLoanScreen from '@/sections/FlashLoanScreen';
import {
  LayoutDashboard, Brain, BookOpen, Mic, Swords, Wallet, Zap,
  Heart, Star, Coins, FlaskConical
} from 'lucide-react';

const NAV_ITEMS: { zone: Zone; label: string; icon: typeof LayoutDashboard }[] = [
  { zone: 'dashboard', label: 'Empire', icon: LayoutDashboard },
  { zone: 'council', label: 'Council', icon: Brain },
  { zone: 'modules', label: 'Modules', icon: BookOpen },
  { zone: 'podcast', label: 'Podcast', icon: Mic },
  { zone: 'combat', label: 'Combat', icon: Swords },
  { zone: 'market', label: 'Market', icon: Wallet },
  { zone: 'flashloan', label: 'Flash', icon: Zap },
];

const ZONE_TITLES: Record<Zone, { title: string; subtitle: string }> = {
  dashboard: { title: 'EMPIRE DASHBOARD', subtitle: '86 repos. 6 families. 1 sovereign.' },
  council: { title: 'AI COUNCIL', subtitle: 'Four minds. One consensus.' },
  modules: { title: 'MODULE REGISTRY', subtitle: '86 repos mapped into 6 families.' },
  podcast: { title: 'PODCAST PIPELINE', subtitle: "America's Got Problems." },
  combat: { title: 'CULLING GROUNDS', subtitle: 'Defeat the Murderous Wizards.' },
  market: { title: 'MARKETPLACE', subtitle: 'The Seed. The Grove. The Acropolis.' },
  flashloan: { title: 'SUI FLASH LOAN', subtitle: 'Zero-collateral DeFi lending.' },
};

function App() {
  const empire = useEmpire();
  const { state, activeZone, setActiveZone } = empire;
  const player = state.game.player;

  const renderScreen = () => {
    switch (activeZone) {
      case 'dashboard': return <DashboardScreen empire={empire} />;
      case 'council': return <CouncilScreen empire={empire} />;
      case 'modules': return <ModulesScreen empire={empire} />;
      case 'podcast': return <PodcastScreen empire={empire} />;
      case 'combat': return <CombatScreen empire={empire} />;
      case 'market': return <MarketScreen empire={empire} />;
      case 'flashloan': return <FlashLoanScreen empire={empire} />;
      default: return <DashboardScreen empire={empire} />;
    }
  };

  const zoneInfo = ZONE_TITLES[activeZone];

  return (
    <div className="h-screen w-screen bg-[#0a0a0a] text-[#e0f7fa] overflow-hidden flex flex-col relative font-mono selection:bg-cyan-500/30">
      {/* CRT Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_1px,transparent_1px,transparent_2px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* Top HUD */}
      <header className="relative z-40 flex-shrink-0 border-b border-cyan-500/10 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs text-orange-400">LVL</span>
            <span className="font-mono text-sm text-orange-400">{player.level}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <Heart className="h-2.5 w-2.5 text-red-400" />
              <span className="text-[9px] text-muted-foreground">{player.hp}/{player.maxHp}</span>
            </div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-red-400 rounded-full transition-all" style={{ width: `${(player.hp / player.maxHp) * 100}%` }} />
            </div>
          </div>
          <div className="w-16">
            <div className="flex items-center gap-1 mb-0.5">
              <Star className="h-2.5 w-2.5 text-cyan-400" />
              <span className="text-[9px] text-muted-foreground">{player.xp}</span>
            </div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full transition-all" style={{ width: `${(player.xp / player.xpNext) * 100}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Coins className="h-3 w-3 text-yellow-400" />
            <span className="font-mono text-[10px] text-yellow-400">{player.tokens}</span>
          </div>
        </div>
        {/* Zone Title */}
        <div className="px-3 pb-2">
          <h1 className="font-mono text-[11px] tracking-wider text-cyan-400">{zoneInfo.title}</h1>
          <p className="text-[9px] text-muted-foreground">{zoneInfo.subtitle}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-30 flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
        <div className="max-w-lg mx-auto px-3 py-4">
          {renderScreen()}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="relative z-40 flex-shrink-0 border-t border-cyan-500/10 bg-[#0a0a0a]/90 backdrop-blur-md pb-safe">
        <div className="flex justify-around items-center">
          {NAV_ITEMS.map(item => {
            const isActive = activeZone === item.zone;
            return (
              <button
                key={item.zone}
                onClick={() => setActiveZone(item.zone)}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-1.5 min-w-[44px] rounded-lg transition-all active:scale-95 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-muted-foreground hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <item.icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[8px] font-medium leading-none">{item.label}</span>
                {item.zone === 'combat' && (
                  <FlaskConical className="h-2 w-2 text-red-400 absolute top-1 right-1 opacity-0" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
