import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  User,
  BookOpen
} from 'lucide-react';
import { collegeInfo } from '../data/collegeInfo';
import { useWebsite } from '../context/WebsiteContext';

export default function Admissions({ initialCourse = '', isModal = false, onClose = () => {} }) {
  const { addEnquiry } = useWebsite();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: initialCourse || 'B.Tech in Agricultural Engineering',
    city: '',
    qualification: 'Intermediate (10+2 / MPC)',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter student full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@example.com)';
    }

    if (!formData.course) {
      newErrors.course = 'Please select your program of interest';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm acknowledgment of application submission';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      if (addEnquiry) {
        addEnquiry({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          city: formData.city,
          message: formData.message || `Qualification: ${formData.qualification}`
        });
      }
    }, 400);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      course: 'B.Tech in Agricultural Engineering',
      city: '',
      qualification: 'Intermediate (10+2 / MPC)',
      message: '',
      consent: false,
    });
    setErrors({});
  };

  // ─────────────────────────────────────────────────────────────
  // RENDER FORM FIELDS (Spacious & Clean)
  // ─────────────────────────────────────────────────────────────
  const renderForm = () => (
    <form onSubmit={handleSubmit} noValidate className={isModal ? "space-y-3" : "space-y-4"}>
      {/* Row 1: Candidate Name & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
            Candidate Full Name <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border rounded-xl text-slate-900 transition-all ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10'
              }`}
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
            Mobile Contact Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 98765 43210"
            className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border rounded-xl text-slate-900 transition-all ${
              errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2: Email & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. candidate@example.com"
            className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border rounded-xl text-slate-900 transition-all ${
              errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-bold text-slate-700 mb-1">
            Native District / City & State
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Bapatla, Guntur, AP"
            className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10 transition-all`}
          />
        </div>
      </div>

      {/* Row 3: Program & Qualification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="course" className="block text-xs font-bold text-slate-700 mb-1">
            Program of Study <span className="text-red-600">*</span>
          </label>
          <select
            id="course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border rounded-xl text-slate-900 transition-all ${
              errors.course ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10'
            }`}
          >
            <option value="B.Tech in Agricultural Engineering">B.Tech in Agricultural Engineering (4 Years - ICAR)</option>
            <option value="Lateral Entry (Diploma Holders)">Lateral Entry B.Tech (Agri Polytechnic Diploma Holders)</option>
            <option value="M.Tech in Farm Machinery & Power">M.Tech in Farm Machinery & Power Engineering (2 Years)</option>
            <option value="M.Tech in Soil & Water Conservation">M.Tech in Soil & Water Conservation Engineering (2 Years)</option>
            <option value="M.Tech in Agricultural Process & Food Engg">M.Tech in Agricultural Process & Food Engineering (2 Years)</option>
            <option value="Ph.D. in Agricultural Engineering">Ph.D. in Agricultural Engineering (Doctoral Research)</option>
          </select>
          {errors.course && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.course}</p>}
        </div>

        <div>
          <label htmlFor="qualification" className="block text-xs font-bold text-slate-700 mb-1">
            Current / Highest Qualification
          </label>
          <select
            id="qualification"
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10 transition-all`}
          >
            <option value="Intermediate (10+2 / MPC)">Intermediate (10+2 / MPC)</option>
            <option value="Intermediate (10+2 / BiPC)">Intermediate (10+2 / BiPC)</option>
            <option value="Diploma in Agricultural Engineering (3 Yrs)">Diploma in Agricultural Engineering (3 Yrs)</option>
            <option value="B.Tech / B.E. Degree">B.Tech / B.E. Degree</option>
            <option value="M.Tech / M.Sc. Degree">M.Tech / M.Sc. Degree</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 4: Queries / Notes */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
          Specific Queries (Entrance Rank, Hostel Accommodation, Scholarships)
        </label>
        <textarea
          id="message"
          rows={isModal ? 2 : 3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Enter any questions regarding entrance cutoffs, hostel allotment, fees structure, or certificate verification..."
          className={`w-full ${isModal ? 'px-3 py-2 text-xs sm:text-sm' : 'px-3.5 py-2.5 text-xs sm:text-sm'} bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-[#0b1a2e] focus:ring-2 focus:ring-[#0b1a2e]/10 transition-all leading-relaxed`}
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-0.5">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 select-none">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 rounded text-[#0b1a2e] w-4 h-4 cursor-pointer"
          />
          <span>
            I confirm that the details provided are accurate and authorize the college admissions cell to contact me regarding counseling schedules.
          </span>
        </label>
        {errors.consent && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-gold py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold justify-center shadow-md hover:shadow-lg transition-all"
        >
          <Send className="w-4 h-4 text-[#06101e]" />
          <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application for Admission'}</span>
        </button>
      </div>

      {/* Quick Help Contacts Footer */}
      <div className="pt-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-2">
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#b88e22]" />
          <span>Admissions Helpdesk: <strong>{collegeInfo.contact.phone}</strong></span>
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-[#b88e22]" />
          <span>Email: <strong>{collegeInfo.contact.admissionsEmail}</strong></span>
        </span>
      </div>
    </form>
  );

  // ─────────────────────────────────────────────────────────────
  // SUCCESS FEEDBACK
  // ─────────────────────────────────────────────────────────────
  const renderSuccess = () => (
    <div className="p-6 sm:p-8 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-5 animate-fadeIn">
      <div className="flex items-center gap-3 text-emerald-900">
        <div className="p-2.5 bg-emerald-100 rounded-full flex-shrink-0">
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>
        <div>
          <h4 className="font-heading font-extrabold text-base sm:text-lg text-emerald-950">
            Application Registered Successfully!
          </h4>
          <p className="text-xs text-emerald-800">
            Your admission registration has been recorded and submitted to the Academic Office.
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-emerald-100 text-xs sm:text-sm space-y-2.5 text-slate-700">
        <div className="flex justify-between border-b border-slate-100 pb-1.5">
          <span className="text-slate-500">Candidate Name:</span>
          <strong className="text-navy-950">{submittedData.fullName}</strong>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-1.5">
          <span className="text-slate-500">Selected Program:</span>
          <strong className="text-navy-950">{submittedData.course}</strong>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-1.5">
          <span className="text-slate-500">Contact Number:</span>
          <strong className="text-navy-950">{submittedData.phone}</strong>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-1.5">
          <span className="text-slate-500">Email Address:</span>
          <strong className="text-navy-950">{submittedData.email}</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Native Location:</span>
          <strong className="text-navy-950">{submittedData.city || 'Bapatla / AP'}</strong>
        </div>
      </div>

      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-xs flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Admissions Cell Note:</strong> Submitted credentials will be cross-referenced with official AP EAPCET / ICAR AIEEA counseling allotments. Our admission desk will contact you with document verification schedules.
        </p>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={handleResetForm}
          className="btn btn-outline btn-sm text-xs font-bold"
        >
          Submit Another Application
        </button>
        {isModal && (
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary btn-sm text-xs font-bold ml-auto"
          >
            Close Form
          </button>
        )}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────
  // IF RENDERED INSIDE MODAL (Full Width, Spacious Box)
  // ─────────────────────────────────────────────────────────────
  if (isModal) {
    return (
      <div className="w-full">
        {submittedData ? renderSuccess() : (
          <div>
            <div className="mb-3.5 pb-2.5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-navy-950">
                  Candidate Application & Counseling Registration
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct counseling desk for B.Tech, Lateral Entry, M.Tech, and Ph.D. admissions (2025–26)
                </p>
              </div>
              <span className="badge badge-gold text-[10px] font-bold">Session 2025–26</span>
            </div>

            {renderForm()}
          </div>
        )}
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // STANDALONE PAGE VIEW (/admissions)
  // ─────────────────────────────────────────────────────────────
  return (
    <section id="admissions" className="section-padding bg-slate-50 border-b border-slate-200">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap className="w-3.5 h-3.5" />
            Enrollment Desk
          </span>
          <h2 className="section-title">Admissions & Counseling Enquiry</h2>
          <div className="academic-divider">
            <span className="academic-divider-diamond" />
          </div>
          <p className="section-subtitle">
            Take the first step toward a transformative career in agricultural engineering. Submit your
            enquiry or consult our admissions desk for counseling schedules and entrance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Form Card (Spacious 7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-950">
                  Admissions Application Form
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Academic Year 2025–2026 Admissions Session
                </p>
              </div>

              <span className="badge badge-gold text-xs font-bold">
                Admissions Active
              </span>
            </div>

            {submittedData ? renderSuccess() : renderForm()}
          </div>

          {/* Right Column: Admission Information & Helplines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b1a2e] text-white rounded-2xl p-6 sm:p-7 shadow-md border border-[#153258]">
              <span className="badge badge-gold text-[10px] uppercase font-bold mb-3">
                Official Helpdesk
              </span>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Admissions Guidance Cell
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Prospective students and parents can reach out to our admissions counseling staff during office hours for guidance on seats, eligibility, and scholarship programs.
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <Phone className="w-4 h-4 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block">Admissions Helpline</span>
                    <strong className="text-white text-sm">{collegeInfo.contact.phone}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <Mail className="w-4 h-4 text-[#d4a72c] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block">Admissions Email</span>
                    <strong className="text-white text-sm">{collegeInfo.contact.admissionsEmail}</strong>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl text-slate-300 text-[11px] leading-snug">
                  Office Hours: <strong>{collegeInfo.contact.officeHours}</strong>
                </div>
              </div>
            </div>

            {/* Admission Timeline Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h4 className="font-bold text-navy-950 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4a72c]" />
                <span>Admission Timeline (Sample Schedule)</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Application Window Opens:</span>
                  <span className="font-bold text-navy-900">June 2025</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">State Entrance Results:</span>
                  <span className="font-bold text-navy-900">July 2025</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Counseling & Verification:</span>
                  <span className="font-bold text-navy-900">August 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Commencement of Classes:</span>
                  <span className="font-bold text-navy-900">September 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
