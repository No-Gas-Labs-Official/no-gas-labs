import type { Oracle, ModuleFamily, SkillNode, Quest, Enemy, PodcastAgent, Episode, Lead } from '@/types';

export const ORACLES: Oracle[] = [
  {
    key: 'chatgpt',
    name: 'The Historian',
    character: 'ChatGPT',
    color: '#10a37f',
    voice: 'I have seen 10,000 versions of this problem. Here is what worked...',
    personality: 'Encyclopedic, pattern-matching, confident, occasionally overconfident',
    url: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4o-mini'
  },
  {
    key: 'claude',
    name: 'The Conscience',
    character: 'Claude',
    color: '#d4a574',
    voice: 'Before we build — who does this help, and who might it harm?',
    personality: 'Careful, ethical, asks hard questions, refuses bad ideas kindly',
    url: 'https://api.anthropic.com/v1/messages',
    model: 'claude-sonnet-4-20250514'
  },
  {
    key: 'gemini',
    name: 'The Dreamer',
    character: 'Gemini',
    color: '#4285f4',
    voice: 'What if this was not just a tool but a movement? What if...',
    personality: 'Expansive, connecting disparate ideas, sees systems and movements',
    url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    model: 'gemini-2.0-flash'
  },
  {
    key: 'grok',
    name: 'The Dissenter',
    character: 'Grok',
    color: '#ff6b35',
    voice: 'Everyone has been trying to solve this wrong. Here is the actual problem...',
    personality: 'Contrarian, cuts through pretense, finds the uncomfortable truth',
    url: 'https://api.x.ai/v1/chat/completions',
    model: 'grok-beta'
  }
];

