import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Admissions from '../components/Admissions';
import { courseIntakeTables } from '../data/academicsData';
import {
  GraduationCap,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  FileCheck,
  PhoneCall,
  Award,
  Users,
  Clock,
  Layers
} from 'lucide-react';

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeMatrixTab, setActiveMatrixTab] = useState('ug');

  const faqs = [
    {
      q: "What is the primary entrance qualification and seat distribution for B.Tech in Agricultural Engineering?",
      a: "Admission into First Year B.Tech. (Agricultural Engineering) is done through AP state EAMCET ranks via common state counseling. Out of 60 regular seats, 60% (36 seats) are filled by the EAMCET Convener, and 40% (24 seats) are filled under Farmers' Quota following state reservation. Over and above 60 seats, 20% (12 seats) are filled under ICAR quota, 10% (6 seats) under EWS quota, and 15% (9 seats) for Diploma lateral entry, totaling 88 seats per year."
    },
    {
      q: "Are diploma holders eligible for lateral entry admission into B.Tech.?",
      a: "Yes! Candidates who have completed a 3-year Diploma in Agricultural Engineering from recognized polytechnics have the facility of entering directly into the Second Year of B.Tech. (Agricultural Engineering) through AP ECET conducted by the AP State Council for Higher Education (APSCHE). 15% seats over and above 61 (9 seats) are reserved specifically for lateral entry students."
    },
    {
      q: "How is admission carried out for M.Tech. & Ph.D. postgraduate programmes?",
      a: "Since the 2018–19 academic year, admission to M.Tech. is conducted through the national All India Entrance Examination (JRF) conducted by ICAR as per state reservation. Admission to Ph.D. is conducted through the ICAR SRF entrance examination and interview performance. Over and above the regular intake, 20% seats are reserved under ICAR quota with ICAR fellowship, with provisions for international students and in-service ANGRAU faculty."
    },
    {
      q: "What are the scholarship and fellowship opportunities available for enrolled students?",
      a: "Eligible students receive Government of Andhra Pradesh fee reimbursement (Jagananna Vidya Deevena), ICAR National Talent Scholarships (NTS) for undergraduate students, and ICAR JRF / SRF post-graduate and doctoral research fellowships."
    },
    {
      q: "Is hostel accommodation guaranteed for outstation students?",
      a: "Yes, separate residential student hostels are maintained for both boys and girls within the green 25-acre Bapatla campus on NH-216, equipped with modern dining halls, reading rooms, Wi-Fi, and 24/7 security."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Admissions & Counseling Portal (2025–2026)"
        subtitle="Begin your engineering journey at one of India's premier agricultural engineering institutions. Find entrance criteria, sanctioned seat matrix, and submit an online application."
        tag="Student Admissions"
        breadcrumb={[{ name: "Admissions" }]}
      />

      {/* Main Admissions Form & Contact Box */}
      <Admissions />

      {/* Statutory Sanctioned Intake & Seat Matrix Section */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <Award className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>ANGRAU & ICAR Statutory Seat Matrix</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Official Sanctioned Annual Seat Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Complete breakdown of regular, convener, farmers' quota, ICAR nomination, EWS, and lateral entry intakes across Under Graduate, Post Graduate, and Doctoral programmes.
            </p>
          </div>

          {/* Matrix Level Switcher */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveMatrixTab('ug')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeMatrixTab === 'ug' ? 'active' : ''
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeMatrixTab === 'ug' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Under Graduate (B.Tech - 88)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMatrixTab('pg')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeMatrixTab === 'pg' ? 'active' : ''
              }`}
            >
              <Layers className={`w-4 h-4 ${activeMatrixTab === 'pg' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Post Graduate (M.Tech - 13+)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMatrixTab('phd')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeMatrixTab === 'phd' ? 'active' : ''
              }`}
            >
              <Users className={`w-4 h-4 ${activeMatrixTab === 'phd' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Doctoral (Ph.D. - 4)</span>
            </button>
          </div>

          {/* TAB 1: UG MATRIX */}
          {activeMatrixTab === 'ug' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                    Under Graduate Engineering Admission
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {courseIntakeTables.ug.programName} — 4 Years (8 Semesters)
                  </h3>
                </div>
                <span className="badge badge-gold font-bold text-xs self-start sm:self-auto">
                  Total Annual Intake: 88 Seats
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {courseIntakeTables.ug.admissionProcess}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-navy-950 border-b border-slate-200">
                        <th className="py-3 px-4 font-bold w-14">S.No.</th>
                        <th className="py-3 px-4 font-bold">Category / Quota Breakdown</th>
                        <th className="py-3 px-4 font-bold text-center w-36">Seats per Year</th>
                        <th className="py-3 px-4 font-bold text-center w-40">Duration</th>
                        <th className="py-3 px-4 font-bold">Selection Channel / Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {courseIntakeTables.ug.rows.map((row, idx) => (
                        <tr
                          key={idx}
                          className={row.isTotal ? "bg-[#fdf5df]/80 font-bold text-navy-950 border-t-2 border-[#d4a72c]" : "hover:bg-slate-50 transition-colors"}
                        >
                          <td className="py-3 px-4 text-slate-500 font-semibold">{row.sNo}</td>
                          <td className="py-3 px-4 text-navy-950 font-medium">{row.name}</td>
                          <td className="py-3 px-4 text-center font-extrabold text-[#854d0e]">{row.intake}</td>
                          <td className="py-3 px-4 text-center text-slate-600">{row.duration}</td>
                          <td className="py-3 px-4 text-xs text-slate-600">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PG MATRIX */}
          {activeMatrixTab === 'pg' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                    Post Graduate Engineering Admission
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    Master of Technology (M.Tech.) — 2 Years (4 Semesters)
                  </h3>
                </div>
                <span className="badge badge-gold font-bold text-xs self-start sm:self-auto">
                  Total Intake: 13 + 1* EWS Seats
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {courseIntakeTables.pg.admissionProcess}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-navy-950 border-b border-slate-200">
                        <th className="py-3 px-4 font-bold w-14">S.No.</th>
                        <th className="py-3 px-4 font-bold">Academic Department</th>
                        <th className="py-3 px-4 font-bold">Name of M.Tech. Programme</th>
                        <th className="py-3 px-4 font-bold text-center w-36">Total Intake / Year</th>
                        <th className="py-3 px-4 font-bold text-center w-40">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {courseIntakeTables.pg.rows.map((row, idx) => (
                        <tr
                          key={idx}
                          className={row.isTotal ? "bg-[#fdf5df]/80 font-bold text-navy-950 border-t-2 border-[#d4a72c]" : "hover:bg-slate-50 transition-colors"}
                        >
                          <td className="py-3 px-4 text-slate-500 font-semibold">{row.sNo}</td>
                          <td className="py-3 px-4 text-slate-800 font-semibold">{row.department}</td>
                          <td className="py-3 px-4 text-navy-950 font-medium">
                            {row.programme}
                            {row.note && <span className="block text-[11px] text-slate-500 font-normal">{row.note}</span>}
                          </td>
                          <td className="py-3 px-4 text-center font-extrabold text-[#854d0e]">{row.intake}</td>
                          <td className="py-3 px-4 text-center text-slate-600">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PH.D. MATRIX */}
          {activeMatrixTab === 'phd' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                    Doctoral Research Programme
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    Doctor of Philosophy (Ph.D.) — 3 Years (6 Semesters)
                  </h3>
                </div>
                <span className="badge badge-gold font-bold text-xs self-start sm:self-auto">
                  Total Intake: 4 Regular Seats (+ ICAR & In-Service)
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {courseIntakeTables.phd.admissionProcess}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-navy-950 border-b border-slate-200">
                        <th className="py-3 px-4 font-bold w-14">S.No.</th>
                        <th className="py-3 px-4 font-bold">Research Department</th>
                        <th className="py-3 px-4 font-bold">Name of Ph.D. Programme</th>
                        <th className="py-3 px-4 font-bold text-center w-36">Total Intake / Year</th>
                        <th className="py-3 px-4 font-bold text-center w-40">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {courseIntakeTables.phd.rows.map((row, idx) => (
                        <tr
                          key={idx}
                          className={row.isTotal ? "bg-[#fdf5df]/80 font-bold text-navy-950 border-t-2 border-[#d4a72c]" : "hover:bg-slate-50 transition-colors"}
                        >
                          <td className="py-3 px-4 text-slate-500 font-semibold">{row.sNo}</td>
                          <td className="py-3 px-4 text-slate-800 font-semibold">{row.department}</td>
                          <td className="py-3 px-4 text-navy-950 font-medium">
                            {row.programme}
                            {row.note && <span className="block text-[11px] text-slate-500 font-normal">{row.note}</span>}
                          </td>
                          <td className="py-3 px-4 text-center font-extrabold text-[#854d0e]">{row.intake}</td>
                          <td className="py-3 px-4 text-center text-slate-600">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="section-title">Admissions & Counseling FAQs</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Common queries from prospective students and parents regarding entrance tests, eligibility quotas, and fee structures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-navy-950 flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#d4a72c] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

