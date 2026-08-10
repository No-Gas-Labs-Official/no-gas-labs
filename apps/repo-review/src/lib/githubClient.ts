import { Octokit } from '@octokit/rest';

let octokitInstance: Octokit | null = null;

export const createGithubClient = (token: string): Octokit => {
  return new Octokit({
    auth: token,
    userAgent: 'No-Gas-Labs-Repo-Review/1.0.0',
  });
};

export const getGithubClient = (token: string): Octokit => {
  if (!octokitInstance) {
    octokitInstance = createGithubClient(token);
  }
  return octokitInstance;
};

export const fetchUserRepositories = async (token: string) => {
  const client = createGithubClient(token);
  try {
    const response = await client.repos.listForAuthenticatedUser({
      per_page: 100,
      sort: 'updated',
      direction: 'desc',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

export const fetchRepositoryDetails = async (token: string, owner: string, repo: string) => {
  const client = createGithubClient(token);
  try {
    const [repoData, readmeResponse] = await Promise.all([
      client.repos.get({ owner, repo }),
      client.repos.getReadme({ owner, repo }).catch(() => null),
    ]);
    
    return {
      repo: repoData.data,
      readme: readmeResponse ? readmeResponse.data : null,
    };
  } catch (error) {
    console.error('Error fetching repository details:', error);
    throw error;
  }
};

export const fetchRepositoryFiles = async (token: string, owner: string, repo: string, path: string = '') => {
  const client = createGithubClient(token);
  try {
    const response = await client.repos.getContent({
      owner,
      repo,
      path,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repository files:', error);
    throw error;
  }
};
