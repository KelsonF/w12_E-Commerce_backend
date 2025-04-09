export type Product = {
  id: string;
  name: string;
  description?: string;
  stock: number;
  price: number;
  image_path: string | null;
};
