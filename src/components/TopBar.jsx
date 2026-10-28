import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Globe, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useWebsite } from '../context/WebsiteContext';

export default function TopBar({ onOpenDemoInfo }) {
  const { collegeInfo } = useWebsite();

  return (
    <div className="bg-[#06101e] text-slate-300 border-b border-[#153258] text-xs py-2">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Domain & Affiliation */}
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex items-center gap-1.5 text-[#ecc75f] font-semibold tracking-wide">
            <Globe className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Official Domain: {collegeInfo.domain}</span>
            <span className="text-slate-500 font-normal hidden sm:inline">•</span>
            <span className="text-slate-200 font-normal hidden sm:inline">{collegeInfo.subTitle}</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-slate-300 border-l border-slate-700 pl-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon - Sat: 9 AM - 5 PM</span>
            </span>
          </div>
        </div>

        {/* Right: Contact & Admin Direct Access */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href={`tel:${collegeInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-200 hover:text-[#ecc75f] transition-colors"
            style={{ textDecoration: 'none' }}
          >
            <Phone className="w-3.5 h-3.5 text-[#ecc75f]" />
            <span>{collegeInfo.contact.phone}</span>
          </a>

          {/* Admin Control Link */}
          <Link
            to="/admin"
            className="flex items-center gap-1.5 bg-[#d4a72c] hover:bg-[#ecc75f] text-[#06101e] px-3 py-1 rounded-full text-xs font-bold transition-all shadow-xs"
            title="Administrator Control Panel (Traffic, Content, Notices)"
            style={{ textDecoration: 'none' }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#06101e]" />
            <span>Admin Portal</span>
          </Link>

          {/* Demo Guide Button */}
          <button
            onClick={onOpenDemoInfo}
            type="button"
            className="flex items-center gap-1.5 bg-[#d4a72c]/20 hover:bg-[#d4a72c]/30 text-[#fae4a4] border border-[#d4a72c]/50 px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer"
            title="Click to view instructions for college management review"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#ecc75f]" />
            <span className="hidden sm:inline">Demo Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}

