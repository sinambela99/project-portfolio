import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";

export function Footer() {
  const footerItems = navItems.filter((item) => ["Beranda", "Project", "Arsitektur", "DevSecOps", "Pengalaman", "Kontak"].includes(item.label));

  return (
    <footer className="border-t border-zinc-800 bg-[#08090b] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-zinc-100">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-500">DevOps Engineer • Cloud • DevSecOps</p>
          <p className="mt-4 text-xs text-zinc-600">© 2026 Ian Sinambela. Seluruh hak dilindungi.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-500 transition hover:text-zinc-200">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}