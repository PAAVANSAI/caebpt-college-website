import React from 'react';
import PageBanner from '../components/PageBanner';
import Notices from '../components/Notices';
import { Bell, FileText, Download } from 'lucide-react';

export default function NoticesPage({ onSelectNotice }) {
  return (
    <div>
      <PageBanner
        title="Official Circulars & Announcements"
        subtitle="Official administrative notifications, examination schedules, counseling guidelines, tenders, and academic circulars."
        tag="Notice Board"
        breadcrumb={[{ name: "Notices" }]}
      />

      <Notices onSelectNotice={onSelectNotice} />
    </div>
  );
}

