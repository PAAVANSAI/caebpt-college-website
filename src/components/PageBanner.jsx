import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function PageBanner({ title, subtitle, tag = "Academic Portal", breadcrumb = [] }) {
  return (
    <div className="relative bg-[#06101e] text-white py-10 sm:py-14 overflow-hidden border-b border-[#153258]">
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(212, 167, 44, 0.4) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)',
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101e] via-[#0b1a2e]/90 to-[#06101e]" />
      </div>

      <div className="container relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 flex-wrap" aria-label="Breadcrumb">
          <Link
            to="/"
            className="flex items-center gap-1 text-slate-300 hover:text-[#ecc75f] transition-colors"
            style={{ textDecoration: 'none' }}
          >
            <Home className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Home</span>
          </Link>

          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {item.link ? (
                <Link
                  to={item.link}
                  className="text-slate-300 hover:text-[#ecc75f] transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-[#fae4a4] font-medium">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0b1a2e] border border-[#d4a72c]/40 text-[#fae4a4] text-[11px] font-bold uppercase tracking-wider mb-2.5">
          <Sparkles className="w-3 h-3 text-[#d4a72c]" />
          <span>{tag}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
