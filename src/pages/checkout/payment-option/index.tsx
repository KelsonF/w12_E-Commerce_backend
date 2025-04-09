import { LeftContainer } from "@/components/shared/LeftContainer";
import { RadioButton } from "@/components/checkout/Radio";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Back } from "@/components/product/back";



export default function PaymentOption(){
    return( <div className="p-2">
        <LeftContainer>
            <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">Payment option</p>
        </LeftContainer>
        <div className="flex flex-col w-[50%] items-center">
        <LeftContainer>
            <RadioButton id="credit" label="Credit Card"/>
        </LeftContainer>
        </div>
           <FlexContainer>
           <div className="flex flex-col items-center w-full p-4 gap-4">
            <Button placeholder="Pay" style={ButtonType.PRIMARY} />
            <Back placeholder="Back" ref="/address" />
            </div>

           </FlexContainer>
           
      
         </div>);

}