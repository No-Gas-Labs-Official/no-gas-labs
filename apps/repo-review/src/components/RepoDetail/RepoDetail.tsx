'use client';

import { useRepoStore } from '@/store/repoStore';
import { downloadScreenshot, exportToPDF } from '@/lib/screenshots';
import { useState } from 'react';

export const RepoDetail = () => {
  const selectedRepo = useRepoStore((state) => state.selectedRepo);
  const [exporting, setExporting] = useState(false);

  if (!selectedRepo) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>Select a repository to view details</p>
      </div>
    );
  }

  const handleScreenshot = async () => {
    setExporting(true);
    try {
      await downloadScreenshot('repo-detail-content', selectedRepo.name);
    } catch (error) {
      console.error('Screenshot error:', error);
    } finally {
      setExporting(false);
    }
  };

  const handleExportPDF = async () => {
    setExporting(true);
    try {
      await exportToPDF('repo-detail-content', selectedRepo.name, {
        title: `Repository Review: ${selectedRepo.name}`,
        author: 'No-Gas-Labs Repo Review',
      });
    } catch (error) {
      console.error('PDF export error:', error);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 p-4 border-b">
        <h2 className="text-2xl font-bold">{selectedRepo.name}</h2>
        <div className="flex gap-2">
          <button
            onClick={handleScreenshot}
            disabled={exporting}
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            📸 Screenshot
          </button>
          <button
            onClick={handleExportPDF}
            disabled={exporting}
            className="px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
          >
            📄 Export PDF
          </button>
        </div>
      </div>

      <div id="repo-detail-content" className="flex-1 overflow-y-auto p-4 bg-white">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">URL</h3>
            <a
              href={selectedRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {selectedRepo.html_url}
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Description</h3>
            <p className="text-gray-600">{selectedRepo.description || 'No description'}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-700">Language</h4>
              <p className="text-gray-600">{selectedRepo.language || 'Not specified'}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Visibility</h4>
              <p className="text-gray-600">{selectedRepo.private ? 'Private' : 'Public'}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Stars</h4>
              <p className="text-gray-600">{selectedRepo.stargazers_count}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Forks</h4>
              <p className="text-gray-600">{selectedRepo.forks_count}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Open Issues</h4>
              <p className="text-gray-600">{selectedRepo.open_issues_count}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Size</h4>
              <p className="text-gray-600">{(selectedRepo.size / 1024).toFixed(2)} MB</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Topics</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedRepo.topics.length > 0 ? (
                selectedRepo.topics.map((topic) => (
                  <span key={topic} className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                    {topic}
                  </span>
                ))
              ) : (
                <p className="text-gray-600">No topics</p>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Dates</h4>
            <p className="text-sm text-gray-600">
              Created: {new Date(selectedRepo.created_at).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              Updated: {new Date(selectedRepo.updated_at).toLocaleDateString()}
            </p>
            {selectedRepo.pushed_at && (
              <p className="text-sm text-gray-600">
                Pushed: {new Date(selectedRepo.pushed_at).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
