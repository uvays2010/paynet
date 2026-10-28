import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '@/layouts/PublicLayout'
import AdminLayout from '@/layouts/AdminLayout'
import ProtectedRoute from '@/components/common/ProtectedRoute'

import HomePage from '@/pages/public/HomePage'
import AboutPage from '@/pages/public/AboutPage'
import ServicesPage from '@/pages/public/ServicesPage'
import AgentsPage from '@/pages/public/AgentsPage'
import BecomeAgentPage from '@/pages/public/BecomeAgentPage'
import ContactsPage from '@/pages/public/ContactsPage'
import FAQPage from '@/pages/public/FAQPage'
import NewsPage from '@/pages/public/NewsPage'
import StocksPage from '@/pages/public/StocksPage'
import PrivacyPage from '@/pages/public/PrivacyPage'
import TermsPage from '@/pages/public/TermsPage'
import PartnersPage from '@/pages/public/PartnersPage'
import TerminalsMapPage from '@/pages/public/TerminalsMapPage'
import HelpPage from '@/pages/public/HelpPage'
import BranchesPage from '@/pages/public/BranchesPage'
import InstallmentPage from '@/pages/public/InstallmentPage'
import XolisPage from '@/pages/public/XolisPage'
import NotFoundPage from '@/pages/public/NotFoundPage'
import SearchPage from '@/pages/public/SearchPage'
import CalculatorPage from '@/pages/public/CalculatorPage'
import ComparePage from '@/pages/public/ComparePage'
import CareersPage from '@/pages/public/CareersPage'
import SecurityPage from '@/pages/public/SecurityPage'
import HowItWorksPage from '@/pages/public/HowItWorksPage'
import RegionsPage from '@/pages/public/RegionsPage'
import AppDownloadPage from '@/pages/public/AppDownloadPage'
import StatusPage from '@/pages/public/StatusPage'
import BlogPage from '@/pages/public/BlogPage'
import SettingsPage from '@/pages/public/SettingsPage'
import PaymentsHistoryPage from '@/pages/public/PaymentsHistoryPage'
import NotificationsPage from '@/pages/public/NotificationsPage'
import ProfilePage from '@/pages/public/ProfilePage'

import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'

import AdminDashboard from '@/pages/admin/AdminDashboard'
import AdminUsers from '@/pages/admin/AdminUsers'
import AdminServices from '@/pages/admin/AdminServices'
import AdminTransactions from '@/pages/admin/AdminTransactions'
import AdminAgents from '@/pages/admin/AdminAgents'
import AdminCMS from '@/pages/admin/AdminCMS'
import AdminSupport from '@/pages/admin/AdminSupport'
import AdminBanners from '@/pages/admin/AdminBanners'
import AdminNotifications from '@/pages/admin/AdminNotifications'
import AdminActivity from '@/pages/admin/AdminActivity'
import AdminTerminals from '@/pages/admin/AdminTerminals'
import AdminSystem from '@/pages/admin/AdminSystem'
import AdminReports from '@/pages/admin/AdminReports'
import AdminCommissions from '@/pages/admin/AdminCommissions'
import AdminWallets from '@/pages/admin/AdminWallets'
import AdminSettings from '@/pages/admin/AdminSettings'
import AdminOperators from '@/pages/admin/AdminOperators'
import AdminAudit from '@/pages/admin/AdminAudit'
import AdminFAQ from '@/pages/admin/AdminFAQ'
import AdminPromotions from '@/pages/admin/AdminPromotions'
import AdminReferrals from '@/pages/admin/AdminReferrals'
import AdminMedia from '@/pages/admin/AdminMedia'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="regions" element={<RegionsPage />} />
        <Route path="app" element={<AppDownloadPage />} />
        <Route path="status" element={<StatusPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="payments" element={<PaymentsHistoryPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:category" element={<ServicesPage />} />
        <Route path="for-agents" element={<AgentsPage />} />
        <Route path="become-agent" element={<BecomeAgentPage />} />
        <Route path="for-partners" element={<PartnersPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="stocks" element={<StocksPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="terminals-map" element={<TerminalsMapPage />} />
        <Route path="branches" element={<BranchesPage />} />
        <Route path="regional-offices" element={<BranchesPage />} />
        <Route path="installment" element={<InstallmentPage />} />
        <Route path="install-terminal" element={<PartnersPage />} />
        <Route path="xolis" element={<XolisPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="cabinet" element={<Navigate to="/admin" replace />} />
      <Route path="cabinet/*" element={<Navigate to="/admin" replace />} />

      <Route
        path="admin"
        element={
          <ProtectedRoute roles={['admin', 'superadmin', 'operator', 'content_manager', 'analyst']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="transactions" element={<AdminTransactions />} />
        <Route path="agents" element={<AdminAgents />} />
        <Route path="cms" element={<AdminCMS />} />
        <Route path="support" element={<AdminSupport />} />
        <Route path="banners" element={<AdminBanners />} />
        <Route path="notifications" element={<AdminNotifications />} />
        <Route path="activity" element={<AdminActivity />} />
        <Route path="terminals" element={<AdminTerminals />} />
        <Route path="system" element={<AdminSystem />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="commissions" element={<AdminCommissions />} />
        <Route path="wallets" element={<AdminWallets />} />
        <Route path="faq" element={<AdminFAQ />} />
        <Route path="media" element={<AdminMedia />} />
        <Route path="promotions" element={<AdminPromotions />} />
        <Route path="referrals" element={<AdminReferrals />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="operators" element={<AdminOperators />} />
        <Route path="audit" element={<AdminAudit />} />
      </Route>
    </Routes>
  )
}
