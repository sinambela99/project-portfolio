import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";

export function Footer() {
  const footerItems = navItems.filter((item) => ["Beranda", "Project", "Arsitektur", "DevSecOps", "Pengalaman", "Kontak"].includes(item.label));

  return (
    <footer className="border-t border-white/10 bg-[#050b13] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-50">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-slate-400">DevOps Engineer • Cloud • DevSecOps</p>
          <p className="mt-4 text-xs text-slate-500">© 2026 Ian Sinambela. Seluruh hak dilindungi.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-sky-200">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}