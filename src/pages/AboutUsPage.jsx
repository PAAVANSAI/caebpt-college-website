import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  History,
  Target,
  Compass,
  Layers,
  Award,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building,
  FileCheck,
  Download,
  Printer,
  Eye,
  X,
  ZoomIn,
  MapPin,
  Users,
  GraduationCap,
  ChevronRight,
  BookOpen,
  ExternalLink,
  FileText,
  Landmark,
  Clock,
  Sparkles,
  Maximize2
} from 'lucide-react';

export default function AboutUsPage() {
  const { officialStructure } = useWebsite();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'history';
  const [activeTab, setActiveTab] = useState(initialTab);

  // Active modal for full-size image viewing
  const [previewImage, setPreviewImage] = useState(null);

  // Active modal for viewing official accreditation documents
  const [selectedDoc, setSelectedDoc] = useState(null);

  const aboutUs = officialStructure?.aboutUs || officialStructureData.aboutUs;
  const historyData = aboutUs?.history || officialStructureData.aboutUs.history;
  const visionData = aboutUs?.visionMandate || officialStructureData.aboutUs.visionMandate;
  const orgData = aboutUs?.orgStructure || officialStructureData.aboutUs.orgStructure;
  const accredData = aboutUs?.accreditation || officialStructureData.aboutUs.accreditation;

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
  };

  const handlePrintDocument = () => {
    window.print();
  };

  const handleDownloadDocument = (doc) => {
    if (doc.fileData) {
      const link = document.createElement('a');
      link.href = doc.fileData;
      link.download = doc.docName || `${doc.title.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    if (doc.fileUrl) {
      window.open(doc.fileUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    handleDownloadDocText(doc);
  };

  const handleDownloadDocText = (doc) => {
    const content = `========================================================================
ACHARYA N.G. RANGA AGRICULTURAL UNIVERSITY (ANGRAU)
Dr. NTR College of Agricultural Engineering, Bapatla - 522 101, A.P.
Accredited by ICAR, New Delhi (Cycle 2021-2026)
========================================================================

OFFICIAL STATUTORY DOCUMENT: ${doc.tag}
TITLE: ${doc.title}
DOCUMENT REFERENCE: ${doc.refNo}
OFFICIAL DATE / CYCLE: ${doc.date}
ISSUING APEX AUTHORITY: ${doc.authority}

------------------------------------------------------------------------
EXECUTIVE SUMMARY & STATUTORY DECLARATION:
------------------------------------------------------------------------
${doc.summary}

INSTITUTIONAL METRICS & COMPLIANCE:
- College: Dr. NTR College of Agricultural Engineering, Bapatla (Dr NTRCAE)
- Affiliation: Acharya N.G. Ranga Agricultural University (ANGRAU)
- Accreditation Apex: National Agricultural Education Accreditation Board (NAEAB), ICAR, New Delhi
- Accreditation Period: 1999-2000 (First Phase) through 2021-2026 (Current Active Cycle)
- Curriculum Compliance: Recommended ICAR V Deans' Committee Syllabus

This is an authentic public inspection copy verified per ANGRAU statutory records and ICAR accreditation standards.
========================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = (doc.docName || 'Official_Document.pdf').replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { key: 'history', label: 'Historical Background', icon: History },
    { key: 'vision-mandate', label: 'Vision and Mandate', icon: Target },
    { key: 'org-structure', label: 'Organizational Structure', icon: Layers },
    { key: 'accreditation', label: 'Status of Accreditation', icon: Award },
  ];

  return (
    <div>
      <PageBanner
        title="About the Institution"
        subtitle="Dr. NTR College of Agricultural Engineering, Bapatla — Four decades of pioneering distinction in agricultural engineering education, research, and farmer-centric innovations under ANGRAU."
        tag="Official Institutional Profile"
        breadcrumb={[{ name: "About Us" }]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          {/* Submenu Tabs (Mobile touch scrollable) */}
          <div className="filter-tabs-wrapper mb-8 sm:mb-10">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => handleTabChange(t.key)}
                  className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-2 ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto">
            {/* ═══════════════════════════════════════════════════════════════
                TAB 1: HISTORICAL BACKGROUND
            ═══════════════════════════════════════════════════════════════ */}
            {activeTab === 'history' && (
              <div className="space-y-8">
                {/* Main Narrative Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="badge badge-gold text-xs font-bold uppercase tracking-wider">
                          Estd. {historyData.established || '1983'}
                        </span>
                        <span className="badge badge-navy text-xs font-bold uppercase tracking-wider">
                          Constituent of ANGRAU
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                        {historyData.collegeName || "Dr. NTR College of Agricultural Engineering, Bapatla"}
                      </h2>
                    </div>
                    <div className="text-right text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#d4a72c]" />
                        <span>{historyData.campusLocation || "NH-216, Karlapalem Road, Bapatla"}</span>
                      </div>
                      <span>Shifted to Campus: {historyData.shiftedDate || "May 1994"}</span>
                    </div>
                  </div>

                  {/* Institutional Key Stat Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-2">
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0b1a2e]">1,046</div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Total Graduates</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0b1a2e]">61</div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Annual Intake</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0b1a2e]">25 Ac</div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">9.51 Hectares</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0b1a2e]">20+</div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Core Faculty</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0b1a2e]">6</div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Departments</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#d4a72c]">2021–26</div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">ICAR Cycle</div>
                    </div>
                  </div>

                  {/* Historic Foundation Stone Card with Photo */}
                  <div className="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-amber-200/80 rounded-2xl p-5 sm:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-5 relative group cursor-pointer overflow-hidden rounded-xl border-2 border-amber-300 shadow-sm"
                           onClick={() => setPreviewImage({
                             src: historyData.foundationStone?.image || "/images/about/ntr_foundation_stone_1988.jpeg",
                             title: "Foundation Stone Laying Ceremony (24-02-1988)",
                             caption: historyData.foundationStone?.caption
                           })}>
                        <img
                          src={historyData.foundationStone?.image || "/images/about/ntr_foundation_stone_1988.jpeg"}
                          alt="Foundation stone laid by Dr. N.T. Rama Rao"
                          className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-xs">
                          <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                          <span>Click to Enlarge</span>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-navy-950/80 text-white p-2 text-[11px] text-center font-medium">
                          Historic Archive: 24-02-1988
                        </div>
                      </div>

                      <div className="md:col-span-7 space-y-3">
                        <span className="badge badge-gold text-[10px] font-bold uppercase tracking-wider">
                          Historical Foundation Milestone
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-950">
                          Foundation Stone Laid by Dr. N.T. Rama Rao (24-02-1988)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          The foundation stone for the construction of the permanent College building complex was laid on <strong className="text-navy-950">24-02-1988</strong> by <strong className="text-navy-950">Dr. N.T. Rama Rao</strong>, the then Hon’ble Chief Minister of Andhra Pradesh.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          The new campus premises on NH-216, Karlapalem Road was subsequently inaugurated on <strong className="text-navy-950">05-05-1994</strong> by <strong className="text-navy-950">Sri K. Jana Reddy</strong>, then Hon’ble Minister for Agriculture of Andhra Pradesh.
                        </p>
                        <div className="pt-2 flex items-center gap-2 text-xs text-amber-900 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#d4a72c]" />
                          <span>Renamed Dr. NTR College of Agricultural Engineering in 2018 in his eternal honor.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complete Historical Narrative Paragraphs from Word Document */}
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
                    {(Array.isArray(historyData?.content) ? historyData.content : []).map((paragraph, idx) => (
                      <p key={idx} className="text-justify text-slate-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Core Supporting Academic Departments */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-navy-950 text-base mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#d4a72c]" />
                      <span>Six Core Supporting Engineering Departments</span>
                    </h3>
                    <p className="text-xs text-slate-600 mb-4">
                      Academic curriculum and research are administered through six specialized departments covering foundational to advanced agricultural engineering technologies:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {(historyData?.coreDepartments || [
                        { code: "FMPE", name: "Farm Machinery and Power Engineering" },
                        { code: "PFE", name: "Processing and Food Engineering" },
                        { code: "IDE", name: "Irrigation and Drainage Engineering" },
                        { code: "SWCE", name: "Soil and Water Conservation Engineering" },
                        { code: "REE", name: "Renewable Energy Engineering" },
                        { code: "BEAS", name: "Basic Engineering and Applied Sciences" }
                      ]).map((dept, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                          <span className="w-12 h-9 rounded-lg bg-[#0b1a2e] text-[#f5c84c] text-xs font-mono font-extrabold flex items-center justify-center flex-shrink-0">
                            {dept.code}
                          </span>
                          <span className="text-xs font-bold text-navy-950 leading-tight">
                            {dept.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Campus Building Complex Breakdown */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-navy-950 text-base mb-3 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#d4a72c]" />
                      <span>Campus Building Complex & Built-up Infrastructure</span>
                    </h3>
                    <p className="text-xs text-slate-600 mb-4">
                      Detailed footprint distribution of academic, laboratory, residential, and field testing blocks across the 25-acre campus:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {(historyData?.buildingComplex || []).map((b, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-bold text-navy-950 text-xs sm:text-sm">{b.name}</span>
                              <span className="badge badge-navy text-[11px] font-mono font-bold flex-shrink-0">{b.area}</span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-normal mt-1">{b.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official Land Asset and Use Pattern Table */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <h3 className="font-bold text-navy-950 text-base flex items-center gap-2">
                        <Landmark className="w-4 h-4 text-[#d4a72c]" />
                        <span>Land Asset and Use Pattern (Official Documentation Table)</span>
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">Total Area: 9.51 ha (25.0 Acres)</span>
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#0b1a2e] text-white">
                          <tr>
                            <th className="py-3 px-3 sm:px-4 font-bold">Category / Particulars</th>
                            <th className="py-3 px-3 sm:px-4 font-bold text-center">Irrigated</th>
                            <th className="py-3 px-3 sm:px-4 font-bold text-center">Rainfed</th>
                            <th className="py-3 px-3 sm:px-4 font-bold text-center">Total (ha)</th>
                            <th className="py-3 px-3 sm:px-4 font-bold text-right">% to Total Area</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                          {(historyData?.landAssetPattern || []).map((row, idx) => {
                            const isSub = row.isSubtotal;
                            const isTot = row.isTotal;
                            return (
                              <tr
                                key={idx}
                                className={
                                  isTot
                                    ? "bg-amber-100/70 font-extrabold text-navy-950"
                                    : isSub
                                    ? "bg-slate-100 font-bold text-navy-900"
                                    : "hover:bg-slate-50"
                                }
                              >
                                <td className={`py-2.5 px-3 sm:px-4 ${isTot ? "text-navy-950 font-extrabold" : isSub ? "font-bold text-navy-900" : "text-slate-800"}`}>
                                  {row.category}
                                </td>
                                <td className="py-2.5 px-3 sm:px-4 text-center font-mono">{row.irrigated}</td>
                                <td className="py-2.5 px-3 sm:px-4 text-center font-mono">{row.rainfed}</td>
                                <td className="py-2.5 px-3 sm:px-4 text-center font-mono font-bold">{row.total}</td>
                                <td className="py-2.5 px-3 sm:px-4 text-right font-mono font-bold text-[#0b1a2e]">{row.pct}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Campus Layout Map Card with Lightbox */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-navy-950 text-base mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#d4a72c]" />
                      <span>Campus Layout & Spatial Master Plan</span>
                    </h3>
                    <p className="text-xs text-slate-600 mb-4">
                      Official structural master layout of Dr. NTR College of Agricultural Engineering, Bapatla campus on NH-216 (Karlapalem Road):
                    </p>

                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100 p-2 text-center"
                      onClick={() => setPreviewImage({
                        src: historyData.campusLayout?.image || "/images/about/campus_layout_map.png",
                        title: "Official Campus Layout Map",
                        caption: historyData.campusLayout?.caption || "Layout of Dr. N.T.R. College of Agricultural Engineering, Bapatla"
                      })}
                    >
                      <img
                        src={historyData.campusLayout?.image || "/images/about/campus_layout_map.png"}
                        alt="Campus Layout Map of Dr. NTR College of Agricultural Engineering, Bapatla"
                        className="w-full max-h-[460px] object-contain mx-auto rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-sm">
                        <ZoomIn className="w-5 h-5 text-[#f5c84c]" />
                        <span>Click to Enlarge Campus Map</span>
                      </div>
                      <div className="p-2 text-xs text-slate-600 font-semibold">
                        {historyData.campusLayout?.caption || "Layout of Dr. N.T.R. College of Agricultural Engineering, Bapatla (NH-216)"}
                      </div>
                    </div>
                  </div>

                  {/* Key Institutional Milestones Timeline */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-navy-950 text-base mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#d4a72c]" />
                      <span>Key Institutional Milestones (1983 – Present)</span>
                    </h3>
                    <div className="space-y-3">
                      {(historyData?.milestones || []).map((m, idx) => (
                        <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3.5 bg-slate-50 hover:bg-slate-100/80 transition-colors rounded-xl border border-slate-200/80">
                          <span className="badge badge-navy text-xs font-mono font-bold flex-shrink-0 py-1 px-2.5">
                            {m.year}
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                            {m.event}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                TAB 2: VISION AND MANDATE
            ═══════════════════════════════════════════════════════════════ */}
            {activeTab === 'vision-mandate' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-6">
                    {visionData.title || "Vision and Mandate"}
                  </h2>

                  {/* Official Vision Card */}
                  <div className="p-6 sm:p-8 bg-[#06101e] text-white rounded-2xl border border-[#153258] shadow-md relative overflow-hidden mb-8">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ecc75f] mb-3">
                      <Compass className="w-4 h-4" />
                      <span>Institutional Vision</span>
                    </div>
                    <blockquote className="font-quote text-base sm:text-lg italic text-slate-100 leading-relaxed pl-4 border-l-4 border-[#ecc75f]">
                      "{visionData.vision}"
                    </blockquote>
                  </div>

                  {/* Official Mandate Card */}
                  <div className="p-6 sm:p-8 bg-emerald-950 text-white rounded-2xl border border-emerald-800 shadow-md relative overflow-hidden mb-8">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                      <Target className="w-4 h-4" />
                      <span>Institutional Mandate</span>
                    </div>
                    <blockquote className="font-quote text-base sm:text-lg italic text-emerald-50 leading-relaxed pl-4 border-l-4 border-emerald-400">
                      "{visionData.mandate}"
                    </blockquote>
                  </div>

                  {/* Key Mandate Pillars Grid */}
                  <div>
                    <h3 className="font-bold text-navy-950 text-base mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a72c]" />
                      <span>Core Statutory Action Mandates</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(visionData?.mandates || []).map((m, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                TAB 3: ORGANIZATIONAL STRUCTURE
            ═══════════════════════════════════════════════════════════════ */}
            {activeTab === 'org-structure' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2">
                    {orgData?.title || "Organizational Structure"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    {orgData?.description || "Organization structure of the Dr. NTR College of Agricultural Engineering, Bapatla:"}
                  </p>
                </div>

                {/* Official Organizational Chart from Word Document */}
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-4 text-center shadow-xs"
                  onClick={() => setPreviewImage({
                    src: orgData.chartImage || "/images/about/organization_structure_chart.png",
                    title: "Institutional Organizational Chart",
                    caption: orgData.chartCaption || "Organization structure of the Dr. NTR College of Agricultural Engineering"
                  })}
                >
                  <img
                    src={orgData.chartImage || "/images/about/organization_structure_chart.png"}
                    alt="Organization structure of Dr. NTR College of Agricultural Engineering"
                    className="w-full max-h-[500px] object-contain mx-auto rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-sm">
                    <Maximize2 className="w-5 h-5 text-[#f5c84c]" />
                    <span>Click to View High-Resolution Chart</span>
                  </div>
                  <div className="p-2 text-xs text-slate-600 font-semibold">
                    {orgData.chartCaption || "Organization structure of the Dr. NTR College of Agricultural Engineering"}
                  </div>
                </div>

                {/* Structured Hierarchy Breakdown */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="font-bold text-navy-950 text-base mb-2">
                    Governance Hierarchy & Administrative Distribution
                  </h3>

                  {/* Apex Node */}
                  <div className="p-4 bg-[#06101e] text-white rounded-xl text-center">
                    <span className="badge badge-gold text-[10px] font-bold uppercase mb-1">Apex University Governance</span>
                    <h4 className="font-bold text-base text-white">Acharya N.G. Ranga Agricultural University (ANGRAU)</h4>
                    <p className="text-xs text-slate-300 mt-1">Hon'ble Vice-Chancellor & Board of Management</p>
                  </div>

                  {/* Faculty Dean Node */}
                  <div className="p-4 bg-slate-800 text-white rounded-xl text-center">
                    <span className="badge badge-navy text-[10px] font-bold uppercase mb-1">Faculty Governance</span>
                    <h4 className="font-bold text-base text-white">Dean of Agricultural Engineering & Technology</h4>
                    <p className="text-xs text-slate-300 mt-1">University Level Academic & Research Supervision</p>
                  </div>

                  {/* College Head Node */}
                  <div className="p-4 bg-[#0b1a2e] text-[#f5c84c] rounded-xl text-center border-2 border-[#d4a72c]">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">Executive Head of Institution</span>
                    <h4 className="font-extrabold text-lg text-[#f5c84c]">Associate Dean</h4>
                    <p className="text-xs text-slate-200 mt-1">Dr. NTR College of Agricultural Engineering, Bapatla</p>
                  </div>

                  {/* Parallel Operational Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Academic Section */}
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                      <span className="badge badge-navy text-[10px] font-bold uppercase">Academic Section</span>
                      <h4 className="font-bold text-navy-950 text-base">Educational, Departmental & Student Units</h4>

                      <div className="space-y-2 text-xs text-slate-700">
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">Educational Unit</strong>
                          <span>Undergraduate (UG) and Postgraduate (PG) Academic Coordinators</span>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">Six Academic Departments</strong>
                          <span>FMPE, PFE, IDE, SWCE, REE, and BEAS (Heads of Departments)</span>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">College Library</strong>
                          <span>Digital Library, Book Circulation & CeRA Electronic Repository</span>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">Student & Support Services</strong>
                          <span>Hostel Wardens, Student Affairs In-charge, Placement Cell, SC/ST Cell, NSS/NCC, Sports</span>
                        </div>
                      </div>
                    </div>

                    {/* Associate Dean's Office */}
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                      <span className="badge badge-gold text-[10px] font-bold uppercase">Executive Administration</span>
                      <h4 className="font-bold text-navy-950 text-base">Associate Dean's Office</h4>

                      <div className="space-y-2 text-xs text-slate-700">
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">Administrative Section</strong>
                          <span>Establishment, Personnel Records, Admissions, and Statutory University Correspondence</span>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">Financial Section</strong>
                          <span>Budgeting, Financial Accounting, Scholarship Disbursement, and Audit Compliance</span>
                        </div>
                        <div className="p-2.5 bg-white rounded border border-slate-200">
                          <strong className="text-navy-950 block">Documentation & Stores</strong>
                          <span>Equipment Procurement, Farm Workshop Assets, Infrastructure Maintenance & Archival</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                TAB 4: STATUS OF ACCREDITATION
            ═══════════════════════════════════════════════════════════════ */}
            {activeTab === 'accreditation' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-gold text-xs font-bold uppercase tracking-wider">
                      ICAR Cycle 2021–2026
                    </span>
                    <span className="badge badge-navy text-xs font-bold uppercase tracking-wider">
                      NAEAB Accredited
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-3">
                    {accredData?.title || "Status of Accreditation"}
                  </h2>

                  {/* Official ICAR Accreditation Statement from Word Doc */}
                  <div className="p-5 bg-amber-50/70 border-l-4 border-[#d4a72c] rounded-r-xl text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                    {accredData?.statusStatement || "Accredited by Indian Council of Agricultural Research (ICAR), New Delhi during 1999–2000 in the first phase itself based on ICAR’s Review Team Report and during the subsequent phases also. The latest accreditation of ICAR for this College is for 2021–2026."}
                  </div>
                </div>

                {/* The 5 Official Documents in Exact Prescribed Order */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 flex-wrap">
                    <div>
                      <h3 className="font-bold text-navy-950 text-base flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#d4a72c]" />
                        <span>Official Statutory Documents (Prescribed Order)</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Statutory gazette notifications and self-study reports available for official public inspection and download:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {(accredData?.documents || []).map((doc, idx) => (
                      <div
                        key={doc.id || idx}
                        className="p-5 bg-slate-50 hover:bg-slate-100/70 transition-all border border-slate-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 bg-[#0b1a2e] text-[#f5c84c] text-[11px] font-mono font-extrabold rounded-md shadow-2xs">
                              {doc.tag}
                            </span>
                            <span className="text-xs text-slate-500 font-mono">
                              Ref: {doc.refNo}
                            </span>
                            <span className="badge badge-navy text-[10px] font-bold">
                              {doc.date}
                            </span>
                            {doc.fileData && (
                              <span className="badge bg-emerald-100 text-emerald-800 border-emerald-300 text-[10px] font-bold">
                                Attached File ({doc.fileSize || 'PDF'})
                              </span>
                            )}
                            {doc.fileUrl && !doc.fileData && (
                              <span className="badge bg-sky-100 text-sky-800 border-sky-300 text-[10px] font-bold">
                                External Link
                              </span>
                            )}
                          </div>

                          <h4 className="font-heading font-extrabold text-navy-950 text-base sm:text-lg">
                            {doc.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {doc.summary}
                          </p>

                          <div className="text-[11px] text-slate-500 font-medium">
                            <span className="font-bold text-slate-700">Issuing Authority:</span> {doc.authority}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-shrink-0 pt-2 md:pt-0">
                          <button
                            type="button"
                            onClick={() => setSelectedDoc(doc)}
                            className="btn btn-navy text-xs font-bold px-3.5 py-2 flex items-center gap-1.5 shadow-2xs cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#f5c84c]" />
                            <span>View Document</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDownloadDocument(doc)}
                            className="btn btn-gold text-xs font-bold px-3.5 py-2 flex items-center gap-1.5 shadow-2xs cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5 text-navy-950" />
                            <span>{doc.fileData ? 'Download PDF' : 'Download Copy'}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Institutional Note */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-xs flex items-start gap-2.5">
                  <FileCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Official accreditation certifications, ICAR Peer Review Team evaluation dossiers, and NIRF annual institutional data records are maintained under the Office of the Associate Dean, Dr. NTRCAE Bapatla, affiliated with Acharya N.G. Ranga Agricultural University.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MODAL: HIGH-RESOLUTION IMAGE PREVIEW / LIGHTBOX
      ═══════════════════════════════════════════════════════════════ */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0b1a2e] text-white p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f5c84c]" />
                <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                  {previewImage.title || "Image Viewer"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-slate-900/5">
              <img
                src={previewImage.src}
                alt={previewImage.title || "Enlarged Preview"}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
              />
            </div>

            {previewImage.caption && (
              <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 text-center font-medium">
                {previewImage.caption}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          MODAL: OFFICIAL STATUTORY DOCUMENT VIEWER & PRINTER
      ═══════════════════════════════════════════════════════════════ */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-300 flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Control Bar */}
            <div className="bg-[#0b1a2e] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#f5c84c]" />
                <span className="font-heading font-bold text-xs sm:text-sm text-white">
                  Official Public Record Document Viewer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrintDocument}
                  className="px-3 py-1.5 bg-[#f5c84c] text-navy-950 rounded-lg text-xs font-bold hover:bg-[#ecc75f] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Institutional Document Body */}
            <div className="p-6 sm:p-10 space-y-6 text-slate-800 bg-white" id="printable-doc-content">
              {/* Official Document Header with Letterhead */}
              <div className="text-center border-b-2 border-slate-900 pb-5 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Government of Andhra Pradesh • ANGRAU
                </div>
                <h2 className="font-heading font-extrabold text-base sm:text-xl text-navy-950 uppercase tracking-tight">
                  Acharya N.G. Ranga Agricultural University
                </h2>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0b1a2e]">
                  Dr. NTR College of Agricultural Engineering
                </h3>
                <p className="text-xs text-slate-600">
                  NH-216, Karlapalem Road, Bapatla – 522 101, Bapatla District, Andhra Pradesh
                </p>
                <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-bold text-[#b88e22]">
                  <span>ICAR Accredited (Cycle 2021–2026)</span>
                  <span>•</span>
                  <span>Domain: caebpt.ac.in</span>
                </div>
              </div>

              {/* Document Classification Banner */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-[#0b1a2e] text-[#f5c84c] font-mono text-xs font-extrabold rounded">
                    {selectedDoc.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-600 font-mono">
                    REF: {selectedDoc.refNo}
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-base sm:text-lg text-navy-950">
                  {selectedDoc.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                  <div><strong className="text-navy-950">Issuing Apex Authority:</strong> {selectedDoc.authority}</div>
                  <div><strong className="text-navy-950">Accreditation Cycle:</strong> {selectedDoc.date}</div>
                </div>
              </div>

              {/* Official Summary Body */}
              <div className="space-y-3">
                <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Executive Summary & Statutory Declaration
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  {selectedDoc.summary}
                </p>
              </div>

              {/* Institutional Compliance Statements */}
              <div className="space-y-2 bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-xs text-slate-700">
                <h5 className="font-bold text-navy-950 text-xs">
                  Institutional Accreditations & Statutory Declarations:
                </h5>
                <ul className="space-y-1 list-disc pl-4">
                  <li>Formally declared under the provisions of the Acharya N.G. Ranga Agricultural University Act.</li>
                  <li>Academic syllabi mapped comprehensively to the ICAR V Deans' Committee national curriculum recommendations.</li>
                  <li>Continuous quality review maintained through the Internal Quality Assurance Cell (IQAC).</li>
                  <li>Official accreditation conferred by the National Agricultural Education Accreditation Board (NAEAB), ICAR, New Delhi for the active cycle 2021–2026.</li>
                </ul>
              </div>

              {/* Sign-off & Verification Seal */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4 text-xs">
                <div>
                  <div className="font-bold text-navy-950">Office of the Associate Dean</div>
                  <div className="text-slate-500">Dr. NTR College of Agricultural Engineering, Bapatla</div>
                  <div className="text-[11px] text-slate-400">Acharya N.G. Ranga Agricultural University</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                  <div className="font-mono font-bold text-[11px] text-emerald-700 flex items-center gap-1 justify-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>DIGITALLY VERIFIED</span>
                  </div>
                  <div className="text-[10px] text-slate-500">ICAR / ANGRAU Record Repository</div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                File: {selectedDoc.docName}
              </span>
              <div className="flex items-center gap-2 ml-auto flex-wrap">
                {selectedDoc.fileData ? (
                  <button
                    type="button"
                    onClick={() => handleDownloadDocument(selectedDoc)}
                    className="btn btn-gold text-xs font-bold px-4 py-2 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-navy-950" />
                    <span>Download Attached File ({selectedDoc.fileSize || 'PDF'})</span>
                  </button>
                ) : selectedDoc.fileUrl ? (
                  <a
                    href={selectedDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold text-xs font-bold px-4 py-2 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-navy-950" />
                    <span>Open Document Link</span>
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={() => handleDownloadDocText(selectedDoc)}
                  className="btn btn-navy text-xs font-bold px-4 py-2 flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#f5c84c]" />
                  <span>Download Text Record</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
