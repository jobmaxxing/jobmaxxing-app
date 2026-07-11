import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StatTile from '../../components/ui/StatTile';
import { useLinkedinData } from '../../data/useLinkedinData';

const impactVariant = { high: 'danger', medium: 'info', low: 'neutral' };

export default function LinkedInPage() {
  const { summary, suggestions } = useLinkedinData();

  return (
    <div>
      <PageHeader title="LinkedIn" description="Profile strength and optimization suggestions" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Profile completeness" value={`${summary.completeness}%`} />
        <StatTile label="Connections" value={summary.connections} />
        <StatTile label="Profile views" value={summary.profileViews} subtitle="Last 7 days" />
      </div>

      <Card className="mt-6 p-6">
        <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Suggestions</h3>
        <ul className="space-y-3">
          {suggestions.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 rounded-lg border border-line p-3 text-sm">
              <span className="text-ink">{item.title}</span>
              <Badge variant={impactVariant[item.impact]}>{item.impact} impact</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
