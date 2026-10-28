import React, { useState, useMemo } from 'react';
import { Bell, Calendar, ArrowRight, FileText, AlertCircle, Sparkles, Search, X } from 'lucide-react';
import { noticesData } from '../data/noticesData';

export default function Notices({ onSelectNotice }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Examinations', 'Admissions', 'Academic', 'Events', 'Tenders'];

  const filteredNotices = useMemo(() => {
    return noticesData.filter((n) => {
      const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        n.title.toLowerCase().includes(query) ||
        n.summary.toLowerCase().includes(query) ||
        n.category.toLowerCase().includes(query) ||
        (n.date && n.date.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="notices" className="section-padding bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Bell className="w-3.5 h-3.5" />
            Official Circulars
          </span>
          <h2 className="section-title">Notices & Announcements</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Stay informed with the latest notifications regarding academic schedules, examinations,
            symposia, and administrative circulars.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notices by keyword, date, or category..."
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#d4a72c] focus:bg-white transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                aria-label="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-slate-500 mt-2 px-1">
              Found <strong>{filteredNotices.length}</strong> matching results for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' ? 'All Notifications' : cat}
            </button>
          ))}
        </div>

        {/* Notices List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h4 className="font-bold text-navy-950 text-base">No Notices Found</h4>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for a different keyword or select "All Notifications".
              </p>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => onSelectNotice(notice)}
                className="academic-card group p-5 border border-slate-200 hover:border-gold-400 cursor-pointer bg-white transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onSelectNotice(notice);
                }}
              >
                {/* Left Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="badge badge-gold text-[10px] font-bold">
                      {notice.category}
                    </span>
                    {notice.isNew && (
                      <span className="badge badge-new text-[10px] font-bold">
                        NEW
                      </span>
                    )}
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-navy-950 text-base group-hover:text-navy-700 transition-colors leading-snug">
                    {notice.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2">
                    {notice.summary}
                  </p>
                </div>

                {/* Right CTA */}
                <div className="flex items-center gap-3 flex-shrink-0 self-end sm:self-center">
                  <span className="text-xs text-slate-500 hidden md:inline">
                    {notice.attachmentSize}
                  </span>
                  <span className="btn btn-outline btn-sm text-xs py-1.5 px-3 group-hover:border-navy-900 group-hover:bg-navy-50">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Archive Link */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            Official archives of previous academic years can be browsed through the administrative records archive.
          </p>
        </div>
      </div>
    </section>
  );
}

