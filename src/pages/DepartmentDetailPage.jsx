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
  Phone,
  Award,
  BookOpen,
  Cpu,
  Compass,
  Sparkles,
  ExternalLink,
  Table as TableIcon
} from 'lucide-react';

export default function DepartmentDetailPage() {
  const { deptSlug } = useParams();
  const { officialStructure } = useWebsite();
  const departments = officialStructure?.academics?.departments || officialStructureData.academics.departments;

  const normalizedSlug = (deptSlug || '').toLowerCase().replace(/-engineering$/, '');
  const currentDept =
    departments.find((d) => {
      const dNorm = (d.slug || '').toLowerCase().replace(/-engineering$/, '');
      return (
        d.slug === deptSlug ||
        d.id === deptSlug ||
        d.shortCode?.toLowerCase() === deptSlug?.toLowerCase() ||
        dNorm === normalizedSlug ||
        (deptSlug?.includes('irrigation') && d.id === 'ide') ||
        (deptSlug?.includes('renewable') && d.id === 'ree') ||
        (deptSlug?.includes('conservation') && d.id === 'swce') ||
        (deptSlug?.includes('machinery') && d.id === 'fmpe') ||
        (deptSlug?.includes('food') && (d.id === 'apfe' || d.id === 'pfe')) ||
        (deptSlug?.includes('basic') && d.id === 'beas')
      );
    }) || departments[0];

  return (
    <div>
      <PageBanner
        title={`Department of ${currentDept.name}`}
        subtitle={`Specialized division for teaching, testing, and applied research in ${currentDept.shortCode}.`}
        tag="Academic Department"
        breadcrumb={[
          { name: "Departments", link: "/departments" },
          { name: currentDept.shortCode }
        ]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-5xl mx-auto space-y-10">
          {/* Quick Department Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {departments.map((d) => (
              <Link
                key={d.id}
                to={`/departments/${d.slug}`}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap ${
                  d.slug === currentDept.slug || d.id === currentDept.id
                    ? 'bg-[#0b1a2e] text-[#f5c84c] border-[#0b1a2e] shadow-xs ring-1 ring-[#f5c84c]/50 font-extrabold'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
                style={{ textDecoration: 'none' }}
              >
                {d.shortCode} • {d.name.split(' ')[0]}
              </Link>
            ))}
          </div>

          {/* SUBSECTION 1: ABOUT THE DEPARTMENT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#d4a72c]" />
              <span>Institutional Overview</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              About the Department
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {currentDept.about}
            </p>

            {/* Vision & Mission if present */}
            {currentDept.vision && (
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200/70 space-y-2">
                  <span className="badge badge-gold text-[10px] font-extrabold uppercase">Department Vision</span>
                  <p className="text-xs text-amber-950 leading-relaxed font-medium">
                    {currentDept.vision}
                  </p>
                </div>
                {currentDept.mission && (
                  <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-200/70 space-y-2">
                    <span className="badge badge-navy text-[10px] font-extrabold uppercase">Department Mission</span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {currentDept.mission.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-1.5">
                          <span className="text-[#854d0e] font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Model Watershed / PG History if present */}
            {currentDept.modelWatershed && (
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-xs text-emerald-950 space-y-1">
                <strong className="block text-emerald-900 font-bold uppercase tracking-wider text-[11px]">
                  CAE Model Watershed Facility:
                </strong>
                <p className="leading-relaxed">{currentDept.modelWatershed}</p>
              </div>
            )}
          </div>

          {/* ACADEMIC PROGRAMMES & COURSES (If Present) */}
          {(currentDept.academicProgrammes || currentDept.ugCourses) && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#d4a72c]" />
                <span>Curricular Components</span>
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                Academic Programmes & Courses Offered
              </h2>

              {currentDept.academicProgrammes && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentDept.academicProgrammes.map((prog, pIdx) => (
                    <div key={pIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0b1a2e] text-sm">{prog.code}: {prog.title}</span>
                        <span className="badge badge-gold text-xs font-bold">{prog.credits}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {currentDept.ugCourses && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">Undergraduate Subjects Offered:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentDept.ugCourses.map((c, cIdx) => (
                      <div key={cIdx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                        <span className="w-5 h-5 rounded-full bg-[#fdf5df] text-[#854d0e] flex items-center justify-center text-[10px] font-extrabold flex-shrink-0">
                          {cIdx + 1}
                        </span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Components List */}
              {currentDept.practicalComponents && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4a72c]" />
                    <span>Key Laboratory Practical Exercises & Field Demonstrations:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {currentDept.practicalComponents.map((pr, prIdx) => (
                      <div key={prIdx} className="p-2.5 bg-slate-50/70 rounded-lg border border-slate-200/80 flex items-start gap-2">
                        <span className="text-[#854d0e] font-bold text-[11px]">{prIdx + 1}.</span>
                        <span className="leading-snug text-[11.5px]">{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SUBSECTION 2: LABORATORY INFRASTRUCTURE & EQUIPMENT TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#d4a72c]" />
              <span>Laboratory Infrastructure</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Laboratories & Equipment Facilities
            </h2>

            {currentDept.labEquipments ? (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-navy-950 border-b border-slate-200">
                      <th className="py-3 px-4 font-bold w-12 text-center">Sl.</th>
                      <th className="py-3 px-4 font-bold w-48">Name of the Laboratory</th>
                      <th className="py-3 px-4 font-bold">Important Equipment & Instruments</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentDept.labEquipments.map((labItem, lIdx) => (
                      <tr key={lIdx} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-center text-slate-500 font-mono">
                          {lIdx + 1}
                        </td>
                        <td className="py-3 px-4 font-bold text-navy-950">
                          {labItem.labName}
                        </td>
                        <td className="py-3 px-4 text-slate-600 leading-relaxed text-[11.5px]">
                          {labItem.equipment}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(currentDept?.labs || []).map((lab, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-navy-950">{lab}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Software Tools Suite if present */}
            {(currentDept.softwareSuite || currentDept.softwareModels) && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <strong className="block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>Advanced Computational Modeling & Simulation Software Tools:</span>
                </strong>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(currentDept.softwareSuite || currentDept.softwareModels).map((sw, swIdx) => (
                    <span key={swIdx} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#0b1a2e] shadow-2xs">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FIELD RESEARCH & EXTENSION THRUSTS (If Present) */}
          {(currentDept.fieldResearchAreas || currentDept.thrustAreas || currentDept.fieldExperiments) && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#d4a72c]" />
                <span>R&D & Field Thrusts</span>
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-950">
                Applied Field Research & Thrust Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-2">
                {(currentDept.fieldResearchAreas || currentDept.thrustAreas || currentDept.fieldExperiments).map((fa, faIdx) => (
                  <div key={faIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                    <span className="text-emerald-700 font-extrabold mt-0.5">✓</span>
                    <span className="leading-snug">{fa}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUBSECTION 3: HEAD OF THE DEPARTMENT & FACULTY */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#d4a72c]" />
              <span>Faculty Roster</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Head of the Department & Teaching Faculty
            </h2>

            {/* HoD Card */}
            <div className="p-6 bg-gradient-to-r from-navy-50/90 to-[#fdf5df]/60 border-2 border-navy-200/80 rounded-2xl space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="badge badge-gold text-[10px] font-extrabold uppercase">Department Head</span>
                {currentDept?.hodAndFaculty?.hodPhone && (
                  <div className="flex items-center gap-3 text-xs">
                    <a
                      href={`tel:${currentDept.hodAndFaculty.hodPhone.split('/')[0].trim()}`}
                      className="inline-flex items-center gap-1 font-bold text-slate-700 hover:text-navy-950"
                      style={{ textDecoration: 'none' }}
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d4a72c]" />
                      <span>{currentDept.hodAndFaculty.hodPhone}</span>
                    </a>
                    {currentDept.hodAndFaculty.hodEmail && (
                      <a
                        href={`mailto:${currentDept.hodAndFaculty.hodEmail}`}
                        className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline"
                        style={{ textDecoration: 'none' }}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{currentDept.hodAndFaculty.hodEmail}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-navy-950 text-xl">
                  {currentDept?.hodAndFaculty?.hodName || 'Head of Department'}
                </h3>
                <p className="text-xs font-bold text-[#854d0e] mt-0.5">
                  {currentDept?.hodAndFaculty?.hodDesignation || 'Professor & Head'}
                </p>
                {currentDept?.hodAndFaculty?.hodQualifications && (
                  <p className="text-xs text-slate-500 mt-0.5">
                    {currentDept.hodAndFaculty.hodQualifications}
                  </p>
                )}
              </div>

              <div className="pt-2 text-xs text-slate-700 space-y-1">
                <p>
                  <strong>Thrust Area / Specialization: </strong>
                  {currentDept?.hodAndFaculty?.hodSpecialization || 'Agricultural Engineering'}
                </p>
                {currentDept?.hodAndFaculty?.hodAwards && (
                  <p className="text-[#854d0e]">
                    <strong>Awards & Distinctions: </strong>
                    {currentDept.hodAndFaculty.hodAwards}
                  </p>
                )}
                {currentDept?.hodAndFaculty?.hodExperience && (
                  <p className="text-slate-600">
                    <strong>Experience & Record: </strong>
                    {currentDept.hodAndFaculty.hodExperience}
                  </p>
                )}
              </div>
            </div>

            {/* Department Faculty List */}
            <div>
              <h4 className="font-bold text-navy-950 text-sm mb-3">Teaching Faculty Members</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(currentDept?.hodAndFaculty?.facultyMembers || []).map((fac, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <h5 className="font-bold text-navy-950 text-sm">{fac.name}</h5>
                    <p className="text-xs font-bold text-[#854d0e]">{fac.designation}</p>
                    <p className="text-[11px] text-slate-600">{fac.qual}</p>
                    {fac.specialization && (
                      <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                        <strong>Focus: </strong>{fac.specialization}
                      </p>
                    )}
                    {(fac.phone || fac.email) && (
                      <div className="pt-1 flex flex-wrap items-center gap-2 text-[10.5px] text-slate-600">
                        {fac.phone && (
                          <span className="inline-flex items-center gap-1 font-semibold">
                            <Phone className="w-3 h-3 text-[#d4a72c]" /> {fac.phone}
                          </span>
                        )}
                        {fac.email && (
                          <a href={`mailto:${fac.email}`} className="text-blue-700 hover:underline">
                            {fac.email}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/departments"
              className="btn btn-outline btn-sm text-xs font-bold inline-flex items-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Engineering Departments</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

