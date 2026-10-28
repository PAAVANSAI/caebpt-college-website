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
  FileCheck
} from 'lucide-react';

export default function AboutUsPage() {
  const { officialStructure } = useWebsite();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'history';
  const [activeTab, setActiveTab] = useState(initialTab);

  const aboutUs = officialStructure?.aboutUs || officialStructureData.aboutUs;

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
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
        subtitle="Four decades of distinction in agricultural engineering education, research in farm mechanization, and rural transformation under ANGRAU."
        tag="Institutional Profile"
        breadcrumb={[{ name: "About Us" }]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          {/* Submenu Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
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
            {/* SUBSECTION 1: HISTORICAL BACKGROUND */}
            {activeTab === 'history' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <span className="badge badge-gold text-xs font-bold uppercase mb-2">Estd. {aboutUs.history.established}</span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-4">
                    {aboutUs.history.title}
                  </h2>
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {(Array.isArray(aboutUs?.history?.content)
                      ? aboutUs.history.content
                      : [aboutUs?.history?.content || '']
                    ).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-bold text-navy-950 text-base mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#d4a72c]" />
                    <span>Key Institutional Milestones</span>
                  </h3>
                  <div className="space-y-3">
                    {(aboutUs?.history?.milestones || []).map((m, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="badge badge-navy text-xs font-mono font-bold flex-shrink-0">
                          {m.year}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium">
                          {m.event}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUBSECTION 2: VISION AND MANDATE */}
            {activeTab === 'vision-mandate' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-6">
                    {aboutUs.visionMandate.title}
                  </h2>

                  <div className="p-6 bg-[#06101e] text-white rounded-2xl border border-[#153258] mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#ecc75f] mb-2 flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      <span>Institutional Vision</span>
                    </h3>
                    <p className="font-quote text-base sm:text-lg italic text-slate-100 leading-relaxed">
                      "{aboutUs.visionMandate.vision}"
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy-950 text-base mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#d4a72c]" />
                      <span>Statutory Institutional Mandates</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(aboutUs?.visionMandate?.mandates || []).map((m, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUBSECTION 3: ORGANIZATIONAL STRUCTURE */}
            {activeTab === 'org-structure' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2">
                    {aboutUs?.orgStructure?.title || "Organizational Structure"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    {aboutUs?.orgStructure?.description || ""}
                  </p>
                </div>

                <div className="space-y-4">
                  {(aboutUs?.orgStructure?.hierarchy || []).map((item, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="badge badge-navy text-[10px] font-bold uppercase mb-1">{item.level}</span>
                      {item.role && (
                        <h4 className="font-bold text-navy-950 text-base mt-1">
                          {item.role}: <span className="font-normal text-slate-700">{item.name}</span>
                        </h4>
                      )}

                      {item.heads && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {(item.heads || []).map((h, hIdx) => (
                            <div key={hIdx} className="text-xs font-semibold text-slate-700 p-2 bg-white rounded border border-slate-100">
                              • {h}
                            </div>
                          ))}
                        </div>
                      )}

                      {item.officers && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {(item.officers || []).map((o, oIdx) => (
                            <div key={oIdx} className="text-xs font-semibold text-slate-700 p-2 bg-white rounded border border-slate-100">
                              • {o}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBSECTION 4: STATUS OF ACCREDITATION */}
            {activeTab === 'accreditation' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2">
                    {aboutUs?.accreditation?.title || "Status of Accreditation"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-medium border-l-4 border-[#d4a72c] pl-4 py-1">
                    {aboutUs?.accreditation?.statusStatement || ""}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#0b1a2e] text-white">
                      <tr>
                        <th className="py-3 px-4 font-bold">Accreditation Dimension</th>
                        <th className="py-3 px-4 font-bold">Institutional Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {(aboutUs?.accreditation?.details || []).map((d, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-navy-950">{d.label}</td>
                          <td className="py-3 px-4 font-medium">{d.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>
                    Accreditation and statutory records are verified per university notifications. Official ICAR Peer Review certificates and NIRF submissions are archived under university administration.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

