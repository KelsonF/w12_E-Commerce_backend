import { LeftContainer } from "@/components/shared/LeftContainer";
import { Container } from "@/components/shared/Container";
import { Img } from "@/components/shared/Img";
import placeholderimage from "@/assets/placeholderimg.png";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Back } from "@/components/product/back";
import { useCheckout } from "@/application/providers/CheckoutProvider";
import router from "next/router";

export default function Summary() {

    const handleSubmit = () => {
        router.push("/checkout/confirmation");
      };
    
  const { cart, address, paymentOption } = useCheckout();

  const total = cart.reduce((acc, prod) => acc + prod.price, 0);

  return (
    <div className="p-2">
      <LeftContainer>
        <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">
          Summary
        </p>
      </LeftContainer>
      <Container>
        {cart.map((prod) => (
          <div
            key={prod.id}
            className="flex flex-row justify-evenly place-items-center p-2 gap-4"
          >
            <Img
              source={prod.image_path || placeholderimage.src} 
              w={147}
              h={124}
            />
            <Container>
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                {prod.name}
              </p>
              <p className="text-base text-[#4B5563] font-[Inter] font-light">
                ${Number(prod.price).toFixed(2)}
              </p>
            
            </Container>
          </div>
        ))}
      </Container>
      <div className="flex flex-col w-[50%] items-center">
        <LeftContainer>
          <p className="text-xl text-[#111827] font-[Inter] font-bold pb-4">
            Payment amount
          </p>
          <p className="text-base text-[#4B5563] font-[Inter] font-light">
            ${Number(total).toFixed(2)}
          </p>

          <p className="text-xl text-[#111827] font-[Inter] font-bold pb-4">
            Delivery address
          </p>
          {address ? (
            <>
              <p className="text-base text-[#4B5563] font-[Inter] font-light">
                {address.name}
              </p>
              <p className="text-base text-[#4B5563] font-[Inter] font-light">
                {address.address}
              </p>
              <p className="text-base text-[#4B5563] font-[Inter] font-light">
                {address.city} {address.zipcode}
              </p>
            </>
          ) : (
            <p className="text-base text-[#4B5563] font-[Inter] font-light">
              No address provided
            </p>
          )}

          <p className="text-xl text-[#111827] font-[Inter] font-bold pb-4">
            Payment option
          </p>
          <p className="text-base text-[#4B5563] font-[Inter] font-light">
            {paymentOption === "CREDIT" ? "Credit card" : paymentOption}
          </p>
        </LeftContainer>
      </div>
      <FlexContainer>
        <div className="flex flex-col items-center w-full p-4 gap-4">
          <Button placeholder="Pay" style={ButtonType.PRIMARY} onClick={handleSubmit}/>
          <Back placeholder="Back" ref="/checkout/payment-option" />
        </div>
      </FlexContainer>
    </div>
  );
}
