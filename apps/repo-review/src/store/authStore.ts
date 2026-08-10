import create from 'zustand';

interface AuthState {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: typeof window !== 'undefined' ? localStorage.getItem('github_token') : null,
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('github_user') || 'null') : null,
  isAuthenticated: typeof window !== 'undefined' ? !!localStorage.getItem('github_token') : false,
  
  setToken: (token: string) => {
    localStorage.setItem('github_token', token);
    set({ token, isAuthenticated: true });
  },
  
  setUser: (user: any) => {
    localStorage.setItem('github_user', JSON.stringify(user));
    set({ user });
  },
  
  logout: () => {
    localStorage.removeItem('github_token');
    localStorage.removeItem('github_user');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));
