import React from 'react';
import { Layers, Tractor, Droplets, UtensilsCrossed, SunMedium, Cpu, CheckCircle2, User, ArrowRight } from 'lucide-react';
import { departmentsData } from '../data/academicsData';

const iconMap = {
  Tractor: Tractor,
  Droplets: Droplets,
  UtensilsCrossed: UtensilsCrossed,
  SunMedium: SunMedium,
  Cpu: Cpu,
};

export default function Departments({ onOpenEnquiry }) {
  return (
    <section id="departments" className="section-padding bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Layers className="w-3.5 h-3.5" />
            Specialized Engineering Wings
          </span>
          <h2 className="section-title">Academic Departments</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Five core engineering and allied departments providing foundational depth, specialized research facilities, and applied field learning.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.map((dept) => {
            const IconComponent = iconMap[dept.icon] || Layers;
            return (
              <div
                key={dept.id}
                className="academic-card group p-6 border border-slate-200 hover:border-gold-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Department Icon & Short Code */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center border border-navy-100 group-hover:bg-navy-900 group-hover:text-gold-300 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="badge badge-navy text-xs font-bold">
                      {dept.shortCode}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl font-bold text-navy-950 mb-2 leading-tight group-hover:text-navy-700 transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {dept.description}
                  </p>

                  {/* HoD & Lab Facilities */}
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-4 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <User className="w-3.5 h-3.5 text-gold-500" />
                      <span>Head of Dept: <strong className="text-navy-950">{dept.headOfDept}</strong></span>
                    </div>
                    <div className="text-slate-500 pl-5">
                      {dept.stats}
                    </div>
                  </div>

                  {/* Key Focus Areas */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Research Thrust Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {dept.keyFocusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 italic">Demo Configuration</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry({ name: `${dept.name} Courses` })}
                    className="text-xs font-bold text-navy-800 hover:text-gold-600 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Enquire Dept</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

