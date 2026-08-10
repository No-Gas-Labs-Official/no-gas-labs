'use client';

import { Repository } from '@/store/repoStore';

interface RepoCardProps {
  repo: Repository;
  isSelected: boolean;
  onSelect: () => void;
}

export const RepoCard = ({ repo, isSelected, onSelect }: RepoCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4 rounded-lg border-2 cursor-pointer transition ${
        isSelected
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 hover:border-gray-300 bg-white'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-lg truncate">{repo.name}</h3>
        {repo.private && (
          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
            Private
          </span>
        )}
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {repo.description || 'No description'}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {repo.language && (
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {repo.language}
          </span>
        )}
        {repo.topics.slice(0, 2).map((topic) => (
          <span key={topic} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {topic}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between text-sm text-gray-500">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🔀 {repo.forks_count}</span>
        <span>📋 {repo.open_issues_count}</span>
      </div>
    </div>
  );
};
