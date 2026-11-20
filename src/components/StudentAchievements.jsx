import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Medal,
  GraduationCap,
  Sparkles,
  Eye,
  CheckCircle2,
  Building2,
  ExternalLink,
  Users,
  Search,
  Maximize2,
  X
} from 'lucide-react';
import {
  gateToppersData,
  nationalExamsPerformanceData,
  arsAchieversData,
  icarSrfJrfAchieversData
} from '../data/studentAchievementsData';

export default function StudentAchievements() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* SECTION BANNER */}
      <div className="bg-gradient-to-r from-[#0b1a2e] via-[#162a45] to-[#0b1a2e] text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-700 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-full bg-radial from-[#d4a72c]/15 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <span className="badge badge-gold text-xs font-bold uppercase tracking-wider mb-2.5 inline-flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            Student Pride & Academic Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Student Performance in National Competitive Examinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Consistently leading national rankings in GATE, ICAR-JRF, ICAR-SRF, ARS, and admission to prestigious national and international research institutions including IITs, IIMs, IARI, and NITs.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-700/80 text-xs">
            <button
              type="button"
              onClick={() => setSelectedPoster({ title: "GATE Toppers - Our Pride, Our Excellence", url: nationalExamsPerformanceData.toppersPosterImage })}
              className="btn btn-gold btn-sm text-xs flex items-center gap-1.5 font-bold"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View GATE Toppers Poster</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPoster({ title: "National Exams Performance Roster", url: nationalExamsPerformanceData.posterImage })}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View National Exam Record</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPoster({ title: "ARS & ICAR-SRF/JRF Achievers", url: nationalExamsPerformanceData.achieversPosterImage })}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View ARS/SRF Achievers</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. GATE TOPPERS CARD GRID */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge badge-navy text-[10px] font-bold uppercase tracking-wider">
                Graduate Aptitude Test in Engineering
              </span>
              <span className="badge badge-gold text-[10px] font-bold">All India Ranks</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <Medal className="w-5 h-5 text-[#d4a72c]" />
              <span>GATE Toppers — Our Pride, Our Excellence</span>
            </h3>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            12 Top All India Rankers Featured
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gateToppersData.map((topper, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 hover:border-[#d4a72c]/60 rounded-xl transition-all shadow-2xs hover:shadow-sm relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0b1a2e] text-[#f5c84c] text-xs font-black tracking-wide shadow-2xs">
                    {topper.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">
                    {topper.exam}
                  </span>
                </div>
                <h4 className="font-bold text-navy-950 text-base leading-snug group-hover:text-[#854d0e] transition-colors">
                  {topper.name}
                </h4>
                <p className="text-xs font-medium text-slate-600 font-mono mt-1">
                  Roll: {topper.rollNo}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Qualified
                </span>
                <span className="font-bold text-navy-950">GATE Top Rank</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. NATIONAL EXAMS PERFORMANCE TABLE */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge badge-gold text-[10px] font-bold uppercase tracking-wider">
                Multi-Year Progression
              </span>
              <span className="badge badge-navy text-[10px] font-bold">2021–2026</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0b1a2e]" />
              <span>Student Performance in National Competitive Examinations</span>
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            Total 83 High-Rank Qualifying Candidates
          </span>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0b1a2e] text-white">
                <th className="p-3 font-extrabold text-left border-r border-slate-700">Academic Year</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">JRF</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">SRF</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">NET</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">ARS</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">GATE</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">Management</th>
                <th className="p-3 font-extrabold text-center border-r border-slate-700">Others*</th>
                <th className="p-3 font-extrabold text-center bg-[#152a45]">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
              {nationalExamsPerformanceData.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                  <td className="p-3 font-bold text-navy-950 border-r border-slate-200">{row.year}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold">{row.jrf}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold">{row.srf}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold">{row.net}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold">{row.ars}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold text-blue-900">{row.gate}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold">{row.management}</td>
                  <td className="p-3 text-center border-r border-slate-200 font-semibold">{row.others}</td>
                  <td className="p-3 text-center font-bold text-navy-950 bg-slate-100/70">{row.total}</td>
                </tr>
              ))}
              {/* Grand Total Row */}
              <tr className="bg-amber-50/80 text-navy-950 font-black border-t-2 border-amber-300">
                <td className="p-3 font-extrabold uppercase border-r border-amber-200">
                  {nationalExamsPerformanceData.totalSummary.year}
                </td>
                <td className="p-3 text-center border-r border-amber-200 text-sm">{nationalExamsPerformanceData.totalSummary.jrf}</td>
                <td className="p-3 text-center border-r border-amber-200 text-sm">{nationalExamsPerformanceData.totalSummary.srf}</td>
                <td className="p-3 text-center border-r border-amber-200 text-sm">{nationalExamsPerformanceData.totalSummary.net}</td>
                <td className="p-3 text-center border-r border-amber-200 text-sm">{nationalExamsPerformanceData.totalSummary.ars}</td>
                <td className="p-3 text-center border-r border-amber-200 text-sm text-blue-900">{nationalExamsPerformanceData.totalSummary.gate}</td>
                <td className="p-3 text-center border-r border-amber-200 text-sm">{nationalExamsPerformanceData.totalSummary.management}</td>
                <td className="p-3 text-center border-r border-amber-200 text-sm">{nationalExamsPerformanceData.totalSummary.others}</td>
                <td className="p-3 text-center font-black text-base text-[#854d0e] bg-amber-100/80">
                  {nationalExamsPerformanceData.totalSummary.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500 italic">
          {nationalExamsPerformanceData.note}
        </p>

        {/* Premier Institutions Joined */}
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
          <h4 className="font-bold text-navy-950 text-sm flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#854d0e]" />
            <span>Prestigious Institutions Joined by Bapatla Agricultural Engineering Graduates:</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {nationalExamsPerformanceData.premierInstitutesJoined.map((inst, iIdx) => (
              <span
                key={iIdx}
                className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-navy-950 shadow-2xs"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ARS & ICAR-SRF/JRF ACHIEVERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ARS Achievers */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Award className="w-5 h-5 text-emerald-600" />
            <div>
              <h4 className="font-heading font-extrabold text-navy-950 text-lg">
                Agricultural Research Scientist (ARS) Achievers
              </h4>
              <p className="text-xs text-slate-500">Cultivating Minds • Shaping the Future</p>
            </div>
          </div>

          <div className="space-y-3">
            {arsAchieversData.map((ars, idx) => (
              <div key={idx} className="p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-navy-950 text-sm">{ars.name}</h5>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Roll: {ars.rollNo}</p>
                </div>
                <span className="badge badge-navy text-[10px] font-bold">
                  ARS Scientist
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ICAR SRF / JRF Achievers */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Trophy className="w-5 h-5 text-[#d4a72c]" />
            <div>
              <h4 className="font-heading font-extrabold text-navy-950 text-lg">
                ICAR – SRF / JRF Achievers
              </h4>
              <p className="text-xs text-slate-500">National Fellowship & Research Awards</p>
            </div>
          </div>

          <div className="space-y-3">
            {icarSrfJrfAchieversData.map((icar, idx) => (
              <div key={idx} className="p-3.5 bg-amber-50/50 border border-amber-100 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-navy-950 text-sm">{icar.name}</h5>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Roll: {icar.rollNo}</p>
                  <p className="text-[11px] font-semibold text-slate-600">{icar.exam}</p>
                </div>
                <span className="badge badge-gold text-xs font-black">
                  {icar.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL LIGHTBOX FOR OFFICIAL POSTERS */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <h4 className="font-bold text-navy-950 text-sm sm:text-base flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#d4a72c]" />
                <span>{selectedPoster.title}</span>
              </h4>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-auto flex items-center justify-center bg-slate-100">
              <img
                src={selectedPoster.url}
                alt={selectedPoster.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm border border-slate-200"
              />
            </div>

            <div className="p-3 border-t border-slate-200 bg-white text-right">
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="btn btn-navy btn-sm text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
