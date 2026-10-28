import React from 'react';
import { X, Calendar, Tag, FileText, Download, AlertTriangle } from 'lucide-react';

export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  const handleDownloadDemo = () => {
    alert(`Demo Mode: In production, this button will download "${notice.attachmentName}" from the college server or cloud storage.`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-modal-title"
      >
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-navy-850 hover:bg-navy-700 p-1.5 rounded-full transition-colors"
            aria-label="Close Notice Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-gold text-[10px] uppercase font-bold">
              {notice.category}
            </span>
            {notice.isNew && (
              <span className="badge badge-new text-[10px] uppercase font-bold">
                NEW
              </span>
            )}
          </div>

          <h3 id="notice-modal-title" className="font-heading text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
            {notice.title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Published: <strong>{notice.date}</strong></span>
            <span className="text-slate-500">•</span>
            <span>Administrative Office</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Demo Disclaimer */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2.5 text-amber-900 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">Demonstration Notice Placeholder</strong>
              This circular is mock content created solely for UI review. It does not reflect an official university order or examination notification.
            </div>
          </div>

          {/* Body */}
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p className="font-semibold text-navy-950">
              {notice.summary}
            </p>
            <p>
              {notice.content}
            </p>
            <p className="text-xs text-slate-500">
              Official circulars released by the Principal, Academic Council, or Examination Branch will be populated here with real PDF circular attachments when connected to the live college domain.
            </p>
          </div>

          {/* Attachment Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-100 text-red-700 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-slate-900 text-xs sm:text-sm block">
                  {notice.attachmentName}
                </span>
                <span className="text-[11px] text-slate-500">
                  PDF Document • {notice.attachmentSize}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDownloadDemo}
              className="btn btn-outline btn-sm text-xs flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Circular</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary btn-sm"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
}

