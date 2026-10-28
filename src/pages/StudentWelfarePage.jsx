import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import {
  HeartHandshake,
  Building,
  Dumbbell,
  GraduationCap,
  Users,
  Globe,
  Briefcase,
  Activity,
  Award,
  ShieldAlert,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  hostels: Building,
  'sports-cultural': Dumbbell,
  scholarships: GraduationCap,
  'nss-ncc': Users,
  'international-students': Globe,
  'placement-cell': Briefcase,
  'health-clinics': Activity,
  alumni: Award,
  'anti-ragging': ShieldAlert,
  'sc-st-cell': Users,
  'women-protection': ShieldCheck,
  library: BookOpen,
};

export default function StudentWelfarePage() {
  const { activitySlug } = useParams();
  const { officialStructure } = useWebsite();
  const welfareList = officialStructure?.welfare || officialStructureData.welfare;

  const currentActivity = activitySlug
    ? welfareList.find((w) => w.slug === activitySlug) || welfareList[0]
    : null;

  return (
    <div>
      <PageBanner
        title="Student's Welfare Activities"
        subtitle="Holistic support services nurturing health, residential comfort, scholarships, placements, inclusive safety, and sports."
        tag="Student Welfare"
        breadcrumb={[
          { name: "Student's Welfare", link: currentActivity ? "/student-welfare" : null },
          ...(currentActivity ? [{ name: currentActivity.name }] : [])
        ]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-6xl mx-auto space-y-8">
          {/* If viewing a single activity */}
          {currentActivity ? (
            <div className="space-y-6">
              {/* Activity Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {welfareList.map((w) => (
                  <Link
                    key={w.id}
                    to={`/student-welfare/${w.slug}`}
                    className={`filter-tab text-xs font-bold whitespace-nowrap ${
                      w.slug === currentActivity.slug ? 'active' : ''
                    }`}
                    style={{ textDecoration: 'none' }}
                  >
                    {w.name}
                  </Link>
                ))}
              </div>

              {/* Single Activity Detail Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="badge badge-gold text-xs font-bold uppercase mb-1">Welfare Activity</span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {currentActivity.title}
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-[#d4a72c]" />
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {currentActivity.summary}
                </p>

                <div>
                  <h3 className="font-bold text-navy-950 text-base mb-3">Key Highlights & Provisions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(currentActivity?.features || []).map((feat, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                  <Link
                    to="/student-welfare"
                    className="btn btn-outline btn-sm text-xs font-bold"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View All 12 Welfare Activities</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Overview: Grid of all 12 Mandatory Welfare Activities */
            <div>
              <div className="section-header">
                <span className="section-tag">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  All Welfare Divisions
                </span>
                <h2 className="section-title">Comprehensive Student Services</h2>
                <div className="academic-divider">
                  <span className="academic-divider-diamond" />
                </div>
                <p className="section-subtitle">
                  Click any activity to view dedicated details, contact helplines, and student provisions:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {welfareList.map((w) => {
                  const Icon = iconMap[w.slug] || HeartHandshake;
                  return (
                    <Link
                      key={w.id}
                      to={`/student-welfare/${w.slug}`}
                      className="academic-card p-6 bg-white border border-slate-200 hover:border-[#d4a72c] transition-all flex flex-col justify-between group"
                      style={{ textDecoration: 'none' }}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6 text-[#d4a72c]" />
                        </div>
                        <h3 className="font-heading text-lg font-extrabold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                          {w.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {w.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b1a2e] group-hover:text-[#854d0e] transition-colors">
                        <span>Explore Section</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

