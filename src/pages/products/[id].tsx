import { Container } from "@/components/shared/Container";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Back } from "@/components/product/back";
import { Img } from "@/components/shared/Img";
import { PurchaseNow } from "@/components/product/purchase";
import { Add } from "@/components/product/add";
import placeholderimage from "@/assets/placeholderimg.png";

export default function ProductItem() {
  return (
    <Container>
      <FlexContainer>
        <div>
          <div className="flex items-left justify-start pb-1 p-4">
            <Back placeholder="Back" ref="/products" />
          </div>
          <div className="flex flex-col items-center justify-center p-4 gap-4 ">
            <Img source={placeholderimage.src} w={308} h={283} />
            <div className="flex flex-row justify-between w-full pt-2 pb-2">
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                Product Name
              </p>
              <p className="text-xl text-[#4B5563] font-[Inter] font-light">
                $ 0.00
              </p>
            </div>
            <PurchaseNow placeholder="Purchase Now" />
            <Add placeholder="Add to Cart" />
            <div className="flex flex-col items-left justify-start gap-2">
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                About Product
              </p>
              <p className="text-xl text-[#4B5563] font-[Inter] font-light">
                Adipiscing elit ac lobortis turpis quam. Sit venenatis mollis id
                libero. Fermentum quis est, in consectetur nulla purus augue.
              </p>
            </div>
          </div>
        </div>
      </FlexContainer>
    </Container>
  );
}
