import { siteConfig } from "@/lib/seo";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/about", "/program", "/register"].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
        priority: route === "" ? 1.0 : route === "/register" ? 0.9 : 0.8,
    }));

    return routes;
}
