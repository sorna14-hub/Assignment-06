"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

const NAV_LINKS = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/workout");
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlan();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[rgba(12,13,16,0.95)] backdrop-blur-[2px]">
      <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-2 px-4 sm:px-6 md:h-20">
        {/* Brand logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo.png" alt="FitLog logo" width={28} height={28} priority />
          <span className="font-display text-lg font-bold uppercase leading-7 tracking-[0.9px] text-white">
            FitLog
          </span>
        </Link>

        {/* Center navigation links (tablet & desktop) */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-1.5 text-xs leading-4 transition-colors ${
                    active
                      ? "bg-accent-soft font-semibold text-accent"
                      : "font-medium text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: status badges + mobile menu button */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2"
            aria-label={`Today's plan: ${planCount} workouts`}
            onClick={() => setOpen(false)}
          >
            <span className="text-xs font-medium leading-4 text-soft">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-bold leading-4 text-black">
              {planCount}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2"
            aria-label={`Saved: ${savedCount} workouts`}
            onClick={() => setOpen(false)}
          >
            <span className="text-xs font-medium leading-4 text-muted">Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-line-strong px-1.5 text-[11px] font-medium leading-4 text-soft">
              {savedCount}
            </span>
          </Link>

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-md border border-line text-soft md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[#1c1f26] px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm ${
                    active
                      ? "bg-accent-soft font-semibold text-accent"
                      : "font-medium text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
