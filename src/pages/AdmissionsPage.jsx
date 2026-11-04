import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Admissions from '../components/Admissions';
import { courseIntakeTables, consolidatedAllBranchesTable } from '../data/academicsData';
import {
  admissionCriteriaUG,
  statutoryFlowcharts,
  statutoryReservation,
  pgPhdAdmissionWeightage,
  foreignStudentsPolicy,
  collegiateLifecycle
} from '../data/admissionsData';
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
  Layers,
  Table,
  BookOpen,
  Shield,
  ShieldCheck,
  MapPin,
  Globe,
  FileText,
  AlertCircle,
  ArrowRight,
  ArrowDown,
  Calendar,
  Compass,
  Trophy,
  HeartHandshake
} from 'lucide-react';

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeMatrixTab, setActiveMatrixTab] = useState('all');
  const [activeFlowchartTab, setActiveFlowchartTab] = useState('ug');

  const faqs = [
    {
      q: "What is the primary entrance qualification and seat distribution for B.Tech in Agricultural Engineering?",
      a: "Admissions into First Year B. Tech. (Agricultural Engineering) are conducted through the state-level AP EAPCET (formerly EAMCET) through centralized counseling by APSCHE, Government of Andhra Pradesh (G.O.Ms.No.184, dt 20-08-1993). Out of 60 approved base seats, 60% (36 seats) are filled through the AP EAPCET Convener quota on merit and reservation norms, and 40% (24 seats) are allotted under the Farmers' Quota. Additionally, 20% supernumerary seats (12 seats) are filled via ICAR-CUET (UG) and 15% (9 seats) for Diploma holders via AP ECET, totaling 88 seats per year."
    },
    {
      q: "What are the age limits prescribed for B.Tech. admission?",
      a: "Candidates must have completed 17 years of age as on 31st December of the year of admission. The upper age limit is 22 years for general category candidates, 25 years for Scheduled Caste (SC) and Scheduled Tribe (ST) candidates, and 27 years for Physically Challenged (PH) candidates."
    },
    {
      q: "How are seats allocated in relation to local area under the Presidential Order?",
      a: "Out of the total sanctioned seats, 15% of seats are Unreserved (UR), open to candidates from Andhra University (AU), Sri Venkateswara University (SVU), and Osmania University (OU - Telangana State) regions based on merit. The remaining 85% local seats are allocated in a 42 : 22 ratio between the Andhra University (AU) and Sri Venkateswara University (SVU) regions respectively."
    },
    {
      q: "What are the mandatory requirements to claim the 40% Farmers' / Agriculturists Quota?",
      a: "Candidates must come from families actually engaged in agriculture owning not less than 1 acre of agricultural land, and must have studied for a minimum of 4 years in schools located in Non-Municipal (rural) areas from 1st to 12th class. Applicants must produce Form - I certified by the Mandal Revenue Officer (MRO) / Tahsildar with patta numbers or certified Pattadar Pass Book, and Form - II issued by the Heads of Institutions certifying 4 years of non-municipal schooling. Both forms must bear official seals and signatures; otherwise, claims are summarily rejected."
    },
    {
      q: "Are diploma holders eligible for direct 2nd-year lateral entry admission into B.Tech.?",
      a: "Yes! Candidates who have completed a 3-year Diploma in Agricultural Engineering are eligible for direct admission into the Second Year of B.Tech. (Agricultural Engineering) through the AP ECET conducted annually by APSCHE. An additional 15% seats over and above the regular intake (9 seats) are reserved for lateral entry diploma candidates."
    },
    {
      q: "How is merit calculated for M.Tech. and Ph.D. postgraduate programmes?",
      a: "For M.Tech., admission is based on previous academic record at UG level and performance in the ICAR AIEEA test in a 30 : 70 weightage ratio. For Ph.D., admission is based on Undergraduate record (10%), Postgraduate record (30%), ICAR AICE competitive test (50%), and personal interview (10%) in a 10 : 30 : 50 : 10 ratio. Candidates must hold a valid rank card in the specific subject group."
    },
    {
      q: "What is the procedure and fee structure for International / Foreign Students?",
      a: "Foreign student applications must be routed through the Assistant Director General (HRD-II), ICAR, Krishi Anusandhan Bhavan, New Delhi - 110012. Foreign students pay an institutional fee of US $4,000 annually (US $2,000 for SAARC countries) in addition to normal Indian student fees. Ph.D. applicants must obtain a valid Research Visa from the Ministry of Education / MHRD, Government of India. Excellent amenities including an International Hostel, Wi-Fi, and Digital Library are provided."
    },
    {
      q: "When is the official Academic Calendar published after admission?",
      a: "Following counseling fee payment and in-person registration conducted by the Associate Dean, the academic section prepares course-wise student rosters within one week. An approved academic calendar providing dates for course registration, commencement of instruction, preparation holidays, semester final theory exams, and next semester commencement is communicated to all candidates within 10 days of registration."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Admissions & Counseling Portal (2025–2026)"
        subtitle="Begin your engineering journey at Dr. NTR College of Agricultural Engineering, Bapatla (ANGRAU). Explore statutory admission policies, reservation norms, seat matrices, and application procedures."
        tag="Student Admissions"
        breadcrumb={[{ name: "Admissions" }]}
      />

      {/* Quick Navigation Anchor Bar */}
      <nav aria-label="Admissions quick navigation" className="bg-navy-950 text-white border-b border-navy-800 sticky top-16 z-30 shadow-md">
        <div className="container overflow-x-auto py-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap min-w-max">
            <span className="text-gold-400 flex items-center gap-1 pl-1 pr-2 border-r border-navy-800">
              <Compass className="w-3.5 h-3.5" />
              Quick Sections:
            </span>
            <a href="#admission-pathways" className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
              Admission Flowcharts
            </a>
            <a href="#seat-matrix" className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
              Sanctioned Seat Matrix
            </a>
            <a href="#reservation-policies" className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
              Statutory Reservations (85:15)
            </a>
            <a href="#farmers-quota" className="px-2.5 py-1 rounded bg-[#854d0e]/60 hover:bg-[#854d0e] text-gold-300 transition-colors">
              40% Farmers' Quota (Form I & II)
            </a>
            <a href="#pg-phd-weightage" className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
              PG & Ph.D. Weightage
            </a>
            <a href="#foreign-students" className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
              Foreign Students
            </a>
            <a href="#academic-lifecycle" className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
              Registration Lifecycle
            </a>
            <a href="#admissions-form" className="px-2.5 py-1 rounded bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold transition-colors">
              Enquiry Form
            </a>
          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: STATUTORY ADMISSION FLOWCHARTS & PATHWAYS
          ───────────────────────────────────────────────────────────── */}
      <section id="admission-pathways" className="section-padding bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <Award className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Official University Pathways</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Admission Process & Quota Flowcharts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Official channel distribution for Undergraduate (B.Tech.), Postgraduate (M.Tech.), and Doctoral (Ph.D.) degree programmes governed by APSCHE and ICAR New Delhi.
            </p>
          </div>

          {/* Flowchart Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setActiveFlowchartTab('ug')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeFlowchartTab === 'ug' ? 'active' : ''
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeFlowchartTab === 'ug' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>B.Tech. Process (60 Base + Quotas)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFlowchartTab('pg')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeFlowchartTab === 'pg' ? 'active' : ''
              }`}
            >
              <Layers className={`w-4 h-4 ${activeFlowchartTab === 'pg' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>M.Tech. Process (14 Seats)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFlowchartTab('phd')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeFlowchartTab === 'phd' ? 'active' : ''
              }`}
            >
              <Users className={`w-4 h-4 ${activeFlowchartTab === 'phd' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>Ph.D. Process (4 Seats)</span>
            </button>
          </div>

          {/* FLOWCHART 1: UG B.TECH */}
          {activeFlowchartTab === 'ug' && (
            <div className="bg-white rounded-2xl border-2 border-red-800/80 shadow-md p-6 sm:p-8 space-y-6 animate-fadeIn">
              <div className="bg-[#5c0606] text-white py-2.5 px-4 rounded-lg text-center font-bold tracking-wide text-base sm:text-lg shadow-sm">
                Admission Process — B. Tech. (Agricultural Engineering) – 60 seats (Base)
              </div>

              {/* Central Root Box */}
              <div className="flex justify-center">
                <div className="border-2 border-red-700 bg-red-50 text-red-950 font-extrabold text-sm sm:text-base px-6 py-3 rounded-lg shadow-sm text-center">
                  B. Tech. (Agricultural Engineering) – 60 seats
                </div>
              </div>

              {/* Connecting Tree Lines & Channels */}
              <div className="relative pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {/* Channel 1: Convenor */}
                  <div className="border-2 border-red-600 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <span className="text-[11px] font-bold text-red-800 uppercase tracking-wider block mb-1">
                      State Merit Counseling
                    </span>
                    <h4 className="font-heading font-extrabold text-navy-950 text-sm sm:text-base">
                      Convenor Quota
                    </h4>
                    <p className="text-xs font-bold text-slate-700 my-1">
                      AP EAPCET (60%)
                    </p>
                    <div className="mt-2 py-1 px-3 bg-red-100/80 border border-red-300 text-red-900 rounded font-extrabold text-sm">
                      36 seats
                    </div>
                  </div>

                  {/* Channel 2: Farmers */}
                  <div className="border-2 border-red-600 bg-[#fef8ea] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <span className="text-[11px] font-bold text-[#854d0e] uppercase tracking-wider block mb-1">
                      Rural Agrarian Reservation
                    </span>
                    <h4 className="font-heading font-extrabold text-navy-950 text-sm sm:text-base">
                      Farmer's Quota (40%)
                    </h4>
                    <p className="text-xs font-bold text-slate-700 my-1">
                      AP EAPCET + Form I & II
                    </p>
                    <div className="mt-2 py-1 px-3 bg-amber-100 border border-amber-300 text-[#854d0e] rounded font-extrabold text-sm">
                      24 seats
                    </div>
                  </div>

                  {/* Channel 3: ICAR */}
                  <div className="border-2 border-red-600 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block mb-1">
                      National All-India Allotment
                    </span>
                    <h4 className="font-heading font-extrabold text-navy-950 text-sm sm:text-base">
                      Additionally, 20% for ICAR
                    </h4>
                    <p className="text-xs font-bold text-slate-700 my-1">
                      ICAR – CUET (UG)
                    </p>
                    <div className="mt-2 py-1 px-3 bg-blue-100 border border-blue-300 text-blue-900 rounded font-extrabold text-sm">
                      12 seats
                    </div>
                  </div>
                </div>

                {/* Lateral Entry Block */}
                <div className="mt-6 pt-4 border-t-2 border-dashed border-red-300">
                  <div className="border-2 border-red-700 bg-amber-50 rounded-lg p-4 max-w-xl mx-auto text-center shadow-sm">
                    <span className="text-[11px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">
                      Direct 2nd Year Entry for 3-Year Diploma Holders
                    </span>
                    <h4 className="font-heading font-extrabold text-navy-950 text-sm sm:text-base">
                      Lateral Entry into II Year – Additional 15%
                    </h4>
                    <p className="text-xs text-slate-700 mt-1">
                      Conducted via AP ECET by APSCHE, Government of Andhra Pradesh (<strong>9 Seats</strong> over & above 61).
                    </p>
                  </div>
                </div>
              </div>

              {/* UG Statutory Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <strong className="text-navy-950 block mb-0.5">Duration of Programme:</strong>
                  <span>Minimum: 4 Years • Maximum: 7 Years (from date of admission).</span>
                </div>
                <div>
                  <strong className="text-navy-950 block mb-0.5">Age Limits as on 31st December:</strong>
                  <span>Min: 17 Yrs • Max: 22 Yrs (General) • 25 Yrs (SC/ST) • 27 Yrs (PH).</span>
                </div>
              </div>
            </div>
          )}

          {/* FLOWCHART 2: PG M.TECH */}
          {activeFlowchartTab === 'pg' && (
            <div className="bg-white rounded-2xl border-2 border-red-800/80 shadow-md p-6 sm:p-8 space-y-6 animate-fadeIn">
              <div className="bg-[#5c0606] text-white py-2.5 px-4 rounded-lg text-center font-bold tracking-wide text-base sm:text-lg shadow-sm">
                Admission Process — M. Tech. (Agricultural Engineering) – 14 seats
              </div>

              {/* Central Root Box */}
              <div className="flex justify-center">
                <div className="border-2 border-red-700 bg-red-50 text-red-950 font-extrabold text-sm sm:text-base px-6 py-3 rounded-lg shadow-sm text-center">
                  M. Tech. (Agricultural Engineering) – 14 seats
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {statutoryFlowcharts.pg.branches.map((b, idx) => (
                  <div key={idx} className="border-2 border-red-600 bg-white rounded-lg p-4 text-center shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="bg-red-600 text-white font-extrabold text-xs py-1 px-2.5 rounded mb-3 inline-block">
                        {b.entrance}
                      </div>
                      <h4 className="font-heading font-extrabold text-navy-950 text-sm mb-1">
                        {b.name}
                      </h4>
                      {b.note && <span className="text-[11px] text-slate-500 font-semibold block">{b.note}</span>}
                    </div>
                    <div className="mt-3 py-1.5 px-3 bg-red-50 border border-red-200 text-red-900 rounded font-extrabold text-base">
                      {b.seats}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed">
                <strong>Selection Weightage Ratio (30 : 70):</strong> Admission is based on previous academic performance at Undergraduate level (30% weightage) and marks / rank secured in the All India ICAR AIEEA test (70% weightage). Over and above regular seats, 20% seats are reserved for ICAR Fellowship candidates and international student provisions.
              </div>
            </div>
          )}

          {/* FLOWCHART 3: PH.D. */}
          {activeFlowchartTab === 'phd' && (
            <div className="bg-white rounded-2xl border-2 border-red-800/80 shadow-md p-6 sm:p-8 space-y-6 animate-fadeIn">
              <div className="bg-[#5c0606] text-white py-2.5 px-4 rounded-lg text-center font-bold tracking-wide text-base sm:text-lg shadow-sm">
                Admission Process — Ph.D. (Agricultural Engineering) – 4 seats
              </div>

              {/* Central Root Box */}
              <div className="flex justify-center">
                <div className="border-2 border-red-700 bg-red-50 text-red-950 font-extrabold text-sm sm:text-base px-6 py-3 rounded-lg shadow-sm text-center">
                  Ph.D. (Agricultural Engineering) – 4 seats
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {statutoryFlowcharts.phd.branches.map((b, idx) => (
                  <div key={idx} className="border-2 border-red-600 bg-white rounded-lg p-4 text-center shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="bg-red-600 text-white font-extrabold text-xs py-1 px-2.5 rounded mb-3 inline-block">
                        {b.entrance}
                      </div>
                      <h4 className="font-heading font-extrabold text-navy-950 text-sm mb-1">
                        {b.name}
                      </h4>
                    </div>
                    <div className="mt-3 py-1.5 px-3 bg-red-50 border border-red-200 text-red-900 rounded font-extrabold text-base">
                      {b.seats}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed">
                <strong>Selection Weightage Ratio (10 : 30 : 50 : 10):</strong> 10% UG Record • 30% M.Tech (PG) Record • 50% ICAR AICE Test Performance • 10% Personal Interview / Viva-Voce. In addition to 4 regular seats, 20% seats are reserved under ICAR Fellowship and 1 seat is reserved for in-service faculty of ANGRAU.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CONSOLIDATED SANCTIONED ANNUAL SEAT MATRIX
          ───────────────────────────────────────────────────────────── */}
      <section id="seat-matrix" className="section-padding bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <Table className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Official Institutional Sanctioned Intake</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Annual Sanctioned Seat Matrix of All Branches
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Approved by Acharya N.G. Ranga Agricultural University (ANGRAU), APSCHE, and ICAR New Delhi across all 7 degree programs.
            </p>
          </div>

          {/* Matrix Level Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setActiveMatrixTab('all')}
              className={`filter-tab text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                activeMatrixTab === 'all' ? 'active' : ''
              }`}
            >
              <Table className={`w-4 h-4 ${activeMatrixTab === 'all' ? 'text-[#f5c84c]' : 'text-slate-700'}`} />
              <span>All Branches Matrix (106 Seats)</span>
            </button>
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
              <span>Post Graduate (M.Tech - 14)</span>
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

          {/* TAB 0: ALL BRANCHES CONSOLIDATED SINGLE TABLE */}
          {activeMatrixTab === 'all' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fadeIn">
              <div className="bg-gradient-to-r from-[#06101e] to-[#0b1a2e] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3459]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc75f] block">
                    Institutional Sanctioned Seat Matrix
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {consolidatedAllBranchesTable.title}
                  </h3>
                </div>
                <span className="badge badge-gold font-extrabold text-xs self-start sm:self-auto px-3 py-1">
                  Grand Total: {consolidatedAllBranchesTable.totals.grandTotal}
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-100/90 text-navy-950 border-b border-slate-200 text-xs">
                        <th className="py-3 px-3 font-bold text-center w-12">S.No.</th>
                        <th className="py-3 px-3 font-bold w-24">Degree</th>
                        <th className="py-3 px-4 font-bold">Branch / Specialization</th>
                        <th className="py-3 px-3 font-bold text-center w-32">Duration</th>
                        <th className="py-3 px-4 font-bold">Quota & Numerical Breakdown</th>
                        <th className="py-3 px-3 font-bold text-center w-28">Total Intake</th>
                        <th className="py-3 px-4 font-bold">Admission Channel</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {consolidatedAllBranchesTable.rows.map((row, rIdx) => {
                        const isUg = row.levelBadge === 'UG';
                        const isPg = row.levelBadge === 'PG';
                        return (
                          <tr
                            key={rIdx}
                            className={`hover:bg-slate-50/80 transition-colors ${
                              isUg ? 'bg-amber-50/20' : ''
                            }`}
                          >
                            <td className="py-3.5 px-3 text-center text-slate-500 font-bold">
                              {row.sNo}
                            </td>
                            <td className="py-3.5 px-3">
                              <span
                                className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                                  isUg
                                    ? 'bg-blue-100 text-blue-900 border border-blue-200'
                                    : isPg
                                    ? 'bg-purple-100 text-purple-900 border border-purple-200'
                                    : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                                }`}
                              >
                                {row.levelBadge}
                              </span>
                              <span className="block text-[11px] font-bold text-navy-950 mt-0.5">
                                {row.degree}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-bold text-navy-950">
                              {row.branch}
                            </td>
                            <td className="py-3.5 px-3 text-center text-slate-600 font-medium">
                              {row.duration}
                            </td>
                            <td className="py-3.5 px-4">
                              {Array.isArray(row.breakdown) ? (
                                <div className="flex flex-wrap gap-1.5">
                                  {row.breakdown.map((b, bIdx) => (
                                    <span
                                      key={bIdx}
                                      className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700 shadow-2xs"
                                    >
                                      <span className="text-slate-500">{b.label}:</span>
                                      <strong className="text-navy-900">{b.val}</strong>
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-slate-700">{row.breakdownText}</span>
                              )}
                            </td>
                            <td className="py-3.5 px-3 text-center">
                              <span className="inline-block bg-[#fdf5df] border border-[#d4a72c] text-[#854d0e] font-extrabold text-xs px-2.5 py-1 rounded-md">
                                {row.totalIntake}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 text-[11px] leading-snug">
                              {row.admissionChannel}
                            </td>
                          </tr>
                        );
                      })}

                      {/* SUB-TOTALS & GRAND TOTAL ROW */}
                      <tr className="bg-slate-100/70 border-t-2 border-slate-300 font-semibold text-slate-800">
                        <td colSpan={5} className="py-2.5 px-4 text-right font-bold text-xs">
                          Sub-Totals by Degree Level:
                        </td>
                        <td colSpan={2} className="py-2.5 px-4 text-xs space-y-0.5">
                          <div>Undergraduate (UG): <strong>88 Seats</strong></div>
                          <div>Postgraduate (PG): <strong>13 + 1* EWS (14 Seats)</strong></div>
                          <div>Doctoral (Ph.D.): <strong>4 Seats</strong></div>
                        </td>
                      </tr>

                      <tr className="bg-[#fdf5df] font-extrabold text-navy-950 border-t-2 border-[#d4a72c]">
                        <td className="py-4 px-3 text-center text-gold-700 font-bold">★</td>
                        <td className="py-4 px-3">
                          <span className="badge badge-gold font-extrabold text-[11px]">ALL LEVELS</span>
                        </td>
                        <td className="py-4 px-4 font-heading text-sm text-navy-950">
                          Grand Total Across All 7 Academic Branches
                        </td>
                        <td className="py-4 px-3 text-center text-slate-700">All Semesters</td>
                        <td className="py-4 px-4 text-xs text-[#854d0e] font-bold">
                          88 UG (61 Base + 12 ICAR + 6 EWS + 9 Lateral) + 14 PG + 4 Ph.D.
                        </td>
                        <td className="py-4 px-3 text-center">
                          <span className="inline-block bg-[#854d0e] text-white font-extrabold text-xs px-3 py-1 rounded-md shadow-sm">
                            106 Seats
                          </span>
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-700">
                          ANGRAU / APSCHE / ICAR New Delhi Approved Quotas
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

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

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: STATUTORY RESERVATION OF SEATS (PRESIDENTIAL ORDER, SOCIAL, WOMEN)
          ───────────────────────────────────────────────────────────── */}
      <section id="reservation-policies" className="section-padding bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Government of Andhra Pradesh Statutory Rules</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Statutory Reservation of Seats
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Distribution of seats strictly governed by the Presidential Order (Regional Allotment) and the reservation policies of the Government of Andhra Pradesh.
            </p>
          </div>

          {/* 1. Local Area Allocation: 15% UR and 85% Local (42:22 AU:SVU) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <MapPin className="w-5 h-5 text-gold-500" />
              <h3 className="font-heading text-lg font-bold text-navy-950">
                Allocation of Seats in Relation to Local Area (Presidential Order)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-900 text-sm">Un-reserved (UR) Category</span>
                  <span className="badge badge-navy font-bold text-xs">15% Seats</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For these 15% seats, any candidate from Andhra University (AU) or Sri Venkateswara University (SVU) region can compete based on intermediate marks. Candidates from the Osmania University (OU) region (Telangana State) are also eligible to compete with intermediate marks of Telangana State.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fdf5df]/80 border border-[#fae4a4] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#854d0e] text-sm">Local Area Allocation</span>
                  <span className="badge badge-gold font-bold text-xs">85% Seats (42 : 22 Ratio)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Admission to 85% of the seats is allocated in the strict ratio of <strong>42 : 22</strong> between the Andhra University (AU) region and Sri Venkateswara University (SVU) region respectively among candidates in relation to their local residential status.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Social Categories & Women Reservation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backward Classes (BC) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Backward Classes (BC)
                </h4>
                <span className="badge badge-navy font-bold text-xs">29% Reserved</span>
              </div>
              <p className="text-xs text-slate-600">Sub-category percentage allocation:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-slate-50 rounded border border-slate-100 font-semibold text-slate-800">
                  BC-A: <strong className="text-navy-950">7%</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-100 font-semibold text-slate-800">
                  BC-B: <strong className="text-navy-950">10%</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-100 font-semibold text-slate-800">
                  BC-C: <strong className="text-navy-950">1%</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-100 font-semibold text-slate-800">
                  BC-D: <strong className="text-navy-950">7%</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-100 font-semibold text-slate-800 col-span-2">
                  BC-E: <strong className="text-navy-950">4%</strong>
                </div>
              </div>
            </div>

            {/* SC & ST */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  SC & ST Categories
                </h4>
                <span className="badge badge-navy font-bold text-xs">21% Combined</span>
              </div>
              <div className="space-y-2.5 text-xs pt-1">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Scheduled Caste (SC)</span>
                  <span className="font-extrabold text-navy-950 text-sm">15%</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Scheduled Tribe (ST)</span>
                  <span className="font-extrabold text-navy-950 text-sm">06%</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Upper age limit relaxed up to 25 years for SC & ST applicants.
              </p>
            </div>

            {/* Women Horizontal Reservation */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Reservation for Women
                </h4>
                <span className="badge badge-gold font-bold text-xs">33 1/3 %</span>
              </div>
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs space-y-1">
                <strong className="text-[#854d0e] block">G.O.Ms. No. 75 / Edn. (13-03-1996)</strong>
                <p className="text-slate-700 leading-relaxed text-[11.5px]">
                  In each degree course, <strong>33 1/3 %</strong> of seats are reserved horizontally in favour of women candidates from each social category.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Special Categories (CAP, NCC, Sports, PH) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h4 className="font-heading font-bold text-navy-950 text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-gold-500" />
              <span>Special Category Reservations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center justify-between font-bold text-navy-950 mb-1">
                  <span>Defence Personnel (CAP)</span>
                  <span className="text-gold-600">2%</span>
                </div>
                <span className="text-[11px] text-slate-600 block">Children of Armed Personnel priority</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center justify-between font-bold text-navy-950 mb-1">
                  <span>National Cadet Corps (NCC)</span>
                  <span className="text-gold-600">1%</span>
                </div>
                <span className="text-[11px] text-slate-600 block">Valid NCC 'B'/'C' certificate holders</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center justify-between font-bold text-navy-950 mb-1">
                  <span>Games & Sports</span>
                  <span className="text-gold-600">0.5%</span>
                </div>
                <span className="text-[11px] text-slate-600 block">State / National sports participation</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center justify-between font-bold text-navy-950 mb-1">
                  <span>Differently Abled (PH)</span>
                  <span className="text-gold-600">3%</span>
                </div>
                <span className="text-[11px] text-slate-600 block">1% VH • 1% HI • 1% OH (Max age 27)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: 40% FARMERS' / AGRICULTURISTS QUOTA DOCUMENTATION
          ───────────────────────────────────────────────────────────── */}
      <section id="farmers-quota" className="section-padding bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <FileCheck className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>40% Agrarian Reservation</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Farmers’ Quota: Eligibility & Form Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Forty percent (40%) of the seats in B.Tech. (Agricultural Engineering) are reserved for candidates hailing from agricultural families who fulfill statutory land and rural schooling requirements.
            </p>
          </div>

          <div className="bg-[#fef8ea] border-2 border-[#d4a72c] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-[#854d0e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-950">
                  Core Eligibility Criteria for Farmers' Quota
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">
                  Candidates must belong to families of agriculturists actually engaged in agriculture and owning <strong>not less than 1 acre of agricultural land</strong>, and who have studied for a <strong>minimum period of 4 years</strong> in schools located in <strong>Non-Municipal (rural) areas</strong> between 1st class and 12th class (or Intermediate).
                </p>
              </div>
            </div>

            {/* Mandatory Forms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white rounded-xl border border-amber-300 p-5 space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="badge badge-gold font-extrabold text-xs">FORM – I</span>
                  <span className="text-[11px] font-bold text-slate-500">Revenue Authority</span>
                </div>
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Land Ownership & Agrarian Status Certificate
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Must specify official <strong>Patta Numbers and exact extent of agricultural land</strong> (minimum 1 acre) certified by a Revenue Officer not below the rank of <strong>Mandal Revenue Officer (MRO) / Tahsildar</strong> of the Mandal concerned, or a certified copy of the Pattadar Pass Book issued by the MRO.
                </p>
                <div className="text-[11px] font-semibold text-[#854d0e] bg-amber-50 p-2 rounded border border-amber-200">
                  Required: MRO / Tahsildar Signature & Official Office Seal
                </div>
              </div>

              <div className="bg-white rounded-xl border border-amber-300 p-5 space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="badge badge-gold font-extrabold text-xs">FORM – II</span>
                  <span className="text-[11px] font-bold text-slate-500">Institutional Authority</span>
                </div>
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Non-Municipal (Rural) Schooling Certificate
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certificate issued and signed by the <strong>Heads of Educational Institutions</strong> confirming that the candidate has studied for a <strong>minimum of four years</strong> in schools located in Non-Municipal areas during their period of study from 1st class to 12th class (or Intermediate).
                </p>
                <div className="text-[11px] font-semibold text-[#854d0e] bg-amber-50 p-2 rounded border border-amber-200">
                  Required: Head of Institution Signature & School Stamp/Seal
                </div>
              </div>
            </div>

            {/* Strict Warning Alert */}
            <div className="bg-red-50 border border-red-300 rounded-xl p-4 flex items-start gap-3 text-red-950">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <strong>Mandatory Statutory Notice:</strong> Form - I and Form - II must be filled in with the signatures and office seals of the Mandal Revenue Officer / Tahsildar and concerned Head of the Institution, respectively. <em>Otherwise, the claim of the candidate under the Farmers' Quota will be summarily rejected at counseling.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: PG & PH.D. SELECTION CRITERIA & WEIGHTAGES
          ───────────────────────────────────────────────────────────── */}
      <section id="pg-phd-weightage" className="section-padding bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <Layers className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>National ICAR Evaluation Norms</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              PG & Doctoral Selection Weightages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Admissions into M.Tech. and Ph.D. programmes are calculated through rigorous merit weightages combining academic track record, ICAR entrance rank, and interview performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PG Weightage Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
                    Postgraduate Selection
                  </span>
                  <h3 className="font-heading font-bold text-navy-950 text-base">
                    M.Tech. (Agricultural Engineering)
                  </h3>
                </div>
                <span className="badge badge-navy font-bold text-xs">Weightage: 30 : 70</span>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Undergraduate (UG) Academic Record</span>
                    <span className="text-navy-950">30%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>ICAR AIEEA Entrance Score / Rank</span>
                    <span className="text-navy-950">70%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-gold-500 h-3 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-xs text-purple-950 leading-relaxed">
                <strong>Subject Group Rule:</strong> The candidate applied for a subject group has to produce a qualifying rank card in that subject group only.
              </div>
            </div>

            {/* Ph.D. Weightage Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Doctoral Research Selection
                  </span>
                  <h3 className="font-heading font-bold text-navy-950 text-base">
                    Ph.D. (Agricultural Engineering)
                  </h3>
                </div>
                <span className="badge badge-navy font-bold text-xs">10 : 30 : 50 : 10</span>
              </div>

              <div className="space-y-2.5 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-0.5">
                    <span>Undergraduate (UG) Record: 10%</span>
                    <span>Postgraduate (M.Tech) Record: 30%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden flex">
                    <div className="bg-blue-400 h-2.5" style={{ width: '10%' }} />
                    <div className="bg-blue-700 h-2.5" style={{ width: '30%' }} />
                    <div className="bg-gold-500 h-2.5" style={{ width: '50%' }} />
                    <div className="bg-emerald-600 h-2.5" style={{ width: '10%' }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  <div className="p-2 bg-slate-50 rounded border border-slate-100">
                    <span className="text-slate-500 text-[11px] block">ICAR AICE Exam</span>
                    <strong className="text-navy-950 font-extrabold text-sm">50% Weightage</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded border border-slate-100">
                    <span className="text-slate-500 text-[11px] block">Personal Interview</span>
                    <strong className="text-navy-950 font-extrabold text-sm">10% Weightage</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 leading-relaxed">
                <strong>Doctoral Qualifying Requirement:</strong> Candidate must qualify and secure a rank card in ICAR AICE in the chosen specialization and clear the university interview.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ADMISSION TO FOREIGN / INTERNATIONAL STUDENTS
          ───────────────────────────────────────────────────────────── */}
      <section id="foreign-students" className="section-padding bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <Globe className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>International Student Desk</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Admission to Foreign Students
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              ANGRAU and CAE Bapatla welcome international candidates into undergraduate and postgraduate engineering degree programmes through ICAR New Delhi.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-navy-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                  <span>Application Routing & Scrutiny</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Applications must be routed through the <strong>Assistant Director General (HRD-II), Indian Council of Agricultural Research (ICAR)</strong>, Krishi Anusandhan Bhavan, New Delhi - 110012.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Submissions must include complete academic transcripts, medium of instruction certification, and a detailed research thesis proposal (for PG & Ph.D.). Applications are scrutinized by the collegiate faculty board to determine eligibility.
                </p>
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-navy-950 font-semibold">
                  <strong>Ph.D. Visa Requirement:</strong> International students admitted to the Ph.D. program must obtain a valid Research Visa from the Ministry of Education / MHRD, Government of India.
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl border-2 border-gold-400/80 p-5 space-y-3 shadow-sm">
                  <h4 className="font-heading font-bold text-navy-950 text-sm uppercase tracking-wide">
                    Institutional Fee Structure (Foreign Students)
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-700">General International Candidates:</span>
                      <strong className="text-navy-950 text-sm font-extrabold">US $ 4,000 / Year</strong>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#fdf5df] rounded-lg">
                      <span className="font-semibold text-[#854d0e]">SAARC Country Nationals:</span>
                      <strong className="text-[#854d0e] text-sm font-extrabold">US $ 2,000 / Year</strong>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    *Payable annually in addition to normal collegiate tuition and hostel charges payable by Indian students.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                    Campus Amenities for International Scholars
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>International Hostel</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Gigabit Internet / Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Digital Central Library</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Sports & Cultural Complex</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: ADMISSION, REGISTRATION & ACADEMIC SCHEDULE LIFECYCLE
          ───────────────────────────────────────────────────────────── */}
      <section id="academic-lifecycle" className="section-padding bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="container max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5df] border border-[#fae4a4] text-xs font-bold text-[#854d0e]">
              <Calendar className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Collegiate Registration Lifecycle</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
              Registration Process & Academic Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear 4-step roadmap from counseling fee payment to official academic calendar dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {collegiateLifecycle.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black text-[#d4a72c]">{item.step}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-sm mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mandatory Statutory Step</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: ONLINE ADMISSION APPLICATION & COUNSELING ENQUIRY
          ───────────────────────────────────────────────────────────── */}
      <section id="admissions-form" className="scroll-mt-24">
        <Admissions />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FREQUENTLY ASKED QUESTIONS (FAQS)
          ───────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container max-w-4xl mx-auto space-y-6">
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
              Official clarifications on eligibility, reservation policies, Form I & II requirements, international fees, and academic procedures.
            </p>
          </div>

          <div className="space-y-3">
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
