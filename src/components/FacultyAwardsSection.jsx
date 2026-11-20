import React, { useState } from 'react';
import {
  Award,
  Trophy,
  Medal,
  Calendar,
  Users,
  Eye,
  X,
  Maximize2,
  Sparkles,
  CheckCircle2,
  Search,
  Building2,
  GraduationCap
} from 'lucide-react';
import { facultyAwardsData, stateBestTeachersGallery } from '../data/facultyAwardsData';

export default function FacultyAwardsSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filterYear, setFilterYear] = useState('All');

  const years = ['All', '2026-27', '2025 – 26', '2024 – 25', '2023 – 24', '2022 – 23', '2021 – 22', '2020 – 21'];

  const filteredAwards = filterYear === 'All'
    ? facultyAwardsData
    : facultyAwardsData.filter(a => a.year.includes(filterYear.split(' ')[0]));

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#0b1a2e] via-[#162a45] to-[#0b1a2e] text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-700 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-full bg-radial from-[#d4a72c]/15 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <span className="badge badge-gold text-xs font-bold uppercase tracking-wider mb-2.5 inline-flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            Distinguished Faculty Accolades
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Institutional Awards & State Best Teacher Honours
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Honouring pedagogical excellence, pioneering agricultural research, and distinguished university mentorship by the faculty of Dr. NTR College of Agricultural Engineering, Bapatla (ANGRAU).
          </p>
        </div>
      </div>

      {/* 1. STATE BEST TEACHER AWARDS SHOWCASE */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="badge badge-gold text-[10px] font-bold uppercase tracking-wider">
              Apex State Recognition
            </span>
            <span className="badge badge-navy text-[10px] font-bold">Government of Andhra Pradesh</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#d4a72c]" />
            <span>State Best Teacher Awardees</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Presented on Teachers' Day by the Government of Andhra Pradesh for meritorious services in agricultural engineering education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stateBestTeachersGallery.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className="relative aspect-4/3 overflow-hidden bg-slate-200 cursor-pointer group"
                  onClick={() => setSelectedPhoto({ title: `${teacher.honor} — ${teacher.recipient}`, image: teacher.image, desc: teacher.description })}
                >
                  <img
                    src={teacher.image}
                    alt={teacher.recipient}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs backdrop-blur-2xs">
                    <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                    <span>View Ceremony Photo</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#0b1a2e] text-[#f5c84c] px-2.5 py-0.5 rounded-full text-xs font-black shadow-sm">
                    {teacher.year}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="font-bold text-navy-950 text-base leading-snug">
                    {teacher.recipient}
                  </h4>
                  <p className="text-xs font-semibold text-[#854d0e]">
                    {teacher.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                    {teacher.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto({ title: `${teacher.honor} — ${teacher.recipient}`, image: teacher.image, desc: teacher.description })}
                  className="btn btn-outline btn-sm w-full text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#0b1a2e] hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Award Ceremony</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ANGRAU MERITORIOUS TEACHER & NATIONAL HONORS GALLERY */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="badge badge-navy text-[10px] font-bold uppercase tracking-wider">
              University & National Honors
            </span>
            <span className="badge badge-gold text-[10px] font-bold">ANGRAU & ISAE / ICAR</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center gap-2">
            <Medal className="w-5 h-5 text-[#854d0e]" />
            <span>ANGRAU Meritorious Teachers & National Fellowship Recipients</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Convocation medals and international research distinctions conferred upon faculty members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facultyAwardsData.filter(a => a.image && a.category !== 'state-best').map((award, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  className="relative aspect-4/3 overflow-hidden bg-slate-200 cursor-pointer group"
                  onClick={() => setSelectedPhoto({ title: `${award.recipient} (${award.year})`, image: award.image, desc: award.award })}
                >
                  <img
                    src={award.image}
                    alt={award.recipient}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs backdrop-blur-2xs">
                    <Maximize2 className="w-4 h-4 text-[#f5c84c]" />
                    <span>View Photo</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="badge badge-gold text-[10px] font-bold">
                      {award.year}
                    </span>
                  </div>
                  <h5 className="font-bold text-navy-950 text-sm leading-snug">
                    {award.recipient}
                  </h5>
                  <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                    {award.designation}
                  </p>
                  <p className="text-xs text-slate-700 leading-snug pt-1 font-semibold">
                    {award.award}
                  </p>
                </div>
              </div>

              <div className="p-3 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto({ title: `${award.recipient} (${award.year})`, image: award.image, desc: award.award })}
                  className="w-full text-xs text-navy-950 hover:text-[#854d0e] font-bold flex items-center justify-center gap-1 py-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TABLE 29: OFFICIAL COMPREHENSIVE AWARDS REGISTER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge badge-gold text-[10px] font-bold uppercase tracking-wider">
                Official Institutional Roster
              </span>
              <span className="badge badge-navy text-[10px] font-bold">Table 29</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#d4a72c]" />
              <span>Table 29: Complete List of Awards Secured by Staff Members</span>
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setFilterYear(y)}
                className={`px-3 py-1 rounded-full font-bold transition-all ${
                  filterYear === y
                    ? 'bg-[#0b1a2e] text-[#f5c84c] shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0b1a2e] text-white">
                <th className="p-3 font-extrabold w-28 border-r border-slate-700">Academic Year</th>
                <th className="p-3 font-extrabold w-72 border-r border-slate-700">Name of the Staff Member</th>
                <th className="p-3 font-extrabold">Award / Distinction Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
              {filteredAwards.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/80" : "bg-slate-50/70 hover:bg-slate-50"}>
                  <td className="p-3 font-bold text-navy-950 border-r border-slate-200 align-top whitespace-nowrap">
                    <span className="badge badge-gold text-[10px] font-bold">{item.year}</span>
                  </td>
                  <td className="p-3 border-r border-slate-200 align-top">
                    <div className="font-bold text-navy-950 text-sm leading-snug">{item.recipient}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.designation}</div>
                  </td>
                  <td className="p-3 text-slate-800 leading-relaxed align-top">
                    <div className="font-semibold text-navy-950">{item.award}</div>
                    {item.organization && (
                      <div className="text-[11px] text-slate-500 mt-0.5 italic">
                        Awarding Body: {item.organization}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FULL PHOTO LIGHTBOX */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <h4 className="font-bold text-navy-950 text-sm sm:text-base flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#d4a72c]" />
                <span>{selectedPhoto.title}</span>
              </h4>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-auto flex items-center justify-center bg-slate-100">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-md border border-slate-300"
              />
            </div>

            <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">
                {selectedPhoto.desc}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="btn btn-navy btn-sm text-xs font-bold"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
