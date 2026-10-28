import React, { useState } from 'react';
import { BookOpen, Clock, Users, ArrowRight, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';
import { programsData } from '../data/academicsData';

export default function Academics({ onSelectProgram, onOpenEnquiry }) {
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filterTabs = ['All', 'Undergraduate', 'Postgraduate', 'Doctoral'];

  const filteredPrograms = selectedLevel === 'All'
    ? programsData
    : programsData.filter((p) => p.level === selectedLevel);

  return (
    <section id="academics" className="section-padding bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap className="w-3.5 h-3.5" />
            Curriculum & Degrees
          </span>
          <h2 className="section-title">Academic Programs</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Comprehensive undergraduate, postgraduate, and doctoral degree programs designed to
            equip engineers with scientific mastery and technological problem-solving capability.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-wrapper">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedLevel(tab)}
              className={`filter-tab ${selectedLevel === tab ? 'active' : ''}`}
            >
              {tab === 'All' ? 'All Degree Programs' : tab}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="academic-card group hover:shadow-xl transition-all flex flex-col justify-between bg-white border border-slate-200"
            >
              <div>
                {/* Card Top Banner with Degree Badge */}
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-navy font-bold text-xs">
                      {program.degree}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {program.level}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    Sample Data
                  </span>
                </div>

                {/* Course Name & Description */}
                <div className="p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-950 mb-2.5 group-hover:text-navy-700 transition-colors leading-snug">
                    {program.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {program.overview}
                  </p>

                  {/* Key Metadata Chips */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gold-500" />
                        Duration:
                      </span>
                      <span className="font-semibold text-navy-900">{program.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gold-500" />
                        Intake:
                      </span>
                      <span className="font-semibold text-navy-900">{program.intake}</span>
                    </div>
                  </div>

                  {/* Quick Highlights Preview */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {program.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="truncate">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectProgram(program)}
                  className="btn btn-outline btn-sm text-xs flex-1 justify-center"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Syllabus & Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry(program)}
                  className="btn btn-gold btn-sm text-xs px-3"
                  title="Enquire about this course"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 rounded-xl bg-gold-50 border border-gold-200 text-center max-w-2xl mx-auto text-xs text-slate-700">
          <strong className="text-gold-700 font-bold block mb-1">Demo Academic Data Notice</strong>
          All eligibility criteria, semester course breakdowns, and intake seats shown above represent customizable sample data to demonstrate layout functionality. Official academic regulations can be loaded dynamically.
        </div>
      </div>
    </section>
  );
}

