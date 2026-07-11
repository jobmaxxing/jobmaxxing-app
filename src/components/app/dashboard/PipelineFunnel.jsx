export default function PipelineFunnel({ stages }) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-heading text-sm font-semibold text-ink">Pipeline Funnel</h3>
        <p className="text-xs text-muted">All time · {stages[0]?.count ?? 0} applications</p>
      </div>

      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.stage}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{stage.stage}</span>
              <span className="text-muted">
                {stage.count} ({stage.percent}%)
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-canvas">
              <div className="h-1.5 rounded-full bg-accent" style={{ width: `${stage.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
