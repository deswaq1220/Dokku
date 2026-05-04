export type Product = {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  timeAgo?: string;
  likes?: number;
  category?: string;
};
