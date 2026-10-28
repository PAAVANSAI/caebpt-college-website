import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  BookOpen,
  Building2,
  Clock,
  Users,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  FileText,
  ArrowRight
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

                      <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 my-4">
                        <div>
                          <strong className="text-slate-800">Duration:</strong> {course.duration}
                        </div>
                        <div>
                          <strong className="text-slate-800">Intake:</strong> {course.intake}
                        </div>
                        <div>
                          <strong className="text-slate-800">Eligibility:</strong> {course.eligibility}
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
