import { Button } from "@/components/checkout/Button/Button";
import { Input } from "@/components/checkout/Input/Input";
import { Container } from "@/components/shared/Container";
import { ButtonType } from "@/components/checkout/Button/Button";
import { useRouter } from "next/router";
import { useCheckout } from "@/application/providers/CheckoutProvider";
import { useState } from "react";

export default function Address() {
  const router = useRouter();
  const { setAddress } = useCheckout();
  const [name, setName] = useState("");
  const [addressField, setAddressField] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleBack = () => {
    router.push("/auth/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAddress({
      name,
      address: addressField,
      city,
      zipcode,
    });

    router.push("/checkout/payment-option");
  };

  return (
    <Container>
      <h1 className="text-3xl text-black font-bold font-[Inter]">
        Your Address
      </h1>
      <form
        className="flex flex-col gap-4 max-w-[700px] w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="Address"
          onChange={(e) => setAddressField(e.target.value)}
        />
        <Input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <Input
          placeholder="ZIP Code"
          onChange={(e) => setZipcode(e.target.value)}
        />
        <div className="w-full flex flex-col items-center justify-center">
          <Button placeholder="To payment options" style={ButtonType.PRIMARY} />
          <Button
            placeholder="Back"
            style={ButtonType.SECONDARY}
            onClick={() => handleBack()}
          />
        </div>
      </form>
    </Container>
  );
}
