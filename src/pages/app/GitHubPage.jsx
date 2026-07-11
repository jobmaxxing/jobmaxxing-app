import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StatTile from '../../components/ui/StatTile';
import { useGithubData } from '../../data/useGithubData';

export default function GitHubPage() {
  const { summary, repos } = useGithubData();

  return (
    <div>
      <PageHeader title="GitHub" description={`Connected as @${summary.username}`} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile
          label="GitHub Score"
          value={`${summary.score}/100`}
          subtitle="Recruiter-facing profile strength"
          delta="+6 pts"
          direction="up"
        />
        <StatTile label="Public repos" value={summary.publicRepos} />
        <StatTile label="Followers" value={summary.followers} />
      </div>

      <Card className="mt-6 p-6">
        <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Top repositories</h3>
        <ul className="divide-y divide-line">
          {repos.map((repo) => (
            <li key={repo.id} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium text-ink">{repo.name}</p>
                <p className="text-xs text-muted">Updated {repo.lastCommit}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="neutral">{repo.language}</Badge>
                <span className="text-xs text-muted">★ {repo.stars}</span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
