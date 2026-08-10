/**
 * OAuth Configuration for GitHub Authentication
 * Scopes required for full repository access including private repos
 */

export const GITHUB_OAUTH_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
  clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
  redirectUri: process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI || 'http://localhost:3000/api/auth/callback',
};

/**
 * GitHub OAuth Scopes
 * repo: Full control of private repositories
 * public_repo: Access to public repositories
 * read:user: Read user profile data
 * admin:repo_hook: Manage repository webhooks
 * admin:org_hook: Manage organization webhooks
 * read:org: Read organization data
 * read:repo_hook: Read repository webhooks
 * user:email: Access user email addresses
 */
export const GITHUB_OAUTH_SCOPES = [
  'repo', // Full control of private and public repositories
  'read:user', // Read user profile
  'user:email', // Read user email
  'read:org', // Read organization information
  'admin:repo_hook', // Manage repository webhooks
  'read:repo_hook', // Read repository webhooks
].join(' ');

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_OAUTH_CONFIG.clientId}&redirect_uri=${encodeURIComponent(GITHUB_OAUTH_CONFIG.redirectUri)}&scope=${encodeURIComponent(GITHUB_OAUTH_SCOPES)}&allow_signup=false`;
