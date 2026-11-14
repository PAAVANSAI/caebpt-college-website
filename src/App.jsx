import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { WebsiteProvider, useWebsite } from './context/WebsiteContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Keep HomePage in primary initial bundle for instant First Contentful Paint (FCP)
import HomePage from './pages/HomePage';

// Resilient lazy-loader that catches post-deployment chunk hash mismatches and refreshes transparently
function lazyWithRetry(componentImport) {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      const msg = error?.message || error?.toString() || '';
      const isChunkError =
        msg.includes('Failed to fetch dynamically imported module') ||
        msg.includes('ChunkLoadError') ||
        msg.includes('error loading dynamically imported module');

      const lastReload = sessionStorage.getItem('chunk_auto_reload');
      const now = Date.now();
      if (isChunkError && (!lastReload || now - Number(lastReload) > 10000)) {
        sessionStorage.setItem('chunk_auto_reload', String(now));
        window.location.reload();
        return new Promise(() => {});
      }
      throw error;
    }
  });
}

// Lazy-load all subpages and heavy Admin modules to optimize initial bundle from 680 kB to ~75 kB
const AboutUsPage = lazyWithRetry(() => import('./pages/AboutUsPage'));
const AdministrationPage = lazyWithRetry(() => import('./pages/AdministrationPage'));
const AcademicsPage = lazyWithRetry(() => import('./pages/AcademicsPage'));
const DepartmentsPage = lazyWithRetry(() => import('./pages/DepartmentsPage'));
const DepartmentDetailPage = lazyWithRetry(() => import('./pages/DepartmentDetailPage'));
const StudentWelfarePage = lazyWithRetry(() => import('./pages/StudentWelfarePage'));
const PublicationsPage = lazyWithRetry(() => import('./pages/PublicationsPage'));
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'));
const NoticesPage = lazyWithRetry(() => import('./pages/NoticesPage'));
const FacultyPage = lazyWithRetry(() => import('./pages/FacultyPage'));
const FacultyProfilePage = lazyWithRetry(() => import('./pages/FacultyProfilePage'));
const FacilitiesPage = lazyWithRetry(() => import('./pages/FacilitiesPage'));
const GalleryPage = lazyWithRetry(() => import('./pages/GalleryPage'));
const AdmissionsPage = lazyWithRetry(() => import('./pages/AdmissionsPage'));
const AdminPage = lazyWithRetry(() => import('./pages/AdminPage'));

// Lazy-load on-demand Modals so they are excluded from the initial critical JS bundle
const ProgramModal = lazyWithRetry(() => import('./components/ProgramModal'));
const NoticeModal = lazyWithRetry(() => import('./components/NoticeModal'));
import { AlertTriangle } from 'lucide-react';

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="flex flex-col items-center gap-3">
        <div className="w-9 h-9 border-3 border-slate-200 border-t-[#d4a72c] rounded-full animate-spin" />
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Loading Page...
        </span>
      </div>
    </div>
  );
}

function AppContent() {
  const { siteSettings } = useWebsite();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // Lock background body scroll when any modal is open to eliminate double scrollbars
  useEffect(() => {
    const isAnyModalOpen = Boolean(selectedProgram || selectedNotice);
    if (isAnyModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProgram, selectedNotice]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-[#fae4a4] selection:text-[#06101e]">
      <ScrollToTop />

      {/* Main Official Header with Dropdowns */}
      <Header />

      {/* Maintenance Mode Alert if enabled in Admin Dashboard */}
      {siteSettings.maintenanceMode && (
        <div className="bg-red-700 text-white p-3 text-center text-xs font-bold flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#fae4a4]" />
          <span>Administrative Notice: The portal is currently undergoing scheduled maintenance by administrators.</span>
        </div>
      )}

      {/* Main Page Routing View */}
      <main className="flex-1">
        <div className="page-container">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* A. HOME */}
              <Route
                path="/"
                element={
                  <HomePage
                    onSelectProgram={(p) => setSelectedProgram(p)}
                    onSelectNotice={(n) => setSelectedNotice(n)}
                  />
                }
              />

              {/* B. ABOUT US (Historical Background, Vision & Mandate, Org Structure, Accreditation) */}
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/about/:subSection" element={<AboutUsPage />} />

              {/* C. ADMINISTRATION (VC, Deans of Faculty, Associate Dean, Supporting Staff) */}
              <Route path="/administration" element={<AdministrationPage />} />
              <Route path="/administration/:subSection" element={<AdministrationPage />} />

              {/* D. ACADEMICS */}
              <Route
                path="/academics"
                element={
                  <AcademicsPage
                    onSelectProgram={(p) => setSelectedProgram(p)}
                  />
                }
              />
              <Route
                path="/academics/:section"
                element={
                  <AcademicsPage
                    onSelectProgram={(p) => setSelectedProgram(p)}
                  />
                }
              />

              {/* E. DEPARTMENTS (Separate Top-Level Nav Tab) */}
              <Route
                path="/departments"
                element={<DepartmentsPage />}
              />
              <Route
                path="/departments/:deptSlug"
                element={<DepartmentDetailPage />}
              />
              <Route
                path="/academics/departments"
                element={<DepartmentsPage />}
              />
              <Route
                path="/academics/departments/:deptSlug"
                element={<DepartmentDetailPage />}
              />

              {/* E. STUDENT'S WELFARE ACTIVITIES (All 12 items) */}
              <Route path="/student-welfare" element={<StudentWelfarePage />} />
              <Route path="/student-welfare/:activitySlug" element={<StudentWelfarePage />} />

              {/* F. PUBLICATIONS / OTHER MAIN LINKS */}
              <Route path="/publications" element={<PublicationsPage />} />
              <Route
                path="/contact"
                element={<ContactPage />}
              />

              {/* Supporting Subpages */}
              <Route
                path="/notices"
                element={<NoticesPage onSelectNotice={(n) => setSelectedNotice(n)} />}
              />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/faculty/:facultyId" element={<FacultyProfilePage />} />
              <Route path="/departments/:deptSlug/faculty/:facultyId" element={<FacultyProfilePage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/admin" element={<AdminPage />} />

              {/* 404 Fallback */}
              <Route
                path="*"
                element={
                  <div className="container py-24 text-center">
                    <div className="w-16 h-16 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center mx-auto mb-4 border border-navy-100 font-serif text-2xl font-bold">
                      404
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-navy-950 mb-2">Page Not Found</h2>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                      The requested college resource or page could not be found. Please return to the official homepage.
                    </p>
                    <Link to="/" className="btn btn-primary btn-sm font-bold inline-flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      <span>Return to Home</span>
                    </Link>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </main>

      {/* Collegiate Footer */}
      <Footer />

      {/* Dynamic On-Demand Modals (Rendered only when active) */}
      <Suspense fallback={null}>
        {selectedProgram && (
          <ProgramModal
            program={selectedProgram}
            onClose={() => setSelectedProgram(null)}
          />
        )}

        {selectedNotice && (
          <NoticeModal
            notice={selectedNotice}
            onClose={() => setSelectedNotice(null)}
          />
        )}
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <WebsiteProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </WebsiteProvider>
  );
}
