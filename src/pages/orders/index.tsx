import { LeftContainer } from "@/components/shared/LeftContainer";
import { Container } from "@/components/shared/Container";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Img } from "@/components/shared/Img";
import placeholderimage from "@/assets/placeholderimg.png";
import { PurchaseNow } from "@/components/product/purchase";


export default function Orders(){
    return(
        <div className="p-2">
              <LeftContainer>
                <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">Orders</p>
              </LeftContainer>
              <Container>
                <FlexContainer>
                <p className="text-sm text-[#4B5563] font-[Inter] font-light">Order 4616e4d4-9183-40c8-a880-b633cd86fa21</p>
                    <Container>

                    <div className="flex flex-row justify-evenly place-items-center p-2 gap-4">
                        <Img source={placeholderimage.src} w={147} h={124} />   
                        <Container>
                        <p className="text-xl text-[#111827] font-[Inter] font-bold">Product 1 Name</p>
                        <p className="text-base text-[#4B5563] font-[Inter] font-light">$ 0.00</p>
                        <p className="text-base text-[#4B5563] font-[Inter] font-light">Quantity: 2</p>
                        </Container>
                    </div>

                    <div className="flex flex-row justify-evenly place-items-center p-2 gap-4">
                        <Img source={placeholderimage.src} w={147} h={124} />   
                        <Container>
                        <p className="text-xl text-[#111827] font-[Inter] font-bold">Product 2 Name</p>
                        <p className="text-base text-[#4B5563] font-[Inter] font-light">$ 0.00</p>
                        <p className="text-base text-[#4B5563] font-[Inter] font-light">Quantity: 1 </p>
                        </Container>
                    </div>
                    
                    <PurchaseNow placeholder="Purchase again"/>
                    </Container>
                </FlexContainer>
              </Container>

        </div>
    );
}