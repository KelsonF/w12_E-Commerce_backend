import { LeftContainer } from "@/components/shared/LeftContainer";
import { Img } from "@/components/shared/Img";
import { Container } from "@/components/shared/Container";
import placeholderimage from "@/assets/placeholderimg.png";
import { Button, ButtonType } from "@/components/checkout/Button/Button";

export default function Cart() {

    return (
        <div>
        <LeftContainer>
            <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">Your Cart</p>
        </LeftContainer>
        <Container>
            <div className="flex flex-row justify-evenly place-items-center p-2 gap-4">
                <Img source={placeholderimage.src} w={147} h={124} />   
                <Container>
                <p className="text-xl text-[#111827] font-[Inter] font-bold">Product Name</p>
                <p className="text-base text-[#4B5563] font-[Inter] font-light">$ 0.00</p>
                <p className="text-base text-[#4B5563] font-[Inter] font-light">Quantity: 1</p>
                </Container>
            </div>
            <div className="flex flex-col items-left justify-start w-full gap-4 p-4">
                <div className="flex flex-row justify-between  p-2">
                    <p className="text-xl text-[#111827] font-[Inter] font-light">Item Total</p>
                    <p className="text-xl text-[#111827] font-[Inter] font-light">0.00 </p>      
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl text-[#111827] font-[Inter] font-light">Shipping Cost</p>
                    <p className="text-xl text-[#111827] font-[Inter] font-light">0.00 </p>      
             </div>

             <div className="flex flex-row justify-between p-2">
                    <p className="text-xl text-[#111827] font-[Inter] font-bold">Total</p>
                    <p className="text-xl text-[#111827] font-[Inter] font-bold">0.00 </p>      
             </div>
             </div>
             <div className="flex flex-col items-center w-full p-4">
             <Button placeholder="Check Out" style={ButtonType.PRIMARY} />
             </div>
        </Container>
         </div>
  
);
           
    
};


