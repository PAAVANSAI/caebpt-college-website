import React from 'react';
import { X, Calendar, Tag, FileText, Download, AlertTriangle } from 'lucide-react';

export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  const handleDownloadCircular = () => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${notice.attachmentName || notice.title}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #111; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; }
            .crest { font-size: 20px; font-weight: bold; text-transform: uppercase; }
            .sub { font-size: 13px; color: #444; }
            .meta { display: flex; justify-content: space-between; margin-bottom: 25px; font-size: 14px; font-weight: bold; }
            .title { text-align: center; font-size: 17px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; text-transform: uppercase; }
            .content { font-size: 15px; text-align: justify; margin-bottom: 30px; }
            .sig { margin-top: 50px; text-align: right; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="no-print" style="margin-bottom: 20px; text-align: right;">
            <button onclick="window.print()" style="padding: 8px 18px; background: #0b1a2e; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Print / Save as Official PDF</button>
          </div>
          <div class="header">
            <div class="crest">COLLEGE OF AGRICULTURAL ENGINEERING, BAPATLA</div>
            <div class="sub">Acharya N.G. Ranga Agricultural University (ANGRAU)</div>
            <div class="sub">Bapatla - 522 101, Bapatla District, Andhra Pradesh, India</div>
          </div>
          <div class="meta">
            <div>Ref No: CAE/OFFICIAL/2026/${notice.id || 'CIR-01'}</div>
            <div>Date: ${notice.date || new Date().toLocaleDateString('en-IN')}</div>
          </div>
          <div class="title">CIRCULAR: ${notice.title}</div>
          <div class="content">
            <p><strong>Subject / Category:</strong> ${notice.category}</p>
            <p>${notice.summary}</p>
            <p>${notice.content}</p>
          </div>
          <div class="sig">
            <p><strong>Associate Dean & Head</strong><br>College of Agricultural Engineering<br>ANGRAU, Bapatla</p>
          </div>
        </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-modal-title"
      >
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 relative flex-shrink-0">
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
        <div className="p-6 space-y-5 flex-1 overflow-y-auto modal-body-scroll">
          {/* Body */}
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p className="font-semibold text-navy-950">
              {notice.summary}
            </p>
            <p>
              {notice.content}
            </p>
          </div>

          {/* Attachment Box (Responsive) */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-100 text-red-700 rounded-lg flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-slate-900 text-xs sm:text-sm block truncate">
                  {notice.attachmentName}
                </span>
                <span className="text-[11px] text-slate-500">
                  Official PDF Document • {notice.attachmentSize}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDownloadCircular}
              className="btn btn-navy btn-sm text-xs flex items-center gap-1.5 w-full sm:w-auto justify-center"
            >
              <Download className="w-3.5 h-3.5 text-[#f5c84c]" />
              <span>View / Download PDF</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end flex-shrink-0">
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

