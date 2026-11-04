import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { courseIntakeTables, consolidatedAllBranchesTable, programsData } from '../data/academicsData';
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
  Info
} from 'lucide-react';

export default function AcademicsPage({ onSelectProgram, onOpenEnquiry }) {
  const { officialStructure } = useWebsite();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const getInitialTab = () => {
    if (location.pathname.includes('/departments')) return 'departments';
    if (location.pathname.includes('/courses')) return 'courses';
    return searchParams.get('view') || 'courses';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const academics = officialStructure?.academics || officialStructureData.academics;

  useEffect(() => {
    if (location.pathname.includes('/departments')) {
      setActiveTab('departments');
    } else if (location.pathname.includes('/courses')) {
      setActiveTab('courses');
    } else {
      const v = searchParams.get('view');
      if (v) setActiveTab(v);
    }
  }, [location.pathname, searchParams]);

  const handleTabChange = (view) => {
    setActiveTab(view);
    setSearchParams({ view });
  };

  return (
    <div>
      <PageBanner
        title="Academics: Courses & Departments"
        subtitle="Explore undergraduate, postgraduate, and doctoral degree offerings, as well as specialized departmental research laboratories."
        tag="Academic Programs"
        breadcrumb={[{ name: "Academics" }]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-6xl mx-auto space-y-8">
          {/* View Switcher: Courses vs Departments */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleTabChange('courses')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                activeTab === 'courses' ? 'active' : ''
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeTab === 'courses' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Degree Courses ({academics.courses.length})</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('departments')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                activeTab === 'departments' ? 'active' : ''
              }`}
            >
              <Building2 className={`w-4 h-4 ${activeTab === 'departments' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Engineering Departments ({academics.departments.length})</span>
            </button>
          </div>

          {/* VIEW 1: COURSES */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academics.courses.map((course) => (
                  <div
                    key={course.id}
                    className="academic-card p-6 bg-white border border-slate-200 hover:border-[#d4a72c] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="badge badge-navy text-[10px] font-bold">{course.level}</span>
                        <span className="badge badge-gold text-[10px] font-bold">ICAR Approved</span>
                      </div>

                      <h3 className="font-heading text-lg font-extrabold text-navy-950 mb-2 leading-snug">
                        {course.name}
                      </h3>

                      <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 my-4">
                        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                          <span className="text-slate-600 font-semibold">Course Duration:</span>
                          <span className="font-bold text-navy-950">{course.duration}</span>
                        </div>

                        <div>
                          <strong className="text-slate-800 block mb-0.5">Eligibility:</strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block line-clamp-3">
                            {course.eligibility}
                          </span>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60">
                          <a
                            href="#seat-matrix-all-branches"
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#854d0e] hover:text-[#b45309] hover:underline"
                          >
                            <Table className="w-3.5 h-3.5 text-[#d4a72c]" />
                            <span>View All Branches Seat Matrix Table ↓</span>
                          </a>
                        </div>
                      </div>

                      {Array.isArray(course.highlights) ? (
                        <ul className="space-y-1 mb-4 text-xs text-slate-600">
                          {course.highlights.slice(0, 2).map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-2">{h}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {course.highlights}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const match = programsData.find(
                            (p) =>
                              p.id === course.id ||
                              (course.id.includes('agengg') && p.id.includes('agri')) ||
                              p.name?.toLowerCase().includes(course.name?.toLowerCase().slice(0, 15))
                          );
                          const safeProgram = {
                            ...course,
                            ...(match || {}),
                            highlights: Array.isArray(match?.highlights)
                              ? match.highlights
                              : Array.isArray(course.highlights)
                              ? course.highlights
                              : typeof course.highlights === 'string' && course.highlights.trim()
                              ? [course.highlights]
                              : [],
                            curriculumSummary: match?.curriculumSummary || course.curriculumSummary || [],
                            careerOpportunities: match?.careerOpportunities || course.careerOpportunities || ''
                          };
                          onSelectProgram(safeProgram);
                        }}
                        className="btn btn-outline btn-sm text-xs flex-1 justify-center"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Syllabus</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenEnquiry(course)}
                        className="btn btn-gold btn-sm text-xs px-3"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  CONSOLIDATED INTAKE & SEAT MATRIX (ALL BRANCHES IN SINGLE TABLE)
                  ───────────────────────────────────────────────────────────── */}
              <div id="seat-matrix-all-branches" className="mt-12 space-y-8 pt-8 border-t border-slate-200 scroll-mt-24">
                <div className="text-center max-w-3xl mx-auto space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
                    <Award className="w-3.5 h-3.5 text-[#d4a72c]" />
                    <span>Statutory Admission Quotas & Sanctioned Seat Matrix</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                    Comprehensive Annual Seat Matrix of All Branches
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Official numerical seat allocation for all 7 academic programs (Undergraduate, Postgraduate, and Doctoral) governed by ANGRAU, APSCHE, and ICAR New Delhi.
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
          )}

          {/* VIEW 2: DEPARTMENTS */}
          {activeTab === 'departments' && (
            <div className="space-y-6">
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
                          {(dept.labs || dept.laboratories || []).length} Labs
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
                      <span>View 3 Department Subsections</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
