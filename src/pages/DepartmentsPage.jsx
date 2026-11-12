import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  Building2,
  Layers,
  Tractor,
  Droplets,
  UtensilsCrossed,
  SunMedium,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  FlaskConical,
  User,
  Search,
  Sparkles,
  BookOpen
} from 'lucide-react';

const deptIconMap = {
  fmpe: Tractor,
  swce: Droplets,
  ide: Droplets,
  iden: Droplets,
  apfe: UtensilsCrossed,
  pfe: UtensilsCrossed,
  ree: SunMedium,
  reen: SunMedium,
  beas: Building2,
};

export default function DepartmentsPage({ onOpenEnquiry }) {
  const { officialStructure } = useWebsite();
  const [searchQuery, setSearchQuery] = useState('');

  const rawDepartments =
    officialStructure?.academics?.departments ||
    officialStructureData.academics.departments ||
    [];

  // Ensure clean official data if cached context contains stale placeholders
  const departments =
    !Array.isArray(rawDepartments) ||
    rawDepartments.length < 6 ||
    JSON.stringify(rawDepartments).includes('Placeholder') ||
    JSON.stringify(rawDepartments).includes('Dr. Ch. Srinivas') ||
    JSON.stringify(rawDepartments).includes('Dr. M. S. Reddy')
      ? officialStructureData.academics.departments
      : rawDepartments;

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.about?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dept.labs && dept.labs.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div>
      <PageBanner
        title="Engineering & Allied Departments"
        subtitle="Six specialized academic and research departments driving advanced agricultural mechanization, irrigation automation, food process engineering, renewable energy, and foundational engineering."
        tag="Academic Divisions"
        breadcrumb={[{ name: "Departments" }]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto space-y-10">

          {/* Top Overview & Search Header */}
          <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#1b3459] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#f5c84c]">
                <Building2 className="w-4 h-4" />
                <span>Constituent College of ANGRAU • Established 1983</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Six Academic Departments & Specialized Wings
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Each department is equipped with specialized research laboratories, computer simulation facilities, and field trial farms supporting undergraduate, master's, and doctoral scholars.
              </p>
            </div>

            {/* Department Search */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search department or lab facility..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white/10 text-white placeholder-slate-400 border border-white/20 rounded-xl focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => {
              const IconComp = deptIconMap[dept.id] || Building2;
              const labsCount = (dept.labs || dept.laboratories || []).length;
              const hodName =
                dept.hodAndFaculty?.hodName || dept.hod?.name || 'Head of Department';
              const hodDesignation =
                dept.hodAndFaculty?.hodDesignation || dept.hod?.designation || 'Professor & Head';

              return (
                <div
                  key={dept.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#d4a72c] shadow-2xs hover:shadow-md transition-all p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#fdf5df] text-[#854d0e] flex items-center justify-center border border-[#fae4a4] group-hover:bg-[#0b1a2e] group-hover:text-[#f5c84c] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="badge badge-navy text-xs font-bold font-mono">
                        {dept.shortCode}
                      </span>
                    </div>

                    {/* Department Name */}
                    <h3 className="font-heading text-lg font-extrabold text-navy-950 group-hover:text-navy-700 transition-colors leading-snug">
                      {dept.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {dept.about || dept.description}
                    </p>

                    {/* Head of Department Card */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#d4a72c] flex-shrink-0" />
                        <span className="font-bold text-navy-950 truncate">{hodName}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block pl-5 truncate">
                        {hodDesignation}
                      </span>
                    </div>

                    {/* Laboratories List */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <FlaskConical className="w-3.5 h-3.5 text-[#854d0e]" />
                          <span>Specialized Labs</span>
                        </span>
                        <span className="text-[11px] text-[#854d0e] bg-amber-50 px-2 py-0.5 rounded font-bold">
                          {labsCount} Labs
                        </span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-slate-600">
                        {(dept.labs || []).slice(0, 3).map((lab, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between gap-2">
                    <Link
                      to={`/departments/${dept.slug}`}
                      className="btn btn-navy text-xs font-bold py-2 px-3 flex-1 justify-center flex items-center gap-1.5"
                      style={{ textDecoration: 'none' }}
                    >
                      <span>Explore Department</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    {onOpenEnquiry && (
                      <button
                        type="button"
                        onClick={() => onOpenEnquiry({ name: `${dept.name} Division` })}
                        className="btn btn-outline text-xs font-bold py-2 px-3"
                      >
                        <span>Enquire</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
              <Building2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-500">No departments match your query "{searchQuery}".</p>
            </div>
          )}

          {/* Interdisciplinary Research Facilities Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            <div>
              <span className="badge badge-gold text-xs font-bold">Applied Innovation</span>
              <h3 className="font-heading text-xl font-bold text-navy-950 mt-1">
                Interdisciplinary Research & Testing Capabilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Major institutional infrastructure driving field trials, commercial testing, and patentable inventions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <span className="badge badge-navy text-[10px] font-bold">FMPE Division</span>
                <strong className="text-navy-950 text-sm block">Tractor Testing Track</strong>
                <p className="text-slate-600 leading-relaxed text-[11.5px]">
                  Full-scale test tracks for evaluating drawbar pull, fuel economy, tire slippage, and implement draft resistance under regional clay and coastal sandy soils.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <span className="badge badge-navy text-[10px] font-bold">SWCE & IDEN</span>
                <strong className="text-navy-950 text-sm block">Hydraulic Modeling Flume & GIS</strong>
                <p className="text-slate-600 leading-relaxed text-[11.5px]">
                  Computerized tilting flume rig for sediment transport studies, automated micro-irrigation test lines, and satellite-based drought monitoring.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <span className="badge badge-navy text-[10px] font-bold">PFE & REEN</span>
                <strong className="text-navy-950 text-sm block">Multi-Commodity Pilot Processing Plant</strong>
                <p className="text-slate-600 leading-relaxed text-[11.5px]">
                  Pilot lines for grain drying kinetics, pulse dehusking, cold-chain thermal preservation, and solar biomass gasification facilities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
