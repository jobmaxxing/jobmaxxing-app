import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { useColdEmailData } from '../../data/useColdEmailData';

const statusVariant = { draft: 'neutral', sent: 'info', replied: 'success' };

export default function ColdEmailPage() {
  const { emails, templates } = useColdEmailData();

  return (
    <div>
      <PageHeader title="Cold Email" description="Recruiter and referral outreach tracker" actions={<Button>New email</Button>} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Recent outreach</h3>
          <ul className="space-y-3">
            {emails.map((email) => (
              <li key={email.id} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-ink">{email.recipient}</p>
                  <p className="text-xs text-muted">{email.company}</p>
                </div>
                <Badge variant={statusVariant[email.status]}>{email.status}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Templates</h3>
          <ul className="space-y-3">
            {templates.map((template) => (
              <li key={template.id} className="rounded-lg border border-line p-3 text-sm">
                <p className="font-medium text-ink">{template.name}</p>
                <p className="text-xs text-muted">{template.description}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
