import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { WebsiteProvider, useWebsite } from './context/WebsiteContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages matching official college structure
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AdministrationPage from './pages/AdministrationPage';
import AcademicsPage from './pages/AcademicsPage';
import DepartmentDetailPage from './pages/DepartmentDetailPage';
import StudentWelfarePage from './pages/StudentWelfarePage';
import PublicationsPage from './pages/PublicationsPage';
import ContactPage from './pages/ContactPage';

// Additional supporting pages & admin
import NoticesPage from './pages/NoticesPage';
import FacultyPage from './pages/FacultyPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AdminPage from './pages/AdminPage';

// Modals
import ProgramModal from './components/ProgramModal';
import NoticeModal from './components/NoticeModal';
import DemoModal from './components/DemoModal';
import Admissions from './components/Admissions';
import { X, GraduationCap, AlertTriangle, ArrowLeft } from 'lucide-react';

function AppContent() {
  const { siteSettings } = useWebsite();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState('');

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
        onOpenDemoInfo={() => setIsDemoModalOpen(true)}
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
        </div>
      </main>

      {/* Collegiate Footer */}
      <Footer onOpenDemoInfo={() => setIsDemoModalOpen(true)} />

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onApplyClick={(program) => handleOpenAdmissions(program)}
      />

      {/* Notice Details Modal */}
      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      {/* Demo Guide Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Admissions Enquiry Popup Modal */}
      {isAdmissionsModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAdmissionsModalOpen(false)}>
          <div
            className="modal-content modal-content-xl w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 bg-white"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admissions-modal-heading"
          >
            <div className="bg-[#0b1a2e] text-white p-4 sm:p-6 flex items-center justify-between border-b border-[#1b3459]">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/15">
                  <GraduationCap className="w-5 h-5 text-[#f5c84c]" />
                </div>
                <div>
                  <h3 id="admissions-modal-heading" className="font-heading text-base sm:text-lg font-bold text-white leading-tight">
                    Student Admission & Counseling Application Form (2025–2026)
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">College of Agricultural Engineering, Bapatla • Constituent College of ANGRAU</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAdmissionsModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Close Enquiry Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-8 max-h-[82vh] overflow-y-auto">
              <Admissions
                initialCourse={prefilledCourse}
                isModal={true}
                onClose={() => setIsAdmissionsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
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
