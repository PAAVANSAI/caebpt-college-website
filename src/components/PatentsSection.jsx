import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  Calendar,
  Building2,
  Users,
  Eye,
  X,
  Maximize2,
  FileText,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { patentsData } from '../data/patentsData';

export default function PatentsSection() {
  const [selectedPatent, setSelectedPatent] = useState(null);

  return (
    <div className="space-y-8">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#0b1a2e] via-[#162a45] to-[#0b1a2e] text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-700 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-full bg-radial from-[#d4a72c]/15 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <span className="badge badge-gold text-xs font-bold uppercase tracking-wider mb-2.5 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Intellectual Property & Innovation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Patents & Registered Industrial Designs
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Statutory patents and industrial design registrations granted to the faculty, research schemes, and institutional departments of Dr. NTR College of Agricultural Engineering, Bapatla (ANGRAU) by The Patent Office, Government of India.
          </p>
        </div>
      </div>

      {/* PATENTS CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patentsData.map((patent) => (
          <div
            key={patent.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              {/* Badge & Year Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#0b1a2e] text-[#f5c84c] text-[11px] font-black uppercase tracking-wider">
                  {patent.patentNo ? `Patent No. ${patent.patentNo}` : `Design No. ${patent.designNo}`}
                </span>
                <span className="badge badge-gold text-xs font-bold">
                  Year {patent.year}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-heading font-extrabold text-navy-950 text-lg leading-snug">
                  {patent.title}
                </h3>
                {patent.hindiTitle && (
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {patent.hindiTitle}
                  </p>
                )}
              </div>

              {/* Certificate Image Thumbnail with View Button */}
              <div
                className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer aspect-4/3 flex items-center justify-center"
                onClick={() => setSelectedPatent(patent)}
              >
                <img
                  src={patent.certificateImage}
                  alt={patent.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-2xs">
                  <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                  <span>View Official Patent Certificate</span>
                </div>
              </div>

              {/* Patent Technical Info */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="font-semibold text-slate-700">Type / Classification:</span>
                  <span className="font-bold text-navy-950">{patent.patentType} {patent.class ? `(Class ${patent.class})` : ''}</span>
                </div>
                {patent.filingDate && (
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-semibold text-slate-700">Filing / Reciprocity Date:</span>
                    <span>{patent.filingDate}</span>
                  </div>
                )}
                {(patent.grantDate || patent.issueDate) && (
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-semibold text-slate-700">Grant / Issue Date:</span>
                    <span className="font-bold text-emerald-800">{patent.grantDate || patent.issueDate}</span>
                  </div>
                )}
                {patent.term && (
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-semibold text-slate-700">Statutory Term:</span>
                    <span className="italic">{patent.term}</span>
                  </div>
                )}
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {patent.summary}
              </p>

              {/* Patentees & Inventors */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  Inventors & Patentees:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {patent.patentees.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-medium border border-slate-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPatent(patent)}
              className="btn btn-outline btn-sm w-full text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#0b1a2e] hover:text-white transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Government Patent Certificate</span>
            </button>
          </div>
        ))}
      </div>

      {/* FULL RESOLUTION CERTIFICATE MODAL */}
      {selectedPatent && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPatent(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-bold text-[#854d0e] uppercase tracking-wider block">
                  The Patent Office • Government of India
                </span>
                <h4 className="font-bold text-navy-950 text-sm sm:text-base">
                  {selectedPatent.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPatent(null)}
                className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-auto flex items-center justify-center bg-slate-100">
              <img
                src={selectedPatent.certificateImage}
                alt={selectedPatent.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md border border-slate-300"
              />
            </div>

            <div className="p-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">
                {selectedPatent.patentNo ? `Patent: ${selectedPatent.patentNo}` : `Design: ${selectedPatent.designNo}`}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPatent(null)}
                className="btn btn-navy btn-sm text-xs font-bold"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
