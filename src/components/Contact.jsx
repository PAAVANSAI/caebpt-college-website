import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, Navigation, ExternalLink } from 'lucide-react';
import { collegeInfo } from '../data/collegeInfo';

export default function Contact({ onOpenEnquiry }) {
  return (
    <section id="contact" className="section-padding bg-white border-b border-slate-200">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <MapPin className="w-3.5 h-3.5" />
            Reach Our Campus
          </span>
          <h2 className="section-title">Contact & Location</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            We welcome inquiries from prospective scholars, research collaborators, alumni, and industry
            partners. Connect with our administrative departments or visit our Bapatla campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Campus Address Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3 text-navy-900">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-navy-950">Campus Location</h3>
                  <span className="text-xs text-slate-500">Official Institutional Address</span>
                </div>
              </div>

              <address className="not-italic text-xs sm:text-sm text-slate-700 space-y-1 pl-1">
                <strong className="text-navy-900 block font-semibold">{collegeInfo.contact.address.line1}</strong>
                <p>{collegeInfo.contact.address.line2}</p>
                <p>{collegeInfo.contact.address.district}, {collegeInfo.contact.address.state} - {collegeInfo.contact.address.pinCode}</p>
                <p>{collegeInfo.contact.address.country}</p>
              </address>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Official Domain:</span>
                <span className="font-bold text-navy-900">{collegeInfo.domain}</span>
              </div>
            </div>

            {/* Direct Telephone & Email Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Telephonic Contacts
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-navy-950 mt-0.5">
                    Main Office: {collegeInfo.contact.phone}
                  </p>
                  <p className="text-xs text-slate-600">
                    Alt Line: {collegeInfo.contact.altPhone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Electronic Mail
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-navy-950 mt-0.5">
                    {collegeInfo.contact.email}
                  </p>
                  <p className="text-xs text-slate-600">
                    Admissions: {collegeInfo.contact.admissionsEmail}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Administrative Working Hours
                  </h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    {collegeInfo.contact.officeHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Enquiry Button */}
            <button
              type="button"
              onClick={() => onOpenEnquiry({ name: 'General Information Enquiry' })}
              className="btn btn-primary btn-md w-full justify-center shadow-md text-xs sm:text-sm font-semibold"
            >
              <Send className="w-4 h-4 text-gold-300" />
              <span>Submit General Campus Enquiry</span>
            </button>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Directions */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="p-4 bg-navy-900 text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-gold-400" />
                <span className="font-semibold">Bapatla Campus Map & GPS Coordinates</span>
              </div>
              <a
                href="https://maps.google.com/?q=College+of+Agricultural+Engineering+Bapatla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 hover:text-white flex items-center gap-1 font-semibold"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="flex-1 min-h-[360px] relative bg-slate-200">
              <iframe
                title="College of Agricultural Engineering Bapatla Campus Map"
                src={collegeInfo.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Caption */}
            <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <span>Located within the lush Agricultural College Campus at Bapatla, Andhra Pradesh.</span>
              <span className="badge badge-navy text-[10px]">PIN: 522101</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

