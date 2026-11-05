import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation, useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { consolidatedAllBranchesTable, programsData } from '../data/academicsData';
import {
  ugCurriculumData,
  pgProgramData,
  phdProgramData,
  examinationRegulationsData,
  ugGuidelinesData,
  pgGuidelinesData,
  thesisGuidelinesData,
  antiPlagiarismPolicyData
} from '../data/academicsCatalogData';
import {
  BookOpen,
  Building2,
  Clock,
  Users,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  FileText,
  ArrowRight,
  Table,
  Award,
  Info,
  ShieldCheck,
  FileCheck,
  Scroll,
  Search,
  Sparkles,
  Layers,
  Compass,
  AlertTriangle,
  Download,
  ExternalLink,
  BookMarked
} from 'lucide-react';

export default function AcademicsPage({ onSelectProgram, onOpenEnquiry, defaultTab }) {
  const { officialStructure } = useWebsite();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { section } = useParams();

  // Normalize initial tab from URL path or param
  const getInitialTab = () => {
    if (defaultTab) return defaultTab;
    if (section) {
      if (section === 'courses') return 'ug-courses';
      return section;
    }
    if (location.pathname.includes('/ug-courses')) return 'ug-courses';
    if (location.pathname.includes('/pg-courses')) return 'pg-courses';
    if (location.pathname.includes('/phd-courses')) return 'phd-courses';
    if (location.pathname.includes('/examination')) return 'examination';
    if (location.pathname.includes('/ug-guidelines')) return 'ug-guidelines';
    if (location.pathname.includes('/pg-guidelines')) return 'pg-guidelines';
    if (location.pathname.includes('/thesis-guidelines')) return 'thesis-guidelines';
    if (location.pathname.includes('/anti-plagiarism-policy')) return 'anti-plagiarism-policy';
    if (location.pathname.includes('/departments')) return 'departments';
    if (location.pathname.includes('/courses')) return 'ug-courses';
    return searchParams.get('tab') || searchParams.get('view') || 'ug-courses';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [selectedSemester, setSelectedSemester] = useState('Semester I');
  const [courseSearchQuery, setCourseSearchQuery] = useState('');
  const [skillSearchQuery, setSkillSearchQuery] = useState('');

  const academics = officialStructure?.academics || officialStructureData.academics;

  useEffect(() => {
    if (section) {
      if (section === 'courses') setActiveTab('ug-courses');
      else setActiveTab(section);
    } else if (location.pathname.includes('/ug-courses')) {
      setActiveTab('ug-courses');
    } else if (location.pathname.includes('/pg-courses')) {
      setActiveTab('pg-courses');
    } else if (location.pathname.includes('/phd-courses')) {
      setActiveTab('phd-courses');
    } else if (location.pathname.includes('/examination')) {
      setActiveTab('examination');
    } else if (location.pathname.includes('/ug-guidelines')) {
      setActiveTab('ug-guidelines');
    } else if (location.pathname.includes('/pg-guidelines')) {
      setActiveTab('pg-guidelines');
    } else if (location.pathname.includes('/thesis-guidelines')) {
      setActiveTab('thesis-guidelines');
    } else if (location.pathname.includes('/anti-plagiarism-policy')) {
      setActiveTab('anti-plagiarism-policy');
    } else if (location.pathname.includes('/departments')) {
      setActiveTab('departments');
    } else {
      const t = searchParams.get('tab') || searchParams.get('view');
      if (t) setActiveTab(t);
    }
  }, [location.pathname, section, searchParams]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
  };

  // Safe Program Selector Helper
  const handleOpenProgramModal = (courseObj) => {
    if (!onSelectProgram) return;
    const match = programsData.find(
      (p) =>
        p.id === courseObj.id ||
        (courseObj.id && courseObj.id.includes('agengg') && p.id.includes('agri')) ||
        p.name?.toLowerCase().includes(courseObj.name?.toLowerCase().slice(0, 15))
    );
    const safeProgram = {
      ...courseObj,
      ...(match || {}),
      highlights: Array.isArray(match?.highlights)
        ? match.highlights
        : Array.isArray(courseObj.highlights)
        ? courseObj.highlights
        : typeof courseObj.highlights === 'string' && courseObj.highlights.trim()
        ? [courseObj.highlights]
        : [],
      curriculumSummary: match?.curriculumSummary || courseObj.curriculumSummary || [],
      careerOpportunities: match?.careerOpportunities || courseObj.careerOpportunities || ''
    };
    onSelectProgram(safeProgram);
  };

  // Nav tabs matching ANGRAU official hierarchy
  const academicTabs = [
    { key: 'ug-courses', label: 'UG Courses', icon: GraduationCap, badge: 'B.Tech' },
    { key: 'pg-courses', label: 'PG Courses', icon: BookOpen, badge: 'M.Tech' },
    { key: 'phd-courses', label: 'Ph.D Courses', icon: Award, badge: 'Doctoral' },
    { key: 'examination', label: 'Examination', icon: FileCheck, badge: 'Regulations' },
    { key: 'ug-guidelines', label: 'UG Guidelines', icon: Compass, badge: 'Directives' },
    { key: 'pg-guidelines', label: 'PG Guidelines', icon: Scroll, badge: 'Advisory' },
    { key: 'thesis-guidelines', label: 'Thesis Guidelines', icon: BookMarked, badge: '2019 Specs' },
    { key: 'anti-plagiarism-policy', label: 'Anti-Plagiarism', icon: ShieldCheck, badge: 'Res. 2920' },
    { key: 'departments', label: 'Departments', icon: Building2, badge: '5 Core' },
  ];

  // Current semester course list with search
  const currentSemesterObj = ugCurriculumData.semesters.find((s) => s.semester === selectedSemester) || ugCurriculumData.semesters[0];
  const filteredSemesterCourses = currentSemesterObj.courses.filter(
    (c) =>
      c.title.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
      c.dept.toLowerCase().includes(courseSearchQuery.toLowerCase())
  );

  const filteredSkillModules = ugCurriculumData.skillModules.filter(
    (m) =>
      m.title.toLowerCase().includes(skillSearchQuery.toLowerCase()) ||
      m.dept.toLowerCase().includes(skillSearchQuery.toLowerCase())
  );

  return (
    <div>
      <PageBanner
        title="Official Academic Programs & Regulations"
        subtitle="Comprehensive curricula, ICAR VI Deans' Committee framework, thesis presentation standards, examination guidelines, and anti-plagiarism regulations under ANGRAU."
        tag="ANGRAU Academics"
        breadcrumb={[{ name: "Academics" }]}
      />

      {/* Official Academics Navigation Tab Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
            {/* Quick Link to Admission Process */}
            <Link
              to="/admissions"
              className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold text-[#854d0e] bg-[#fdf5df] border border-[#fae4a4] hover:bg-[#fae4a4] transition-all flex items-center gap-1.5"
              style={{ textDecoration: 'none' }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Admission Process</span>
            </Link>

            {academicTabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0b1a2e] text-white shadow-sm'
                      : 'text-slate-700 bg-slate-100 hover:bg-slate-200/80 hover:text-navy-950'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#f5c84c]' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[9.5px] px-1.5 py-0.2 rounded font-semibold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-slate-50 min-h-[600px]">
        <div className="container max-w-7xl mx-auto space-y-10">

          {/* =========================================================================
              TAB 1: UG COURSES (ICAR VI Deans' Committee Recommendations 2024)
              ========================================================================= */}
          {activeTab === 'ug-courses' && (
            <div className="space-y-10 animate-fadeIn">
              {/* Header Box */}
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#1b3459]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#f5c84c]">
                      <GraduationCap className="w-4 h-4" />
                      <span>ICAR VI Deans' Committee Approved Curriculum (2024–25)</span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      B.Tech. (Agricultural Engineering)
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      4-Year Full-Time Professional Degree Program designed to impart state-of-the-art engineering competencies across farm mechanization, irrigation automation, post-harvest agro-processing, and renewable energy technologies.
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:flex-col gap-3">
                    <a
                      href="#seat-matrix-all-branches"
                      className="btn btn-gold text-xs font-bold py-2.5 px-4 flex items-center gap-2 whitespace-nowrap"
                    >
                      <Table className="w-4 h-4" />
                      <span>View 88 UG Seats Matrix ↓</span>
                    </a>
                    {onOpenEnquiry && (
                      <button
                        type="button"
                        onClick={() => onOpenEnquiry(academics.courses[0])}
                        className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold py-2.5 px-4 flex items-center gap-2 whitespace-nowrap"
                      >
                        <span>Admission Enquiry</span>
                        <ArrowRight className="w-4 h-4 text-[#ecc75f]" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Credit Distribution Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10 text-center">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Total Duration</span>
                    <strong className="text-lg font-extrabold text-white">4 Years (8 Sems)</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Total Credits</span>
                    <strong className="text-lg font-extrabold text-[#f5c84c]">180 + 4 NG</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Theory + Practical</span>
                    <strong className="text-lg font-extrabold text-white">91 Th + 83 Pr</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">MOOCs / Online</span>
                    <strong className="text-lg font-extrabold text-white">6 Credits</strong>
                  </div>
                </div>
              </div>

              {/* NEP 2020 Multiple Entry / Multiple Exit Options */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-heading text-xl font-bold text-navy-950 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#b88e22]" />
                    <span>NEP 2020 Multiple Entry & Exit Options</span>
                  </h3>
                  <span className="text-xs text-slate-500">National Education Policy 2020 Compliance</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ugCurriculumData.nepEntryExit.map((nep, nIdx) => (
                    <div key={nIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 hover:border-[#d4a72c] transition-all">
                      <span className="badge badge-navy text-[10px] font-bold">{nep.level}</span>
                      <h4 className="font-heading text-sm font-extrabold text-navy-950">
                        {nep.award}
                      </h4>
                      <p className="text-[11.5px] text-slate-600 leading-relaxed">
                        {nep.credits}
                      </p>
                      <div className="pt-2 border-t border-slate-100 text-[10.5px] text-slate-500">
                        <strong>Outcome:</strong> {nep.exitQualification}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department-Wise Credit Allocation Breakdown */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-950">
                      Department-Wise Credit Allocation Breakdown
                    </h3>
                    <p className="text-xs text-slate-500">
                      Distribution of 180 + 4NG credits across engineering departments and foundational sciences.
                    </p>
                  </div>
                  <span className="badge badge-gold font-bold text-xs">Total: 180 + 4 NG</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                    <thead>
                      <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200">
                        <th className="py-2.5 px-3 font-bold">Dept. Code</th>
                        <th className="py-2.5 px-3 font-bold">Department / Academic Subject Area</th>
                        <th className="py-2.5 px-3 font-bold text-center">Theory</th>
                        <th className="py-2.5 px-3 font-bold text-center">Practical</th>
                        <th className="py-2.5 px-3 font-bold text-center">Total Credits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {ugCurriculumData.departmentWiseCredits.map((d, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2 px-3 font-mono font-bold text-navy-900">{d.code}</td>
                          <td className="py-2 px-3 font-medium text-slate-700">{d.dept}</td>
                          <td className="py-2 px-3 text-center text-slate-600">{d.theory}</td>
                          <td className="py-2 px-3 text-center text-slate-600">{d.practical}</td>
                          <td className="py-2 px-3 text-center font-bold text-navy-950">{d.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Interactive Semester-by-Semester Curriculum Viewer */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy-950 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#b88e22]" />
                      <span>Semester-by-Semester Prescribed Syllabus</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      ICAR VI Deans' Committee complete course outlines, codes, and credit hours.
                    </p>
                  </div>

                  {/* Course Search Box */}
                  <div className="relative min-w-[240px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={courseSearchQuery}
                      onChange={(e) => setCourseSearchQuery(e.target.value)}
                      placeholder="Search course title or code..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:border-[#0b1a2e] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Semester Selectors */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {ugCurriculumData.semesters.map((sem) => (
                    <button
                      key={sem.semester}
                      type="button"
                      onClick={() => {
                        setSelectedSemester(sem.semester);
                        setCourseSearchQuery('');
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        selectedSemester === sem.semester
                          ? 'bg-[#b88e22] text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{sem.semester}</span>
                    </button>
                  ))}
                </div>

                {/* Course List Table for Selected Semester */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <div>
                      <strong className="text-sm font-heading font-extrabold text-navy-950">
                        {currentSemesterObj.semester} Courses
                      </strong>
                      <span className="text-xs text-slate-500 block">
                        Credit Load: {currentSemesterObj.totalCredits}
                      </span>
                    </div>
                    {currentSemesterObj.isStudentReady && (
                      <span className="badge badge-gold text-[10px] font-bold">
                        Student READY / Industrial In-Plant
                      </span>
                    )}
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                      <thead>
                        <tr className="bg-slate-100/70 text-navy-950 border-b border-slate-200">
                          <th className="py-3 px-4 font-bold w-28">Course Code</th>
                          <th className="py-3 px-4 font-bold">Course Title</th>
                          <th className="py-3 px-3 font-bold text-center w-28">Credit Hours</th>
                          <th className="py-3 px-3 font-bold text-center w-24">Dept</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredSemesterCourses.length > 0 ? (
                          filteredSemesterCourses.map((c, cIdx) => (
                            <tr key={cIdx} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 px-4 font-mono font-bold text-navy-900">{c.code}</td>
                              <td className="py-3 px-4 font-semibold text-slate-800">{c.title}</td>
                              <td className="py-3 px-3 text-center font-bold text-[#854d0e] bg-amber-50/30">
                                {c.credits}
                              </td>
                              <td className="py-3 px-3 text-center">
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                                  {c.dept}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="py-8 text-center text-slate-400">
                              No courses match your search "{courseSearchQuery}".
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 24 Skill Enhancement Modules (SRDY) */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-950 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#b88e22]" />
                      <span>24 Skill Enhancement Modules (SRDY)</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mandated by ICAR VI Deans' Committee to provide hands-on fabrication, drone flight, solar PV, and precision skills.
                    </p>
                  </div>
                  <div className="relative min-w-[220px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={skillSearchQuery}
                      onChange={(e) => setSkillSearchQuery(e.target.value)}
                      placeholder="Filter 24 skill modules..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0b1a2e] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredSkillModules.map((m) => (
                    <div
                      key={m.id}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:bg-white hover:border-[#d4a72c] transition-all flex items-start gap-2.5"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#0b1a2e] text-[#f5c84c] text-[11px] font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {m.id}
                      </span>
                      <div className="min-w-0">
                        <span className="badge badge-navy text-[9px] font-bold py-0.2 px-1.5 mb-1">{m.dept}</span>
                        <p className="text-xs font-semibold text-slate-800 leading-snug">
                          {m.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Representative Elective Courses */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-950">
                    Departmental Elective Courses (Specialized Tracks)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Scholars select 9 credits of specialized electives in Semesters VI and VII across advanced engineering domains.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ugCurriculumData.electiveCourses.map((e, eIdx) => (
                    <div key={eIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono font-bold text-navy-950">{e.code}</span>
                        <span className="badge badge-gold text-[9.5px] font-bold">{e.credits}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 line-clamp-2">
                        {e.title}
                      </p>
                      <span className="text-[10px] text-slate-500 block">Dept: {e.dept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 2: PG COURSES (M.Tech. Agricultural Engineering)
              ========================================================================= */}
          {activeTab === 'pg-courses' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#1b3459]">
                <div className="max-w-3xl space-y-2">
                  <span className="badge badge-gold text-xs font-bold">Postgraduate Academic Degrees</span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    Master of Technology [M.Tech. (Ag. Engg.)]
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    2-Year (4 Semesters) postgraduate research programs governed by ICAR PG recommendations and ANGRAU academic regulations, with 70 total credits including 30 research dissertation credits.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10 text-center">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Duration</span>
                    <strong className="text-base sm:text-lg font-extrabold text-white">2 Years (4 Sems)</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Total Credits</span>
                    <strong className="text-base sm:text-lg font-extrabold text-[#f5c84c]">70 Credits</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-300 uppercase block">Total PG Intake</span>
                    <strong className="text-base sm:text-lg font-extrabold text-white">13 + 1* EWS (14 Seats)</strong>
                  </div>
                </div>
              </div>

              {/* 3 M.Tech Disciplines */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {pgProgramData.branches.map((b) => (
                  <div
                    key={b.code}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-[#d4a72c] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="badge badge-navy text-xs font-bold">{b.code}</span>
                        <span className="badge badge-gold text-[10px] font-bold">ICAR Approved</span>
                      </div>

                      <h3 className="font-heading text-lg font-extrabold text-navy-950 leading-snug">
                        {b.name}
                      </h3>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-2">
                        <div>
                          <strong className="text-slate-900 block mb-0.5">Sanctioned Intake:</strong>
                          <span className="text-[11px] text-[#854d0e] font-bold">{b.sanctionedIntake}</span>
                        </div>
                        <div>
                          <strong className="text-slate-900 block mb-0.5">Eligibility Criteria:</strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">{b.eligibility}</span>
                        </div>
                      </div>

                      <div>
                        <strong className="text-xs text-slate-900 block mb-1">Key Research Specialization:</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">{b.focus}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                        <strong>Research Infrastructure:</strong> {b.researchLabs}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-2">
                      <a
                        href="#seat-matrix-all-branches"
                        className="btn btn-outline btn-sm text-xs flex-1 justify-center"
                      >
                        <Table className="w-3.5 h-3.5" />
                        <span>Seat Breakdown</span>
                      </a>
                      {onOpenEnquiry && (
                        <button
                          type="button"
                          onClick={() => onOpenEnquiry({ name: b.name, level: "Postgraduate" })}
                          className="btn btn-gold btn-sm text-xs px-3"
                        >
                          <span>Enquire</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 3: PH.D COURSES (Doctor of Philosophy in Agricultural Engineering)
              ========================================================================= */}
          {activeTab === 'phd-courses' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#1b3459]">
                <div className="max-w-3xl space-y-2">
                  <span className="badge badge-gold text-xs font-bold">Doctoral Academic Research</span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    Doctor of Philosophy [Ph.D. (Ag. Engg.)]
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    3-Year advanced doctoral program featuring 100 total credits (25 coursework + 75 research dissertation), patentable engineering innovations, and rigorous peer-reviewed NAAS publications.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10 text-center">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Duration</span>
                    <strong className="text-base sm:text-lg font-extrabold text-white">3 Years (6 Sems)</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-300 uppercase block">Doctoral Credits</span>
                    <strong className="text-base sm:text-lg font-extrabold text-[#f5c84c]">100 Credits</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-300 uppercase block">Annual Intake</span>
                    <strong className="text-base sm:text-lg font-extrabold text-white">4 Regular Seats</strong>
                  </div>
                </div>
              </div>

              {/* 3 Ph.D Disciplines */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {phdProgramData.branches.map((p) => (
                  <div
                    key={p.code}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-[#d4a72c] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="badge badge-navy text-xs font-bold">{p.code}</span>
                        <span className="badge badge-gold text-[10px] font-bold">ICAR SRF</span>
                      </div>

                      <h3 className="font-heading text-lg font-extrabold text-navy-950 leading-snug">
                        {p.name}
                      </h3>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-2">
                        <div>
                          <strong className="text-slate-900 block mb-0.5">Sanctioned Intake:</strong>
                          <span className="text-[11px] text-[#854d0e] font-bold">{p.sanctionedIntake}</span>
                        </div>
                        <div>
                          <strong className="text-slate-900 block mb-0.5">Eligibility Criteria:</strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">{p.eligibility}</span>
                        </div>
                      </div>

                      <div>
                        <strong className="text-xs text-slate-900 block mb-1">Pioneering Doctoral Focus:</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">{p.keyAreas}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-2">
                      <a
                        href="#seat-matrix-all-branches"
                        className="btn btn-outline btn-sm text-xs flex-1 justify-center"
                      >
                        <Table className="w-3.5 h-3.5" />
                        <span>Seat Matrix</span>
                      </a>
                      {onOpenEnquiry && (
                        <button
                          type="button"
                          onClick={() => onOpenEnquiry({ name: p.name, level: "Doctoral" })}
                          className="btn btn-gold btn-sm text-xs px-3"
                        >
                          <span>Enquire</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 4: EXAMINATION (Evaluation Scheme, OGPA 10-Point Scale)
              ========================================================================= */}
          {activeTab === 'examination' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#fdf5df] text-[#854d0e] flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-[#d4a72c]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#854d0e] block">
                      ANGRAU Statutory Academic Code
                    </span>
                    <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                      {examinationRegulationsData.title}
                    </h2>
                    <p className="text-xs text-slate-500">{examinationRegulationsData.authority}</p>
                  </div>
                </div>

                {/* Attendance Regulation Alert */}
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
                  <strong className="block font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Statutory Attendance Threshold (75% Rule)</span>
                  </strong>
                  <p className="leading-relaxed text-[11.5px]">
                    {examinationRegulationsData.attendanceRule}
                  </p>
                </div>
              </div>

              {/* Evaluation Components Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <h3 className="font-heading text-base font-bold text-navy-950">
                    Undergraduate Evaluation Scheme & Marks Weightage
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-100/70 text-navy-950 border-b border-slate-200">
                        <th className="py-3 px-4 font-bold">Course Category</th>
                        <th className="py-3 px-4 font-bold">Mid-Term Evaluation</th>
                        <th className="py-3 px-4 font-bold">Continuous / Practical</th>
                        <th className="py-3 px-4 font-bold">Semester-End University Exam</th>
                        <th className="py-3 px-4 font-bold">Aggregate Passing Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {examinationRegulationsData.ugEvaluationScheme.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-navy-950">{item.component}</td>
                          <td className="py-3.5 px-4 text-slate-700">{item.midTermExam || item.theoryComponent}</td>
                          <td className="py-3.5 px-4 text-slate-700">{item.assignmentsQuizzes || item.practicalComponent}</td>
                          <td className="py-3.5 px-4 text-slate-700">{item.semesterEndExam}</td>
                          <td className="py-3.5 px-4 font-bold text-[#854d0e]">{item.totalMarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 10.00-Point Grading Scale & OGPA Classifications */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-950">
                      10.00-Point Scale Grading System (OGPA)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Passing grade point: 5.00/10.00 (UG) and 6.50/10.00 (PG & Ph.D.)
                    </p>
                  </div>
                  <span className="badge badge-navy text-xs font-bold">University Scale</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100/70 text-navy-950 border-b border-slate-200">
                        <th className="py-2.5 px-4 font-bold">OGPA Range</th>
                        <th className="py-2.5 px-4 font-bold">Division / Degree Classification</th>
                        <th className="py-2.5 px-4 font-bold">Academic Distinction & Honors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {examinationRegulationsData.gradingSystem.classifications.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-navy-950">{row.ogpa}</td>
                          <td className="py-3 px-4 font-semibold text-slate-800">{row.classification}</td>
                          <td className="py-3 px-4 text-slate-600">{row.honors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <strong>Academic Probation Notice:</strong> {examinationRegulationsData.academicProbation}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 5: UG GUIDELINES
              ========================================================================= */}
          {activeTab === 'ug-guidelines' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <span className="badge badge-gold text-xs font-bold">B.Tech Code of Academic Practice</span>
                <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                  {ugGuidelinesData.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Official guidelines governing course registration, credit loads, mentor-mentee advisement, in-plant industrial training, and campus discipline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ugGuidelinesData.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-[#854d0e] font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a72c]" />
                      <span>{item.heading}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 6: PG GUIDELINES
              ========================================================================= */}
          {activeTab === 'pg-guidelines' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <span className="badge badge-navy text-xs font-bold">Postgraduate Academic Directives</span>
                <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                  {pgGuidelinesData.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Statutory procedures for M.Tech and Ph.D scholars: Advisory committee formation, research synopsis defense, comprehensive examinations, and dissertation submission.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pgGuidelinesData.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-navy-950 font-bold text-sm">
                      <Scroll className="w-4 h-4 text-[#b88e22]" />
                      <span>{item.heading}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 7: THESIS GUIDELINES (ANGRAU 2019 Booklet)
              ========================================================================= */}
          {activeTab === 'thesis-guidelines' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#4a0d0d] via-[#631313] to-[#2d0707] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#8a2424]">
                <div className="max-w-3xl space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#ecc75f]">
                    <BookMarked className="w-4 h-4" />
                    <span>Official ANGRAU 2019 Booklet Standards</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    Post Graduate Thesis Presentation Guidelines
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Mandatory typographical rules, binding color codes, margins, and sequence of chapters prescribed by the Dean of Post Graduate Studies, ANGRAU.
                  </p>
                </div>
              </div>

              {/* Physical Specifications Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-heading text-lg font-bold text-navy-950">
                    Physical & Typographical Specifications
                  </h3>
                  <span className="badge badge-gold font-bold text-xs">A4 Executive Bond</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <strong className="text-navy-950 block">Binding Color & Lettering</strong>
                    <p className="text-slate-600">
                      <span className="font-bold text-[#800000]">Maroon Rexin Hard-Bound Binding</span> with golden embossed letters for Agricultural Engineering & Technology. (Green for Agri; Blue for Community Science).
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <strong className="text-navy-950 block">Paper Quality & Size</strong>
                    <p className="text-slate-600">{thesisGuidelinesData.physicalSpecs.paper}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <strong className="text-navy-950 block">Page Margins</strong>
                    <p className="text-slate-600">{thesisGuidelinesData.physicalSpecs.margins}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <strong className="text-navy-950 block">Font & Line Spacing</strong>
                    <p className="text-slate-600">{thesisGuidelinesData.physicalSpecs.font} | {thesisGuidelinesData.physicalSpecs.spacing}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <strong className="text-navy-950 block">Pagination Rules</strong>
                    <p className="text-slate-600">{thesisGuidelinesData.physicalSpecs.pagination}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <strong className="text-navy-950 block">Submission Copies</strong>
                    <p className="text-slate-600">{thesisGuidelinesData.physicalSpecs.copiesRequired}</p>
                  </div>
                </div>
              </div>

              {/* Sequence of Parts in Thesis */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-950">
                    Mandatory Sequence of Parts in Thesis
                  </h3>
                  <p className="text-xs text-slate-500">
                    Strict chronological arrangement required by ANGRAU thesis evaluation cell (Appendices A to N).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {thesisGuidelinesData.arrangementOfParts.map((part) => (
                    <div key={part.seq} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-[#0b1a2e] text-[#ecc75f] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {part.seq}
                      </span>
                      <div>
                        <strong className="text-xs text-navy-950 block mb-0.5">{part.part}</strong>
                        <p className="text-[11px] text-slate-600 leading-snug">{part.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Citation Guidelines */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="font-heading text-lg font-bold text-navy-950">
                  Literature Cited (Author-Year System Format)
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="block text-navy-950 mb-0.5">Journal Article:</strong>
                    <code className="text-[11px] text-slate-700 font-mono block">
                      {thesisGuidelinesData.citationExamples.journalArticle}
                    </code>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="block text-navy-950 mb-0.5">Book Reference:</strong>
                    <code className="text-[11px] text-slate-700 font-mono block">
                      {thesisGuidelinesData.citationExamples.book}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 8: ANTI-PLAGIARISM POLICY (Academic Council Resolution No. 2920)
              ========================================================================= */}
          {activeTab === 'anti-plagiarism-policy' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Academic Council Resolution No. 2920
                    </span>
                    <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                      ANGRAU Anti-Plagiarism Policy & Regulations
                    </h2>
                    <p className="text-xs text-slate-500">
                      UGC Regulations 2018 Compliant • Mandatory URKUND / Turnitin Plagiarism Check via INFLIBNET
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <strong className="text-sm font-bold block">Maximum Permissible Similarity Index: &le; 10%</strong>
                    <span className="text-[11.5px] text-emerald-800">
                      Applicable to all M.Tech theses, Ph.D dissertations, synopsis submissions, and faculty research articles.
                    </span>
                  </div>
                  <span className="badge bg-emerald-700 text-white font-extrabold text-xs px-3 py-1">
                    Similarity &le; 10%
                  </span>
                </div>
              </div>

              {/* 4 Levels of Plagiarism & Penalties Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <h3 className="font-heading text-base font-bold text-navy-950">
                    Statutory Levels of Plagiarism & Prescribed Penalties
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-100/70 text-navy-950 border-b border-slate-200">
                        <th className="py-3 px-3 font-bold w-20 text-center">Level</th>
                        <th className="py-3 px-3 font-bold w-36">Similarity Range</th>
                        <th className="py-3 px-4 font-bold">Severity Classification</th>
                        <th className="py-3 px-4 font-bold">Penalty on Student / Scholar</th>
                        <th className="py-3 px-4 font-bold">Penalty on Faculty / Guide</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {antiPlagiarismPolicyData.penaltyLevels.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-3 text-center font-bold font-mono text-navy-950">{p.level}</td>
                          <td className="py-3.5 px-3 font-bold text-slate-800">{p.range}</td>
                          <td className="py-3.5 px-4 font-semibold text-slate-700">{p.label}</td>
                          <td className="py-3.5 px-4 text-slate-700 leading-relaxed">{p.studentPenalty}</td>
                          <td className="py-3.5 px-4 text-slate-600 leading-relaxed">{p.facultyPenalty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Permissible Exclusions & Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                  <h3 className="font-heading text-base font-bold text-navy-950">
                    Permissible Exclusions from Plagiarism Check
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {antiPlagiarismPolicyData.permissibleExclusions.map((ex, exIdx) => (
                      <li key={exIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                  <h3 className="font-heading text-base font-bold text-navy-950">
                    Academic Integrity Panels (DAIP & IAIP)
                  </h3>
                  <div className="space-y-3 text-xs">
                    {antiPlagiarismPolicyData.integrityCommittees.map((c, cIdx) => (
                      <div key={cIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <strong className="text-navy-950 block">{c.panel}</strong>
                        <p className="text-[11px] text-slate-600"><strong>Composition:</strong> {c.composition}</p>
                        <p className="text-[11px] text-slate-600"><strong>Mandate:</strong> {c.mandate}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 9: DEPARTMENTS (Engineering Departments Directory)
              ========================================================================= */}
          {activeTab === 'departments' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <span className="badge badge-navy text-xs font-bold">Academic Departments</span>
                <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                  Core Engineering Departments
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Explore each department's historical background, specialized research laboratories, faculty roster, and student practical setups.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academics.departments.map((dept) => (
                  <Link
                    key={dept.id}
                    to={`/academics/departments/${dept.slug}`}
                    className="academic-card p-6 bg-white border border-slate-200 hover:border-[#d4a72c] transition-all flex flex-col justify-between group"
                    style={{ textDecoration: 'none' }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="badge badge-navy text-xs font-bold">{dept.shortCode}</span>
                        <span className="text-[11px] text-slate-500 font-semibold">
                          {(dept.labs || dept.laboratories || []).length} Specialized Labs
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-extrabold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                        {dept.name}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {dept.about}
                      </p>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1 mb-4">
                        <div>
                          <strong>HoD:</strong> {dept.hodAndFaculty?.hodName || dept.hod?.name || 'Head of Department'}
                        </div>
                        <div className="text-slate-500 text-[11px]">
                          {dept.hodAndFaculty?.hodDesignation || dept.hod?.designation || 'Professor & Head'}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#b88e22]">
                      <span>Open Department Portal</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              CONSOLIDATED SEAT MATRIX (ALL BRANCHES IN SINGLE TABLE - 106 TOTAL SEATS)
              ========================================================================= */}
          <div id="seat-matrix-all-branches" className="mt-12 space-y-8 pt-8 border-t border-slate-200 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
                <Award className="w-3.5 h-3.5 text-[#d4a72c]" />
                <span>Statutory Admission Quotas & Sanctioned Seat Matrix</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                Comprehensive Annual Seat Matrix of All Branches
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Official numerical seat allocation across all 7 academic programs governed by ANGRAU, APSCHE, and ICAR New Delhi.
              </p>
            </div>

            {/* SINGLE CONSOLIDATED TABLE OF ALL BRANCHES */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                    All Branches Consolidated Numerical Matrix
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {consolidatedAllBranchesTable.title}
                  </h4>
                </div>
                <span className="badge badge-gold font-extrabold text-xs self-start sm:self-auto px-3 py-1">
                  Grand Total: {consolidatedAllBranchesTable.totals.grandTotal}
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200 text-xs">
                        <th className="py-3 px-3 font-bold text-center w-12">S.No.</th>
                        <th className="py-3 px-3 font-bold w-24">Degree</th>
                        <th className="py-3 px-4 font-bold">Branch / Specialization</th>
                        <th className="py-3 px-3 font-bold text-center w-32">Duration</th>
                        <th className="py-3 px-4 font-bold">Quota & Numerical Breakdown</th>
                        <th className="py-3 px-3 font-bold text-center w-28">Total Intake</th>
                        <th className="py-3 px-4 font-bold">Admission Channel</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {consolidatedAllBranchesTable.rows.map((row, rIdx) => {
                        const isUg = row.levelBadge === 'UG';
                        const isPg = row.levelBadge === 'PG';
                        return (
                          <tr
                            key={rIdx}
                            className={`hover:bg-slate-50/80 transition-colors ${
                              isUg ? 'bg-amber-50/20' : ''
                            }`}
                          >
                            <td className="py-3.5 px-3 text-center text-slate-500 font-bold">
                              {row.sNo}
                            </td>
                            <td className="py-3.5 px-3">
                              <span
                                className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                                  isUg
                                    ? 'bg-blue-100 text-blue-900 border border-blue-200'
                                    : isPg
                                    ? 'bg-purple-100 text-purple-900 border border-purple-200'
                                    : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                                }`}
                              >
                                {row.levelBadge}
                              </span>
                              <span className="block text-[11px] font-bold text-navy-950 mt-0.5">
                                {row.degree}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-bold text-navy-950">
                              {row.branch}
                            </td>
                            <td className="py-3.5 px-3 text-center text-slate-600 font-medium">
                              {row.duration}
                            </td>
                            <td className="py-3.5 px-4">
                              {Array.isArray(row.breakdown) ? (
                                <div className="flex flex-wrap gap-1.5">
                                  {row.breakdown.map((b, bIdx) => (
                                    <span
                                      key={bIdx}
                                      className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700 shadow-2xs"
                                    >
                                      <span className="text-slate-500">{b.label}:</span>
                                      <strong className="text-navy-900">{b.val}</strong>
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-slate-700">{row.breakdownText}</span>
                              )}
                            </td>
                            <td className="py-3.5 px-3 text-center">
                              <span className="inline-block bg-[#fdf5df] border border-[#d4a72c] text-[#854d0e] font-extrabold text-xs px-2.5 py-1 rounded-md">
                                {row.totalIntake}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 text-[11px] leading-snug">
                              {row.admissionChannel}
                            </td>
                          </tr>
                        );
                      })}

                      {/* SUB-TOTALS & GRAND TOTAL ROW */}
                      <tr className="bg-slate-100/70 border-t-2 border-slate-300 font-semibold text-slate-800">
                        <td colSpan={5} className="py-2.5 px-4 text-right font-bold text-xs">
                          Sub-Totals by Degree Level:
                        </td>
                        <td colSpan={2} className="py-2.5 px-4 text-xs space-y-0.5">
                          <div>Undergraduate (UG): <strong>88 Seats</strong></div>
                          <div>Postgraduate (PG): <strong>13 + 1* EWS (14 Seats)</strong></div>
                          <div>Doctoral (Ph.D.): <strong>4 Seats</strong></div>
                        </td>
                      </tr>

                      <tr className="bg-[#fdf5df] font-extrabold text-navy-950 border-t-2 border-[#d4a72c]">
                        <td className="py-4 px-3 text-center text-gold-700 font-bold">★</td>
                        <td className="py-4 px-3">
                          <span className="badge badge-gold font-extrabold text-[11px]">ALL LEVELS</span>
                        </td>
                        <td className="py-4 px-4 font-heading text-sm text-navy-950">
                          Grand Total Across All 7 Academic Branches
                        </td>
                        <td className="py-4 px-3 text-center text-slate-700">All Semesters</td>
                        <td className="py-4 px-4 text-xs text-[#854d0e] font-bold">
                          88 UG (61 Base + 12 ICAR + 6 EWS + 9 Lateral) + 14 PG + 4 Ph.D.
                        </td>
                        <td className="py-4 px-3 text-center">
                          <span className="inline-block bg-[#854d0e] text-white font-extrabold text-xs px-3 py-1 rounded-md shadow-sm">
                            106 Seats
                          </span>
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-700">
                          ANGRAU / APSCHE / ICAR New Delhi Approved Quotas
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Stat Notes underneath single table */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="font-bold text-navy-950 block text-[11px] uppercase tracking-wide text-blue-900">
                      B.Tech. Admission Policy
                    </span>
                    <p className="text-slate-600 leading-relaxed text-[11.5px]">
                      Filled via AP EAMCET common state counseling. 60% Convener (36 seats) + 40% Farmers' quota (24 seats). Plus 20% ICAR quota (12 seats), 10% EWS (6 seats), and 15% lateral entry (9 seats) for Diploma holders via AP ECET direct to 2nd year.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="font-bold text-navy-950 block text-[11px] uppercase tracking-wide text-purple-900">
                      M.Tech. Admission Policy
                    </span>
                    <p className="text-slate-600 leading-relaxed text-[11.5px]">
                      Conducted via All-India ICAR JRF entrance ranking with state reservation. 13 base seats across 3 departments + 1* EWS on rotation. Over & above 20% ICAR fellowship seats and international student provisions.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="font-bold text-navy-950 block text-[11px] uppercase tracking-wide text-emerald-900">
                      Ph.D. Admission Policy
                    </span>
                    <p className="text-slate-600 leading-relaxed text-[11.5px]">
                      Conducted through ICAR SRF national entrance examination and interview. 4 regular research seats (2 FMPE, 1 PFE, 1 SWE) plus 20% ICAR fellowship and 1 seat for in-service ANGRAU faculty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
