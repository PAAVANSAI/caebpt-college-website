import React from 'react';
import { X, CheckCircle2, ShieldCheck, Globe, Server, FileEdit, ArrowRight } from 'lucide-react';
import { collegeInfo } from '../data/collegeInfo';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-navy-850 hover:bg-navy-700 p-1.5 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold-400/20 text-gold-300 text-xs font-bold uppercase mb-2 border border-gold-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Management Demo Overview</span>
          </div>

          <h3 id="demo-modal-title" className="font-heading text-lg font-bold text-white mb-1">
            College Website Demo Architecture
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm">
            Target Domain: <strong className="text-gold-300">{collegeInfo.domain}</strong> • Built with React & Vite
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-slate-700 text-xs sm:text-sm">
          {/* Section 1: Modular Configuration */}
          <div className="space-y-2">
            <h4 className="font-bold text-navy-950 flex items-center gap-2 text-sm uppercase tracking-wider">
              <FileEdit className="w-4 h-4 text-gold-500" />
              <span>1. Editable Information Sources</span>
            </h4>
            <p className="text-slate-600">
              All data shown on this website is separated into clean, modular JavaScript data files located under <code className="bg-slate-100 px-1 py-0.5 rounded text-navy-800">src/data/</code>:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <li className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong>collegeInfo.js</strong>: Phone, email, address, vision, and Principal's message.
              </li>
              <li className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong>academicsData.js</strong>: Degrees, syllabi, durations, and department focus areas.
              </li>
              <li className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong>facultyData.js</strong>: Faculty directory, designations, and research areas.
              </li>
              <li className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong>noticesData.js</strong>: Circulars, exam dates, and circular attachments.
              </li>
              <li className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong>facilitiesData.js</strong>: Laboratory, classroom, and hostel amenities.
              </li>
              <li className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <strong>galleryData.js</strong>: Campus photographs, events, and fieldwork imagery.
              </li>
            </ul>
          </div>

          {/* Section 2: Domain Connection to caebpt.ac.in */}
          <div className="space-y-2">
            <h4 className="font-bold text-navy-950 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Globe className="w-4 h-4 text-gold-500" />
              <span>2. Connecting the caebpt.ac.in Domain</span>
            </h4>
            <p className="text-slate-600">
              Because this website is compiled into pure static HTML/CSS/JS with zero backend server dependencies, it can be hosted permanently on <strong>Cloudflare Pages</strong> or <strong>GitHub Pages</strong> with free SSL encryption:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-600">
              <li>Run <code className="bg-slate-100 px-1 rounded text-navy-800">npm run build</code> to produce the optimized <code className="bg-slate-100 px-1 rounded text-navy-800">dist/</code> folder.</li>
              <li>Upload the <code className="bg-slate-100 px-1 rounded text-navy-800">dist/</code> folder to Cloudflare Pages.</li>
              <li>In Cloudflare Pages, go to <strong>Custom Domains</strong> and add <code className="bg-slate-100 px-1 rounded text-navy-800">caebpt.ac.in</code>.</li>
              <li>Add the provided CNAME DNS record in your official domain registrar without modifying existing email (MX) settings.</li>
            </ol>
          </div>

          {/* Section 3: Safety & Compliance */}
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-emerald-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Security & Non-Interference:</strong> No live DNS, nameserver, or live server configurations have been altered during this demo build. All testing is strictly local.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary btn-sm"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

