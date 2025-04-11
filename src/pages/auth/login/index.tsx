import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Container } from "@/components/shared/Container";
import { Input } from "@/components/checkout/Input/Input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await login({ email, password });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <h1 className="text-3xl text-black font-bold font-[Inter]">Your Cart</h1>
      <form
        method="POST"
        className="flex flex-col gap-4 max-w-[700px] w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            placeholder="Submit"
            style={ButtonType.PRIMARY}
          />
        </div>
      </form>
    </Container>
  );
}
