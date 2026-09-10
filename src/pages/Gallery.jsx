import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { gallery } from '../data/gallery';
import { FiMaximize2 } from 'react-icons/fi';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <MainLayout currentPath="/gallery">
      <section className="py-12 sm:py-16 bg-[#faf8f5]">
        <Container>
          <SectionTitle
            subtitle="DOCUMENTATION"
            title="Fieldwork & Event Gallery"
            description="Visual records of legal awareness camps, consultations, and foundation initiatives."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <Card
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="p-0 overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    // srcSet={`${item.imageWebpSmall} 480w, ${item.imageWebp} 960w`}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain ..."
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-slate-800 p-2.5 rounded-full shadow-md">
                      <FiMaximize2 className="w-4 h-4 text-red-700" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2">

                  <h3 className="text-base sm:text-lg font-body font-bold text-slate-900 line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </Container>

        <Modal
          isOpen={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
          title={selectedImage?.title || "Gallery Image"}
        >
          {selectedImage && (
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden hover:bg-slate-100 max-h-[60vh] flex items-center justify-center duration-300">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>
              <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs">
                <div className="border-b border-slate-200 pb-2">
                  <h4 className="text-sm font-body font-semibold text-slate-900">{selectedImage.title}</h4>

                </div>
                <p className="text-slate-600 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </Modal>
      </section>
    </MainLayout>
  );
}

export default Gallery;