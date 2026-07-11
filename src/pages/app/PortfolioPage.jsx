import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { usePortfolioData } from '../../data/usePortfolioData';

export default function PortfolioPage() {
  const { projects } = usePortfolioData();

  return (
    <div>
      <PageHeader
        title="Portfolio"
        description="Case studies recruiters see when they click through"
        actions={<Button>Add project</Button>}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} hover className="p-5">
            <div className="mb-3 h-28 rounded-lg bg-canvas" />
            <p className="font-medium text-ink">{project.title}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">{project.views} views this month</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