export const MODULE_FAMILIES: ModuleFamily[] = [
  {
    id: 'core',
    name: 'CORE PRODUCTS',
    color: '#ffd700',
    repos: [
      { name: 'no-gas-labs', desc: 'The Primordial Engine — sovereign seed', status: 'real', size: '65KB', lang: 'HTML' },
      { name: 'culling-of-murderous-wizards', desc: 'Interactive 40-page digital comic', status: 'real', size: '173KB', lang: 'TypeScript' },
      { name: 'ngl001-def4us28', desc: 'NGL-001 Artifact & Manifesto', status: 'real', size: '16MB', lang: 'JavaScript' },
    ]
  },
  {
    id: 'intel',
    name: 'INTELLIGENCE SYSTEM',
    color: '#00e5ff',
    repos: [
      { name: 'ai-guild-hardened-v0.2', desc: 'Operations Intelligence — 59,457 LOC', status: 'real', size: '1.3MB', lang: 'JavaScript' },
      { name: 'no-gas-labs-command-center', desc: 'Full-stack TypeScript command center', status: 'real', size: '26MB', lang: 'TypeScript' },
      { name: 'no-gas-labs-audit-monorepo', desc: 'Comprehensive audit — Python', status: 'real', size: '?', lang: 'Python' },
    ]
  },
  {
    id: 'agents',
    name: 'PODCAST PIPELINE',
    color: '#ff4444',
    repos: [
      { name: 'MaestroNGL', desc: 'Workflow orchestration — scheduling', status: 'spec', size: '9 files', lang: 'Python' },
      { name: 'EthosGuardNGL', desc: 'Brand enforcement — tone consistency', status: 'spec', size: '9 files', lang: 'Python' },
      { name: 'SonicForgeNGL', desc: 'Audio editing, mastering, FX', status: 'real', size: '15KB', lang: 'Python' },
      { name: 'BuzzWireNGL', desc: 'Social media, audiograms', status: 'spec', size: '9 files', lang: 'Python' },
      { name: 'BroadcastNGL', desc: 'Multi-platform distribution', status: 'spec', size: '9 files', lang: 'Python' },
      { name: 'PulseMonitorNGL', desc: 'Sentiment analysis', status: 'spec', size: '9 files', lang: 'Python' },
      { name: 'MoodSync-MVP', desc: 'Communication context overlay', status: 'spec', size: '16 files', lang: 'JavaScript' },
      { name: 'NGL-POLYSYNTH-v1', desc: 'LLM model merge — 4-source', status: 'spec', size: '?', lang: 'Python' },
    ]
  },
  {
    id: 'feather',
    name: 'FEATHERSTONE PROTOCOL',
    color: '#ab47bc',
    repos: [
      { name: 'featherstone-MaestroNGL', desc: 'Enhanced Maestro (Featherstone)', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-BroadcastNGL', desc: 'Enhanced Broadcast', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-EthosGuardNGL', desc: 'Enhanced EthosGuard', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-BuzzWireNGL', desc: 'Enhanced BuzzWire', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-SonicForgeNGL', desc: 'Enhanced SonicForge', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-PulseMonitorNGL', desc: 'Enhanced PulseMonitor', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-MoodSync', desc: 'Enhanced MoodSync', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-Mythos', desc: 'Enhanced Mythos', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-NoGasSlaps', desc: 'Enhanced NoGasSlaps', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-TownSquare', desc: 'Enhanced TownSquare', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-BridgeWallet', desc: 'Enhanced Bridge Wallet', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-Store', desc: 'Enhanced Store', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-VeritasShield', desc: 'Enhanced VeritasShield', status: 'dup', size: '?', lang: 'None' },
      { name: 'featherstone-P2ECockpit', desc: 'Enhanced P2E Cockpit', status: 'dup', size: '?', lang: 'None' },
    ]
  },
  {
    id: 'scaff',
    name: 'SCAFFOLDED MODULES',
    color: '#ff8c00',
    repos: [
      { name: 'sui-flash-loan-protocol', desc: 'Sui blockchain flash loan — 102 files', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'flashware-monorepo', desc: 'No-Code Sui Flash Loan Builder', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'multi-chain-flash-loan-dapp', desc: 'Multi-chain flash loan dapp', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'omnichain-faucet-townsquare', desc: 'Mobile RPG + blockchain — 2014 files', status: 'shell', size: '?', lang: 'HTML' },
      { name: 'Omnichain_Bridge_wallet', desc: 'Omnichain bridge wallet', status: 'shell', size: '?', lang: 'HTML' },
      { name: 'no_gas_labs_sui_flashloan', desc: 'Sui flashloan JavaScript', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'sui-flash-loan-dapp', desc: 'Sui flash loan dapp — 58 files', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'sui-flash-loan-system', desc: 'Flash loan system — 30 files', status: 'shell', size: '?', lang: 'None' },
      { name: 'nextjs-ai-chatbot', desc: 'AI chatbot — 174 files', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'TaskAgile', desc: 'Task management — 143 files', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'Store', desc: 'Store frontend — 10 files', status: 'shell', size: '?', lang: 'None' },
      { name: 'NoGasSlaps', desc: 'NoGasSlaps app — 17 files', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'nogas-matrix-2026', desc: '65+ gasless mini-apps', status: 'shell', size: '?', lang: 'HTML' },
      { name: 'VibeCodingProtocol', desc: 'Vibe Coding — 64 files', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'Mythos', desc: 'Mythos — 34 files', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'MoodSync-MVP', desc: 'MoodSync MVP — 16 files', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'dia-p2e-cockpit', desc: 'P2E Cockpit — 19 files', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'flash-loan-dapp', desc: 'Flash loan dapp — 40 files', status: 'shell', size: '?', lang: 'TypeScript' },
      { name: 'flash-loan-arbitrage-sui', desc: 'Flash loan arbitrage', status: 'shell', size: '?', lang: 'None' },
      { name: 'no-gas-labs-monorepo', desc: 'NGL monorepo — 127 files', status: 'shell', size: '?', lang: 'JavaScript' },
    ]
  },
  {
    id: 'gov',
    name: 'GOVERNANCE & INFRA',
    color: '#78909c',
    repos: [
      { name: 'no-gas-labs-governance', desc: 'CI/CD control plane', status: 'shell', size: '?', lang: 'Shell' },
      { name: 'no-gas-labs-system-integration', desc: 'Cross-repo integration testing', status: 'shell', size: '?', lang: 'None' },
      { name: 'audit-vault', desc: 'Audit vault for account-wide analysis', status: 'shell', size: '?', lang: 'None' },
      { name: 'AI-orchestrator-test', desc: 'AI orchestrator testing', status: 'shell', size: '?', lang: 'None' },
      { name: 'AI-BI-Intelligence-node-gate', desc: 'Business Intelligence Node Gate', status: 'shell', size: '?', lang: 'JavaScript' },
      { name: 'believe-in-me', desc: 'Gamified email pruning', status: 'shell', size: '?', lang: 'None' },
      { name: 'nogaslabs-setup-wizard', desc: 'Python setup wizard', status: 'shell', size: '?', lang: 'Python' },
    ]
  },
];

