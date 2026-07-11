import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import StatsRow from '../../components/app/dashboard/StatsRow';
import ApplicationActivityChart from '../../components/app/dashboard/ApplicationActivityChart';
import PipelineFunnel from '../../components/app/dashboard/PipelineFunnel';
import RecentActivityFeed from '../../components/app/dashboard/RecentActivityFeed';
import AiRecommendationsPanel from '../../components/app/dashboard/AiRecommendationsPanel';
import { useDashboardStats } from '../../data/useDashboardStats';

export default function DashboardPage() {
  const { statTiles, applicationActivity, pipelineFunnel, recentActivity, aiRecommendations } = useDashboardStats();
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div>
      <PageHeader title="Dashboard" description={today} />

      <StatsRow stats={statTiles} />

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <ApplicationActivityChart data={applicationActivity} />
        </Card>
        <Card className="p-6">
          <PipelineFunnel stages={pipelineFunnel} />
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <RecentActivityFeed items={recentActivity} />
        </Card>
        <Card className="p-6">
          <AiRecommendationsPanel items={aiRecommendations} />
        </Card>
      </div>
    </div>
  );
}
