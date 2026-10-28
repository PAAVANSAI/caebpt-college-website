import React, { useState } from 'react';
import { Target, Compass, BookOpenCheck, ShieldCheck, Quote, History, Award, CheckCircle2 } from 'lucide-react';
import { collegeInfo } from '../data/collegeInfo';

export default function About() {
  const [activeTab, setActiveTab] = useState('vision-mission');

  return (
    <section id="about" className="section-padding bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Compass className="w-3.5 h-3.5" />
            Institutional Profile
          </span>
          <h2 className="section-title">About Our Institution</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Dedicated to advancing agricultural engineering through rigorous academics, hands-on
            field research, and cutting-edge technological development since 1983.
          </p>
        </div>

        {/* Top 2-Column Overview & Principal Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Column: College Overview & Heritage */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-gold-600 font-bold uppercase tracking-wider text-xs mb-3">
                <History className="w-4 h-4" />
                <span>Foundation & Heritage</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-950 mb-4">
                Pioneering Agro-Technological Education in Andhra Pradesh
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4 text-base">
                The <strong className="text-navy-900">{collegeInfo.fullName}, Bapatla</strong> was established in 1983 under the auspices of Acharya N.G. Ranga Agricultural University (ANGRAU) to cultivate technical leadership in farm power, irrigation management, and agro-processing systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                Over four decades, the campus has grown into a bustling center for applied agronomic engineering, offering modern laboratories, extensive trial cultivation acreage, and an ecosystem that connects students with tractor manufacturers, irrigation technology leaders, and rural welfare initiatives.
              </p>

              {/* Core Pillars Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">ICAR Recognized Curriculum Standards</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Expansive Machinery Field Station</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Advanced Post-Harvest Pilot Processing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Strong Alumni in Industry & Academia</span>
                </div>
              </div>
            </div>

            {/* Vision & Mission Tabs Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex border-b border-slate-200 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setActiveTab('vision-mission')}
                  className={`flex-1 py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'vision-mission'
                      ? 'bg-white text-navy-900 border-t-2 border-gold-400'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <Target className="w-4 h-4 text-gold-500" />
                  <span>Vision & Mission</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('values')}
                  className={`flex-1 py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'values'
                      ? 'bg-white text-navy-900 border-t-2 border-gold-400'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                  <span>Institutional Values</span>
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'vision-mission' ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-1 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5" />
                        Our Vision
                      </h4>
                      <p className="text-slate-800 font-medium italic border-l-2 border-gold-400 pl-3 py-1">
                        "{collegeInfo.vision}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy-700 mb-2 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5" />
                        Our Mission Statements
                      </h4>
                      <ul className="space-y-2">
                        {collegeInfo.mission.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <h5 className="font-bold text-navy-950 text-sm mb-1">Academic Rigor</h5>
                      <p className="text-xs text-slate-600">Maintaining high academic expectations, objective evaluation, and experiential engineering learning.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <h5 className="font-bold text-navy-950 text-sm mb-1">Sustainable Stewardship</h5>
                      <p className="text-xs text-slate-600">Prioritizing natural resource conservation, groundwater recharge, and renewable bio-energy systems.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <h5 className="font-bold text-navy-950 text-sm mb-1">Farmer Welfare Focus</h5>
                      <p className="text-xs text-slate-600">Designing affordable, ergonomic machines tailored for smallholder farming communities.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <h5 className="font-bold text-navy-950 text-sm mb-1">Ethical Leadership</h5>
                      <p className="text-xs text-slate-600">Instilling honesty, safety engineering principles, and professional responsibility in every graduate.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Associate Dean / Principal's Message */}
          <div className="lg:col-span-5">
            <div className="academic-card border-navy-800/10 shadow-lg relative bg-white">
              {/* Header Badge */}
              <div className="bg-navy-950 text-white p-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-300 block">
                    Leadership Message
                  </span>
                  <span className="font-heading text-lg font-bold">
                    From the Principal's Desk
                  </span>
                </div>
                <Quote className="w-8 h-8 text-gold-400 opacity-60" />
              </div>

              {/* Photo & Profile Details */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                  <div className="relative">
                    <img
                      src={collegeInfo.principalMessage.photo}
                      alt="Principal Photo Placeholder"
                      className="w-18 h-18 rounded-full object-cover border-2 border-gold-400 shadow-sm"
                      style={{ width: '72px', height: '72px' }}
                    />
                    <span className="absolute bottom-0 right-0 bg-gold-400 w-4 h-4 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-base leading-tight">
                      {collegeInfo.principalMessage.name}
                    </h4>
                    <p className="text-xs text-gold-600 font-semibold mt-0.5">
                      {collegeInfo.principalMessage.designation}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {collegeInfo.principalMessage.qualification}
                    </p>
                  </div>
                </div>

                {/* Message Body */}
                <div className="text-slate-700 text-sm leading-relaxed space-y-3 font-normal">
                  <p>
                    "{collegeInfo.principalMessage.messageText}"
                  </p>
                </div>

                {/* Signature Placeholder */}
                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-heading italic text-navy-900 font-bold block text-sm">
                      K. S. Rao
                    </span>
                    <span className="text-[11px] text-slate-500">Associate Dean & Professor</span>
                  </div>
                  <div className="badge badge-navy text-[10px]">
                    CAE Bapatla
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

