import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StatTile from '../../components/ui/StatTile';
import { useAtsData } from '../../data/useAtsData';

const statusVariant = { pass: 'success', warning: 'info', fail: 'danger' };
const statusLabel = { pass: 'Pass', warning: 'Review', fail: 'Fail' };

export default function AtsPage() {
  const { scan, checklist, missingKeywords } = useAtsData();

  return (
    <div>
      <PageHeader title="ATS" description={`Scanned against ${scan.targetRole}`} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile
          label="ATS Match Score"
          value={`${scan.score}%`}
          subtitle={`Last scanned ${scan.scannedOn}`}
          delta="+3 pts"
          direction="up"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Formatting checklist</h3>
          <ul className="space-y-3">
            {checklist.map((item) => (
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
            {missingKeywords.map((keyword) => (
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
