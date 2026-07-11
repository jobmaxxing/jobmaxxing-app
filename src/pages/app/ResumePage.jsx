import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import StatTile from '../../components/ui/StatTile';
import { useResumeData } from '../../data/useResumeData';

const statusVariant = { complete: 'success', 'needs-review': 'info', incomplete: 'danger' };
const statusLabel = { complete: 'Complete', 'needs-review': 'Needs review', incomplete: 'Incomplete' };

export default function ResumePage() {
  const { summary, sections, versions } = useResumeData();
  const completeCount = sections.filter((section) => section.status === 'complete').length;

  return (
    <div>
      <PageHeader
        title="Resume"
        description="Manage and optimize your resume for each application"
        actions={<Button>Upload new version</Button>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile
          label="ATS Compatibility"
          value={`${summary.atsScore}%`}
          subtitle={`Last updated ${summary.lastUpdated}`}
          delta="+4 pts"
          direction="up"
        />
        <StatTile label="Sections complete" value={`${completeCount}/${sections.length}`} subtitle="Active resume" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Section completeness</h3>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id} className="flex items-center justify-between text-sm">
                <span className="text-ink">{section.name}</span>
                <Badge variant={statusVariant[section.status]}>{statusLabel[section.status]}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Saved versions</h3>
          <ul className="space-y-3">
            {versions.map((version) => (
              <li key={version.id} className="flex items-center justify-between text-sm">
                <span className="text-ink">{version.name}</span>
                <span className="text-xs text-muted">Updated {version.updated}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
