import { Button } from "@/components/checkout/Button/Button";
import { Input } from "@/components/checkout/Input/Input";
import { Container } from "@/components/shared/Container";
import { ButtonType } from "@/components/checkout/Button/Button";

export default function Address() {
  return (
    <Container>
      <h1 className="text-3xl text-black font-bold font-[Inter]">
        Your Address
      </h1>
      <form className="flex flex-col gap-4 max-w-[700px] w-full">
        <Input placeholder="Name" />
        <Input placeholder="Address" />
        <Input placeholder="City" />
        <Input placeholder="ZIP Code" />
        <div className="w-full flex flex-col items-center justify-center">
          <Button placeholder="To payment options" style={ButtonType.PRIMARY} />
          <Button placeholder="Back" style={ButtonType.SECONDARY} />
        </div>
      </form>
    </Container>
  );
}
