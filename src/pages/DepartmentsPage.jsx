import React from 'react';
import PageBanner from '../components/PageBanner';
import Departments from '../components/Departments';
import { Layers, Tractor, Droplets, UtensilsCrossed, SunMedium, Cpu, CheckCircle2 } from 'lucide-react';

export default function DepartmentsPage({ onOpenEnquiry }) {
  return (
    <div>
      <PageBanner
        title="Academic Departments & Research Wings"
        subtitle="Explore our five specialized engineering and scientific divisions driving breakthroughs in farm automation, micro-irrigation, and post-harvest technology."
        tag="Engineering Divisions"
        breadcrumb={[{ name: "Departments" }]}
      />

      <Departments onOpenEnquiry={onOpenEnquiry} />

      {/* Department Research Infrastructure */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Layers className="w-3.5 h-3.5" />
              Specialized Infrastructure
            </span>
            <h2 className="section-title">Interdisciplinary Research Capabilities</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Our departments collaborate across mechanization, computational fluid dynamics, geospatial modeling, and sustainable agro-processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="font-bold text-navy-950 text-base mb-2">Tractor Power Testing Track</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Full-scale field tracks for evaluating drawbar pull, fuel economy, tire slippage, and implement draft resistance under regional clay and sandy soil conditions.
              </p>
              <span className="badge badge-navy text-[10px]">FMPE Division</span>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="font-bold text-navy-950 text-base mb-2">Watershed Modeling Flume</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Computer-controlled tilting hydraulic flumes simulating sediment transport, check-dam siltation, and automated drip emission uniformity.
              </p>
              <span className="badge badge-navy text-[10px]">SWCE Division</span>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="font-bold text-navy-950 text-base mb-2">Pilot Agro-Food Processing Plant</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Dehydration, extrusion, vacuum packaging, and cold storage testing lines for minimizing post-harvest grain, pulse, and horticultural losses.
              </p>
              <span className="badge badge-navy text-[10px]">APFE Division</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

