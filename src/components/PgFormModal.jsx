import React, { useRef } from 'react';
import { X, Printer, Download, FileText, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function PgFormModal({ form, onClose }) {
  const printRef = useRef(null);

  if (!form) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto">
      {/* Print-specific style overrides */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #pg-form-printable, #pg-form-printable * {
            visibility: visible;
          }
          #pg-form-printable {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 12mm 15mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: A4;
            margin: 10mm;
          }
        }
      `}</style>

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 print:my-0 print:border-none print:shadow-none print:rounded-none">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print bg-[#0b1a2e] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2 py-0.5 rounded bg-[#f5c84c] text-[#06101e] font-mono font-extrabold text-xs">
              {form.form}
            </span>
            <div className="truncate">
              <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                {form.name}
              </h3>
              <p className="text-[11px] text-slate-300 truncate">
                ANGRAU Statutory PG Proforma • Dr. NTR CAE Bapatla
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#d4a72c] hover:bg-[#ecc75f] text-[#06101e] text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              title="Print this official proforma on A4 paper"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Proforma</span>
            </button>

            <a
              href="/documents/academics/ANGRAU_PG_Forms.pdf"
              download="ANGRAU_Official_PG_Forms_Booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-white/20"
              style={{ textDecoration: 'none' }}
              title="Download 40-page official booklet"
            >
              <Download className="w-3.5 h-3.5 text-[#f5c84c]" />
              <span className="hidden sm:inline">Complete PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close form modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Proforma Sheet Container */}
        <div className="max-h-[82vh] overflow-y-auto p-4 sm:p-8 bg-slate-100 print:bg-white print:max-h-none print:p-0 print:overflow-visible">
          <div
            id="pg-form-printable"
            ref={printRef}
            className="w-full max-w-[800px] mx-auto bg-white p-6 sm:p-10 shadow-lg border border-slate-300 text-slate-900 font-serif leading-relaxed print:shadow-none print:border-none print:p-0 text-xs sm:text-[13px]"
          >
            {/* Header: Apex University & Form Badge */}
            <div className="text-center relative pb-3 border-b-2 border-black mb-5">
              <div className="absolute right-0 top-0 text-right">
                <span className="font-sans font-bold text-sm sm:text-base tracking-wide border-2 border-black px-2 py-0.5 inline-block">
                  {form.form.replace('PG Form', 'P.G. -').replace('PG ', 'P.G. ')}
                </span>
              </div>
              <h1 className="font-bold text-base sm:text-lg tracking-wider uppercase text-black font-sans">
                ACHARYA N.G. RANGA AGRICULTURAL UNIVERSITY
              </h1>
              <p className="text-[11px] font-sans text-slate-700 tracking-wide mt-0.5">
                ADMINISTRATIVE CAMP OFFICE: LAM, GUNTUR - 522 034 (A.P.)
              </p>
              <h2 className="font-bold text-xs sm:text-sm uppercase tracking-wide text-black mt-3 font-sans">
                {form.name}
              </h2>
              {form.copies && (
                <p className="text-[11px] italic font-sans text-slate-800 mt-1">
                  ({form.copies})
                </p>
              )}
              {form.timeline && (
                <p className="text-[11px] font-bold font-sans text-black mt-0.5">
                  Timeline: {form.timeline}
                </p>
              )}
            </div>

            {/* Standard Student Particulars (Common across ANGRAU PG Forms) */}
            <div className="space-y-2 mb-5 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">Name of the Student:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]"></span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">I.D. No.:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]"></span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">Degree:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]">M.Tech / Ph.D.</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">Department:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]"></span>
                </div>
                <div className="flex items-baseline gap-2 sm:col-span-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">College:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]">
                    Dr. NTR College of Agricultural Engineering, Bapatla
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">Date of Admission:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]"></span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">Academic Year & Semester:</span>
                  <span className="flex-1 border-b border-dotted border-slate-600 min-h-[18px]"></span>
                </div>
                <div className="flex items-baseline gap-2 sm:col-span-2">
                  <span className="font-semibold text-slate-800 whitespace-nowrap">Category:</span>
                  <span className="text-[11px] text-slate-700">
                    [ &nbsp; ] Fresh &nbsp;&nbsp;&nbsp; [ &nbsp; ] In-service &nbsp;&nbsp;&nbsp; [ &nbsp; ] Nominee of Govt./ICAR &nbsp;&nbsp;&nbsp; [ &nbsp; ] Foreign Student
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic Official Section Content Tailored to the Selected Form */}
            <div className="my-5 font-sans">
              {/* PG-1: CONSTITUTION OF ADVISORY COMMITTEE */}
              {(form.form.includes('PG Form 1') && !form.form.includes('1-A')) && (
                <div className="space-y-4">
                  <p className="text-[11px] italic text-slate-700">
                    Note: Advisory Committee (M.Sc./M.Tech: 2 from major field + 1 from minor field; Ph.D.: 2 from major field + 1 from minor field + 1 from supporting field. If extra members are needed, request with proper justification should be sent to Dean PGS).
                  </p>
                  <table className="w-full text-xs border border-black border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-50 border-b border-black">
                        <th className="border-r border-black p-2 font-bold w-28">Role</th>
                        <th className="border-r border-black p-2 font-bold w-44">Name of Faculty</th>
                        <th className="border-r border-black p-2 font-bold w-36">Designation</th>
                        <th className="border-r border-black p-2 font-bold">Department / Major Field</th>
                        <th className="p-2 font-bold w-24">Signature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Chairperson', 'Member 1 (Major)', 'Member 2 (Minor)', 'Member 3 (Supporting/Ph.D)'].map((role, idx) => (
                        <tr key={idx} className="border-b border-black h-10">
                          <td className="border-r border-black p-2 font-semibold">{role}</td>
                          <td className="border-r border-black p-2"></td>
                          <td className="border-r border-black p-2"></td>
                          <td className="border-r border-black p-2"></td>
                          <td className="p-2"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-3 bg-slate-50 border border-slate-300 rounded text-[11px] space-y-1">
                    <strong>Certified that:</strong>
                    <ol className="list-decimal pl-4 space-y-0.5">
                      <li>The Chairperson is eligible / accredited to guide M.Tech / Ph.D. students.</li>
                      <li>The total number of students being guided by the Chairperson is ______ M.Tech and ______ Ph.D. students (Maximum 4 students).</li>
                    </ol>
                    <p className="italic text-slate-600 pt-1">
                      Note: If there is any deviation from regulations, furnish reasons and justification on separate sheet.
                    </p>
                  </div>
                </div>
              )}

              {/* PG-1-A: CHANGE IN ADVISORY COMMITTEE */}
              {form.form.includes('1-A') && (
                <div className="space-y-4">
                  <table className="w-full text-xs border border-black border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-50 border-b border-black">
                        <th className="border-r border-black p-2 font-bold w-1/3">Existing Chairperson / Member</th>
                        <th className="border-r border-black p-2 font-bold w-1/3">Proposed Chairperson / Member</th>
                        <th className="p-2 font-bold w-1/3">Reasons for Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-black h-14">
                        <td className="border-r border-black p-2 align-top"></td>
                        <td className="border-r border-black p-2 align-top"></td>
                        <td className="p-2 align-top"></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="border border-slate-300 p-2.5 rounded space-y-1 text-[11px]">
                      <div>Whether synopsis was approved: <strong>Yes / No</strong></div>
                      <div>If due to transfer, willing to guide from new location: <strong>Yes / No</strong></div>
                      <div>Willingness of Proposed Guide: <strong>Yes / No</strong></div>
                    </div>
                    <div className="border border-slate-300 p-2.5 rounded text-[11px]">
                      <strong>Progress of Research:</strong>
                      <p className="text-slate-600 mt-1">Literature collection / Field trials / Data collection / Analysis / Thesis writing</p>
                    </div>
                  </div>
                </div>
              )}

              {/* PG-2: PROPOSED PROGRAMME OF STUDIES */}
              {(form.form === 'PG Form 2' || form.form === 'PG Form 2-A') && (
                <div className="space-y-4">
                  <table className="w-full text-xs border border-black border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-50 border-b border-black">
                        <th className="border-r border-black p-2 font-bold w-24">Course No.</th>
                        <th className="border-r border-black p-2 font-bold">Title of the Course</th>
                        <th className="border-r border-black p-2 font-bold w-24 text-center">Credits (Th+Pr)</th>
                        <th className="p-2 font-bold w-28 text-center">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: 'Core Courses', count: 3 },
                        { cat: 'Non-Core / Major Subject', count: 2 },
                        { cat: 'Minor Subject', count: 2 },
                        { cat: 'Supporting Subject', count: 1 },
                        { cat: 'Compulsory Non-Credit', count: 2 },
                        { cat: 'Research / Seminar', count: 1 }
                      ].map((grp, gIdx) => (
                        <React.Fragment key={gIdx}>
                          <tr className="bg-slate-100 font-bold border-b border-black text-[11px]">
                            <td colSpan={4} className="p-1 px-2">{grp.cat}</td>
                          </tr>
                          {Array.from({ length: grp.count }).map((_, rIdx) => (
                            <tr key={rIdx} className="border-b border-slate-300 h-7">
                              <td className="border-r border-black p-1"></td>
                              <td className="border-r border-black p-1"></td>
                              <td className="border-r border-black p-1 text-center"></td>
                              <td className="p-1 text-center text-[10px] text-slate-500">{grp.cat.split(' ')[0]}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-2.5 bg-slate-50 border border-slate-300 rounded text-[10.5px] text-slate-700 leading-snug">
                    <strong>Statutory Note:</strong> Courses registered without approval of Dean PG Studies will not be counted for grade computation. Temporary change permitted up to 2 weeks of semester commencement; withdrawal up to 6 weeks (PG Form 2-A). Addition allowed up to end of II semester; deletion/substitution up to 15 days in III semester.
                  </div>
                </div>
              )}

              {/* PG-3: SYNOPSIS OF THESIS PROBLEM */}
              {(form.form === 'PG Form 3' || form.form === 'PG Form 3-A') && (
                <div className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <strong className="block text-black">1. Title of the Research Problem:</strong>
                    <div className="border border-slate-400 p-2 min-h-[40px] rounded bg-white"></div>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-black">2. Objectives of the Investigation:</strong>
                    <div className="border border-slate-400 p-2 min-h-[40px] rounded bg-white"></div>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-black">3. Brief Resume of Work Done in India & Abroad:</strong>
                    <div className="border border-slate-400 p-2 min-h-[40px] rounded bg-white"></div>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-black">4. Technical Programme of Work:</strong>
                    <div className="border border-slate-400 p-2 min-h-[40px] rounded bg-white text-[11px] text-slate-500">
                      (Location of trials, collaboration with departments/institutions, field & lab methods)
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-300 rounded text-[11px] space-y-1">
                    <div className="font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Statutory Anti-Duplication Certification:</span>
                    </div>
                    <p className="italic text-slate-800">
                      "I hereby certify that the proposed research work is not a copy or duplication of other's research work. Mandatory time gap between submission of synopsis & thesis is 1 semester for M.Tech and 2 semesters for Ph.D."
                    </p>
                  </div>
                </div>
              )}

              {/* DEFAULT STRUCTURED SECTION FOR OTHER FORMS */}
              {!form.form.includes('PG Form 1') && !form.form.includes('PG Form 2') && !form.form.includes('PG Form 3') && (
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 border border-slate-300 rounded space-y-1.5">
                    <div className="font-bold text-black text-xs uppercase tracking-wide">
                      Statutory Regulatory Specifications:
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {form.purpose}
                    </p>
                  </div>

                  {/* Template Table */}
                  <table className="w-full text-xs border border-black border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-100 border-b border-black">
                        <th className="border-r border-black p-2 font-bold w-12 text-center">Sl.</th>
                        <th className="border-r border-black p-2 font-bold">Item Description / Prescribed Academic Record</th>
                        <th className="border-r border-black p-2 font-bold w-36 text-center">Particulars / Status</th>
                        <th className="p-2 font-bold w-32 text-center">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        'Course Work Credits Programmed & Completed',
                        'Research Credits Completed & Evaluated',
                        'Overall Grade Point Average (OGPA) Secured',
                        'Comprehensive Qualifying Examination Passed',
                        'Approval of Thesis Title & Advisory Committee',
                        'Submission of Prescribed Enclosures & Fee Receipts'
                      ].map((item, iIdx) => (
                        <tr key={iIdx} className="border-b border-slate-300 h-8">
                          <td className="border-r border-black p-2 text-center font-mono">{iIdx + 1}</td>
                          <td className="border-r border-black p-2 font-medium">{item}</td>
                          <td className="border-r border-black p-2 text-center text-slate-400">...................</td>
                          <td className="p-2 text-center text-slate-400">...................</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Statutory Certification & Signatures Hierarchy */}
            <div className="mt-8 pt-4 border-t-2 border-black space-y-6 font-sans">
              <div className="flex justify-between items-end pt-3">
                <div className="text-center w-48">
                  <div className="border-b border-dotted border-black min-h-[30px]"></div>
                  <span className="font-bold text-[11px] text-black block mt-1">Signature of the Student</span>
                  <span className="text-[10px] text-slate-500">Date: ......................</span>
                </div>
                <div className="text-center w-48">
                  <div className="border-b border-dotted border-black min-h-[30px]"></div>
                  <span className="font-bold text-[11px] text-black block mt-1">Chairperson / Major Advisor</span>
                  <span className="text-[10px] text-slate-500">(Name & Designation)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-300 text-center text-xs">
                <div>
                  <div className="border-b border-dotted border-black min-h-[30px]"></div>
                  <strong className="block text-[11px] text-black mt-1">Head of the Department</strong>
                  <span className="text-[10px] text-slate-500">College of Agricultural Engg.</span>
                </div>
                <div>
                  <div className="border-b border-dotted border-black min-h-[30px]"></div>
                  <strong className="block text-[11px] text-black mt-1">Academic Advisor (PG)</strong>
                  <span className="text-[10px] text-slate-500">Postgraduate Academic Cell</span>
                </div>
                <div className="sm:col-span-1 col-span-2">
                  <div className="border-b border-dotted border-black min-h-[30px]"></div>
                  <strong className="block text-[11px] text-black mt-1">Associate Dean</strong>
                  <span className="text-[10px] text-slate-500">Dr. NTR CAE Bapatla</span>
                </div>
              </div>

              {/* Endorsement for Dean PGS */}
              <div className="mt-4 p-3 bg-slate-50 border border-slate-400 rounded text-center text-xs space-y-1">
                <div className="font-bold tracking-wider uppercase text-[11px] text-slate-800">
                  (FOR USE IN THE OFFICE OF THE DEAN OF POST GRADUATE STUDIES, ANGRAU)
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-600 px-4 pt-2">
                  <span>Endt. No.: ....................................................</span>
                  <span>Dated: ....................................</span>
                </div>
                <p className="text-[11px] font-semibold text-black pt-2">
                  APPROVED / RETURNED WITH REMARKS
                </p>
                <div className="pt-6 flex justify-end">
                  <div className="text-center w-56">
                    <strong className="block font-bold text-black text-xs">DEAN OF POST GRADUATE STUDIES</strong>
                    <span className="text-[10.5px] text-slate-600">ANGRAU, Lam, Guntur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official University Footnote */}
            <div className="mt-6 pt-3 border-t border-slate-200 flex justify-between items-center text-[10px] font-sans text-slate-500">
              <span>Dr. NTR College of Agricultural Engineering, Bapatla</span>
              <span>Constituent College of ANGRAU • Form Ref: {form.form}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer (Hidden when printing) */}
        <div className="no-print bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Click <strong>Print Proforma</strong> to generate a clean A4 printout or save as PDF.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-gold btn-sm text-xs font-bold flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Form</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline btn-sm text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

