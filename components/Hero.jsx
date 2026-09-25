import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-12">
      <div className="grid items-center gap-10 overflow-hidden rounded-2xl border border-[#222630] bg-surface px-6 py-10 sm:px-10 md:grid-cols-2 md:py-14 lg:px-14">
        {/* Left: text */}
        <div className="text-center md:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-dark">
            Workout Library
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-7 inline-flex items-center rounded-md bg-accent-dark px-6 py-3 text-xs font-bold uppercase tracking-[0.03em] text-black transition hover:bg-accent"
          >
            Browse Workouts
          </a>
        </div>

        {/* Right: banner image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/banner.png"
            alt="Athlete lifting weights"
            width={334}
            height={334}
            priority
            className="h-auto w-60 sm:w-72 lg:w-[334px]"
          />
        </div>
      </div>
    </section>
  );
}
