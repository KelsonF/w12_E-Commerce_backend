import { LeftContainer } from "@/components/shared/LeftContainer";
import { Img } from "@/components/shared/Img";
import { Container } from "@/components/shared/Container";
import placeholderimage from "@/assets/placeholderimg.png";
import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { useCheckout } from "@/application/providers/CheckoutProvider";
import { useRouter } from "next/router";

export default function Cart() {
  const { cart } = useCheckout();
  const router = useRouter();

  const calculateItemTotal = (): number => {
    return cart.reduce((total, item) => total + Number(item.price), 0);
  };

  const totalValue = calculateItemTotal();

  return (
    <div>
      <LeftContainer>
        <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">
          Your Cart
        </p>
      </LeftContainer>
      <Container>
        <div className="flex flex-row justify-evenly place-items-center p-2 gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full p-2 bg-white rounded-lg shadow-md"
            >
              <Img source={item.image_path} w={147} h={124} />
              <p className="text-xl text-[#111827] font-[Inter] font-bold">
                {item.name}
              </p>
              <p className="text-lg text-[#111827] font-[Inter] font-light">
                {item.price}{" "}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-left justify-start w-full gap-4 p-4">
          <div className="flex flex-row justify-between  p-2">
            <p className="text-xl text-[#111827] font-[Inter] font-light">
              Item Total:
            </p>
            <p className="text-xl text-[#111827] font-[Inter] font-light">
              {cart.length}{" "}
            </p>
          </div>

          <div className="flex flex-row justify-between p-2">
            <p className="text-xl text-[#111827] font-[Inter] font-light">
              Shipping Cost
            </p>
            <p className="text-xl text-[#111827] font-[Inter] font-light">
              0.00{" "}
            </p>
          </div>

          <div className="flex flex-row justify-between p-2">
            <p className="text-xl text-[#111827] font-[Inter] font-bold">
              Total
            </p>
            <p className="text-xl text-[#111827] font-[Inter] font-bold">
              {totalValue}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full p-4">
          <Button
            placeholder="Check Out"
            style={ButtonType.PRIMARY}
            onClick={() => router.push("/checkout/address")}
          />
        </div>
      </Container>
    </div>
  );
}
