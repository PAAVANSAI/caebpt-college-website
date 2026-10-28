import React from 'react';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import { MapPin, Phone, Mail, Clock, HelpCircle, Building } from 'lucide-react';

export default function ContactPage({ onOpenEnquiry }) {
  return (
    <div>
      <PageBanner
        title="Contact & Campus Directory"
        subtitle="Get in touch with administrative offices, academic departments, examination controllers, or visit our Bapatla campus."
        tag="Campus Communication"
        breadcrumb={[{ name: "Contact" }]}
      />

      <Contact onOpenEnquiry={onOpenEnquiry} />

      {/* Internal Phone Directory Table */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Phone className="w-3.5 h-3.5" />
              Direct Extensions
            </span>
            <h2 className="section-title">Departmental Directory</h2>
            <div className="academic-divider">
              <span className="academic-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Quick administrative and departmental extensions for immediate assistance during working hours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0b1a2e] text-white">
                <tr>
                  <th className="py-3 px-4 font-bold">Office / Department</th>
                  <th className="py-3 px-4 font-bold">In-Charge</th>
                  <th className="py-3 px-4 font-bold">Direct Telephone</th>
                  <th className="py-3 px-4 font-bold">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Dean / Principal Office</td>
                  <td className="py-3 px-4">Dr. K. S. Rao</td>
                  <td className="py-3 px-4">+91 8643 224025</td>
                  <td className="py-3 px-4 text-slate-500">principal.cae@caebpt.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Academic & Exam Branch</td>
                  <td className="py-3 px-4">Controller of Exams</td>
                  <td className="py-3 px-4">+91 8643 224026</td>
                  <td className="py-3 px-4 text-slate-500">exams@caebpt.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Farm Machinery & Power</td>
                  <td className="py-3 px-4">Dr. P. V. Ramana</td>
                  <td className="py-3 px-4">+91 8643 224027</td>
                  <td className="py-3 px-4 text-slate-500">head.fmpe@caebpt.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Soil & Water Conservation</td>
                  <td className="py-3 px-4">Dr. M. S. Reddy</td>
                  <td className="py-3 px-4">+91 8643 224028</td>
                  <td className="py-3 px-4 text-slate-500">head.swce@caebpt.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Central Library In-Charge</td>
                  <td className="py-3 px-4">Librarian Office</td>
                  <td className="py-3 px-4">+91 8643 224029</td>
                  <td className="py-3 px-4 text-slate-500">library@caebpt.ac.in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

