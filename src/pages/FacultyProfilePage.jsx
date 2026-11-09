import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { facultyData, getFacultyById, getFacultyByDept } from '../data/facultyData';
import {
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  ChevronRight,
  ArrowLeft,
  Building2,
  Sparkles,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Share2,
  Calendar,
  Layers,
  Compass
} from 'lucide-react';

export default function FacultyProfilePage() {
  const { facultyId, deptSlug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  // Match faculty member
  const faculty = getFacultyById(facultyId) || facultyData.find(f => f.id.includes(facultyId?.toLowerCase() || ''));

  if (!faculty) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>
          <h2 className="text-xl font-heading font-extrabold text-navy-950">Faculty Member Not Found</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            The requested faculty profile could not be located or may have been reorganized.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <Link to="/faculty" className="btn btn-primary btn-sm text-xs">
              View All Faculty Directory
            </Link>
            <Link to="/departments" className="btn btn-outline btn-sm text-xs">
              Engineering Departments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get department colleagues
  const colleagues = getFacultyByDept(faculty.deptId).filter(f => f.id !== faculty.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Bio', icon: Briefcase },
    { id: 'education', label: 'Qualifications & Degrees', icon: GraduationCap },
    { id: 'contributions', label: 'Notable Contributions', icon: Sparkles },
    { id: 'publications', label: 'Research & Publications', icon: BookOpen },
    { id: 'awards', label: 'Awards & Memberships', icon: Award }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Official Page Banner with Academic Hierarchy */}
      <PageBanner
        title={faculty.name}
        subtitle={`${faculty.designation} • Department of ${faculty.department}`}
        tag="Academic Faculty Profile"
        breadcrumb={[
          { name: "Departments", path: "/departments" },
          { name: faculty.department, path: `/departments/${faculty.deptSlug || faculty.deptId}` },
          { name: faculty.name }
        ]}
      />

      <div className="container py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation Bar / Back Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-navy-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#d4a72c]" />
            <span>Back to Previous Page</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-semibold text-slate-700 shadow-2xs transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copied ? 'Link Copied!' : 'Share Profile'}</span>
            </button>
            <Link
              to={`/departments/${faculty.deptSlug || faculty.deptId}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fdf5df] border border-[#fae4a4] hover:bg-[#fae4a4]/40 rounded-lg text-xs font-bold text-[#854d0e] transition-all"
              style={{ textDecoration: 'none' }}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Department Page</span>
            </Link>
          </div>
        </div>

        {/* HERO CARD: FACULTY IDENTITY */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
          {/* Subtle Institutional Watermark Accent */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-[#fae4a4]/20 to-transparent rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 relative z-10">
            {/* Faculty Portrait Photograph */}
            <div className="flex-shrink-0 text-center">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-2 ring-slate-200 bg-slate-100 group">
                <img
                  src={faculty.avatar}
                  alt={faculty.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to neutral silhouette SVG avatar if specific image load fails
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute top-2 right-2 bg-emerald-600 text-white p-1 rounded-full shadow" title="Active Verified Faculty">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <span className="inline-block mt-3 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10.5px] font-bold text-slate-700">
                ANGRAU Faculty
              </span>
            </div>

            {/* Core Credentials & Details */}
            <div className="flex-1 text-center lg:text-left space-y-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#fdf5df] to-amber-50/60 border border-[#fae4a4] rounded-full text-[11px] font-extrabold text-[#854d0e] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4a72c]" />
                  <span>{faculty.department}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 font-heading">
                  {faculty.name}
                </h1>
                {faculty.fullName && faculty.fullName !== faculty.name && (
                  <p className="text-xs text-slate-500 font-medium">Official Name in Records: {faculty.fullName}</p>
                )}
                <p className="text-sm sm:text-base font-bold text-[#854d0e]">
                  {faculty.designation}
                </p>
                <p className="text-xs text-slate-600 font-semibold max-w-3xl">
                  {faculty.qualification}
                </p>
              </div>

              {/* Administrative Roles Pills (If any) */}
              {faculty.administrativeRoles && faculty.administrativeRoles.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {faculty.administrativeRoles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-2.5 py-1 bg-navy-50 border border-navy-200 text-navy-900 rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Briefcase className="w-3 h-3 text-navy-600" />
                      <span>{role}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Quick Contact & Room Bar */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600">
                {faculty.email && (
                  <a
                    href={`mailto:${faculty.email}`}
                    className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 hover:underline"
                    style={{ textDecoration: 'none' }}
                  >
                    <Mail className="w-4 h-4 text-[#d4a72c]" />
                    <span>{faculty.email}</span>
                  </a>
                )}
                {faculty.phone && (
                  <a
                    href={`tel:${faculty.phone.split('/')[0].trim().replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-navy-950"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone className="w-4 h-4 text-[#d4a72c]" />
                    <span>{faculty.phone}</span>
                  </a>
                )}
                {faculty.office && (
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{faculty.office}</span>
                  </span>
                )}
              </div>

              {/* Primary Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={`mailto:${faculty.email}?subject=Academic%20Inquiry%20-%20Dr.%20NTR%20CAE%20Bapatla`}
                  className="btn btn-primary btn-sm text-xs font-bold inline-flex items-center gap-2 shadow-sm"
                  style={{ textDecoration: 'none' }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Faculty Member</span>
                </a>
                {faculty.altEmail && (
                  <span className="text-[11px] text-slate-500">
                    Alt: <a href={`mailto:${faculty.altEmail}`} className="text-slate-700 underline">{faculty.altEmail}</a>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN BODY: 2-COLUMN GRID (Tabs + Content vs. Department Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT 2 COLUMNS: DETAILED TABS CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Interactive Tab Headers */}
            <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs flex flex-wrap gap-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    className={`flex-1 min-w-[140px] px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-navy-950 text-white shadow-sm'
                        : 'text-slate-600 hover:text-navy-950 hover:bg-slate-50'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#fae4a4]' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT: 1. OVERVIEW & BIO */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-navy-950 text-xl mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#d4a72c]" />
                    <span>Academic & Professional Profile</span>
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {faculty.name} serves as {faculty.designation} in the Department of {faculty.department} at Dr. NTR College of Agricultural Engineering, Bapatla (ANGRAU). With {faculty.experience}, they contribute actively to undergraduate, postgraduate, and doctoral curricula, agricultural research projects, and university administration.
                  </p>
                </div>

                {/* Thrust Areas / Specialization */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#d4a72c]" />
                    <span>Specialization & Core Thrust Areas</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    {faculty.specialization}
                  </p>
                </div>

                {/* Research Interests List */}
                {faculty.researchInterests && faculty.researchInterests.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">Research Focus Areas:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {faculty.researchInterests.map((interest, iIdx) => (
                        <div key={iIdx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Metrics Bar */}
                {faculty.publicationCounts && (
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-3">Scholarly Impact:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 bg-[#fdf5df] border border-[#fae4a4] rounded-xl">
                        <span className="text-2xl font-extrabold text-[#854d0e] block">{faculty.publicationCounts.journals || 0}</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Journal Papers</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-2xl font-extrabold text-navy-950 block">{faculty.publicationCounts.conferences || 0}</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Conferences</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-2xl font-extrabold text-navy-950 block">{faculty.publicationCounts.technicalBulletins || faculty.publicationCounts.popularArticles || 0}</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Bulletins / Articles</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-2xl font-extrabold text-emerald-700 block">{faculty.publicationCounts.total || 0}+</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">Total Works</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: 2. QUALIFICATIONS & DEGREES */}
            {activeTab === 'education' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-navy-950 text-xl mb-1 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#d4a72c]" />
                    <span>Educational Qualifications & Academic Credentials</span>
                  </h3>
                  <p className="text-xs text-slate-500">Formal degrees conferred, university affiliations, and dissertation research titles.</p>
                </div>

                <div className="space-y-4">
                  {(faculty.education || []).map((edu, eIdx) => (
                    <div key={eIdx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 relative">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-navy-950 text-base">{edu.degree}</h4>
                        {edu.year && (
                          <span className="badge badge-gold text-xs font-bold flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {edu.year}
                          </span>
                        )}
                      </div>
                      {edu.institution && (
                        <p className="text-xs font-semibold text-[#854d0e] flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{edu.institution}</span>
                        </p>
                      )}
                      {edu.thesis && (
                        <div className="pt-2 text-xs text-slate-700 border-t border-slate-200/80">
                          <strong className="text-slate-900">Thesis / Project Title: </strong>
                          <span className="italic leading-relaxed">"{edu.thesis}"</span>
                        </div>
                      )}
                    </div>
                  ))}

                  {(!faculty.education || faculty.education.length === 0) && (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                      <strong>Highest Qualification: </strong> {faculty.qualification}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT: 3. NOTABLE CONTRIBUTIONS */}
            {activeTab === 'contributions' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-navy-950 text-xl mb-1 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#d4a72c]" />
                    <span>Notable Contributions & Institutional Impact</span>
                  </h3>
                  <p className="text-xs text-slate-500">Laboratory installations, equipment innovations, curricular development, and extension services.</p>
                </div>

                <div className="space-y-3">
                  {(faculty.notableContributions || []).map((contrib, cIdx) => (
                    <div key={cIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-[#854d0e] flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5">
                        {cIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {contrib}
                      </p>
                    </div>
                  ))}

                  {(!faculty.notableContributions || faculty.notableContributions.length === 0) && (
                    <p className="text-xs text-slate-500 italic">No specific notable contributions recorded in current profile dossier.</p>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT: 4. RESEARCH & PUBLICATIONS */}
            {activeTab === 'publications' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-navy-950 text-xl mb-1 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#d4a72c]" />
                    <span>Research Publications & Scholarly Record</span>
                  </h3>
                  <p className="text-xs text-slate-500">Peer-reviewed journals, national/international conferences, books, and extension publications.</p>
                </div>

                <div className="p-5 bg-gradient-to-r from-navy-50 to-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-navy-900 uppercase tracking-wider">
                    <FileText className="w-4 h-4 text-[#d4a72c]" />
                    <span>Publications Summary</span>
                  </div>
                  <p className="text-sm font-semibold text-navy-950 leading-relaxed">
                    {faculty.publications}
                  </p>
                </div>

                {faculty.publicationCounts && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead className="bg-slate-100 text-navy-950">
                        <tr>
                          <th className="py-2.5 px-4 font-bold">Category</th>
                          <th className="py-2.5 px-4 font-bold text-center">Count</th>
                          <th className="py-2.5 px-4 font-bold">Status / Scope</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {faculty.publicationCounts.journals > 0 && (
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-700">International & National Refereed Journals</td>
                            <td className="py-2.5 px-4 font-extrabold text-navy-950 text-center">{faculty.publicationCounts.journals}</td>
                            <td className="py-2.5 px-4 text-emerald-700 font-semibold">Published in Scopus / NAAS Rated Journals</td>
                          </tr>
                        )}
                        {faculty.publicationCounts.conferences > 0 && (
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-700">Conference Proceedings & Symposia</td>
                            <td className="py-2.5 px-4 font-extrabold text-navy-950 text-center">{faculty.publicationCounts.conferences}</td>
                            <td className="py-2.5 px-4 text-slate-600">Presented at National & International Venues</td>
                          </tr>
                        )}
                        {faculty.publicationCounts.books > 0 && (
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-700">Authored Books & Book Chapters</td>
                            <td className="py-2.5 px-4 font-extrabold text-navy-950 text-center">{faculty.publicationCounts.books}</td>
                            <td className="py-2.5 px-4 text-slate-600">Academic & Technical Reference Volumes</td>
                          </tr>
                        )}
                        {faculty.publicationCounts.technicalBulletins > 0 && (
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-700">Technical Test Bulletins & Manuals</td>
                            <td className="py-2.5 px-4 font-extrabold text-navy-950 text-center">{faculty.publicationCounts.technicalBulletins}</td>
                            <td className="py-2.5 px-4 text-slate-600">Official Standards and Test Reports</td>
                          </tr>
                        )}
                        {faculty.publicationCounts.popularArticles > 0 && (
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-700">Popular Extension Articles</td>
                            <td className="py-2.5 px-4 font-extrabold text-navy-950 text-center">{faculty.publicationCounts.popularArticles}</td>
                            <td className="py-2.5 px-4 text-slate-600">Farmer Advisory & Agricultural Press</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: 5. AWARDS & MEMBERSHIPS */}
            {activeTab === 'awards' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-navy-950 text-xl mb-1 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#d4a72c]" />
                    <span>Awards, Distinctions & Professional Memberships</span>
                  </h3>
                  <p className="text-xs text-slate-500">State recognitions, national fellowship grants, and learned society affiliations.</p>
                </div>

                {/* Awards List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">Honors & Awards Won:</h4>
                  {(Array.isArray(faculty.awards) ? faculty.awards : [faculty.awards]).filter(Boolean).map((awd, aIdx) => (
                    <div key={aIdx} className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-amber-950 font-semibold leading-relaxed">
                        {awd}
                      </p>
                    </div>
                  ))}
                  {(!faculty.awards || (Array.isArray(faculty.awards) && faculty.awards.length === 0)) && (
                    <p className="text-xs text-slate-500 italic">No individual state awards recorded in current dossier.</p>
                  )}
                </div>

                {/* Professional Memberships */}
                {faculty.memberships && faculty.memberships.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">Professional Society Memberships:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {faculty.memberships.map((mem, mIdx) => (
                        <div key={mIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-navy-700 flex-shrink-0" />
                          <span>{mem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT 1 COLUMN: SIDEBAR (DEPARTMENT AFFILIATION & COLLEAGUES) */}
          <div className="space-y-6">
            {/* Department Quick Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#854d0e] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#d4a72c]" />
                <span>Department Affiliation</span>
              </div>
              <h3 className="font-heading font-extrabold text-navy-950 text-lg leading-snug">
                Department of {faculty.department}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Constituent academic division of Dr. NTR College of Agricultural Engineering, Bapatla, offering accredited B.Tech, M.Tech, and Ph.D. degree programmes.
              </p>
              <Link
                to={`/departments/${faculty.deptSlug || faculty.deptId}`}
                className="btn btn-outline btn-sm w-full text-xs font-bold justify-center"
                style={{ textDecoration: 'none' }}
              >
                <span>View Full Department Page</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Department Colleagues Mini-Roster */}
            {colleagues.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-extrabold text-navy-950 text-sm">
                    Faculty in this Department
                  </h4>
                  <span className="badge badge-gold text-[10px] font-bold">{colleagues.length + 1} Total</span>
                </div>

                <div className="space-y-3">
                  {colleagues.map((colleague) => (
                    <Link
                      key={colleague.id}
                      to={`/faculty/${colleague.id}`}
                      className="p-3 bg-slate-50 hover:bg-[#fdf5df]/50 border border-slate-200 hover:border-[#fae4a4] rounded-xl flex items-center gap-3 transition-all group"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-white">
                        <img
                          src={colleague.avatar}
                          alt={colleague.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-navy-950 group-hover:text-navy-700 truncate">
                          {colleague.name}
                        </h5>
                        <p className="text-[11px] text-[#854d0e] font-medium truncate">
                          {colleague.designation}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-navy-950 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Institutional Information & Contact Box */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#fae4a4] text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Dr. NTR CAE Bapatla</span>
              </div>
              <h4 className="font-heading font-extrabold text-base text-white">
                Official Academic Communications
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For research collaboration, PG/Ph.D. student mentorship, advisory committees, or technical consultations, contact the faculty directly or via the Associate Dean's Office.
              </p>
              <div className="pt-2 border-t border-navy-800 text-[11.5px] space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#fae4a4]" />
                  <span>ad.caebpt@angrau.ac.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#fae4a4]" />
                  <span>08643-224036 / 9985589428</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

