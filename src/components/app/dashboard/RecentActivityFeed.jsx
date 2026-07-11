export default function RecentActivityFeed({ items }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-heading text-sm font-semibold text-ink">Recent Activity</h3>
        <button type="button" className="text-xs font-medium text-accent hover:underline">
          View all
        </button>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-3 text-sm">
            <div>
              <p className="font-medium text-ink">
                {item.company} · {item.role}
              </p>
              <p className="text-muted">{item.event}</p>
            </div>
            <span className="shrink-0 text-xs text-muted">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
