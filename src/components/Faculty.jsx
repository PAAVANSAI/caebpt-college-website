import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, BookOpen, Award, Search, GraduationCap, MapPin, ChevronRight, Phone } from 'lucide-react';
import { facultyData } from '../data/facultyData';

export default function Faculty() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const deptFilters = [
    { label: 'All Faculty', value: 'All' },
    { label: 'Farm Machinery (FMPE)', value: 'fmpe' },
    { label: 'Soil & Water (SWCE)', value: 'swce' },
    { label: 'Irrigation & Drainage (IDE)', value: 'ide' },
    { label: 'Food Process (APFE)', value: 'apfe' },
    { label: 'Renewable Energy (REE)', value: 'ree' },
    { label: 'Basic Engg (BEAS)', value: 'beas' },
  ];

  const filteredFaculty = facultyData.filter((member) => {
    const matchesDept = selectedDept === 'All' || member.deptId === selectedDept;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="faculty" className="section-padding bg-slate-50 border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Users className="w-3.5 h-3.5" />
            Academic Mentorship
          </span>
          <h2 className="section-title">Faculty & Research Mentors</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Distinguished academicians, doctoral researchers, and industry consultants committed to
            inspiring students through rigorous scholarship and hands-on technological training.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Department Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            {deptFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setSelectedDept(f.value)}
                className={`filter-tab text-xs py-1.5 px-3.5 ${
                  selectedDept === f.value ? 'active' : ''
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty name / area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input text-xs pl-9 py-2 rounded-full border-slate-300"
            />
          </div>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="academic-card group bg-white border border-slate-200 hover:border-gold-400/80 transition-all flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Profile Image & Department Badge */}
                <div className="relative overflow-hidden bg-slate-100 pt-6 px-6 flex justify-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gold-400/80 shadow-md group-hover:scale-105 transition-transform bg-white">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/administration/dr_mogal_sardar_baig.webp";
                      }}
                    />
                  </div>
                </div>

                {/* Faculty Info */}
                <div className="p-5">
                  <div className="text-center mb-3">
                    <h3 className="font-bold text-navy-950 text-base leading-snug group-hover:text-navy-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gold-600 font-semibold mt-0.5">
                      {member.designation}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {member.department}
                    </p>
                  </div>

                  {/* Qualifications & Specialization */}
                  <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">
                        Qualifications
                      </span>
                      <span className="font-medium text-slate-800 line-clamp-2">{member.qualification}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">
                        Research Focus
                      </span>
                      <span className="text-slate-700 leading-tight block line-clamp-2">{member.specialization}</span>
                    </div>
                  </div>

                  {/* Contact & Room Details */}
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <Mail className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    {member.phone && (
                      <div className="flex items-center gap-1.5 truncate">
                        <Phone className="w-3.5 h-3.5 text-navy-600 flex-shrink-0" />
                        <span className="truncate">{member.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* View Profile Action Link */}
              <div className="px-5 pb-5 pt-0">
                <Link
                  to={`/faculty/${member.id}`}
                  className="btn btn-outline btn-sm w-full text-xs font-bold justify-center gap-1 group-hover:bg-[#0b1a2e] group-hover:text-white transition-all"
                  style={{ textDecoration: 'none' }}
                >
                  <span>View Full Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No faculty members found matching your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedDept('All');
                setSearchQuery('');
              }}
              className="btn btn-outline btn-sm mt-3"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

