import { Container } from "@/components/shared/Container";
import { Img } from "@/components/shared/Img";
import { PurchaseButton } from "@/components/product-list/purchasebtn";
import { AddToCart } from "@/components/product-list/addtocart";
import placeholderimage from "@/assets/placeholderimg.png";
import Link from "next/link";
import { Product } from "@/domain/models/Product";

export default function ProductList() {
  const products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      description: "Description for Product 1",
      stock: 10,
      price: 19.99,
      image_path: null,
    },
    {
      id: "2",
      name: "Product 2",
      description: "Description for Product 2",
      stock: 5,
      price: 29.99,
      image_path: null,
    },
    {
      id: "3",
      name: "Product 3",
      description: "Description for Product 3",
      stock: 0,
      price: 39.99,
      image_path: null,
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center p-4">
        {products.map((product) => (
          <Container key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Img
                source={product.image_path || placeholderimage}
                w={144}
                h={144}
              />
            </Link>
            <div className="flex flex-col items-left gap-1 justify-start">
              <p className="text-lg text-[#111827] font-[Inter] font-bold">
                {product.name}
              </p>
              <p className="text-sm text-[#4B5563] font-[Inter] font-light">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex flex-row items-center gap-4 justify-evenly">
                <PurchaseButton placeholder="Purchase" />
                <AddToCart placeholder="🛒" />
              </div>
            </div>
          </Container>
        ))}
      </div>
    </Container>
  );
}
