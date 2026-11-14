import React from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, GraduationCap, CheckCircle2, Briefcase, FileText, ArrowRight, FileCheck } from 'lucide-react';

export default function ProgramModal({ program, onClose }) {
  if (!program) return null;

  const highlightsList = Array.isArray(program.highlights)
    ? program.highlights
    : typeof program.highlights === 'string' && program.highlights.trim()
    ? [program.highlights]
    : [];

  const curriculumList = Array.isArray(program.curriculumSummary)
    ? program.curriculumSummary
    : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="program-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-navy-950 text-white p-6 relative flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-navy-850 hover:bg-navy-700 p-1.5 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold-400/20 text-gold-300 text-xs font-bold uppercase mb-2 border border-gold-400/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{program.level || 'Academic'} Program</span>
          </div>

          <h3 id="program-modal-title" className="font-heading text-lg font-bold text-white mb-1">
            {program.name}
          </h3>

          <p className="text-slate-300 text-sm max-w-xl">
            {program.overview || program.highlights}
          </p>

          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-navy-800 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>Duration: <strong>{program.duration}</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto modal-body-scroll">
          {/* Eligibility Alert */}
          {program.eligibility && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-1 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-gold-500" />
                <span>Eligibility Criteria & Educational Requirements</span>
              </h4>
              <p className="text-sm text-slate-700">
                {program.eligibility}
              </p>
            </div>
          )}

          {/* Statutory Admission Channel */}
          {program.admissionProcess && (
            <div className="bg-[#fdf5df]/70 border border-[#fae4a4] rounded-xl p-4 space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#854d0e] flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#d4a72c]" />
                <span>Admission Process & Governing Policy</span>
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {program.admissionProcess}
              </p>
            </div>
          )}

          {/* Program Highlights */}
          {highlightsList.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-3">
                Key Academic Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlightsList.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-800 leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curriculum Structure */}
          {curriculumList.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-3">
                Curriculum Outline (Modular Overview)
              </h4>
              <div className="space-y-2.5">
                {curriculumList.map((c, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="badge badge-navy text-[11px] mb-1 font-bold">
                      {c.sem}
                    </span>
                    <p className="text-xs text-slate-700 mt-1">
                      {c.subjects}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Career Opportunities */}
          {program.careerOpportunities && (
            <div className="bg-navy-50/70 border border-navy-100 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-1 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-navy-600" />
                <span>Career Pathways & Placement Scope</span>
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {program.careerOpportunities}
              </p>
            </div>
          )}

          {/* Academic Regulations Note */}
          <p className="text-[11px] text-slate-500 italic text-center">
            * Curricula, syllabi, and credit requirements are governed by the Academic Regulations of Acharya N.G. Ranga Agricultural University (ANGRAU).
          </p>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline btn-sm justify-center order-2 sm:order-1"
          >
            Close
          </button>

          <Link
            to="/admissions"
            onClick={onClose}
            className="btn btn-gold btn-sm justify-center order-1 sm:order-2 inline-flex items-center gap-1.5"
            style={{ textDecoration: 'none' }}
          >
            <span>Admissions Criteria & Guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

