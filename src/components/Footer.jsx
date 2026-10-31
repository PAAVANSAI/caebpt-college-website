import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Globe, Mail, Phone, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import CollegeEmblem from './CollegeEmblem';
import { useWebsite } from '../context/WebsiteContext';

export default function Footer() {
  const { collegeInfo, departments } = useWebsite();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2025;

  return (
    <footer className="bg-[#06101e] text-slate-300 border-t-2 border-[#b88e22]">
      {/* Upper Main Footer */}
      <div className="container py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CollegeEmblem size={52} />
              <div>
                <span className="font-heading font-bold text-white text-base leading-tight block">
                  COLLEGE OF AGRICULTURAL ENGINEERING
                </span>
                <span className="text-[#ecc75f] font-semibold text-xs tracking-wider uppercase block">
                  Bapatla • {collegeInfo?.domain || 'caebpt.ac.in'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              A premier constituent college of Acharya N.G. Ranga Agricultural University (ANGRAU),
              established in 1983 to advance farm mechanization, micro-irrigation systems, post-harvest
              food engineering, and sustainable agrarian solutions.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Domain: <strong className="text-[#fae4a4]">{collegeInfo?.domain || 'caebpt.ac.in'}</strong></div>
              <div>Affiliation: <span className="text-slate-300">ANGRAU, Andhra Pradesh</span></div>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ecc75f] border-b border-[#153258] pb-2">
              Official Structure
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Administration', path: '/administration' },
                { name: 'Academics', path: '/academics' },
                { name: "Student's Welfare", path: '/student-welfare' },
                { name: 'Publications', path: '/publications' },
                { name: 'Photo & Video Gallery', path: '/gallery' },
                { name: 'Circulars & Notices', path: '/notices' },
                { name: 'Contact Campus', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-[#ecc75f] transition-colors flex items-center gap-1.5"
                    style={{ textDecoration: 'none' }}
                  >
                    <ChevronRight className="w-3 h-3 text-[#d4a72c]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ecc75f] border-b border-[#153258] pb-2">
              Engineering Wings
            </h4>
            <ul className="space-y-2 text-xs">
              {(Array.isArray(departments) ? departments : []).map((d) => (
                <li key={d.id}>
                  <Link
                    to="/academics/departments"
                    className="text-slate-400 hover:text-[#ecc75f] transition-colors flex items-center gap-1.5"
                    style={{ textDecoration: 'none' }}
                  >
                    <ChevronRight className="w-3 h-3 text-[#d4a72c]" />
                    <span className="truncate">{d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="badge badge-navy text-[10px]">
                Undergraduate • Postgraduate • Ph.D.
              </span>
            </div>
          </div>

          {/* Col 4: Campus Contact & Admin (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ecc75f] border-b border-[#153258] pb-2">
              Campus Desk
            </h4>
            <address className="not-italic text-xs text-slate-400 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ecc75f] flex-shrink-0 mt-0.5" />
                <span>Agricultural College Campus, Bapatla, AP - 522101</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ecc75f] flex-shrink-0" />
                <span>{collegeInfo?.contact?.phone || '+91 8643 224025'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ecc75f] flex-shrink-0" />
                <span className="truncate">{collegeInfo?.contact?.email || 'principal.cae@caebpt.ac.in'}</span>
              </div>
            </address>

            <div className="pt-3 space-y-2">
              <Link
                to="/admin"
                className="btn btn-gold btn-sm text-[11px] w-full justify-center font-bold flex items-center gap-1.5"
                style={{ textDecoration: 'none' }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#06101e]" />
                <span>Administrator Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#030810] border-t border-[#0b1a2e] py-5 text-xs text-slate-400">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p>
              © {currentYear} College of Agricultural Engineering, Bapatla. Domain: <strong>{collegeInfo?.domain || 'caebpt.ac.in'}</strong>.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Multi-page academic portal with live administrative traffic and content control.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0b1a2e] hover:bg-[#d4a72c] hover:text-[#06101e] text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-medium"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
