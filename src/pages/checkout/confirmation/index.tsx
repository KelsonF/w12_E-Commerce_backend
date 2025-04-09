import { Container } from "@/components/shared/Container";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Img } from "@/components/shared/Img";
import { Add } from "@/components/product/add";
import placeholderimage from "@/assets/placeholderimg.png";

export default function Confirmation(){
    return(
        <Container>
            <FlexContainer>
                <Img source={placeholderimage.src} w={312} h={204} />  
                <FlexContainer> 
                    <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">Thanks for shopping!</p>
                    <p className="text-xl text-[#4B5563] font-[Inter] font-light p-2 pb-4">
                    Netus ultricies duis sed vulputate egestas pretium ac proin ullamcorper.
                    Ullamcorper mauris ultrices duis volutpat consequat ultrices tempor ultrices. 
                    Tellus ut nulla ut placerat in.
                 </p>
                    <Add placeholder="Continue Shopping" />
                </FlexContainer>
            </FlexContainer>
        </Container>
    );

}