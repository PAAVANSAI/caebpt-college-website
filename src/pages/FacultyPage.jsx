import React from 'react';
import PageBanner from '../components/PageBanner';
import Faculty from '../components/Faculty';
import { Users, GraduationCap, Award, BookOpen, Mail } from 'lucide-react';
import { useWebsite } from '../context/WebsiteContext';

export default function FacultyPage() {
  const { faculty } = useWebsite();

  return (
    <div>
      <PageBanner
        title="Faculty Directory & Research Mentors"
        subtitle="Meet our dedicated team of professors, research supervisors, and technical experts guiding future agricultural engineers."
        tag="Academic Mentorship"
        breadcrumb={[{ name: "Faculty" }]}
      />

      <Faculty />

      {/* Research & Publications Overview */}
      <section className="section-padding bg-white border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Award className="w-3.5 h-3.5" />
              Scholarly Impact
            </span>
            <h2 className="section-title">Academic & Research Contributions</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Our faculty members regularly publish in leading international agronomic and engineering journals and mentor state and national research fellowships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-3xl font-extrabold text-[#0b1a2e] font-heading block mb-1">
                {faculty.length}
              </span>
              <span className="text-xs font-semibold text-slate-600">Active Faculty Members</span>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-3xl font-extrabold text-[#0b1a2e] font-heading block mb-1">
                100%
              </span>
              <span className="text-xs font-semibold text-slate-600">Doctoral & Post-Graduate Qualified</span>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-3xl font-extrabold text-[#0b1a2e] font-heading block mb-1">
                180+
              </span>
              <span className="text-xs font-semibold text-slate-600">Published Research Papers</span>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-3xl font-extrabold text-[#0b1a2e] font-heading block mb-1">
                12+
              </span>
              <span className="text-xs font-semibold text-slate-600">Sponsored Farm Projects</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