export const INITIAL_SKILLS: SkillNode[] = [
  { id: 'root', name: 'Neophyte', level: 1, max: 1, category: 'root', prerequisites: [] },
  { id: 's1', name: 'Spot Thought Leader', level: 0, max: 5, category: 'shoplift', prerequisites: ['root'] },
  { id: 's2', name: 'Resist Framework', level: 0, max: 3, category: 'shoplift', prerequisites: ['s1'] },
  { id: 's3', name: 'See Curation Theft', level: 0, max: 3, category: 'shoplift', prerequisites: ['s1'] },
  { id: 's4', name: 'Spot Staircase Mentor', level: 0, max: 5, category: 'manipulate', prerequisites: ['root'] },
  { id: 's5', name: 'Resist Gratitude Trap', level: 0, max: 3, category: 'manipulate', prerequisites: ['s4'] },
  { id: 's6', name: 'Spot Process Person', level: 0, max: 5, category: 'stall', prerequisites: ['root'] },
  { id: 's7', name: 'Cut Meeting Magic', level: 0, max: 3, category: 'stall', prerequisites: ['s6'] },
  { id: 's8', name: 'Spot Offense-Taker', level: 0, max: 5, category: 'assassin', prerequisites: ['root'] },
  { id: 's9', name: 'Asking Power', level: 0, max: 3, category: 'assassin', prerequisites: ['s8'] },
  { id: 's10', name: 'Show Me Stance', level: 0, max: 1, category: 'ultimate', prerequisites: ['s2', 's3', 's5', 's7', 's9'] },
];

export const INITIAL_QUESTS: Quest[] = [
  { id: 'awaken', title: 'The Awakening', stage: 0, maxStage: 4, completed: false, lore: 'Every journey begins with a single question.', objectives: ['Speak with The Council', 'Claim your first zone', 'Defeat a Wizard', 'Collect 5 Tokens'], reward: { xp: 100, tokens: 10 } },
  { id: 'culling', title: 'Culling of Murderous Wizards', stage: 0, maxStage: 3, completed: false, lore: 'The 40-page comic. The most honest thing you will read today.', objectives: ['Find the Field Guide', 'Defeat 3 Wizards', 'Return to The Witness'], reward: { xp: 250, tokens: 25 } },
  { id: 'prometheus', title: 'The Prometheus Protocol', stage: 0, maxStage: 4, completed: false, lore: 'Transfer higher-order intelligence into live Chaos Flow.', objectives: ['Gather 10 Chaos Shards', 'Gather 5 Data Crystals', 'Gather 3 Echo Resonators', 'Craft the Promethean Engine'], reward: { xp: 500, tokens: 50 } },
  { id: 'showme', title: 'The Two-Word Weapon', stage: 0, maxStage: 2, completed: false, lore: 'The most dangerous question: SHOW ME.', objectives: ['Reach level 3 in any skill', 'Say "Show Me" 3 times'], reward: { xp: 400, tokens: 40 } },
];

export const INITIAL_ENEMIES: Enemy[] = [
  { id: 'thought_leader', name: 'Thought Leader', title: 'Species I', hp: 40, maxHp: 40, dmg: '4-10', xp: 25, loot: ['chaos'], lines: ['I have been thinking a LOT about [thing someone else said first]...', 'Let me share my framework: The REAL Method.'] },
  { id: 'stair_mentor', name: 'Staircase Mentor', title: 'Species II', hp: 55, maxHp: 55, dmg: '3-8', xp: 35, loot: ['chaos', 'crystal'], lines: ['Let me share something I wish someone had told ME at your age...', 'You should probably aim a little lower. Just to be safe.'] },
  { id: 'process_person', name: 'Process Person', title: 'Species III', hp: 30, maxHp: 30, dmg: '2-6', xp: 20, loot: ['chaos'], lines: ['We are optimizing for the JOURNEY.', 'I have redefined success as something unmeasurable.'] },
  { id: 'scope_creep', name: 'Scope Creep', title: 'Species IV', hp: 45, maxHp: 45, dmg: '5-12', xp: 40, loot: ['crystal', 'echo'], lines: ['Just one more small change...', 'The deadline was more of a suggestion, right?'] },
];

