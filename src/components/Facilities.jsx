import React, { useState } from 'react';
import { Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';

export default function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering Labs', 'Academic Infrastructure', 'Processing & R&D', 'Student Amenities'];

  const filteredFacilities = selectedCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter((f) => f.category === selectedCategory);

  return (
    <section id="facilities" className="section-padding bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Building2 className="w-3.5 h-3.5" />
            Infrastructure & Resources
          </span>
          <h2 className="section-title">Campus & Laboratory Facilities</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Providing students and researchers with cutting-edge testing rigs, computerized drafting
            suites, pilot food processing facilities, and enriching residential amenities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-tabs-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="academic-card group overflow-hidden border border-slate-200 hover:border-gold-400/80 transition-all bg-white flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Category Badge */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-navy bg-navy-950/80 text-white backdrop-blur-sm border-none text-[11px]">
                      {facility.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy-950 mb-2 leading-tight group-hover:text-navy-700 transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  {/* Bulleted Equipment / Features */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights & Capabilities
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {facility.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>CAE Bapatla Campus Infrastructure</span>
                <span className="text-gold-600 font-semibold">Verified Spec</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Facility Notice */}
        <div className="text-center text-xs text-slate-500">
          Photographs and equipment inventories shown above represent representative educational assets and can be supplemented with actual campus photographs.
        </div>
      </div>
    </section>
  );
}

