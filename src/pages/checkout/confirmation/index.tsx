import { Container } from "@/components/shared/Container";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Img } from "@/components/shared/Img";
import { LinkButton } from "@/components/shared/LinkButton";
import placeholderimage from "@/assets/placeholderimg.png";

export default function Confirmation(){
    return(
        <Container>
            <FlexContainer>
                <Img source={placeholderimage.src} w={312} h={204} />  
                <FlexContainer> 
                    <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">Thanks for shopping!</p>
                    <p className="text-xl text-[#4B5563] font-[Inter] font-light p-2 pb-4">
                        Your order has been received and is being processed. You will receive a confirmation email shortly.
                        Thanks for trusting us with your purchase, you're always welcome back!
                    
                 </p>
                    <LinkButton ref="/products" placeholder="Continue Shopping" />
                </FlexContainer>
            </FlexContainer>
        </Container>
    );

}