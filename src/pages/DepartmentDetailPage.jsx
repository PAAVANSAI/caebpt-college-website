import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  Building2,
  Layers,
  Users,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Mail,
  GraduationCap
} from 'lucide-react';

export default function DepartmentDetailPage() {
  const { deptSlug } = useParams();
  const { officialStructure } = useWebsite();
  const departments = officialStructure?.academics?.departments || officialStructureData.academics.departments;

  const currentDept = departments.find((d) => d.slug === deptSlug) || departments[0];

  return (
    <div>
      <PageBanner
        title={`Department of ${currentDept.name}`}
        subtitle={`Specialized division for teaching, testing, and applied research in ${currentDept.shortCode}.`}
        tag="Academic Department"
        breadcrumb={[
          { name: "Academics", link: "/academics" },
          { name: "Departments", link: "/academics/departments" },
          { name: currentDept.shortCode }
        ]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-5xl mx-auto space-y-10">
          {/* Quick Department Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {departments.map((d) => (
              <Link
                key={d.id}
                to={`/academics/departments/${d.slug}`}
                className={`filter-tab text-xs font-bold whitespace-nowrap ${
                  d.slug === currentDept.slug ? 'active' : ''
                }`}
                style={{ textDecoration: 'none' }}
              >
                {d.shortCode}
              </Link>
            ))}
          </div>

          {/* SUBSECTION 1: ABOUT THE DEPARTMENT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#d4a72c]" />
              <span>Subsection 1</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              About the Department
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {currentDept.about}
            </p>
          </div>

          {/* SUBSECTION 2: LABORATORY INFRASTRUCTURE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#d4a72c]" />
              <span>Subsection 2</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Laboratory Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Equipped with specialized testing bays, computational simulation suites, and field trial apparatus:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(currentDept?.labs || []).map((lab, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-navy-950">{lab}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SUBSECTION 3: HEAD OF THE DEPARTMENT & FACULTY */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#d4a72c]" />
              <span>Subsection 3</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Head of the Department & Faculty
            </h2>

            {/* HoD Card */}
            <div className="p-5 bg-navy-50/70 border border-navy-200 rounded-xl">
              <span className="badge badge-gold text-[10px] font-bold uppercase mb-1">Department Head</span>
              <h3 className="font-bold text-navy-950 text-lg">{currentDept?.hodAndFaculty?.hodName || 'Head of Department'}</h3>
              <p className="text-xs font-bold text-[#854d0e]">{currentDept?.hodAndFaculty?.hodDesignation || 'Professor & Head'}</p>
              <p className="text-xs text-slate-700 mt-2">
                <strong>Thrust Area:</strong> {currentDept?.hodAndFaculty?.hodSpecialization || 'Agricultural Engineering'}
              </p>
            </div>

            {/* Department Faculty List */}
            <div>
              <h4 className="font-bold text-navy-950 text-sm mb-3">Teaching Faculty Members</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(currentDept?.hodAndFaculty?.facultyMembers || []).map((fac, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-navy-950 text-sm">{fac.name}</h5>
                    <p className="text-xs font-bold text-[#854d0e]">{fac.designation}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{fac.qual}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/academics"
              className="btn btn-outline btn-sm text-xs font-bold inline-flex items-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Academics & Courses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

