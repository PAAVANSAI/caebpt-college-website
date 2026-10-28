import React from 'react';
import PageBanner from '../components/PageBanner';
import { useWebsite } from '../context/WebsiteContext';
import { officialStructureData } from '../data/officialStructureData';
import { BookOpen, FileText, Download, Calendar, Users, Award } from 'lucide-react';

export default function PublicationsPage() {
  const { officialStructure } = useWebsite();
  const publications = officialStructure?.publications || officialStructureData.publications;

  const handleDownloadDoc = (item) => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${item.title}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #111; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; }
            .crest { font-size: 20px; font-weight: bold; text-transform: uppercase; }
            .sub { font-size: 13px; color: #444; }
            .meta { display: flex; justify-content: space-between; margin-bottom: 25px; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
            .title { text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
            .authors { text-align: center; font-size: 14px; font-style: italic; margin-bottom: 25px; color: #333; }
            .content { font-size: 15px; text-align: justify; margin-bottom: 30px; }
            .abstract-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0b1a2e; padding: 20px; border-radius: 4px; margin-bottom: 25px; }
            .sig { margin-top: 50px; text-align: right; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="no-print" style="margin-bottom: 20px; text-align: right;">
            <button onclick="window.print()" style="padding: 8px 18px; background: #0b1a2e; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Print / Save as PDF</button>
          </div>
          <div class="header">
            <div class="crest">COLLEGE OF AGRICULTURAL ENGINEERING, BAPATLA</div>
            <div class="sub">ACHARYA N.G. RANGA AGRICULTURAL UNIVERSITY (ANGRAU)</div>
            <div class="sub">Division of Research Publications & Scholarly Monographs</div>
          </div>
          <div class="meta">
            <div>Type: ${item.type} | Dept: ${item.department}</div>
            <div>Year: ${item.year} | Ref: ${item.docName || 'ANGRAU-CAE-PUB'}</div>
          </div>
          <div class="title">${item.title}</div>
          <div class="authors">Authors / Contributors: ${item.authors}</div>
          <div class="abstract-box">
            <h4 style="margin-top:0; font-size:15px; text-transform:uppercase;">Publication Abstract & Executive Summary</h4>
            <p class="content">This technical publication is officially archived in the institutional repository of College of Agricultural Engineering, Bapatla, ANGRAU. Full monograph texts, laboratory protocols, and field findings are maintained under library accession code <strong>${item.docName}</strong>.</p>
          </div>
          <div class="sig">
            <div style="font-weight: bold;">Editor-in-Chief / Associate Dean</div>
            <div>Institutional Research Publications Committee</div>
            <div>CAE, ANGRAU, Bapatla</div>
          </div>
        </body>
        </html>
      `);
      win.document.close();
    }
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
                    onClick={() => handleDownloadDoc(item)}
                    className="btn btn-outline btn-sm text-xs flex items-center gap-1.5 flex-shrink-0 hover:bg-[#0b1a2e] hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View / Print PDF</span>
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

