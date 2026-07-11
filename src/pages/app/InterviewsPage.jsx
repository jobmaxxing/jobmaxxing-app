import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { useInterviewsData } from '../../data/useInterviewsData';

export default function InterviewsPage() {
  const { upcoming, past } = useInterviewsData();

  return (
    <div>
      <PageHeader title="Interviews" description="Upcoming interviews and past feedback" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Upcoming</h3>
          <ul className="space-y-3">
            {upcoming.map((item) => (
              <li key={item.id} className="rounded-lg border border-line p-3 text-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">
                    {item.company} · {item.role}
                  </p>
                  <Badge variant="info">{item.stage}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted">{item.date}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Past feedback</h3>
          <ul className="space-y-3">
            {past.map((item) => (
              <li key={item.id} className="rounded-lg border border-line p-3 text-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">
                    {item.company} · {item.role}
                  </p>
                  <Badge variant={item.outcome.includes('offer') ? 'success' : 'neutral'}>{item.outcome}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted">{item.feedback}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
