"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const navLinks = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname.startsWith("/workout");
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[#0c0d10]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 sm:px-6 md:h-20 md:flex-nowrap md:py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="FitLog logo" width={28} height={28} priority />
          <span className="font-display text-lg font-bold uppercase tracking-[0.05em]">
            FitLog
          </span>
        </Link>

        {/* Center links */}
        <ul className="order-3 flex w-full items-center justify-center gap-1 md:order-2 md:w-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-block rounded-full px-4 py-1.5 text-xs transition-colors ${
                  isActive(link.href)
                    ? "bg-[#1a2312] font-semibold text-accent-dark"
                    : "font-medium text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right status badges */}
        <div className="order-2 flex items-center gap-6 md:order-3">
          <Link href="/my-plan" className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white">
            Plan
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-dark px-1.5 text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-xs font-medium text-muted hover:text-white">
            Saved
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#2d313b] px-1.5 text-[11px] font-medium text-gray-300">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
