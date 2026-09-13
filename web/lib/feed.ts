export interface FeedImage {
  id: string;
  image: string;
  imageAlt: string;
}

/* The founder's own product photography. No real Instagram content was readable
   (login-walled), so this rail is a curated set, not a live embed. */
export const FEED_IMAGES: FeedImage[] = [
  {
    id: "cream-cake",
    image: "/media/tiles/feed-cream-cake.jpg",
    imageAlt: "A cream cheese frosted cake on a stand, cake server beside it",
  },
  {
    id: "cookie-halves",
    image: "/media/still-cookie-halves.jpg",
    imageAlt: "A Nutella cookie split into two halves",
  },
  {
    id: "box",
    image: "/media/tiles/feed-box.jpg",
    imageAlt: "A pink sakuramachi bakery box, labelled by hand",
  },
  {
    id: "cake",
    image: "/media/tiles/feed-cake.jpg",
    imageAlt: "A whole frosted cake, boxed and ready to go",
  },
  {
    id: "matcha",
    image: "/media/tiles/feed-matcha.jpg",
    imageAlt: "A slice of matcha layer cake on a patterned plate",
  },
];
