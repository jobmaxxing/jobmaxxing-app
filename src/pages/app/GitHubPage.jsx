import { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import StatTile from '../../components/ui/StatTile';
import { useGithubProfile, useGithubRepos, useSyncGithub } from '../../api/useGithub';

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function GitHubPage() {
  const { data: profile, isLoading: profileLoading } = useGithubProfile();
  const { data: repos = [] } = useGithubRepos();
  const syncGithub = useSyncGithub();
  const [username, setUsername] = useState('');

  const handleSync = () => {
    if (!username.trim()) return;
    syncGithub.mutate({ username: username.trim() });
  };

  if (!profileLoading && !profile) {
    return (
      <div>
        <PageHeader title="GitHub" description="Connect your GitHub to get an AI-scored profile summary" />
        <Card className="p-6">
          <h3 className="mb-1 font-heading text-sm font-semibold text-ink">Connect GitHub</h3>
          <p className="mb-4 text-sm text-muted">Enter your GitHub username to fetch and score your public profile.</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. octocat"
              className="w-full max-w-xs rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
            />
            <Button onClick={handleSync} disabled={syncGithub.isPending || !username.trim()}>
              {syncGithub.isPending ? 'Connecting...' : 'Connect GitHub'}
            </Button>
          </div>
          {syncGithub.isError && <p className="mt-3 text-sm text-danger">{syncGithub.error.message}</p>}
        </Card>
      </div>
    );
  }

  if (profileLoading || !profile) {
    return (
      <div>
        <PageHeader title="GitHub" description="Connect your GitHub to get an AI-scored profile summary" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="GitHub"
        description={`Connected as @${profile.username} · Last synced ${formatDate(profile.last_synced_at)}`}
        actions={
          <>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={profile.username}
              className="w-40 rounded-lg border border-line bg-canvas px-3 py-1.5 text-xs text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
            />
            <Button
              size="sm"
              onClick={() => syncGithub.mutate({ username: username.trim() || profile.username })}
              disabled={syncGithub.isPending}
            >
              {syncGithub.isPending ? 'Syncing...' : 'Sync'}
            </Button>
          </>
        }
      />

      {syncGithub.isError && <p className="mb-4 text-sm text-danger">{syncGithub.error.message}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="GitHub Score" value={`${profile.score}/100`} subtitle="Recruiter-facing profile strength" />
        <StatTile label="Public repos" value={profile.public_repos} />
        <StatTile label="Followers" value={profile.followers} />
      </div>

      <Card className="mt-6 p-6">
        <h3 className="mb-4 font-heading text-sm font-semibold text-ink">AI summary</h3>
        <p className="text-sm text-ink">{profile.ai_summary}</p>
      </Card>

      <Card className="mt-6 p-6">
        <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Top repositories</h3>
        {repos.length === 0 && <p className="text-sm text-muted">No public repositories found.</p>}
        <ul className="divide-y divide-line">
          {repos.map((repo) => (
            <li key={repo.id} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium text-ink">{repo.name}</p>
                <p className="text-xs text-muted">
                  Updated {repo.last_commit_at ? formatDate(repo.last_commit_at) : 'Unknown'}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {repo.language && <Badge variant="neutral">{repo.language}</Badge>}
                <span className="text-xs text-muted">★ {repo.stars}</span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
