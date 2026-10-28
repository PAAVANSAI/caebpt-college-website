import React from 'react';
import PageBanner from '../components/PageBanner';
import Gallery from '../components/Gallery';
import { Image as ImageIcon, Camera } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div>
      <PageBanner
        title="Photographic Gallery & Campus Tour"
        subtitle="A visual retrospective of student fieldwork, automated tractor demonstrations, international symposia, and annual convocation ceremonies."
        tag="Visual Highlights"
        breadcrumb={[{ name: "Gallery" }]}
      />

      <Gallery />
    </div>
  );
}

