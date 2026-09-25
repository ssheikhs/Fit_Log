"use client";

import Link from "next/link";

// Shown if something fails while loading a page (e.g. the API is down)
export default function Error({ reset }) {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold uppercase">Something went wrong</h1>
      <p className="mt-3 text-sm text-muted">
        We couldn&apos;t load this page. Check your connection and try again.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-accent-dark px-6 py-3 text-xs font-bold uppercase text-black hover:bg-accent"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-gray-700 px-6 py-3 text-xs font-bold uppercase hover:border-accent hover:text-accent"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
