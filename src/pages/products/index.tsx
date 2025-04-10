import { Container } from "@/components/shared/Container";
import { Img } from "@/components/shared/Img";
import { PurchaseButton } from "@/components/product-list/purchasebtn";
import { productsQuery } from "@/infrastructure/api/queries/productsQuery";
import placeholderimage from "@/assets/placeholderimg.png";
import { ErrorComponent } from "@/components/shared/Error/Error";
import { LoadingComponent } from "@/components/shared/Loading/Loading";
import { useRouter } from "next/router";
import { useCheckout } from "@/application/providers/CheckoutProvider";
import { Product } from "@/domain/models/Product";
import { useEffect } from "react";

export default function ProductList() {
  const { data, isLoading, isError } = productsQuery();
  const { cart, setCart } = useCheckout();
  const router = useRouter();

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError || !data) {
    return <ErrorComponent />;
  }

  const handleRouter = (id: string) => {
    router.push(`/products/${encodeURIComponent(id)}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setCart((prev) => [...prev, product]);
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold text-gray-800 mb-6 px-4">
        Our Products
      </h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
        {data.map((product) => (
          <li
            key={product.id}
            className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            onClick={() => handleRouter(String(product.id))}
          >
            <div className="bg-gray-100 p-4 flex items-center justify-center">
              <Img
                source={product.image_path || placeholderimage.src}
                w={144}
                h={144}
              />
            </div>
            <div className="flex flex-col p-4 gap-2">
              <p className="text-lg font-semibold text-gray-800 line-clamp-1">
                {product.name}
              </p>
              <p className="text-md text-gray-600 font-medium">
                ${Number(product.price).toFixed(2)}
              </p>
              <div className="flex flex-row items-center gap-3 mt-2">
                <PurchaseButton placeholder="Purchase" />
                <button
                  className="bg-[#D21706] text-white px-1.5 py-1.5 rounded"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  🛒
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
