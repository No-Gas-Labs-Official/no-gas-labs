import create from 'zustand';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string | null;
  url: string;
  html_url: string;
  homepage: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  topics: string[];
  is_template: boolean;
}

interface RepoState {
  repositories: Repository[];
  selectedRepo: Repository | null;
  loading: boolean;
  error: string | null;
  filter: {
    private: boolean | null;
    language: string | null;
    sortBy: 'created' | 'updated' | 'name' | 'stars';
  };
  setRepositories: (repos: Repository[]) => void;
  setSelectedRepo: (repo: Repository | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilter: (filter: Partial<RepoState['filter']>) => void;
}

export const useRepoStore = create<RepoState>((set) => ({
  repositories: [],
  selectedRepo: null,
  loading: false,
  error: null,
  filter: {
    private: null,
    language: null,
    sortBy: 'updated',
  },
  
  setRepositories: (repos: Repository[]) => set({ repositories: repos }),
  setSelectedRepo: (repo: Repository | null) => set({ selectedRepo: repo }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  setFilter: (filter: Partial<RepoState['filter']>) => 
    set((state) => ({ filter: { ...state.filter, ...filter } })),
}));
