import { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

export function NotFound() {
   useEffect(() => {
    document.title = "Page Not Found — Unite For Nation";
    let robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute("content", "noindex, follow");
    return () => robots && robots.setAttribute("content", "index, follow");
  }, []);
  return (
    <MainLayout currentPath="/404">
      <section className="py-20 bg-[#faf8f5] text-center">
        <Container>
          <div className="max-w-md mx-auto space-y-4">
            <span className="text-xs font-mono text-red-700 font-bold uppercase tracking-wider block">
              404 — Page Not Found
            </span>

            <h1 className="text-2xl font-heading font-bold text-slate-900">
              Page does not exist
            </h1>

            <p className="text-xs text-slate-600 leading-relaxed">
              The page you requested was not found. Please return to the homepage.
            </p>

            <Button href="/" variant="primary" size="md">
              Return Home
            </Button>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}

export default NotFound;
