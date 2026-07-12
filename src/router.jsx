import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';
import AppShell from './components/app/layout/AppShell';
import DashboardPage from './pages/app/DashboardPage';
import ResumePage from './pages/app/ResumePage';
import GitHubPage from './pages/app/GitHubPage';
import PortfolioPage from './pages/app/PortfolioPage';
import AtsPage from './pages/app/AtsPage';
import LinkedInPage from './pages/app/LinkedInPage';
import InterviewsPage from './pages/app/InterviewsPage';
import ColdEmailPage from './pages/app/ColdEmailPage';
import JobTrackerPage from './pages/app/JobTrackerPage';
import SettingsPage from './pages/app/SettingsPage';
import ProfilePage from './pages/app/ProfilePage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/app" element={<AppShell />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="github" element={<GitHubPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="ats" element={<AtsPage />} />
            <Route path="linkedin" element={<LinkedInPage />} />
            <Route path="interviews" element={<InterviewsPage />} />
            <Route path="cold-email" element={<ColdEmailPage />} />
            <Route path="job-tracker" element={<JobTrackerPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
