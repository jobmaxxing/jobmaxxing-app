import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ApplicationActivityChart({ data }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-sm font-semibold text-ink">Application Activity</h3>
          <p className="text-xs text-muted">Weekly breakdown · last 6 weeks</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Applications
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-success" />
            Responses
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="applicationsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F8EF7" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#4F8EF7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis dataKey="week" tick={{ fill: '#667085', fontSize: 12 }} axisLine={{ stroke: '#E5E7EB' }} tickLine={false} />
          <YAxis tick={{ fill: '#667085', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }} />
          <Area type="monotone" dataKey="applications" stroke="#4F8EF7" strokeWidth={2} fill="url(#applicationsFill)" />
          <Area type="monotone" dataKey="responses" stroke="#16A34A" strokeWidth={2} fill="transparent" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
