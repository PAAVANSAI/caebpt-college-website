import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { WebsiteProvider, useWebsite } from './context/WebsiteContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Keep HomePage in primary initial bundle for instant First Contentful Paint (FCP)
import HomePage from './pages/HomePage';

// Lazy-load all subpages and heavy Admin modules to optimize initial bundle from 680 kB to ~75 kB
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const AdministrationPage = lazy(() => import('./pages/AdministrationPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const DepartmentDetailPage = lazy(() => import('./pages/DepartmentDetailPage'));
const StudentWelfarePage = lazy(() => import('./pages/StudentWelfarePage'));
const PublicationsPage = lazy(() => import('./pages/PublicationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

// Lazy-load on-demand Modals so they are excluded from the initial critical JS bundle
const ProgramModal = lazy(() => import('./components/ProgramModal'));
const NoticeModal = lazy(() => import('./components/NoticeModal'));
const Admissions = lazy(() => import('./components/Admissions'));
import { X, GraduationCap, AlertTriangle, ArrowLeft } from 'lucide-react';

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
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState('');

  // Lock background body scroll when any modal is open to eliminate double scrollbars
  useEffect(() => {
    const isAnyModalOpen = Boolean(selectedProgram || selectedNotice || isAdmissionsModalOpen);
    if (isAnyModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProgram, selectedNotice, isAdmissionsModalOpen]);

  const handleOpenAdmissions = (program) => {
    if (program && program.name) {
      setPrefilledCourse(program.name);
    } else {
      setPrefilledCourse('B.Tech in Agricultural Engineering');
    }
    setIsAdmissionsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-[#fae4a4] selection:text-[#06101e]">
      <ScrollToTop />

      {/* Main Official Header with Dropdowns */}
      <Header
        onOpenAdmissionsModal={() => handleOpenAdmissions()}
      />

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
                    onOpenAdmissions={handleOpenAdmissions}
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

              {/* D. ACADEMICS (Courses, Departments) */}
              <Route
                path="/academics"
                element={
                  <AcademicsPage
                    onSelectProgram={(p) => setSelectedProgram(p)}
                    onOpenEnquiry={handleOpenAdmissions}
                  />
                }
              />
              <Route
                path="/academics/courses"
                element={
                  <AcademicsPage
                    onSelectProgram={(p) => setSelectedProgram(p)}
                    onOpenEnquiry={handleOpenAdmissions}
                  />
                }
              />
              <Route
                path="/academics/departments"
                element={
                  <AcademicsPage
                    onSelectProgram={(p) => setSelectedProgram(p)}
                    onOpenEnquiry={handleOpenAdmissions}
                  />
                }
              />
              {/* Individual Department Pages (with About, Lab Infra, HoD & Faculty) */}
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
                element={<ContactPage onOpenEnquiry={handleOpenAdmissions} />}
              />

              {/* Supporting Subpages */}
              <Route
                path="/notices"
                element={<NoticesPage onSelectNotice={(n) => setSelectedNotice(n)} />}
              />
              <Route path="/faculty" element={<FacultyPage />} />
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
            onApplyClick={(program) => handleOpenAdmissions(program)}
          />
        )}

        {selectedNotice && (
          <NoticeModal
            notice={selectedNotice}
            onClose={() => setSelectedNotice(null)}
          />
        )}

        {isAdmissionsModalOpen && (
          <div className="modal-overlay" onClick={() => setIsAdmissionsModalOpen(false)}>
            <div
              className="modal-content modal-content-xl w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 bg-white flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="admissions-modal-heading"
            >
              <div className="bg-[#0b1a2e] text-white px-4 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-[#1b3459] flex-shrink-0">
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/15">
                    <GraduationCap className="w-5 h-5 text-[#f5c84c]" />
                  </div>
                  <div className="min-w-0">
                    <h3 id="admissions-modal-heading" className="font-heading text-xs sm:text-base md:text-lg font-bold text-white leading-snug truncate">
                      Admissions Application Form (2025–2026)
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 truncate">CAE Bapatla • Constituent College of ANGRAU</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAdmissionsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1.5 sm:p-2 rounded-xl hover:bg-white/10 transition-colors flex-shrink-0"
                  aria-label="Close Enquiry Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto modal-body-scroll flex-1">
                <Admissions
                  initialCourse={prefilledCourse}
                  isModal={true}
                  onClose={() => setIsAdmissionsModalOpen(false)}
                />
              </div>
            </div>
          </div>
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
