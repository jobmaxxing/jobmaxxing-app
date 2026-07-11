import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import { useProfileData } from '../../data/useProfileData';

export default function ProfilePage() {
  const { profile, stats } = useProfileData();

  return (
    <div>
      <PageHeader
        title="Profile"
        description="How you appear across JobMaxxing"
        actions={<Button variant="secondary">Edit profile</Button>}
      />

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Avatar name={profile.name} size="lg" />
          <div>
            <p className="font-heading text-lg font-semibold text-ink">{profile.name}</p>
            <p className="text-sm text-muted">{profile.headline}</p>
            <p className="text-xs text-muted">
              {profile.email} · Member since {profile.memberSince}
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.id} className="p-5">
            <p className="text-sm text-muted">{stat.label}</p>
            <p className="mt-2 font-heading text-2xl font-semibold text-ink">{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
