'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useRepoStore } from '@/store/repoStore';
import { LoginButton } from '@/components/Auth/LoginButton';
import { FilterPanel } from '@/components/Filters/FilterPanel';
import { RepoList } from '@/components/RepoList/RepoList';
import { RepoDetail } from '@/components/RepoDetail/RepoDetail';
import { fetchUserRepositories } from '@/lib/githubClient';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  const setRepositories = useRepoStore((state) => state.setRepositories);
  const setLoading = useRepoStore((state) => state.setLoading);
  const setError = useRepoStore((state) => state.setError);
  const loading = useRepoStore((state) => state.loading);
  const error = useRepoStore((state) => state.error);
  const repositories = useRepoStore((state) => state.repositories);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Handle OAuth callback
    const callbackToken = searchParams.get('token');
    const callbackUser = searchParams.get('user');

    if (callbackToken && callbackUser) {
      setToken(callbackToken);
      setUser(JSON.parse(callbackUser));
    }
  }, [searchParams, setToken, setUser]);

  useEffect(() => {
    if (token && isAuthenticated) {
      loadRepositories();
    }
  }, [token, isAuthenticated]);

  const loadRepositories = async () => {
    if (!token) return;
    
    setLoading(true);
    setError(null);
    try {
      const repos = await fetchUserRepositories(token);
      setRepositories(repos);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl font-bold">Access Denied</h1>
          <p className="text-lg">Please log in to view your repositories</p>
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Repo Review</h1>
            {user && <p className="text-gray-600">Welcome, {user.login}!</p>}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={loadRepositories}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              🔄 Refresh
            </button>
            <LoginButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 flex gap-4 h-[calc(100vh-120px)]">
        {/* Left Sidebar - Filters */}
        <div className="w-64 bg-white rounded-lg shadow overflow-y-auto">
          <FilterPanel />
        </div>

        {/* Center - Repository List */}
        <div className="flex-1 bg-white rounded-lg shadow overflow-y-auto">
          {error && (
            <div className="p-4 bg-red-50 text-red-700 border border-red-200">
              Error: {error}
            </div>
          )}
          
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Loading repositories...</p>
            </div>
          ) : repositories.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No repositories found</p>
            </div>
          ) : (
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                {repositories.length} repositories
              </p>
              <RepoList />
            </div>
          )}
        </div>

        {/* Right Sidebar - Repository Detail */}
        <div className="w-96 bg-white rounded-lg shadow flex flex-col overflow-hidden">
          <RepoDetail />
        </div>
      </div>
    </div>
  );
}
