import React from 'react';
import PageBanner from '../components/PageBanner';
import About from '../components/About';
import { useWebsite } from '../context/WebsiteContext';
import { Award, CheckCircle2, ShieldCheck, BookOpen, Compass, Target, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  const { collegeInfo } = useWebsite();

  return (
    <div>
      <PageBanner
        title="About the Institution"
        subtitle="Four decades of academic distinction, technological innovation in agricultural machinery, and rural transformation."
        tag="Institutional Profile"
        breadcrumb={[{ name: "About" }]}
      />

      {/* Main Core About Content */}
      <About />

      {/* Extended Section: Governance & Affiliation */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <ShieldCheck className="w-3.5 h-3.5" />
              Institutional Framework
            </span>
            <h2 className="section-title">Governance & University Affiliation</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              The College functions under the administrative stewardship of Acharya N.G. Ranga Agricultural University (ANGRAU) and adheres to national standards set by the Indian Council of Agricultural Research (ICAR).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center font-bold text-sm mb-3">
                01
              </div>
              <h3 className="font-bold text-navy-950 text-base mb-2">University Council</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Academic regulations, course structures, and examination frameworks are reviewed and approved by the ANGRAU Academic Council and Board of Studies.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center font-bold text-sm mb-3">
                02
              </div>
              <h3 className="font-bold text-navy-950 text-base mb-2">Research Advisory Committee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated research committees coordinate external project grants, farm trials, tractor evaluation schedules, and intellectual property filings.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center font-bold text-sm mb-3">
                03
              </div>
              <h3 className="font-bold text-navy-950 text-base mb-2">Anti-Ragging & Student Grievance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-tolerance policy towards harassment with dedicated 24/7 student grievance redressal cells, counseling mentors, and student welfare deans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
