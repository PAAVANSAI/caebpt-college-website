import React from 'react';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { BookOpen, FileText, Download, Calendar, Users, Award } from 'lucide-react';

export default function PublicationsPage() {
  const { officialStructure } = useWebsite();
  const publications = officialStructure?.publications || officialStructureData.publications;

  const handleDownloadDemo = (filename) => {
    alert(`Demo Mode: Simulated download of official publication: "${filename}". In production, this links to the university digital repository.`);
  };

  return (
    <div>
      <PageBanner
        title="College Publications & Research Bulletins"
        subtitle="Technical research bulletins, extension handbooks, monographs, and annual institutional publications produced by faculty and scholars."
        tag="Scholarly Publications"
        breadcrumb={[{ name: "Publications" }]}
      />

      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 mb-2">
              {publications.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {publications.description}
            </p>

            <div className="space-y-4">
              {publications.list.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="badge badge-navy text-[10px] font-bold">{item.type}</span>
                      <span className="text-xs text-slate-400 font-medium">Year: {item.year}</span>
                      <span className="text-xs text-slate-500 font-semibold">• Dept: {item.department}</span>
                    </div>

                    <h3 className="font-bold text-navy-950 text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      <strong>Authors:</strong> {item.authors}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownloadDemo(item.docName)}
                    className="btn btn-outline btn-sm text-xs flex items-center gap-1.5 flex-shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

