"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition", isScrolled ? "border-white/10 bg-[#07111f]/90 shadow-2xl shadow-black/20 backdrop-blur" : "border-transparent bg-transparent")}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Navigasi utama">
        <Link href="/" className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
          <span className="grid size-9 place-items-center rounded-md border border-sky-300/30 bg-sky-300/10 font-mono text-sm text-sky-100">IS</span>
          <span>
            <span className="block text-sm font-semibold text-slate-50">Ian Sinambela</span>
            <span className="block font-mono text-xs text-slate-400">DevOps Engineer</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link href="/#project" className="rounded-md border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-300/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
            Lihat Project
          </Link>
        </div>
        <button type="button" className="rounded-md border border-white/10 p-2 text-slate-100 lg:hidden" aria-label="Buka menu navigasi" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-white/10 bg-[#07111f]/95 px-4 pb-5 pt-2 backdrop-blur lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/5" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}