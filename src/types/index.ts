// NGL Empire Command — Type Definitions

export type Zone = 'dashboard' | 'council' | 'modules' | 'podcast' | 'combat' | 'market' | 'flashloan';

export type ModuleStatus = 'real' | 'spec' | 'shell' | 'dup';

export type OracleKey = 'chatgpt' | 'claude' | 'gemini' | 'grok';

export interface Oracle {
  key: OracleKey;
  name: string;
  character: string;
  color: string;
  voice: string;
  personality: string;
  url: string;
  model: string;
}

export interface RepoModule {
  name: string;
  desc: string;
  status: ModuleStatus;
  size: string;
  lang: string;
}

export interface ModuleFamily {
  id: string;
  name: string;
  color: string;
  repos: RepoModule[];
}

export interface Player {
  name: string;
  level: number;
  xp: number;
  xpNext: number;
  hp: number;
  maxHp: number;
  tokens: number;
  maxTokens: number;
  title: string;
}

export interface Inventory {
  [itemId: string]: number;
}

export interface SkillNode {
  id: string;
  name: string;
  level: number;
  max: number;
  category: string;
  prerequisites: string[];
}

export interface Quest {
  id: string;
  title: string;
  stage: number;
  maxStage: number;
  completed: boolean;
  lore: string;
  objectives: string[];
  reward: { xp: number; tokens: number };
}

export interface Enemy {
  id: string;
  name: string;
  title: string;
  hp: number;
  maxHp: number;
  dmg: string;
  xp: number;
  loot: string[];
  lines: string[];
}

export interface GameState {
  player: Player;
  inventory: Inventory;
  skills: SkillNode[];
  quests: Quest[];
  enemies: Enemy[];
  stats: {
    oracleCalls: number;
    itemsForged: number;
    wizardsDefeated: number;
    tokensEarned: number;
  };
  firstVisit: boolean;
}

export interface Episode {
  id: string;
  title: string;
  status: 'idea' | 'recording' | 'editing' | 'scheduled' | 'published';
  guest: string;
  date: string;
  platforms: string[];
}

export interface Lead {
  id: string;
  name: string;
  source: 'twitter' | 'dm' | 'referral' | 'other';
  status: 'lead' | 'contacted' | 'pitched' | 'paid' | 'onboarded';
  amount: number;
  date: string;
  notes: string;
  followUp: string;
}

export interface EmpireState {
  game: GameState;
  episodes: Episode[];
  leads: Lead[];
  revenue: {
    total: number;
    thisWeek: number;
    thisMonth: number;
    goal: number;
  };
  mutations: MutationEntry[];
  apiKeys: Partial<Record<OracleKey, string>>;
}

export interface MutationEntry {
  id: string;
  time: string;
  trigger: string;
  outcome: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'oracle';
  oracleKey?: OracleKey;
  content: string;
  timestamp: string;
}

export interface PodcastAgent {
  id: string;
  name: string;
  role: string;
  color: string;
  description: string;
  status: 'active' | 'inactive';
}
