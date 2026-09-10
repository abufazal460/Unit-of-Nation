import React, { useState, useEffect, lazy, Suspense, startTransition } from 'react';
import {
  HomeSkeleton,
  AboutSkeleton,
  GallerySkeleton,
  ContactSkeleton,
  DonateSkeleton,
  NotFoundSkeleton,
} from './components/common/PageSkeletons';

// Each page is its own lazy-loaded chunk (keeps initial bundle small).
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Resolves both which page component to render AND which skeleton
// matches it, from the same path — keeps the two always in sync so a
// new route can never end up with the wrong (or missing) skeleton.
function resolveRoute(pathname) {
  const cleanPath = pathname.split('#')[0] || '/';

  if (cleanPath === '/' || cleanPath === '' || cleanPath === '/index.html') {
    return { Page: Home, Skeleton: HomeSkeleton };
  }
  if (cleanPath === '/about' || cleanPath === '/about/') {
    return { Page: About, Skeleton: AboutSkeleton };
  }
  if (cleanPath === '/gallery' || cleanPath === '/gallery/') {
    return { Page: Gallery, Skeleton: GallerySkeleton };
  }
  if (cleanPath === '/contact' || cleanPath === '/contact/') {
    return { Page: Contact, Skeleton: ContactSkeleton };
  }
  if (cleanPath === '/donate' || cleanPath === '/donate/') {
    return { Page: Donate, Skeleton: DonateSkeleton };
  }
  return { Page: NotFound, Skeleton: NotFoundSkeleton };
}

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      // Keeps the current page visible during client-side navigation —
      // covered separately below, this only matters for back/forward.
      startTransition(() => {
        setCurrentPath(window.location.pathname);
      });
    };

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')) {
        const href = target.getAttribute('href');
        if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http')) {
          e.preventDefault();
          if (window.location.pathname !== href) {
            window.history.pushState({}, '', href);
            startTransition(() => {
              setCurrentPath(href.split('#')[0] || '/');
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const { Page, Skeleton } = resolveRoute(currentPath);

  return (
    // This Suspense boundary shows the route-matching Skeleton only on a
    // fresh load (hard reload / first visit / directly typed URL) — the
    // one moment there's no "old page" to keep showing. Client-side
    // navigation between pages never hits this fallback at all, because
    // startTransition (above) keeps the previous page on screen instead.
    <Suspense fallback={<Skeleton />}>
      <Page />
    </Suspense>
  );
}

export default App;