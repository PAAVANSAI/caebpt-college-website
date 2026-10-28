import React, { useState } from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { noticesData } from '../data/noticesData';

export default function NoticeTicker({ onSelectNotice }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeNotice = (Array.isArray(noticesData) && noticesData.length > 0)
    ? (noticesData[currentIndex] || noticesData[0])
    : { title: "Academic Admissions open for 2025-26", date: "Oct 2025", isNew: true };

  const handleNext = () => {
    if (Array.isArray(noticesData) && noticesData.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % noticesData.length);
    }
  };

  return (
    <div className="bg-[#0b1a2e] border-b border-[#153258] text-white py-2.5">
      <div className="container flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Label Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 bg-[#d4a72c] text-[#06101e] px-2.5 py-1 rounded font-extrabold uppercase tracking-wide text-xs">
            <Bell className="w-3.5 h-3.5 fill-current" />
            <span>Campus Bulletins</span>
          </span>
          <span className="text-slate-400 text-xs hidden md:inline">
            Notice #{currentIndex + 1} of {(noticesData || []).length}
          </span>
        </div>

        {/* Notice text & link */}
        <div className="flex-1 min-w-[240px] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onSelectNotice?.(activeNotice)}
            className="text-left text-slate-200 hover:text-[#ecc75f] transition-colors font-medium truncate flex-1 flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
          >
            {activeNotice?.isNew && (
              <span className="badge badge-new text-[10px] py-0 px-1.5 uppercase font-bold flex-shrink-0">
                NEW
              </span>
            )}
            <span className="truncate font-medium text-slate-100">{activeNotice?.title || 'Notice Update'}</span>
            <span className="text-xs text-[#fae4a4] font-normal hidden sm:inline flex-shrink-0">
              ({activeNotice?.date || ''})
            </span>
          </button>

          {/* Next ticker button */}
          <button
            type="button"
            onClick={handleNext}
            className="p-1 rounded hover:bg-[#153258] text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs cursor-pointer bg-transparent border-0"
            title="Next Notice"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
