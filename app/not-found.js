import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page not found — FitLog",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-dark">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-7xl font-bold uppercase tracking-tight text-accent sm:text-8xl">
        404
      </h1>
      <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide">
        Missed the rep
      </h2>
      <p className="mt-3 max-w-md text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or was moved. Head back to
        the library and pick your next lift.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-dark px-6 py-3 text-xs font-bold uppercase tracking-[0.03em] text-black transition hover:bg-accent"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        Back to workouts
      </Link>
    </section>
  );
}
