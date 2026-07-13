import { useRef, useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import StatTile from '../../components/ui/StatTile';
import { useDeleteResume, useResumes, useSetActiveResume, useUploadResume } from '../../api/useResumes';
import { useAnalyzeResume, useLatestAnalysis } from '../../api/useAnalyses';

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function ResumeRow({ resume, onSetActive, onDelete, setActivePending, deletePending }) {
  const [targetRole, setTargetRole] = useState('');
  const { data: analysis } = useLatestAnalysis(resume.id);
  const analyzeResume = useAnalyzeResume();

  const handleAnalyze = () => {
    analyzeResume.mutate({ resumeId: resume.id, targetRole: targetRole.trim() });
  };

  return (
    <li className="flex flex-col gap-3 border-b border-line pb-4 text-sm last:border-b-0 last:pb-0">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate text-ink">{resume.label}</span>
            {resume.is_active && <Badge variant="success">Active</Badge>}
            {analysis && <Badge variant="info">Score {analysis.score}%</Badge>}
          </div>
          <span className="text-xs text-muted">Updated {formatDate(resume.updated_at)}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {!resume.is_active && (
            <Button variant="secondary" size="sm" onClick={onSetActive} disabled={setActivePending}>
              Set active
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={onDelete} disabled={deletePending}>
            Delete
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          placeholder="Target role (optional)"
          className="w-full max-w-xs rounded-lg border border-line bg-canvas px-3 py-1.5 text-xs text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
        />
        <Button variant="secondary" size="sm" onClick={handleAnalyze} disabled={analyzeResume.isPending}>
          {analyzeResume.isPending ? 'Analyzing...' : 'Analyze'}
        </Button>
      </div>
      {analyzeResume.isError && <p className="text-xs text-danger">{analyzeResume.error.message}</p>}
    </li>
  );
}

export default function ResumePage() {
  const { data: resumes = [], isLoading, error } = useResumes();
  const uploadResume = useUploadResume();
  const deleteResume = useDeleteResume();
  const setActiveResume = useSetActiveResume();
  const fileInputRef = useRef(null);
  const [uploadError, setUploadError] = useState(null);

  const activeResume = resumes.find((resume) => resume.is_active);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setUploadError(null);
    try {
      await uploadResume.mutateAsync({ file, label: file.name });
    } catch (err) {
      setUploadError(err.message);
    }
  };

  return (
    <div>
      <PageHeader
        title="Resume"
        description="Manage and optimize your resume for each application"
        actions={
          <>
            <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
            <Button onClick={() => fileInputRef.current?.click()} disabled={uploadResume.isPending}>
              {uploadResume.isPending ? 'Uploading...' : 'Upload new version'}
            </Button>
          </>
        }
      />

      {uploadError && <p className="mt-4 text-sm text-danger">{uploadError}</p>}
      {error && <p className="mt-4 text-sm text-danger">{error.message}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile
          label="Active resume"
          value={activeResume ? activeResume.file_name : 'None set'}
          subtitle={activeResume ? `Updated ${formatDate(activeResume.updated_at)}` : 'Set one below'}
        />
        <StatTile label="Saved versions" value={resumes.length} subtitle="Total uploaded" />
      </div>

      <div className="mt-6">
        <Card className="p-6">
          <h3 className="mb-4 font-heading text-sm font-semibold text-ink">Saved versions</h3>
          {isLoading && <p className="text-sm text-muted">Loading...</p>}
          {!isLoading && resumes.length === 0 && (
            <p className="text-sm text-muted">No resumes uploaded yet. Upload a PDF to get started.</p>
          )}
          <ul className="space-y-4">
            {resumes.map((resume) => (
              <ResumeRow
                key={resume.id}
                resume={resume}
                onSetActive={() => setActiveResume.mutate({ id: resume.id })}
                onDelete={() => deleteResume.mutate({ id: resume.id, storagePath: resume.storage_path })}
                setActivePending={setActiveResume.isPending}
                deletePending={deleteResume.isPending}
              />
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