export const PODCAST_AGENTS: PodcastAgent[] = [
  { id: 'maestro', name: 'MaestroNGL', role: 'Orchestration', color: '#ffd700', description: 'Schedules guests, sequences episodes, manages production calendar', status: 'inactive' },
  { id: 'ethos', name: 'EthosGuardNGL', role: 'Brand Guard', color: '#00e5ff', description: 'Ensures every clip matches NGL tone, flags deviations', status: 'inactive' },
  { id: 'sonic', name: 'SonicForgeNGL', role: 'Audio Master', color: '#4caf50', description: 'Edits, FX, leveling, export to all formats', status: 'active' },
  { id: 'buzz', name: 'BuzzWireNGL', role: 'Social Clips', color: '#ab47bc', description: 'Clips, audiograms, scheduling across platforms', status: 'inactive' },
  { id: 'broadcast', name: 'BroadcastNGL', role: 'Distribution', color: '#ff8c00', description: 'Pushes to Spotify, Apple, YouTube, RSS feeds', status: 'inactive' },
  { id: 'pulse', name: 'PulseMonitorNGL', role: 'Sentiment', color: '#ff4444', description: 'Tracks reviews, comments, engagement metrics', status: 'inactive' },
];

export const INITIAL_EPISODES: Episode[] = [
  { id: '1', title: 'AGP Pilot: The Interview', status: 'published', guest: 'Damien Featherstone', date: '2026-06-01', platforms: ['spotify', 'youtube'] },
  { id: '2', title: 'AGP Ep 2: The System', status: 'editing', guest: 'TBD', date: '2026-06-15', platforms: [] },
  { id: '3', title: 'AGP Ep 3: The Streets', status: 'idea', guest: 'TBD', date: 'TBD', platforms: [] },
];

export const INITIAL_LEADS: Lead[] = [
  { id: '1', name: 'Alex (Twitter)', source: 'twitter', status: 'paid', amount: 15, date: '2026-06-20', notes: 'Bought The Seed', followUp: '2026-06-27' },
  { id: '2', name: 'Sam (DM)', source: 'dm', status: 'contacted', amount: 0, date: '2026-06-22', notes: 'Interested in The Grove', followUp: '2026-06-29' },
];

export const ITEMS: Record<string, { name: string; icon: string; desc: string }> = {
  chaos: { name: 'Chaos Shard', icon: '🔥', desc: 'Fragment of raw entropy. Dropped by defeated wizards.' },
  crystal: { name: 'Data Crystal', icon: '💎', desc: 'Compressed information from the ruins.' },
  echo: { name: 'Echo Resonator', icon: '📡', desc: 'Amplifies cognitive echoes.' },
  token: { name: 'NGL Token', icon: '🪙', desc: 'The currency of No Gas Labs.' },
  potion: { name: 'Potion of Clarity', icon: '🧪', desc: 'Restores 25 HP. Coffee is infrastructure.' },
};

export const STATUS_LABELS: Record<string, string> = {
  real: 'LIVE',
  spec: 'SPEC',
  shell: 'SHELL',
  dup: 'DUP',
};

export const STATUS_COLORS: Record<string, string> = {
  real: 'bg-green-500/20 text-green-400 border-green-500/30',
  spec: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  shell: 'bg-red-500/20 text-red-400 border-red-500/30',
  dup: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export const RECIPES = [
  { id: 'buzzbash', name: 'Buzzword Basher', cost: 15, mats: [{ id: 'chaos', n: 5 }, { id: 'crystal', n: 2 }], effect: '+5 dmg vs Wizards' },
  { id: 'proofshield', name: 'Proof-of-Work Shield', cost: 25, mats: [{ id: 'crystal', n: 5 }, { id: 'echo', n: 2 }], effect: 'Blocks wizard deflection' },
  { id: 'beacon', name: 'Lighthouse Beacon', cost: 40, mats: [{ id: 'echo', n: 5 }, { id: 'chaos', n: 8 }], effect: 'Reveals hidden cells' },
  { id: 'engine', name: 'Promethean Engine', cost: 100, mats: [{ id: 'chaos', n: 15 }, { id: 'crystal', n: 10 }, { id: 'echo', n: 8 }], effect: 'Ultimate artifact' },
];
