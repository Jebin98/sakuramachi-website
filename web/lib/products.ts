export type Category = "all" | "cakes" | "cupcakes" | "cookies" | "small";
export type Flavour = "ichigo" | "matcha" | "cocoa" | "butter";

export interface Product {
  id: string;
  name: string;
  nameJa: string;
  category: Exclude<Category, "all">;
  flavour?: Flavour;
  image: string;
  imageAlt: string;
  /** Keeps the katakana line even when the English name wraps. */
  keepJapanese?: boolean;
}

export const FILTER_TABS: { value: Category; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "cakes", label: "Cakes" },
  { value: "cupcakes", label: "Cupcakes" },
  { value: "cookies", label: "Cookies & bars" },
  { value: "small", label: "Small bakes" },
];

export const PRODUCTS: Product[] = [
  {
    id: "fudgy-brownies",
    name: "Fudgy brownies",
    nameJa: "ファッジブラウニー",
    category: "cookies",
    flavour: "cocoa",
    image: "/media/tiles/brownies.jpg",
    imageAlt: "Six fudgy brownies boxed in a white window box",
  },
  {
    id: "nutella-cookies",
    name: "Nutella cookies",
    nameJa: "ヌテラクッキー",
    category: "cookies",
    flavour: "cocoa",
    image: "/media/still-cookie-pull.jpg",
    imageAlt: "A Nutella-stuffed cookie pulled apart, centre still molten",
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry shortcake",
    nameJa: "ストロベリーショートケーキ",
    category: "cakes",
    flavour: "ichigo",
    image: "/media/tiles/shortcake.jpg",
    imageAlt: "Strawberry shortcake, sponge layers with cream and strawberries",
  },
  {
    id: "matcha-layer-cake",
    name: "Matcha layer cake",
    nameJa: "マッチャレイヤーケーキ",
    category: "cakes",
    flavour: "matcha",
    image: "/media/tiles/matcha-cake.jpg",
    imageAlt: "Matcha layer cake, cut to show the green sponge and filling",
  },
  {
    id: "carrot-cake",
    name: "Carrot cake",
    nameJa: "キャロットケーキ",
    category: "cakes",
    image: "/media/tiles/carrot-cake.jpg",
    imageAlt: "Carrot cake, layered and topped with cream and fruit",
  },
  {
    id: "matilda-chocolate-cake",
    name: "Matilda chocolate cake",
    nameJa: "マチルダチョコレートケーキ",
    category: "cakes",
    flavour: "cocoa",
    image: "/media/tiles/matilda.jpg",
    imageAlt: "Matilda chocolate cake, three tall dark layers",
    keepJapanese: true,
  },
  {
    id: "ny-cheesecake",
    name: "NY-style cheesecake",
    nameJa: "ニューヨークチーズケーキ",
    category: "cakes",
    image: "/media/tiles/cheesecake.jpg",
    imageAlt: "A slice of New York style cheesecake on a plate",
  },
  {
    id: "tres-leches",
    name: "Tres leches",
    nameJa: "トレスレチェス",
    category: "cakes",
    image: "/media/tiles/tres-leches.jpg",
    imageAlt: "Tres leches in trays, topped with cream and a strawberry",
  },
  {
    id: "chocolate-buttercream-cupcakes",
    name: "Chocolate buttercream cupcakes",
    nameJa: "チョコレートバタークリームカップケーキ",
    category: "cupcakes",
    flavour: "cocoa",
    image: "/media/tiles/cupcakes-choc.jpg",
    imageAlt: "Chocolate buttercream cupcakes with piped swirls",
  },
  {
    id: "carrot-cake-cupcakes",
    name: "Carrot cake cupcakes",
    nameJa: "キャロットケーキカップケーキ",
    category: "cupcakes",
    image: "/media/tiles/cupcakes-carrot.jpg",
    imageAlt: "A boxed half dozen of carrot cake cupcakes",
  },
  {
    id: "whipped-ganache-cupcakes",
    name: "Whipped ganache cupcakes",
    nameJa: "チョコレートガナッシュカップケーキ",
    category: "cupcakes",
    flavour: "cocoa",
    image: "/media/tiles/cupcakes-ganache.jpg",
    imageAlt: "A boxed half dozen of whipped ganache cupcakes",
  },
  {
    id: "biscoff-cookies",
    name: "Biscoff cookies",
    nameJa: "ビスコフクッキー",
    category: "cookies",
    image: "/media/tiles/biscoff.jpg",
    imageAlt: "Biscoff cookies, each topped with a biscuit",
  },
  {
    id: "cookies",
    name: "Cookies",
    nameJa: "クッキー",
    category: "cookies",
    image: "/media/tiles/cookies.jpg",
    imageAlt: "An assortment of cookies on a patterned plate",
  },
  {
    id: "dubai-chocolate-bar",
    name: "Dubai chocolate bar",
    nameJa: "ドバイチョコレートバー",
    category: "cookies",
    flavour: "cocoa",
    image: "/media/tiles/dubai-bar.jpg",
    imageAlt: "A Dubai chocolate bar, scored into squares",
  },
  {
    id: "madeleines",
    name: "Madeleines",
    nameJa: "マドレーヌ",
    category: "small",
    flavour: "butter",
    image: "/media/tiles/madeleines.jpg",
    imageAlt: "Madeleines on a plate, shell side up",
  },
  {
    id: "madeleines-chocolate",
    name: "Chocolate-covered madeleines",
    nameJa: "チョコレートマドレーヌ",
    category: "small",
    flavour: "cocoa",
    image: "/media/tiles/madeleines-choc.jpg",
    imageAlt: "Two chocolate covered madeleines held in one hand",
  },
  {
    id: "banana-bread",
    name: "Banana bread",
    nameJa: "バナナブレッド",
    category: "small",
    image: "/media/tiles/banana-bread.jpg",
    imageAlt: "Banana bread, cut into thick pieces",
  },
];

export const TICKER_ITEMS = [
  "Strawberry shortcake",
  "Matcha layer cake",
  "Fudgy brownies",
  "Nutella cookies",
  "Madeleines",
  "Tres leches",
  "Carrot cake",
  "Biscoff cookies",
  "NY-style cheesecake",
  "Banana bread",
  "Dubai chocolate bar",
  "Matilda chocolate cake",
];

export const TICKER_STRING = `${TICKER_ITEMS.join(" · ")} ·`;
