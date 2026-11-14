import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { facultyData, getFacultyById } from '../data/facultyData';
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
  Table as TableIcon,
  Download
} from 'lucide-react';

export default function DepartmentDetailPage() {
  const { deptSlug } = useParams();
  const { officialStructure } = useWebsite();
  const departments = officialStructure?.academics?.departments || officialStructureData.academics.departments;

  const normalizedSlug = (deptSlug || '').toLowerCase().replace(/-engineering$/, '');
  const matchedDept =
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

  const officialDept =
    officialStructureData.academics.departments.find(
      (d) => d.id === matchedDept?.id || d.slug === matchedDept?.slug || d.shortCode === matchedDept?.shortCode
    ) || officialStructureData.academics.departments[0];

  // Guaranteed verified HOD and Faculty resolution:
  // Merges official verified photos and IDs so stale localStorage or Firestore snapshots never drop photos
  const defHod = officialDept?.hodAndFaculty || {};
  const userHod = matchedDept?.hodAndFaculty || {};

  // Neutral fallback silhouette if photo is unavailable
  const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";

  const hodFacultyProfile = facultyData.find(f => 
    (defHod.hodId && f.id === defHod.hodId) || 
    (defHod.hodName && f.name?.toLowerCase() === defHod.hodName?.toLowerCase()) ||
    (defHod.hodName && f.fullName?.toLowerCase() === defHod.hodName?.toLowerCase())
  );
  const resolvedHodPhoto = defHod.hodPhoto || hodFacultyProfile?.avatar || DEFAULT_AVATAR;
  const resolvedHodId = defHod.hodId || hodFacultyProfile?.id || (defHod.hodName ? defHod.hodName.toLowerCase().replace(/[^a-z0-9]+/g, '-') : null);

  const resolvedFacultyMembers = (defHod.facultyMembers || []).map((defFac) => {
    const userFac = (userHod.facultyMembers || []).find(
      (m) => m.id === defFac.id || m.name?.toLowerCase() === defFac.name?.toLowerCase()
    );
    const facultyProfile = facultyData.find(f => 
      f.id === defFac.id || 
      f.name?.toLowerCase() === defFac.name?.toLowerCase() ||
      f.fullName?.toLowerCase() === defFac.name?.toLowerCase()
    );
    const authenticPhoto = defFac.photo || facultyProfile?.avatar || DEFAULT_AVATAR;
    const canonicalId = defFac.id || facultyProfile?.id || defFac.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return {
      ...defFac,
      ...(userFac || {}),
      id: canonicalId,
      photo: authenticPhoto
    };
  });

  const currentDept = {
    ...officialDept,
    ...matchedDept,
    hodAndFaculty: {
      ...defHod,
      ...userHod,
      hodId: resolvedHodId,
      hodName: defHod.hodName || userHod.hodName,
      hodDesignation: defHod.hodDesignation || userHod.hodDesignation,
      hodPhoto: resolvedHodPhoto,
      hodPhone: defHod.hodPhone || userHod.hodPhone,
      hodEmail: defHod.hodEmail || userHod.hodEmail,
      hodSpecialization: defHod.hodSpecialization || userHod.hodSpecialization,
      facultyMembers: resolvedFacultyMembers
    }
  };

  const deptDossiers = {
    fmpe: {
      path: "/documents/departments/Department_Farm_Machinery_and_Power_Engineering_Profile.docx",
      filename: "Department_Farm_Machinery_and_Power_Engineering_Profile.docx",
      label: "Download FMPE Profile Dossier (.docx)"
    },
    pfe: {
      path: "/documents/departments/Department_Processing_and_Food_Engineering_Profile.docx",
      filename: "Department_Processing_and_Food_Engineering_Profile.docx",
      label: "Download PFE Profile Dossier (.docx)"
    },
    apfe: {
      path: "/documents/departments/Department_Processing_and_Food_Engineering_Profile.docx",
      filename: "Department_Processing_and_Food_Engineering_Profile.docx",
      label: "Download PFE Profile Dossier (.docx)"
    },
    ree: {
      path: "/documents/departments/Department_Renewable_Energy_Engineering_Profile.docx",
      filename: "Department_Renewable_Energy_Engineering_Profile.docx",
      label: "Download REE Profile Dossier (.docx)"
    },
    ide: {
      path: "/documents/departments/Department_Irrigation_and_Drainage_Engineering_Profile.docx",
      filename: "Department_Irrigation_and_Drainage_Engineering_Profile.docx",
      label: "Download IDE Profile Dossier (.docx)"
    },
    swce: {
      path: "/documents/departments/Department_Soil_and_Water_Conservation_Engineering_Profile.docx",
      filename: "Department_Soil_and_Water_Conservation_Engineering_Profile.docx",
      label: "Download SWCE Profile Dossier (.docx)"
    }
  };

  const currentDossier =
    deptDossiers[currentDept.id?.toLowerCase()] ||
    deptDossiers[currentDept.shortCode?.toLowerCase()];

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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#854d0e] text-xs font-extrabold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#d4a72c]" />
                <span>Institutional Overview</span>
              </div>
              {currentDossier && (
                <a
                  href={currentDossier.path}
                  download={currentDossier.filename}
                  className="btn btn-navy text-xs font-bold py-1.5 px-3 flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
                  style={{ textDecoration: 'none' }}
                  title={currentDossier.label}
                >
                  <Download className="w-3.5 h-3.5 text-[#ecc75f]" />
                  <span>{currentDossier.label}</span>
                </a>
              )}
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
            <div className="p-6 bg-gradient-to-r from-navy-50/90 to-[#fdf5df]/60 border-2 border-navy-200/80 rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* HoD Portrait Photo */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-white shadow-md ring-2 ring-[#d4a72c]/60 bg-white">
                    <img
                      src={currentDept?.hodAndFaculty?.hodPhoto}
                      alt={currentDept?.hodAndFaculty?.hodName || 'Head of Department'}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <span className="badge badge-gold text-[9px] font-extrabold uppercase absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-xs">
                    Dept Head
                  </span>
                </div>

                {/* HoD Information */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-extrabold text-navy-950 text-xl">
                        {currentDept?.hodAndFaculty?.hodName || 'Head of Department'}
                      </h3>
                      <p className="text-xs font-bold text-[#854d0e] mt-0.5">
                        {currentDept?.hodAndFaculty?.hodDesignation || 'Professor & Head'}
                      </p>
                    </div>

                    {/* View Profile Button */}
                    {currentDept?.hodAndFaculty?.hodId && (
                      <Link
                        to={`/faculty/${currentDept.hodAndFaculty.hodId}`}
                        className="btn btn-primary btn-sm text-xs font-bold inline-flex items-center gap-1.5 shadow-2xs"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>View Profile</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>

                  {currentDept?.hodAndFaculty?.hodQualifications && (
                    <p className="text-xs text-slate-600 font-medium">
                      {currentDept.hodAndFaculty.hodQualifications}
                    </p>
                  )}

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
                        <strong>Experience: </strong>
                        {currentDept.hodAndFaculty.hodExperience}
                      </p>
                    )}
                  </div>

                  {/* Contact Links */}
                  {(currentDept?.hodAndFaculty?.hodPhone || currentDept?.hodAndFaculty?.hodEmail) && (
                    <div className="pt-2 border-t border-navy-200/50 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
                      {currentDept.hodAndFaculty.hodPhone && (
                        <a
                          href={`tel:${currentDept.hodAndFaculty.hodPhone.split('/')[0].trim().replace(/\s+/g, '')}`}
                          className="inline-flex items-center gap-1 font-bold text-slate-700 hover:text-navy-950"
                          style={{ textDecoration: 'none' }}
                        >
                          <Phone className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>{currentDept.hodAndFaculty.hodPhone}</span>
                        </a>
                      )}
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
              </div>
            </div>

            {/* Department Faculty List */}
            <div>
              <h4 className="font-bold text-navy-950 text-sm mb-3">Teaching Faculty Members</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(currentDept?.hodAndFaculty?.facultyMembers || []).map((fac, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-[#fae4a4] transition-all space-y-3 flex flex-col justify-between shadow-2xs">
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        {/* Faculty Portrait Thumbnail */}
                        <div className="w-14 h-16 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100 shadow-2xs">
                          <img
                            src={fac.photo}
                            alt={fac.name}
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-navy-950 text-sm leading-snug">{fac.name}</h5>
                          <p className="text-xs font-bold text-[#854d0e]">{fac.designation}</p>
                          <p className="text-[11px] text-slate-600 line-clamp-1">{fac.qual}</p>
                        </div>
                      </div>

                      {fac.specialization && (
                        <p className="text-[11px] text-slate-600 pt-1 border-t border-slate-200/60 leading-relaxed">
                          <strong>Focus: </strong>{fac.specialization}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                      {(fac.phone || fac.email) && (
                        <div className="flex flex-wrap items-center gap-2 text-[10.5px] text-slate-600">
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

                      {/* View Profile Action Link */}
                      <Link
                        to={`/faculty/${fac.id || fac.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0b1a2e] hover:text-[#854d0e] transition-colors"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>View Profile</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#d4a72c]" />
                      </Link>
                    </div>
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

