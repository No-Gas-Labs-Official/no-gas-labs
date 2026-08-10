# Repo Review App

A comprehensive repository review application that allows you to:
- View all your GitHub repositories (public and private)
- Filter and sort repositories
- Capture screenshots of repository details
- Export reviews as PDF documents
- Share findings with your team

## Features

### 🔐 Full Permission Scoping
- **repo**: Full control of private and public repositories
- **read:user**: Read user profile data
- **user:email**: Access user email addresses
- **read:org**: Read organization information
- **admin:repo_hook**: Manage repository webhooks
- **read:repo_hook**: Read repository webhooks

### 📸 Screenshot Capabilities
- Capture high-quality screenshots of repository details
- Screenshot resolution: 2x scale for clarity
- PNG format with 95% quality
- Download screenshots directly from the app

### 📄 Export Features
- Export repository reviews as PDF documents
- Automatic metadata inclusion (title, author)
- PDF generation from captured content
- Share findings with team members

### 🔍 Repository Analysis
- View all repositories at a glance
- Filter by visibility (public/private)
- Filter by programming language
- Sort by creation date, update date, name, or stars
- Detailed repository information display

## Setup Instructions

### 1. Create GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in the following:
   - Application name: `Repo Review`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback`
4. Copy the Client ID and generate a Client Secret

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Then fill in your values:
```
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_GITHUB_REDIRECT_URI=http://localhost:3000/api/auth/callback
```

### 3. Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 4. Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Login**: Click "Login with GitHub" to authenticate
2. **View Repositories**: All your repositories will be loaded automatically
3. **Filter & Sort**: Use the left panel to filter by type, language, or sort method
4. **Select Repository**: Click on a repository card to view its details
5. **Capture & Export**:
   - Click "📸 Screenshot" to download a PNG image
   - Click "📄 Export PDF" to download a PDF report
6. **Share**: Share the exported files with your team

## Architecture

### State Management
- **useAuthStore**: Manages authentication state and GitHub token
- **useRepoStore**: Manages repository list and filtering state

### API Integration
- **Octokit**: Official GitHub REST API client
- **Custom githubClient.ts**: Wrapper for API calls

### Export Features
- **html2canvas**: Screenshot generation
- **jsPDF**: PDF document creation

## Security Considerations

- Token stored in localStorage (for demo purposes)
- Consider using httpOnly cookies for production
- Never commit `.env.local` files
- Regenerate OAuth secrets if exposed
- Implement token refresh mechanism for long-lived sessions

## Future Enhancements

- [ ] Multi-page PDF exports
- [ ] Team collaboration features
- [ ] Custom report templates
- [ ] Repository comparison tools
- [ ] Automated repository audit reports
- [ ] Integration with issue tracking
- [ ] Webhook management interface
- [ ] Repository health scoring

## License

MIT - See LICENSE file for details
