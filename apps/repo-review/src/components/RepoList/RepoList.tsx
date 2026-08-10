'use client';

import { useRepoStore } from '@/store/repoStore';
import { RepoCard } from './RepoCard';

export const RepoList = () => {
  const repositories = useRepoStore((state) => state.repositories);
  const selectedRepo = useRepoStore((state) => state.selectedRepo);
  const setSelectedRepo = useRepoStore((state) => state.setSelectedRepo);
  const filter = useRepoStore((state) => state.filter);

  const filtered = repositories.filter((repo) => {
    if (filter.private !== null && repo.private !== filter.private) {
      return false;
    }
    if (filter.language && repo.language !== filter.language) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (filter.sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'created':
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      case 'stars':
        return b.stargazers_count - a.stargazers_count;
      case 'updated':
      default:
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sorted.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
          isSelected={selectedRepo?.id === repo.id}
          onSelect={() => setSelectedRepo(repo)}
        />
      ))}
    </div>
  );
};
