import Card from './Card';

export default function StatTile({ label, value, delta, direction = 'up', subtitle }) {
  return (
    <Card className="p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 font-heading text-2xl font-semibold text-ink">{value}</p>
      {subtitle && <p className="mt-1 text-xs text-muted">{subtitle}</p>}
      {delta && (
        <p className={`mt-3 flex items-center gap-1 text-xs font-medium ${direction === 'up' ? 'text-success' : 'text-danger'}`}>
          {direction === 'up' ? '↑' : '↓'} {delta}
        </p>
      )}
    </Card>
  );
}
