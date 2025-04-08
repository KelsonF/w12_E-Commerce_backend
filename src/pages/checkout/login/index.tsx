import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Container } from "@/components/shared/Container";
import { Input } from "@/components/checkout/Input/Input";

export default function LoginPage() {
  return (
    <Container>
      <h1 className="text-3xl text-black font-bold font-[Inter]">Your Cart</h1>
      <form
        action=""
        method="POST"
        className="flex flex-col gap-4 max-w-[700px] w-full"
      >
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <div className="w-full flex justify-center">
          <Button placeholder="Submit" style={ButtonType.PRIMARY} />
        </div>
      </form>
    </Container>
  );
}
