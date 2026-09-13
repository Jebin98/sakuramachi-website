import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/* `output: export` has no server to run a route handler on, so these metadata routes have to
   declare that they are generated once, at build time. */
export const dynamic = "force-static";

/* Nothing on the site is private and there is only the one page, so there is nothing to
   disallow. The sitemap reference has to be absolute — that is the one URL in robots.txt
   that crawlers do not resolve relative to the host. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
