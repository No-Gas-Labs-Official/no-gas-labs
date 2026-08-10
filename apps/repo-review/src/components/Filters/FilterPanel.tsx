'use client';

import { useRepoStore } from '@/store/repoStore';

export const FilterPanel = () => {
  const filter = useRepoStore((state) => state.filter);
  const setFilter = useRepoStore((state) => state.setFilter);
  const repositories = useRepoStore((state) => state.repositories);

  const languages = Array.from(
    new Set(repositories.map((r) => r.language).filter(Boolean))
  ).sort();

  return (
    <div className="p-4 bg-gray-50 border-r border-gray-200 space-y-4">
      <h3 className="font-bold text-lg">Filters</h3>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Repository Type
        </label>
        <select
          value={filter.private === null ? 'all' : filter.private ? 'private' : 'public'}
          onChange={(e) => {
            const value = e.target.value;
            setFilter({
              private: value === 'all' ? null : value === 'private',
            });
          }}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Language
        </label>
        <select
          value={filter.language || 'all'}
          onChange={(e) => {
            setFilter({ language: e.target.value === 'all' ? null : e.target.value });
          }}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">All Languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Sort By
        </label>
        <select
          value={filter.sortBy}
          onChange={(e) => {
            setFilter({ sortBy: e.target.value as any });
          }}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="updated">Last Updated</option>
          <option value="created">Date Created</option>
          <option value="name">Name</option>
          <option value="stars">Stars</option>
        </select>
      </div>
    </div>
  );
};
