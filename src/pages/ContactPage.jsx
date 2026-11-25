import React from 'react';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import { MapPin, Phone, Mail, Clock, HelpCircle, Building } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact & Campus Directory"
        subtitle="Get in touch with administrative offices, academic departments, examination controllers, or visit our Bapatla campus."
        tag="Campus Communication"
        breadcrumb={[{ name: "Contact" }]}
      />

      <Contact />

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
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
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
                  <td className="py-3 px-4 font-semibold text-navy-950">Associate Dean Office</td>
                  <td className="py-3 px-4">Dr. Mogal Sardar Baig</td>
                  <td className="py-3 px-4">+91 99855 89428</td>
                  <td className="py-3 px-4 text-slate-500">ad.caebpt@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Academic Branch (UG & IT)</td>
                  <td className="py-3 px-4">Dr. S. Vishnu Vardhan</td>
                  <td className="py-3 px-4">+91 94403 63112</td>
                  <td className="py-3 px-4 text-slate-500">oam.caebpt@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Academic Branch (PG)</td>
                  <td className="py-3 px-4">Dr. B. Sreenivasula Reddy</td>
                  <td className="py-3 px-4">+91 96188 00819</td>
                  <td className="py-3 px-4 text-slate-500">oampg.caebpt@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Farm Machinery & Power Engg.</td>
                  <td className="py-3 px-4">Dr. K. V. S. Rami Reddy</td>
                  <td className="py-3 px-4">+91 94908 45917</td>
                  <td className="py-3 px-4 text-slate-500">kvs.ramireddy@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Processing & Food Engg.</td>
                  <td className="py-3 px-4">Dr. B. Sreenivasula Reddy</td>
                  <td className="py-3 px-4">+91 96188 00819</td>
                  <td className="py-3 px-4 text-slate-500">b.sreenivasulareddy@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Irrigation & Drainage Engg.</td>
                  <td className="py-3 px-4">Dr. K. Krupavathi</td>
                  <td className="py-3 px-4">+91 95338 77666</td>
                  <td className="py-3 px-4 text-slate-500">k.krupavathi@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Soil & Water Conservation</td>
                  <td className="py-3 px-4">Dr. G. Ravi Babu</td>
                  <td className="py-3 px-4">+91 98485 72321</td>
                  <td className="py-3 px-4 text-slate-500">g.ravibabu@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Renewable Energy Engg.</td>
                  <td className="py-3 px-4">Dr. S. Vishnu Vardhan</td>
                  <td className="py-3 px-4">+91 94403 63112</td>
                  <td className="py-3 px-4 text-slate-500">vishnuvardhans@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Basic Engg. & Applied Sciences</td>
                  <td className="py-3 px-4">Dr. K. Lavanya</td>
                  <td className="py-3 px-4">+91 91821 64437</td>
                  <td className="py-3 px-4 text-slate-500">k.lavanya@angrau.ac.in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-navy-950">Central Library In-Charge</td>
                  <td className="py-3 px-4">Dr. N. Ashok Kumar</td>
                  <td className="py-3 px-4">+91 80994 79129</td>
                  <td className="py-3 px-4 text-slate-500">lib.caebpt@angrau.ac.in</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 text-center md:hidden">
            ⇄ Swipe table horizontally to view all direct lines & emails
          </p>
        </div>
      </section>
    </div>
  );
}

