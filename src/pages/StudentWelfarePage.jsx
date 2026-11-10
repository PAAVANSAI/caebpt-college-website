import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  HeartHandshake,
  Building,
  Dumbbell,
  GraduationCap,
  Users,
  Globe,
  Briefcase,
  Activity,
  Award,
  ShieldAlert,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Phone,
  Trophy,
  Sparkles,
  Calendar,
  X,
  Maximize2,
  Table as TableIcon,
  Image as ImageIcon
} from 'lucide-react';

const iconMap = {
  hostels: Building,
  'sports-cultural': Dumbbell,
  scholarships: GraduationCap,
  'nss-ncc': Users,
  'international-students': Globe,
  'placement-cell': Briefcase,
  'health-clinics': Activity,
  alumni: Award,
  'anti-ragging': ShieldAlert,
  'sc-st-cell': Users,
  'women-protection': ShieldCheck,
  library: BookOpen,
};

export default function StudentWelfarePage() {
  const { activitySlug } = useParams();
  const { officialStructure } = useWebsite();
  const welfareList = officialStructure?.welfare || officialStructureData.welfare;

  // Selected image for modal preview
  const [selectedImage, setSelectedImage] = useState(null);

  const currentActivity = activitySlug
    ? welfareList.find((w) => w.slug === activitySlug) || welfareList[0]
    : null;

  return (
    <div>
      <PageBanner
        title="Student's Welfare Activities"
        subtitle="Holistic support services nurturing health, residential comfort, scholarships, placements, inclusive safety, cultural vitality, and physical education."
        tag="Student Welfare & Amenities"
        breadcrumb={[
          { name: "Student's Welfare", link: currentActivity ? "/student-welfare" : null },
          ...(currentActivity ? [{ name: currentActivity.name }] : [])
        ]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-6xl mx-auto space-y-8">
          {/* If viewing a single activity */}
          {currentActivity ? (
            <div className="space-y-8">
              {/* Activity Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {welfareList.map((w) => (
                  <Link
                    key={w.id}
                    to={`/student-welfare/${w.slug}`}
                    className={`filter-tab text-xs font-bold whitespace-nowrap transition-all ${
                      w.slug === currentActivity.slug
                        ? 'bg-[#0b1a2e] text-[#f5c84c] border-[#d4a72c] shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                    style={{ textDecoration: 'none' }}
                  >
                    {w.name}
                  </Link>
                ))}
              </div>

              {/* Primary Activity Header Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="badge badge-gold text-[11px] font-extrabold uppercase tracking-wide">
                        Official Welfare Division
                      </span>
                      {currentActivity.dossier && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Official Document Verified
                        </span>
                      )}
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {currentActivity.title || currentActivity.name}
                    </h2>
                  </div>

                  {/* Official Dossier Download Button */}
                  {currentActivity.dossier && (
                    <div className="flex-shrink-0">
                      <a
                        href={currentActivity.dossier.path}
                        download={currentActivity.dossier.filename}
                        className="btn btn-primary text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-xs hover:shadow-md transition-all"
                        style={{ textDecoration: 'none' }}
                      >
                        <Download className="w-4 h-4 text-[#06101e]" />
                        <span>{currentActivity.dossier.label || 'Download Official Dossier (.docx)'}</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Primary Executive Summary */}
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium bg-amber-50/60 p-4 rounded-xl border border-amber-200/60">
                  {currentActivity.summary}
                </p>

                {/* Key Statistics Strip */}
                {Array.isArray(currentActivity.keyStatistics) && currentActivity.keyStatistics.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4a72c]" />
                      Key Statistics & Infrastructure Highlights
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      {currentActivity.keyStatistics.map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-[#d4a72c]/80 transition-all text-center space-y-1 shadow-2xs"
                        >
                          <span className="block text-[11px] font-bold text-slate-500 leading-tight">
                            {stat.label}
                          </span>
                          <span className="block text-xs sm:text-sm font-extrabold text-navy-950 leading-snug">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comprehensive Institutional Narrative */}
                {Array.isArray(currentActivity.fullNarrative) && currentActivity.fullNarrative.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-4">
                    <h3 className="font-heading font-extrabold text-navy-950 text-lg flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#b88e22]" />
                      Institutional Overview & Operational Guidelines
                    </h3>
                    <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3.5">
                      {currentActivity.fullNarrative.map((paragraph, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Data Tables */}
                {Array.isArray(currentActivity.tables) && currentActivity.tables.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-6">
                    {currentActivity.tables.map((table, tIdx) => (
                      <div key={tIdx} className="space-y-3">
                        <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base flex items-center gap-2">
                          <TableIcon className="w-4 h-4 text-[#d4a72c]" />
                          {table.title}
                        </h4>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-[#0b1a2e] text-[#f5c84c]">
                                {table.columns.map((col, cIdx) => (
                                  <th
                                    key={cIdx}
                                    className="p-3 font-bold border-b border-navy-900 tracking-wide whitespace-nowrap"
                                  >
                                    {col}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                              {table.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}
                                >
                                  {row.map((cell, cellIdx) => (
                                    <td
                                      key={cellIdx}
                                      className={`p-3 text-slate-700 align-top leading-snug ${
                                        cellIdx === 0 ? 'font-bold text-navy-950' : ''
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Official Photographic Gallery */}
                {Array.isArray(currentActivity.gallery) && currentActivity.gallery.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-extrabold text-navy-950 text-lg flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-[#b88e22]" />
                        Official Photographs & Infrastructure Gallery
                      </h3>
                      <span className="text-xs font-bold text-slate-500">
                        {currentActivity.gallery.length} Verified Photos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentActivity.gallery.map((img, gIdx) => (
                        <div
                          key={gIdx}
                          onClick={() => setSelectedImage(img)}
                          className="group relative bg-slate-100 rounded-xl overflow-hidden border border-slate-200 hover:border-[#d4a72c] transition-all shadow-2xs hover:shadow-md cursor-pointer flex flex-col"
                        >
                          <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                            <img
                              src={img.url}
                              alt={img.alt || img.caption}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1 bg-white/90 text-navy-950 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-md">
                                <Maximize2 className="w-3.5 h-3.5" />
                                Click to View
                              </span>
                            </div>
                          </div>
                          <div className="p-3 bg-white flex-1 flex items-center">
                            <p className="text-[11.5px] font-semibold text-slate-700 leading-snug line-clamp-2">
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Highlights & Provisions */}
                {Array.isArray(currentActivity.features) && currentActivity.features.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <h3 className="font-bold text-navy-950 text-base mb-3">
                      Key Highlights & Statutory Provisions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentActivity.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 hover:border-slate-300 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Navigation */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3">
                  <Link
                    to="/student-welfare"
                    className="btn btn-outline btn-sm text-xs font-bold"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>← View All 12 Welfare Activities</span>
                  </Link>

                  {currentActivity.dossier && (
                    <a
                      href={currentActivity.dossier.path}
                      download={currentActivity.dossier.filename}
                      className="text-xs font-bold text-navy-900 hover:text-[#854d0e] inline-flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{currentActivity.dossier.filename}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Overview: Grid of all 12 Mandatory Welfare Activities */
            <div className="space-y-10">
              <div className="section-header">
                <span className="section-tag">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  All Student Welfare Divisions
                </span>
                <h2 className="section-title">Comprehensive Student Services & Campus Amenities</h2>
                <div className="academic-divider">
                  <span className="academic-divider-diamond" />
                </div>
                <p className="section-subtitle">
                  Providing students with a secure residential environment, primary health care, physical conditioning, cultural opportunities, modern library e-resources, and top corporate placements:
                </p>
              </div>

              {/* Statistics Overview Card */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="block text-xl sm:text-2xl font-black text-[#0b1a2e]">11,934</span>
                  <span className="text-xs font-bold text-slate-500">Library Books</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="block text-xl sm:text-2xl font-black text-[#0b1a2e]">59 Rooms</span>
                  <span className="text-xs font-bold text-slate-500">Boys Hostels Capacity</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="block text-xl sm:text-2xl font-black text-[#0b1a2e]">36+</span>
                  <span className="text-xs font-bold text-slate-500">Recruiting Partners</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="block text-xl sm:text-2xl font-black text-[#0b1a2e]">50 Cadets</span>
                  <span className="text-xs font-bold text-slate-500">NCC Unit 115-C Strength</span>
                </div>
              </div>

              {/* Grid of 12 Activities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {welfareList.map((w) => {
                  const Icon = iconMap[w.slug] || HeartHandshake;
                  return (
                    <Link
                      key={w.id}
                      to={`/student-welfare/${w.slug}`}
                      className="academic-card p-6 bg-white border border-slate-200 hover:border-[#d4a72c] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-md"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                            <Icon className="w-6 h-6 text-[#d4a72c]" />
                          </div>
                          {w.gallery && w.gallery.length > 0 && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#854d0e] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <ImageIcon className="w-3 h-3" />
                              {w.gallery.length} Photos
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading text-lg font-extrabold text-navy-950 group-hover:text-navy-700 transition-colors">
                          {w.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {w.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b1a2e] group-hover:text-[#854d0e] transition-colors mt-4">
                        <span>Explore Section & Documents</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* High-Resolution Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3.5 bg-slate-950 border-b border-white/10 text-white">
              <span className="text-xs font-bold text-[#f5c84c] truncate">
                {selectedImage.caption}
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 flex-1 overflow-auto flex items-center justify-center bg-black">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt || selectedImage.caption}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="p-3 bg-slate-950 text-slate-300 text-xs border-t border-white/10 text-center">
              {selectedImage.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
