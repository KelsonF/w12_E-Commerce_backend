import { LeftContainer } from "@/components/shared/LeftContainer";
import { RadioButton } from "@/components/checkout/Radio";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Back } from "@/components/product/back";
import router from "next/router";
import { useCheckout } from "@/application/providers/CheckoutProvider";

export default function PaymentOption() {
  const { setPaymentOption } = useCheckout();

  const handlePaymentSelect = (option: string) => {
    setPaymentOption(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/checkout/summary");
  };

  return (
    <div className="p-2">
      <LeftContainer>
        <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">
          Payment option
        </p>
      </LeftContainer>
      <div className="flex flex-col w-[50%] items-center">
        <LeftContainer>
          <RadioButton
            id="credit"
            label="Credit Card"
            onChange={() => handlePaymentSelect("CREDIT")}
          />
        </LeftContainer>
      </div>
      <FlexContainer>
        <div className="flex flex-col items-center w-full p-4 gap-4">
          <Button
            placeholder="To Summary"
            style={ButtonType.PRIMARY}
            onClick={handleSubmit}
          />
          <Back placeholder="Back" ref="/checkout/address" />
        </div>
      </FlexContainer>
    </div>
  );
}
