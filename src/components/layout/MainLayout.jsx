import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Lenis from 'lenis';

export function MainLayout({ children, currentPath = "/" }) {
  useEffect(() => {
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouchDevice || prefersReducedMotion) return; // native scroll on mobile

  const lenis = new Lenis({ duration: 1.5, smoothWheel: true, infinite: false });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return () => lenis.destroy();
}, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col font-body selection:bg-red-700 selection:text-white">
      {/* Persistent Navbar */}
      <Navbar currentPath={currentPath} />

      {/* Main Page Content */}
      <main className="flex-grow pt-16 sm:pt-20">
        {children}
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
