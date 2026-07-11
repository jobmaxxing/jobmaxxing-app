import StatTile from '../../ui/StatTile';

export default function StatsRow({ stats }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatTile
          key={stat.id}
          label={stat.label}
          value={stat.value}
          subtitle={stat.subtitle}
          delta={stat.delta}
          direction={stat.direction}
        />
      ))}
    </div>
  );
}
