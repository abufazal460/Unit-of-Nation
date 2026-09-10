// src/components/common/PageSkeletons.jsx
//
// One skeleton component per route, shaped to match that page's real
// layout (same section order, same rough proportions) so the swap to
// real content feels like a continuation, not a jump. Pure Tailwind
// `animate-pulse` + divs — no new package needed.

function Bar({ className = "" }) {
  return <div className={`animate-pulse rounded-md bg-slate-200 ${className}`} />;
}

function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <Bar className="w-10 h-11 sm:w-13 sm:h-14 rounded-lg" />
          <div className="space-y-1.5">
            <Bar className="h-4 w-32" />
            <Bar className="h-2.5 w-24" />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Bar className="h-9 w-16 rounded-xl" />
          <Bar className="h-9 w-16 rounded-xl" />
          <Bar className="h-9 w-20 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- HOME ---------------------------- */
// Mirrors HeroSection (badge + h1 + p + button + right image card)
// followed by a stats/cards row, like AchievementSection.
export function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-16 sm:pt-20">
      <NavbarSkeleton />
      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Bar className="h-7 w-56 rounded-full" />
            <Bar className="h-10 sm:h-14 w-full" />
            <Bar className="h-10 sm:h-14 w-4/5" />
            <Bar className="h-4 w-full" />
            <Bar className="h-4 w-3/4" />
            <Bar className="h-12 w-48 rounded-xl" />
          </div>
          <div className="lg:col-span-5">
            <Bar className="w-full aspect-[4/3] rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Bar className="h-8 w-64 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Bar key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------- ABOUT ---------------------------- */
// Mirrors WhoWeAreSection (text + image) then FounderSection (photo card + bio).
export function AboutSkeleton() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-16 sm:pt-20">
      <NavbarSkeleton />
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Bar className="h-7 w-40 rounded-full" />
            <Bar className="h-9 w-3/4" />
            <Bar className="h-4 w-full" />
            <Bar className="h-4 w-5/6" />
            <Bar className="h-4 w-2/3" />
          </div>
          <div className="lg:col-span-5">
            <Bar className="w-full aspect-[4/3] rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <Bar className="w-full aspect-[4/5] rounded-2xl" />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <Bar className="h-28 rounded-2xl" />
            <Bar className="h-20 rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------- GALLERY ---------------------------- */
// Mirrors the 3-column image-card grid in pages/Gallery.jsx.
export function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-16 sm:pt-20">
      <NavbarSkeleton />
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Bar className="h-8 w-72 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-3">
                <Bar className="w-full aspect-[4/3] rounded-2xl" />
                <Bar className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------- CONTACT ---------------------------- */
// Mirrors ContactDetailsSection (badge + details block) + MapSection (map box).
export function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-16 sm:pt-20">
      <NavbarSkeleton />
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 max-w-2xl">
          <Bar className="h-7 w-48 rounded-full" />
          <Bar className="h-9 w-2/3" />
          <Bar className="h-24 rounded-2xl mt-6" />
        </div>
      </section>
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Bar className="h-8 w-56 mb-8" />
          <Bar className="h-[380px] sm:h-[480px] w-full rounded-2xl" />
        </div>
      </section>
    </div>
  );
}

/* ---------------------------- DONATE ---------------------------- */
// Mirrors Hero (heading + buttons on left, QR glass panel on right),
// then the donation-method card, matching the real Donate page order.
export function DonateSkeleton() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-16 sm:pt-20">
      <NavbarSkeleton />
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex flex-col justify-center gap-5 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <Bar className="h-10 sm:h-12 w-full" />
            <Bar className="h-10 sm:h-12 w-5/6" />
            <Bar className="h-10 sm:h-12 w-2/3" />
            <Bar className="h-4 w-full mt-2" />
            <Bar className="h-4 w-3/4" />
            <div className="flex gap-3 mt-2">
              <Bar className="h-11 w-32 rounded-full" />
              <Bar className="h-11 w-32 rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-center bg-slate-100 px-6 py-16 sm:py-20 lg:py-0">
            <Bar className="w-full max-w-[280px] sm:max-w-[320px] aspect-[280/360] rounded-3xl bg-slate-300" />
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Bar className="h-4 w-32 mb-2" />
          <Bar className="h-8 w-2/3 mb-8" />
          <Bar className="h-64 rounded-3xl" />
        </div>
      </section>
    </div>
  );
}

export function NotFoundSkeleton() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-16 sm:pt-20">
      <NavbarSkeleton />
      <section className="py-20 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <Bar className="h-3 w-40 mx-auto" />
          <Bar className="h-7 w-56 mx-auto" />
          <Bar className="h-3 w-full" />
          <Bar className="h-10 w-32 mx-auto rounded-xl" />
        </div>
      </section>
    </div>
  );
}