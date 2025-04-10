import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Back } from "@/components/product/back";
import { Img } from "@/components/shared/Img";
import { PurchaseNow } from "@/components/product/purchase";
import { Add } from "@/components/product/add";
import placeholderimage from "@/assets/placeholderimg.png";
import { useProductByIdQuery } from "@/infrastructure/api/queries/productByIdQuery";
import { LoadingComponent } from "@/components/shared/Loading/Loading";
import { ErrorComponent } from "@/components/shared/Error/Error";

export default function ProductItem() {
  const router = useRouter();
  const { id } = router.query;


  if (!id) {
    return <LoadingComponent />;
  }


  const { data: product, isLoading, isError } = useProductByIdQuery(String(id));

  useEffect(() => {
    console.log("Produto carregado:", product);
  }, [product]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError || !product) {
    return <ErrorComponent />;
  }

  return (
    <Container>
      <FlexContainer>
        <div>
          <div className="flex items-left justify-start pb-1 p-4">
            <Back placeholder="Back" ref="/products" />
          </div>
          <div className="flex flex-col items-center justify-center p-4 gap-4 ">
            <Img
              source={product.image_path || placeholderimage.src}
              w={308}
              h={283}
            />
            <div className="flex flex-row justify-between w-full pt-2 pb-2">
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                {product.name}
              </p>
              <p className="text-xl text-[#4B5563] font-[Inter] font-light">
                ${Number(product.price).toFixed(2)}
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
      </FlexContainer>
    </Container>
  );
}
