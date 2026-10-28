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
  FileText
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
            {/* SUBSECTION 1: VICE-CHANCELLOR */}
            {activeTab === 'vc' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="badge badge-navy text-xs font-bold uppercase mb-1">Apex University Authority</span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {administration?.viceChancellor?.name || officialStructureData.administration.viceChancellor.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#854d0e] font-extrabold mt-0.5">
                      {administration?.viceChancellor?.designation || officialStructureData.administration.viceChancellor.designation}
                    </p>
                  </div>
                  <Shield className="w-10 h-10 text-[#d4a72c] opacity-70" />
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>
                      <strong>University:</strong> {administration?.viceChancellor?.university || officialStructureData.administration.viceChancellor.university}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      <span>{administration?.viceChancellor?.officeLocation || officialStructureData.administration.viceChancellor.officeLocation}</span>
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 italic border-l-4 border-[#d4a72c]">
                    "{administration?.viceChancellor?.message || officialStructureData.administration.viceChancellor.message}"
                  </div>
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

                <div className="space-y-4">
                  {(administration?.deansOfFaculty?.facultyDeans || officialStructureData.administration.deansOfFaculty.facultyDeans || []).map((dean, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-navy-950 text-base">{dean.name}</h4>
                      <p className="text-xs font-bold text-[#854d0e] mt-0.5">{dean.designation}</p>
                      <p className="text-xs text-slate-700 mt-2 leading-relaxed">{dean.responsibilities}</p>
                      <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#d4a72c]" />
                        <span>{dean.email}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBSECTION 3: ASSOCIATE DEAN */}
            {activeTab === 'associate-dean' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="badge badge-gold text-xs font-bold uppercase mb-1">Collegiate Executive Head</span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {administration?.associateDean?.name || officialStructureData.administration.associateDean.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#854d0e] font-extrabold mt-0.5">
                      {administration?.associateDean?.designation || officialStructureData.administration.associateDean.designation}
                    </p>
                  </div>
                  <Building className="w-10 h-10 text-[#0b1a2e] opacity-70" />
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    {administration?.associateDean?.biography || officialStructureData.administration.associateDean.biography}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#d4a72c] flex-shrink-0" />
                      <span>{administration?.associateDean?.office || officialStructureData.administration.associateDean.office}</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#d4a72c] flex-shrink-0" />
                      <span>{administration?.associateDean?.phone || officialStructureData.administration.associateDean.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUBSECTION 4: SUPPORTING STAFF */}
            {activeTab === 'supporting-staff' && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950 mb-2">
                    {administration?.supportingStaff?.title || officialStructureData.administration.supportingStaff.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    {administration?.supportingStaff?.description || officialStructureData.administration.supportingStaff.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(administration?.supportingStaff?.staffList || officialStructureData.administration.supportingStaff.staffList || []).map((staff, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                      <div>
                        <span className="badge badge-navy text-[10px] font-bold mb-1.5">{staff.role}</span>
                        <h4 className="font-bold text-navy-950 text-base">{staff.name}</h4>
                        <p className="text-xs font-bold text-[#854d0e] mt-0.5">{staff.designation}</p>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">{staff.duties}</p>
                      </div>
                      <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                        {staff.contact}
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

