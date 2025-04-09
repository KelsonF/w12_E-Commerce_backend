import { Container } from "@/components/shared/Container";
import { Back } from "@/components/product/back";
import { Img } from "@/components/shared/Img";
import { PurchaseNow } from "@/components/product/purchase";
import { Add } from "@/components/product/add";
import placeholderimage from "@/assets/placeholderimg.png";
import { Product as ProductItem } from "@/domain/models/Product";
import { GetServerSideProps } from "next";

interface ProductProps {
  product: ProductItem;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const product = {
    id,
    name: "Sample Product",
    price: 99.99,
    description: "This is a sample product description.",
    image: null,
  };

  return {
    props: {
      product,
    },
  };
};

export default function Product({ product }: ProductProps) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center p-4">
        <div>
          <div className="flex items-left justify-start pb-1 p-4">
            <Back placeholder="Back" ref="/product-list" />
          </div>
          <div className="flex flex-col items-center justify-center p-4  gap-4 ">
            <Img source={placeholderimage.src} w={308} h={283} />
            <div className="flex flex-row justify-between w-full pt-2 pb-2">
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                {product.name}
              </p>
              <p className="text-xl text-[#4B5563] font-[Inter] font-light">
                $ {product.price}
              </p>
            </div>
            <PurchaseNow placeholder="Purchase Now" />
            <Add placeholder="Add to Cart" />
            <div className="flex flex-col items-left justify-start gap-2">
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                About Product
              </p>
              <p className="text-xl text-[#4B5563] font-[Inter] font-light">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
