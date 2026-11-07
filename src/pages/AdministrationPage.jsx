import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  Users,
  Shield,
  GraduationCap,
  Building,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  CheckCircle2,
  FileText,
  Download
} from 'lucide-react';

export default function AdministrationPage() {
  const { officialStructure } = useWebsite();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'vc';
  const [activeTab, setActiveTab] = useState(initialTab);

  const administration = officialStructure?.administration || officialStructureData.administration;

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
  };

  const tabs = [
    { key: 'vc', label: 'Vice-Chancellor', icon: Shield },
    { key: 'deans', label: 'Deans of Faculty', icon: GraduationCap },
    { key: 'associate-dean', label: 'Associate Dean', icon: Building },
    { key: 'supporting-staff', label: 'Supporting Staff', icon: Users },
  ];

  return (
    <div>
      <PageBanner
        title="College Administration"
        subtitle="Executive governance, university leadership, faculty deans, and collegiate officers in-charge of academic and student administration."
        tag="Administrative Governance"
        breadcrumb={[{ name: "Administration" }]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          {/* Submenu Tabs (Mobile touch scrollable) with Official Document Download */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sm:mb-10">
            <div className="filter-tabs-wrapper mb-0">
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
            <a
              href="/documents/administration/College_Administrative_Governance_and_Staff.docx"
              download="College_Administrative_Governance_and_Staff.docx"
              className="btn btn-navy text-xs font-bold py-2.5 px-3.5 flex items-center gap-2 whitespace-nowrap shadow-xs self-start md:self-auto"
              style={{ textDecoration: 'none' }}
              title="Download College Administrative Governance & Staff Directory (.docx)"
            >
              <Download className="w-3.5 h-3.5 text-[#ecc75f]" />
              <span>Download Staff Directory (.docx)</span>
            </a>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* SUBSECTION 1: VICE-CHANCELLOR */}
            {activeTab === 'vc' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200">
                  <div className="relative flex-shrink-0">
                    <img
                      src={administration?.viceChancellor?.photo || "/images/administration/dr_pv_satyanarayana.webp"}
                      alt={administration?.viceChancellor?.name}
                      className="w-36 h-44 sm:w-44 sm:h-52 object-cover rounded-2xl shadow-lg border-2 border-[#d4a72c]"
                    />
                    <span className="badge badge-navy text-[10px] font-bold absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-sm">
                      Apex Leadership
                    </span>
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <span className="badge badge-gold text-xs font-bold uppercase">Apex University Authority</span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {administration?.viceChancellor?.name || officialStructureData.administration.viceChancellor.name}
                    </h2>
                    <p className="text-sm sm:text-base text-[#854d0e] font-extrabold">
                      {administration?.viceChancellor?.designation || officialStructureData.administration.viceChancellor.designation}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {administration?.viceChancellor?.university || officialStructureData.administration.viceChancellor.university}
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
                      {administration?.viceChancellor?.email && (
                        <a
                          href={`mailto:${administration.viceChancellor.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#0b1a2e] hover:text-white rounded-lg text-xs font-semibold text-slate-700 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>{administration.viceChancellor.email}</span>
                        </a>
                      )}
                      {administration?.viceChancellor?.officeLocation && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>{administration.viceChancellor.officeLocation}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950">
                    <Shield className="w-4 h-4 text-[#d4a72c]" />
                    <span>Vice-Chancellor's Governance Mandate</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-4 border-[#d4a72c] pl-4">
                    "{administration?.viceChancellor?.message || officialStructureData.administration.viceChancellor.message}"
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  ANGRAU exercises academic governance, degree certification, and university regulations across the College of Agricultural Engineering, Bapatla.
                </div>
              </div>
            )}

            {/* SUBSECTION 2: DEANS OF FACULTY */}
            {activeTab === 'deans' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2">
                    {administration?.deansOfFaculty?.title || officialStructureData.administration.deansOfFaculty.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    Faculty deans coordinating engineering, agronomic, and post-graduate studies across ANGRAU colleges:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {(administration?.deansOfFaculty?.facultyDeans || officialStructureData.administration.deansOfFaculty.facultyDeans || []).map((dean, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-4 items-center sm:items-start hover:shadow-md transition-shadow">
                      {dean.photo ? (
                        <img
                          src={dean.photo}
                          alt={dean.name}
                          className="w-24 h-28 object-cover rounded-xl shadow-sm border border-slate-200 flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-24 h-28 bg-[#0b1a2e]/5 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 text-slate-400">
                          <GraduationCap className="w-8 h-8 text-[#d4a72c]" />
                        </div>
                      )}
                      <div className="flex-1 text-center sm:text-left space-y-1.5">
                        <h4 className="font-bold text-navy-950 text-base">{dean.name}</h4>
                        <p className="text-xs font-extrabold text-[#854d0e]">{dean.designation}</p>
                        {dean.responsibilities && (
                          <p className="text-xs text-slate-600 leading-relaxed">{dean.responsibilities}</p>
                        )}
                        <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          {dean.phone && (
                            <a
                              href={`tel:${dean.phone}`}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 hover:text-navy-950"
                            >
                              <Phone className="w-3 h-3 text-[#d4a72c]" />
                              <span>{dean.phone}</span>
                            </a>
                          )}
                          {dean.email && (
                            <a
                              href={`mailto:${dean.email}`}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 hover:text-navy-950"
                            >
                              <Mail className="w-3 h-3 text-[#d4a72c]" />
                              <span>{dean.email}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBSECTION 3: ASSOCIATE DEAN */}
            {activeTab === 'associate-dean' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200">
                  <div className="relative flex-shrink-0">
                    <img
                      src={administration?.associateDean?.photo || "/images/administration/dr_mogal_sardar_baig.webp"}
                      alt={administration?.associateDean?.name}
                      className="w-36 h-44 sm:w-44 sm:h-52 object-cover rounded-2xl shadow-lg border-2 border-[#d4a72c]"
                    />
                    <span className="badge badge-gold text-[10px] font-bold absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-sm">
                      Collegiate Head
                    </span>
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <span className="badge badge-gold text-xs font-bold uppercase">Collegiate Executive Head</span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {administration?.associateDean?.name || officialStructureData.administration.associateDean.name}
                    </h2>
                    <p className="text-sm sm:text-base text-[#854d0e] font-extrabold">
                      {administration?.associateDean?.designation || officialStructureData.administration.associateDean.designation}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Dr. NTR College of Agricultural Engineering, Bapatla
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
                      {administration?.associateDean?.phone && (
                        <a
                          href={`tel:${administration.associateDean.phone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#0b1a2e] hover:text-white rounded-lg text-xs font-semibold text-slate-700 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>{administration.associateDean.phone}</span>
                        </a>
                      )}
                      {administration?.associateDean?.email && (
                        <a
                          href={`mailto:${administration.associateDean.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#0b1a2e] hover:text-white rounded-lg text-xs font-semibold text-slate-700 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>{administration.associateDean.email}</span>
                        </a>
                      )}
                      {administration?.associateDean?.office && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-[#d4a72c]" />
                          <span>{administration.associateDean.office}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#d4a72c]" />
                    <span>Executive Biography & Responsibilities</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {administration?.associateDean?.biography || officialStructureData.administration.associateDean.biography}
                  </p>
                </div>
              </div>
            )}

            {/* SUBSECTION 4: SUPPORTING STAFF */}
            {activeTab === 'supporting-staff' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="badge badge-navy text-xs font-bold uppercase mb-1">Collegiate Officers In-Charge</span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2">
                    {administration?.supportingStaff?.title || officialStructureData.administration.supportingStaff.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {administration?.supportingStaff?.description || officialStructureData.administration.supportingStaff.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {(administration?.supportingStaff?.staffList || officialStructureData.administration.supportingStaff.staffList || []).map((staff, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg hover:border-[#d4a72c]/60 transition-all duration-200 group"
                    >
                      <div>
                        <div className="flex items-start gap-3.5 mb-3">
                          <img
                            src={staff.photo || "/images/avatars/placeholder.webp"}
                            alt={staff.name}
                            className="w-16 h-20 sm:w-18 sm:h-22 object-cover rounded-xl border border-slate-200 shadow-sm flex-shrink-0 group-hover:scale-102 transition-transform bg-slate-200"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="badge badge-gold text-[9px] font-bold mb-1 block truncate">
                              {staff.role}
                            </span>
                            <h4 className="font-bold text-navy-950 text-xs sm:text-sm leading-snug">
                              {staff.name}
                            </h4>
                            <p className="text-[10.5px] font-semibold text-[#854d0e] mt-0.5 leading-tight">
                              {staff.designation}
                            </p>
                          </div>
                        </div>

                        {staff.duties && (
                          <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                            {staff.duties}
                          </p>
                        )}
                      </div>

                      <div className="pt-2.5 border-t border-slate-200/80 space-y-1 text-[11px]">
                        {staff.phone && (
                          <a
                            href={`tel:${staff.phone}`}
                            className="flex items-center gap-1.5 text-slate-700 hover:text-navy-950 font-medium"
                          >
                            <Phone className="w-3 h-3 text-[#d4a72c] flex-shrink-0" />
                            <span className="truncate">{staff.phone}</span>
                          </a>
                        )}
                        {staff.email && (
                          <a
                            href={`mailto:${staff.email}`}
                            className="flex items-center gap-1.5 text-slate-700 hover:text-navy-950 font-medium"
                          >
                            <Mail className="w-3 h-3 text-[#d4a72c]" />
                            <span className="truncate">{staff.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

