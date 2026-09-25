import { Suspense } from "react";
import Hero from "@/components/Hero";
import Library from "@/components/Library";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="library" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            The Library
          </h2>
          <p className="mt-1 text-sm text-muted">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loader shows while the API data is being fetched */}
        <Suspense fallback={<Loader />}>
          <Library />
        </Suspense>
      </section>
    </>
  );
}
