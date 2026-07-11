import Badge from '../../ui/Badge';

const priorityVariant = { high: 'danger', medium: 'info', low: 'neutral' };

export default function AiRecommendationsPanel({ items }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-sm font-semibold text-ink">AI Recommendations</h3>
          <Badge variant="live" dot>
            Live
          </Badge>
        </div>
        <button type="button" className="text-xs font-medium text-accent hover:underline">
          All insights
        </button>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="rounded-lg border border-line p-3 text-sm">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <Badge variant="info">{item.tag}</Badge>
              <span className="text-xs text-muted">{item.eta}</span>
              <Badge variant={priorityVariant[item.priority]}>{item.priority} priority</Badge>
            </div>
            <p className="text-ink">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
