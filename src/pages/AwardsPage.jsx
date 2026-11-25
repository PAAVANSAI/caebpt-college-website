import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import {
  Trophy,
  Award,
  Medal,
  Calendar,
  Users,
  Search,
  Eye,
  Maximize2,
  X,
  Printer,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  GraduationCap,
  Download
} from 'lucide-react';
import {
  facultyAwardsData,
  stateBestTeachersGallery,
  meritoriousTeachersGallery,
  nationalHonorsGallery
} from '../data/facultyAwardsData';

export default function AwardsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSection = searchParams.get('section') || searchParams.get('tab') || 'all';
  const [activeTab, setActiveTab] = useState(initialSection);

  // Search & Filter for Table 29
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState('All');

  // Modal for enlarging ceremony photographs
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const q = searchParams.get('section') || searchParams.get('tab');
    if (q) setActiveTab(q);
  }, [searchParams]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ section: tabKey });
  };

  const years = ['All', '2026 – 27', '2025 – 26', '2024 – 25', '2023 – 24', '2022 – 23', '2021 – 22', '2020 – 21'];
  const normalizeYear = (val) => String(val || '').replace(/[\s–—-]+/g, '').trim();

  const filteredAwards = facultyAwardsData.filter((item) => {
    const matchYear =
      filterYear === 'All' ||
      normalizeYear(item.year) === normalizeYear(filterYear);

    const query = searchQuery.toLowerCase().trim();
    const matchSearch =
      !query ||
      item.recipient.toLowerCase().includes(query) ||
      item.award.toLowerCase().includes(query) ||
      (item.designation && item.designation.toLowerCase().includes(query)) ||
      (item.organization && item.organization.toLowerCase().includes(query));

    return matchYear && matchSearch;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner
        title="Awards and Honors"
        subtitle="Recognizing pedagogical excellence, transformative agricultural research, and distinguished apex honors conferred on the faculty and scholars of Dr. NTR College of Agricultural Engineering, Bapatla."
        tag="Official Institutional Honors & Table 29"
        breadcrumb={[{ name: "Awards and Honors" }]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: KEY ACCREDITATION & HONOURS KPI METRICS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-center">
              <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#855e09]">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1a2e]">3</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#855e09] mt-0.5">
                State Best Teachers
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Govt. of Andhra Pradesh</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#0b1a2e]">
                <Medal className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1a2e]">6</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mt-0.5">
                Meritorious Teachers
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">ANGRAU Convocations</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1a2e]">1</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mt-0.5">
                ISAE Commendation
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">National Medal 2026</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
              <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1a2e]">1</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mt-0.5">
                Netaji Subhas ICAR
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">International Fellowship</div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-[#0b1a2e] text-white rounded-2xl p-4 text-center shadow-xs">
              <div className="w-9 h-9 mx-auto mb-2 rounded-xl bg-[#d4a72c]/20 flex items-center justify-center text-[#f5c84c]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f5c84c]">{facultyAwardsData.length}</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200 mt-0.5">
                Total Accolades
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Official Table 29 Register</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: NAVIGATION TABS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          {/* Submenu Filter Tabs */}
          <div className="filter-tabs-wrapper mb-8 sm:mb-10">
            <button
              type="button"
              onClick={() => handleTabChange('all')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
                activeTab === 'all' ? 'active' : ''
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>All Distinctions</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('state-best')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
                activeTab === 'state-best' ? 'active' : ''
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>State Best Teachers</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('meritorious')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
                activeTab === 'meritorious' ? 'active' : ''
              }`}
            >
              <Medal className="w-4 h-4" />
              <span>ANGRAU Meritorious Teachers</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('national')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
                activeTab === 'national' ? 'active' : ''
              }`}
            >
              <Award className="w-4 h-4" />
              <span>National & International Honors</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('table29')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
                activeTab === 'table29' ? 'active' : ''
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Table 29: Complete Register</span>
            </button>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* ═══════════════════════════════════════════════════════════════
                BLOCK 1: STATE BEST TEACHER AWARDS (Govt. of AP)
            ═══════════════════════════════════════════════════════════════ */}
            {(activeTab === 'all' || activeTab === 'state-best') && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="badge badge-gold text-[10.5px] font-black uppercase tracking-wider">
                        Apex State Honors
                      </span>
                      <span className="badge badge-navy text-[10.5px] font-bold">
                        Government of Andhra Pradesh
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-navy-950 flex items-center gap-2.5">
                      <Trophy className="w-6 h-6 text-[#d4a72c]" />
                      <span>State Best Teacher Awardees</span>
                    </h3>
                  </div>
                  <div className="text-right text-xs text-slate-500 font-medium">
                    Conferred on National Teachers' Day (5th September)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {stateBestTeachersGallery.map((teacher, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Ceremony Photograph */}
                        <div
                          className="relative aspect-4/3 overflow-hidden bg-slate-900 cursor-pointer"
                          onClick={() =>
                            setSelectedPhoto({
                              title: `${teacher.honor} — ${teacher.recipient}`,
                              image: teacher.image,
                              desc: teacher.description,
                              role: teacher.role,
                              year: teacher.year
                            })
                          }
                        >
                          <img
                            src={teacher.image}
                            alt={teacher.recipient}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-2xs">
                            <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                            <span>Enlarge Ceremony Photo</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-[#0b1a2e] text-[#f5c84c] px-3 py-1 rounded-full text-xs font-black shadow-md border border-[#f5c84c]/30">
                            {teacher.year}
                          </div>
                        </div>

                        {/* Text Details */}
                        <div className="p-6 space-y-2.5">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#855e09] block">
                            {teacher.honor}
                          </span>
                          <h4 className="font-heading font-black text-navy-950 text-lg leading-snug">
                            {teacher.recipient}
                          </h4>
                          <p className="text-xs font-bold text-slate-600">
                            {teacher.role}
                          </p>
                          <p className="text-xs text-slate-700 leading-relaxed pt-2.5 border-t border-slate-200/80">
                            {teacher.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPhoto({
                              title: `${teacher.honor} — ${teacher.recipient}`,
                              image: teacher.image,
                              desc: teacher.description,
                              role: teacher.role,
                              year: teacher.year
                            })
                          }
                          className="btn btn-outline btn-sm w-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0b1a2e] hover:text-white transition-all cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Official Citation Photo</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                BLOCK 2: ANGRAU MERITORIOUS TEACHER AWARDS (Convocation Medals)
            ═══════════════════════════════════════════════════════════════ */}
            {(activeTab === 'all' || activeTab === 'meritorious') && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="badge badge-navy text-[10.5px] font-bold uppercase tracking-wider">
                        ANGRAU University Honours
                      </span>
                      <span className="badge badge-gold text-[10.5px] font-bold">
                        Annual Convocation Ceremonies
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-navy-950 flex items-center gap-2.5">
                      <Medal className="w-6 h-6 text-[#855e09]" />
                      <span>ANGRAU Meritorious Teacher Awards</span>
                    </h3>
                  </div>
                  <div className="text-right text-xs text-slate-500 font-medium">
                    Conferred by Hon'ble Chancellor / Governor of AP & Vice-Chancellor
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {meritoriousTeachersGallery.map((award, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div
                          className="relative aspect-4/3 overflow-hidden bg-slate-900 cursor-pointer"
                          onClick={() =>
                            setSelectedPhoto({
                              title: `${award.recipient} (${award.year})`,
                              image: award.image,
                              desc: award.description,
                              convocation: award.convocation,
                              role: award.role
                            })
                          }
                        >
                          <img
                            src={award.image}
                            alt={award.recipient}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-2xs">
                            <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                            <span>Enlarge Convocation Photo</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-[#0b1a2e] text-[#f5c84c] px-2.5 py-0.5 rounded-full text-xs font-black shadow-sm">
                            {award.year}
                          </div>
                        </div>

                        <div className="p-5 space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#855e09] block">
                            {award.convocation}
                          </span>
                          <h4 className="font-heading font-black text-navy-950 text-base leading-snug">
                            {award.recipient}
                          </h4>
                          <p className="text-xs font-semibold text-slate-600">
                            {award.role}
                          </p>
                          <p className="text-xs text-slate-700 leading-relaxed pt-2 border-t border-slate-200/80">
                            {award.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPhoto({
                              title: `${award.recipient} (${award.year})`,
                              image: award.image,
                              desc: award.description,
                              convocation: award.convocation,
                              role: award.role
                            })
                          }
                          className="w-full py-2 bg-slate-100 hover:bg-[#0b1a2e] text-slate-700 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>View Ceremony Photograph</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                BLOCK 3: NATIONAL & INTERNATIONAL HONORS (ISAE & ICAR)
            ═══════════════════════════════════════════════════════════════ */}
            {(activeTab === 'all' || activeTab === 'national') && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="badge badge-gold text-[10.5px] font-bold uppercase tracking-wider">
                        National & Global Accolades
                      </span>
                      <span className="badge badge-navy text-[10.5px] font-bold">
                        ISAE & ICAR New Delhi
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-navy-950 flex items-center gap-2.5">
                      <Award className="w-6 h-6 text-[#d4a72c]" />
                      <span>National Commendation & International Fellowships</span>
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  {nationalHonorsGallery.map((honor, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div
                          className="relative aspect-16/10 overflow-hidden bg-slate-900 cursor-pointer"
                          onClick={() =>
                            setSelectedPhoto({
                              title: `${honor.honor} — ${honor.recipient}`,
                              image: honor.image,
                              desc: honor.description,
                              org: honor.organization,
                              role: honor.role
                            })
                          }
                        >
                          <img
                            src={honor.image}
                            alt={honor.recipient}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-2xs">
                            <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                            <span>Enlarge Photograph</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-[#0b1a2e] text-[#f5c84c] px-3 py-1 rounded-full text-xs font-black shadow-md border border-[#f5c84c]/30">
                            {honor.year}
                          </div>
                        </div>

                        <div className="p-6 space-y-2.5">
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#855e09] block">
                            {honor.organization}
                          </span>
                          <h4 className="font-heading font-black text-navy-950 text-lg leading-snug">
                            {honor.honor}
                          </h4>
                          <p className="text-xs font-bold text-[#0b1a2e]">
                            Awardee: {honor.recipient} <span className="font-normal text-slate-500">({honor.role})</span>
                          </p>
                          <p className="text-xs text-slate-700 leading-relaxed pt-2.5 border-t border-slate-200/80">
                            {honor.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPhoto({
                              title: `${honor.honor} — ${honor.recipient}`,
                              image: honor.image,
                              desc: honor.description,
                              org: honor.organization,
                              role: honor.role
                            })
                          }
                          className="btn btn-navy btn-sm w-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#f5c84c]" />
                          <span>View Official Presentation Photo</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                BLOCK 4: TABLE 29: COMPLETE LIST OF AWARDS SECURED (2020–2027)
            ═══════════════════════════════════════════════════════════════ */}
            {(activeTab === 'all' || activeTab === 'table29') && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="badge badge-gold text-[10.5px] font-black uppercase tracking-wider">
                        Official Institutional Record
                      </span>
                      <span className="badge badge-navy text-[10.5px] font-bold">
                        Table 29
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-navy-950 flex items-center gap-2.5">
                      <Building className="w-6 h-6 text-[#d4a72c]" />
                      <span>Table 29: Complete List of Awards Secured by Staff Members</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Official statutory chronicle of staff accolades from academic year 2020–21 through 2026–27.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="btn btn-outline btn-sm text-xs font-bold flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#0b1a2e]" />
                    <span>Print Table 29</span>
                  </button>
                </div>

                {/* Filter and Search Bar */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="relative w-full md:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search staff, award, or agency..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#d4a72c] font-medium"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                    <span className="text-xs font-bold text-slate-500 mr-1">Year:</span>
                    {years.map((y) => (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setFilterYear(y)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          filterYear === y
                            ? 'bg-[#0b1a2e] text-[#f5c84c] shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#0b1a2e] text-white">
                        <th className="p-3.5 sm:p-4 font-black w-28 border-r border-slate-800">
                          Academic Year
                        </th>
                        <th className="p-3.5 sm:p-4 font-black w-72 border-r border-slate-800">
                          Name of the Staff Member
                        </th>
                        <th className="p-3.5 sm:p-4 font-black">
                          Award Received
                        </th>
                        <th className="p-3.5 sm:p-4 font-black w-28 text-center">
                          Ceremony Photo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                      {filteredAwards.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-slate-500">
                            No records found matching your filter criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredAwards.map((item, idx) => (
                          <tr
                            key={idx}
                            className={
                              idx % 2 === 0
                                ? 'bg-white hover:bg-amber-50/30 transition-colors'
                                : 'bg-slate-50/60 hover:bg-amber-50/30 transition-colors'
                            }
                          >
                            <td className="p-3.5 sm:p-4 font-bold text-navy-950 border-r border-slate-200 align-top whitespace-nowrap">
                              <span className="badge badge-gold text-[10.5px] font-extrabold">
                                {item.year}
                              </span>
                            </td>

                            <td className="p-3.5 sm:p-4 border-r border-slate-200 align-top">
                              <div className="font-heading font-black text-navy-950 text-sm leading-snug">
                                {item.recipient}
                              </div>
                              <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
                                {item.designation}
                              </div>
                            </td>

                            <td className="p-3.5 sm:p-4 text-slate-800 leading-relaxed align-top">
                              <div className="font-bold text-navy-950 text-xs sm:text-sm">
                                {item.award}
                              </div>
                              {item.organization && (
                                <div className="text-[11px] text-slate-500 font-medium mt-1 flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#855e09]" />
                                  <span>Conferring Authority: {item.organization}</span>
                                </div>
                              )}
                            </td>

                            <td className="p-3.5 sm:p-4 align-top text-center">
                              {item.image ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setSelectedPhoto({
                                      title: `${item.recipient} (${item.year})`,
                                      image: item.image,
                                      desc: item.award,
                                      role: item.designation,
                                      org: item.organization
                                    })
                                  }
                                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-[#0b1a2e] text-slate-700 hover:text-white rounded-lg text-[11px] font-bold transition-all cursor-pointer"
                                  title="View Ceremony Photo"
                                >
                                  <Eye className="w-3 h-3 text-[#d4a72c]" />
                                  <span>View</span>
                                </button>
                              ) : (
                                <span className="text-[10px] text-slate-400 italic">Record Entry</span>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs text-slate-700 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#855e09] flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong>Official Institutional Verification:</strong> Table 29 is maintained per statutory university records of Dr. NTR College of Agricultural Engineering, Bapatla, Acharya N.G. Ranga Agricultural University (ANGRAU). All citations, gazette notifications, and medals are permanently cataloged in the institutional archives.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MODAL: HIGH-RESOLUTION CEREMONY PHOTO LIGHTBOX
      ═══════════════════════════════════════════════════════════════ */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col my-auto border border-slate-700 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0b1a2e] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Trophy className="w-5 h-5 text-[#f5c84c]" />
                <h4 className="font-heading font-black text-sm sm:text-base text-white tracking-wide">
                  {selectedPhoto.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-900/90 flex-1">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-white/10"
              />
            </div>

            {/* Modal Footer / Description */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-extrabold text-navy-950 text-sm">
                  {selectedPhoto.title}
                </div>
                {selectedPhoto.role && (
                  <div className="text-slate-600 font-semibold">{selectedPhoto.role}</div>
                )}
                {selectedPhoto.desc && (
                  <div className="text-slate-500 text-xs leading-relaxed max-w-2xl">{selectedPhoto.desc}</div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="btn btn-navy text-xs font-bold px-4 py-2 self-end sm:self-center cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
