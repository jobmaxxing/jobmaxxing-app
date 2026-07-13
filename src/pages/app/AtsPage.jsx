import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StatTile from '../../components/ui/StatTile';
import { useResumes } from '../../api/useResumes';
import { useLatestAnalysis } from '../../api/useAnalyses';

const statusVariant = { pass: 'success', warning: 'info', fail: 'danger' };
const statusLabel = { pass: 'Pass', warning: 'Review', fail: 'Fail' };

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function AtsPage() {
  const { data: resumes = [], isLoading: resumesLoading } = useResumes();
  const activeResume = resumes.find((resume) => resume.is_active);
  const { data: analysis, isLoading: analysisLoading } = useLatestAnalysis(activeResume?.id);

  if (!resumesLoading && !activeResume) {
    return (
      <div>
        <PageHeader title="ATS" description="Scan your resume against ATS formatting and keyword checks" />
        <Card className="p-6 text-sm text-muted">
          No active resume set.{' '}
          <Link to="/app/resume" className="font-medium text-accent hover:underline">
            Upload and set one active
          </Link>{' '}
          to run an ATS scan.
        </Card>
      </div>
    );
  }

  if (!resumesLoading && activeResume && !analysisLoading && !analysis) {
    return (
      <div>
        <PageHeader title="ATS" description="Scan your resume against ATS formatting and keyword checks" />
        <Card className="p-6 text-sm text-muted">
          {activeResume.label} hasn&rsquo;t been analyzed yet.{' '}
          <Link to="/app/resume" className="font-medium text-accent hover:underline">
            Run an analysis from the Resume page
          </Link>
          .
        </Card>
      </div>
    );
  }

  if (resumesLoading || analysisLoading || !analysis) {
    return (
      <div>
        <PageHeader title="ATS" description="Scan your resume against ATS formatting and keyword checks" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="ATS" description={`Scanned against ${analysis.target_role || 'a general role'}`} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile
          label="ATS Match Score"
          value={`${analysis.score}%`}
          subtitle={`Last scanned ${formatDate(analysis.created_at)}`}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6 lg:col-span-2">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Summary</h3>
          <p className="text-sm text-ink">{analysis.summary}</p>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Formatting checklist</h3>
          <ul className="space-y-3">
            {analysis.checklist.map((item) => (
              <li key={item.id} className="flex items-center justify-between text-sm">
                <span className="text-ink">{item.label}</span>
                <Badge variant={statusVariant[item.status]}>{statusLabel[item.status]}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Missing keywords</h3>
          <div className="flex flex-wrap gap-2">
            {analysis.missing_keywords.map((keyword) => (
              <Badge key={keyword} variant="danger">
                {keyword}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
