import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Admissions from '../components/Admissions';
import { GraduationCap, HelpCircle, ChevronDown, CheckCircle2, FileCheck, PhoneCall } from 'lucide-react';

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is the primary entrance qualification for B.Tech in Agricultural Engineering?",
      a: "Candidates must qualify in the State Engineering Entrance (AP EAPCET) or equivalent state/national exam with 10+2 Mathematics, Physics, and Chemistry (PCM) background."
    },
    {
      q: "Are diploma holders eligible for lateral entry admission?",
      a: "Yes, candidates holding a 3-year Diploma in Agricultural Engineering from recognized polytechnics are eligible for direct 2nd-year lateral entry through the state ECET examination."
    },
    {
      q: "What are the scholarship opportunities available for enrolled students?",
      a: "Students are eligible for Government of Andhra Pradesh Jagananna Vidya Deevena (fee reimbursement), ICAR National Talent Scholarships (NTS), and university merit-cum-means awards."
    },
    {
      q: "Is hostel accommodation guaranteed for outstation students?",
      a: "Yes, separate residential hostels are maintained for both boys and girls within the Bapatla campus with 24/7 security, Wi-Fi, and mess facilities."
    }
  ];

  return (
    <div>
      <PageBanner
        title="Admissions & Counseling Portal (2025–2026)"
        subtitle="Begin your engineering journey at one of India's premier agricultural engineering institutions. Find entrance criteria, dates, and submit an online inquiry."
        tag="Student Admissions"
        breadcrumb={[{ name: "Admissions" }]}
      />

      {/* Main Admissions Form & Contact Box */}
      <Admissions />

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

