import React from 'react';
import PageBanner from '../components/PageBanner';
import Facilities from '../components/Facilities';
import { Building2, ShieldCheck, Wifi, Coffee, BookOpen, Dumbbell, Bus } from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <div>
      <PageBanner
        title="Campus Infrastructure & Facilities"
        subtitle="Explore our sprawling green campus equipped with specialized testing bays, computerized simulation suites, and rich student living amenities."
        tag="Campus Resources"
        breadcrumb={[{ name: "Facilities" }]}
      />

      <Facilities />

      {/* Student Life & Amenities Grid */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Building2 className="w-3.5 h-3.5" />
              Living on Campus
            </span>
            <h2 className="section-title">Student Welfare & Campus Amenities</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              A self-contained residential academic environment nurturing physical health, intellectual inquiry, and social camaraderie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center mx-auto mb-3">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-950 text-sm mb-1">High-Speed Wi-Fi</h3>
              <p className="text-xs text-slate-600">Gigabit optical-fiber connectivity across all classrooms, laboratories, and hostel rooms.</p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-950 text-sm mb-1">Cafeteria & Mess</h3>
              <p className="text-xs text-slate-600">Hygienic vegetarian and non-vegetarian balanced dietary meals supervised by student committees.</p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center mx-auto mb-3">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-950 text-sm mb-1">Fitness Gymnasium</h3>
              <p className="text-xs text-slate-600">Modern multi-station workout apparatus and indoor recreational table tennis and badminton halls.</p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center mx-auto mb-3">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-950 text-sm mb-1">Campus Transport</h3>
              <p className="text-xs text-slate-600">Institutional transport shuttles connecting campus with Bapatla railway station and city hubs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

