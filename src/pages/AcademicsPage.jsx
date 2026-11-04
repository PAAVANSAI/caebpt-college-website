import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { courseIntakeTables } from '../data/academicsData';
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

                      <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 my-4">
                        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                          <span className="text-slate-600 font-semibold">Course Duration:</span>
                          <span className="font-bold text-navy-950">{course.duration}</span>
                        </div>

                        {/* Numerical Intake Table */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-800 font-bold">Annual Sanctioned Intake:</span>
                            <span className="badge badge-gold font-extrabold text-[11px] px-2 py-0.5">
                              {course.intake}
                            </span>
                          </div>

                          {Array.isArray(course.intakeTable) && course.intakeTable.length > 0 && (
                            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                              <table className="w-full text-left text-[11px] border-collapse">
                                <thead>
                                  <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200 font-bold">
                                    <th className="py-1 px-2.5">Quota / Category</th>
                                    <th className="py-1 px-2.5 text-right w-16">Seats</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {course.intakeTable.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/80">
                                      <td className="py-1 px-2.5 text-slate-700 leading-tight">
                                        {item.category}
                                      </td>
                                      <td className="py-1 px-2.5 text-right font-extrabold text-[#854d0e]">
                                        {item.seats}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>

                        <div className="border-t border-slate-200/60 pt-2">
                          <strong className="text-slate-800 block mb-0.5">Eligibility:</strong>
                          <span className="text-[11px] text-slate-600 leading-relaxed block">
                            {course.eligibility}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {course.highlights}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProgram(course)}
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
                  OFFICIAL INTAKE & SEAT MATRIX SECTION (UG, PG, PH.D.)
                  ───────────────────────────────────────────────────────────── */}
              <div className="mt-12 space-y-8 pt-8 border-t border-slate-200">
                <div className="text-center max-w-3xl mx-auto space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
                    <Award className="w-3.5 h-3.5 text-[#d4a72c]" />
                    <span>Statutory Admission Quotas & Sanctioned Intake</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                    Course-Wise Annual Seat Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Official seat distribution governed by Acharya N.G. Ranga Agricultural University (ANGRAU), the State Council of Higher Education (APSCHE), and the Indian Council of Agricultural Research (ICAR), New Delhi.
                  </p>
                </div>

                {/* 1. Under Graduate Courses Table */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                        Under Graduate Degree Programme
                      </span>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                        {courseIntakeTables.ug.title}
                      </h4>
                    </div>
                    <span className="badge badge-gold font-bold text-xs self-start sm:self-auto">
                      Total Annual Intake: {courseIntakeTables.ug.totalIntake} Seats
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {courseIntakeTables.ug.admissionProcess}
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200">
                            <th className="py-3 px-4 font-bold w-16">S.No.</th>
                            <th className="py-3 px-4 font-bold">Name of B.Tech. Programme / Quota</th>
                            <th className="py-3 px-4 font-bold text-center w-36">Total Intake / Year</th>
                            <th className="py-3 px-4 font-bold text-center w-48">Duration</th>
                            <th className="py-3 px-4 font-bold">Admission Channel / Governing Policy</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {courseIntakeTables.ug.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={row.isTotal ? "bg-[#fdf5df]/80 font-bold text-navy-950 border-t-2 border-[#d4a72c]" : "hover:bg-slate-50/80 transition-colors"}
                            >
                              <td className="py-3 px-4 text-slate-500 font-semibold">{row.sNo}</td>
                              <td className="py-3 px-4 text-navy-950 font-medium">
                                {row.name}
                              </td>
                              <td className="py-3 px-4 text-center font-extrabold text-[#854d0e]">{row.intake}</td>
                              <td className="py-3 px-4 text-center text-slate-600">{row.duration}</td>
                              <td className="py-3 px-4 text-xs text-slate-600">{row.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 2. Post Graduate Courses Table */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                        Post Graduate Degree Programmes
                      </span>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                        {courseIntakeTables.pg.title}
                      </h4>
                    </div>
                    <span className="badge badge-gold font-bold text-xs self-start sm:self-auto">
                      Intake: {courseIntakeTables.pg.totalIntake} Seats (+ 20% ICAR Fellowship)
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {courseIntakeTables.pg.admissionProcess}
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200">
                            <th className="py-3 px-4 font-bold w-16">S.No.</th>
                            <th className="py-3 px-4 font-bold">Department Offering Program</th>
                            <th className="py-3 px-4 font-bold">Name of M.Tech. Programme</th>
                            <th className="py-3 px-4 font-bold text-center w-36">Total Intake / Year</th>
                            <th className="py-3 px-4 font-bold text-center w-48">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {courseIntakeTables.pg.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={row.isTotal ? "bg-[#fdf5df]/80 font-bold text-navy-950 border-t-2 border-[#d4a72c]" : "hover:bg-slate-50/80 transition-colors"}
                            >
                              <td className="py-3 px-4 text-slate-500 font-semibold">{row.sNo}</td>
                              <td className="py-3 px-4 text-slate-800 font-semibold">{row.department}</td>
                              <td className="py-3 px-4 text-navy-950 font-medium">
                                {row.programme}
                                {row.note && <span className="block text-[11px] text-slate-500 font-normal">{row.note}</span>}
                              </td>
                              <td className="py-3 px-4 text-center font-extrabold text-[#854d0e]">{row.intake}</td>
                              <td className="py-3 px-4 text-center text-slate-600">{row.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 3. Doctoral (Ph.D.) Courses Table */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                        Doctoral Research Degree Programmes
                      </span>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                        {courseIntakeTables.phd.title}
                      </h4>
                    </div>
                    <span className="badge badge-gold font-bold text-xs self-start sm:self-auto">
                      Intake: {courseIntakeTables.phd.totalIntake} Regular Seats (+ ICAR Fellowship & In-Service)
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {courseIntakeTables.phd.admissionProcess}
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200">
                            <th className="py-3 px-4 font-bold w-16">S.No.</th>
                            <th className="py-3 px-4 font-bold">Department Offering Program</th>
                            <th className="py-3 px-4 font-bold">Name of Ph.D. Programme</th>
                            <th className="py-3 px-4 font-bold text-center w-36">Total Intake / Year</th>
                            <th className="py-3 px-4 font-bold text-center w-48">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {courseIntakeTables.phd.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={row.isTotal ? "bg-[#fdf5df]/80 font-bold text-navy-950 border-t-2 border-[#d4a72c]" : "hover:bg-slate-50/80 transition-colors"}
                            >
                              <td className="py-3 px-4 text-slate-500 font-semibold">{row.sNo}</td>
                              <td className="py-3 px-4 text-slate-800 font-semibold">{row.department}</td>
                              <td className="py-3 px-4 text-navy-950 font-medium">
                                {row.programme}
                                {row.note && <span className="block text-[11px] text-slate-500 font-normal">{row.note}</span>}
                              </td>
                              <td className="py-3 px-4 text-center font-extrabold text-[#854d0e]">{row.intake}</td>
                              <td className="py-3 px-4 text-center text-slate-600">{row.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
