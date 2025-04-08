import { Container } from "@/components/shared/Container";
import { Img } from "@/components/shared/Img";
import { PurchaseButton } from "@/components/product-list/purchasebtn";
import { AddToCart } from "@/components/product-list/addtocart";
import placeholderimage from "@/assets/placeholderimg.png";

export default function ProductList() {
  return (
    <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <Container>
            <Img source={placeholderimage.src} w={144} h={144}/>
            <div className="flex flex-col items-left gap-1 justify-start">
            <p className="text-lg text-[#111827] font-[Inter] font-bold">Product Name</p>
            <p className="text-sm text-[#4B5563] font-[Inter] font-light">$ 0.00</p>
            <div className="flex flex-row items-center gap-4 justify-evenly">
                <PurchaseButton placeholder="Purchase" />
                <AddToCart placeholder="🛒" />
            </div>
            </div>
          
        </Container>

        </div>

    </Container>
  );
}