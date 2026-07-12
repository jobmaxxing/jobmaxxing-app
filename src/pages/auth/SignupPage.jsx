import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { LogoIcon } from '../../components/ui/LogoIcon';
import Button from '../../components/ui/Button';

export default function SignupPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await signUp({ email, password, name });
      if (data.session) {
        navigate('/app/dashboard', { replace: true });
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas px-4 font-sans">
        <div className="w-full max-w-sm rounded-2xl border border-line bg-surface p-8 text-center shadow-soft">
          <h1 className="mb-2 font-heading text-xl font-semibold text-ink">Check your email</h1>
          <p className="text-sm text-muted">
            We sent a confirmation link to <strong className="text-ink">{email}</strong>. Click it to activate
            your account, then log in.
          </p>
          <Link to="/login" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4 font-sans">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <LogoIcon size={28} />
          <span className="font-heading text-base font-bold uppercase tracking-widest text-ink">JobMaxxing</span>
        </Link>

        <div className="rounded-2xl border border-line bg-surface p-8 shadow-soft">
          <h1 className="mb-1 font-heading text-xl font-semibold text-ink">Create your account</h1>
          <p className="mb-6 text-sm text-muted">Start tracking applications and optimizing your job search.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
                placeholder="Alex Kim"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
                placeholder="At least 8 characters"
              />
            </div>

            {error && <p className="text-sm text-danger">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full justify-center">
              {loading ? 'Creating account…' : 'Create account'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-accent hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
