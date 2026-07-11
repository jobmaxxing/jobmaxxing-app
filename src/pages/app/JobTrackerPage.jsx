import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { useJobTrackerData } from '../../data/useJobTrackerData';

const statusVariant = { applied: 'neutral', screening: 'info', interview: 'info', offer: 'success', rejected: 'danger' };

export default function JobTrackerPage() {
  const { jobApplications, statusOrder, statusLabels } = useJobTrackerData();

  return (
    <div>
      <PageHeader
        title="Job Tracker"
        description="Track every application from first touch to offer"
        actions={<Button>Add application</Button>}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {statusOrder.map((status) => {
          const items = jobApplications.filter((application) => application.status === status);
          return (
            <div key={status}>
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-sm font-medium text-ink">{statusLabels[status]}</span>
                <span className="text-xs text-muted">{items.length}</span>
              </div>
              <div className="space-y-3">
                {items.map((application) => (
                  <Card key={application.id} hover className="p-4">
                    <p className="text-sm font-medium text-ink">{application.company}</p>
                    <p className="text-xs text-muted">{application.role}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge variant={statusVariant[application.status]}>{statusLabels[application.status]}</Badge>
                      <span className="text-xs text-muted">{application.appliedOn}</span>
                    </div>
                  </Card>
                ))}
                {items.length === 0 && <p className="px-1 text-xs text-muted">No applications</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
