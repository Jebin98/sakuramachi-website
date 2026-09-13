import { FILTER_TABS, PRODUCTS } from "@/lib/products";
import { LINKS } from "@/lib/links";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

/* Schema.org types, hand-declared rather than pulled from schema-dts: this file describes one
   business and one menu, and a 5MB type-only dependency to check twelve properties is not a
   trade worth making. Every property below is optional in the vocabulary, so the interfaces
   only list what is actually emitted — a field the site cannot support is better absent than
   guessed at, and search engines treat an invented address or price as a quality problem. */

interface PostalAddress {
  "@type": "PostalAddress";
  addressLocality: string;
  addressCountry: string;
}

interface MenuItem {
  "@type": "MenuItem";
  name: string;
  image: string;
}

interface MenuSection {
  "@type": "MenuSection";
  name: string;
  hasMenuItem: MenuItem[];
}

interface Menu {
  "@type": "Menu";
  name: string;
  hasMenuSection: MenuSection[];
}

interface Bakery {
  "@context": "https://schema.org";
  "@type": "Bakery";
  name: string;
  description: string;
  url: string;
  image: string;
  logo: string;
  sameAs: string[];
  servesCuisine: string[];
  areaServed: {
    "@type": "City";
    name: string;
    containedInPlace: { "@type": "Country"; name: string };
  };
  address: PostalAddress;
  hasMenu: Menu;
}

/* The bake list is the page's only enumerable catalogue, so it doubles as the menu. The tabs
   are the section order the visitor sees; "all" is a filter, not a section. Nothing carries an
   offer or a price — the business quotes per order over DM, and a made-up price in structured
   data is the kind of thing that gets a rich result pulled. */
function buildMenu(): Menu {
  const sections = FILTER_TABS.filter((tab) => tab.value !== "all").map<MenuSection>((tab) => ({
    "@type": "MenuSection",
    name: tab.label,
    hasMenuItem: PRODUCTS.filter((product) => product.category === tab.value).map<MenuItem>((product) => ({
      "@type": "MenuItem",
      name: product.name,
      image: absoluteUrl(product.image),
    })),
  }));

  return { "@type": "Menu", name: "The bake list", hasMenuSection: sections };
}

/**
 * `Bakery` is a subtype of both LocalBusiness and FoodEstablishment, which is the closest the
 * vocabulary gets to a home kitchen that delivers. There is no storefront, phone, email or
 * street address to publish, and no opening hours — so `address` carries the city and country
 * only, and the Instagram profile is the single `sameAs` identity.
 */
export function buildBakerySchema(): Bakery {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    image: absoluteUrl("/media/tiles/shortcake.jpg"),
    logo: absoluteUrl("/media/logo-sakuramachi.jpg"),
    sameAs: [LINKS.feed],
    servesCuisine: ["Japanese", "Korean", "Pâtisserie"],
    areaServed: {
      "@type": "City",
      name: "Chennai",
      containedInPlace: { "@type": "Country", name: "India" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
    hasMenu: buildMenu(),
  };
}
