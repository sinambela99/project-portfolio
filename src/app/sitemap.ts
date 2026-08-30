import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/devsecops", "/architecture", "/experience", "/contact", ...projects.map((project) => `/projects/${project.slug}`)];
  const lastModified = new Date("2026-08-30T00:00:00.000Z");

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
  }));
}