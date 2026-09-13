import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/* `output: export` has no server to run a route handler on, so these metadata routes have to
   declare that they are generated once, at build time. */
export const dynamic = "force-static";

/* A single-page site, so the sitemap is one entry — the home page, at the trailing-slash URL
   the export actually serves (`trailingSlash: true`). The build time is the honest answer for
   `lastModified`: the page is static, so it changed when it was last built. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      /* The bake list moves with the seasons, not with the week. */
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
