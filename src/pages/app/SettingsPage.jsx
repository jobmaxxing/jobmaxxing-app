import { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import { useSettingsData } from '../../data/useSettingsData';

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-150 ${checked ? 'bg-accent' : 'bg-line'}`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-150 ${
          checked ? 'translate-x-4' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const { groups } = useSettingsData();
  const [state, setState] = useState(() =>
    Object.fromEntries(groups.flatMap((group) => group.rows.map((row) => [row.id, row.enabled])))
  );

  const toggle = (id) => setState((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div>
      <PageHeader title="Settings" description="Manage your account, notifications, and appearance" />

      <div className="space-y-6">
        {groups.map((group) => (
          <Card key={group.id} className="p-6">
            <h3 className="mb-4 font-heading text-sm font-semibold text-ink">{group.title}</h3>
            <ul className="divide-y divide-line">
              {group.rows.map((row) => (
                <li key={row.id} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-ink">{row.label}</span>
                  <Toggle checked={state[row.id]} onChange={() => toggle(row.id)} />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
