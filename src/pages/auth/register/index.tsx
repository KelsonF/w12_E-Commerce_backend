import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Container } from "@/components/shared/Container";
import { Input } from "@/components/checkout/Input/Input";
import { useRegisterUser } from "@/infrastructure/api/mutations/userMutation";
import { useState } from "react";

export default function RegisterPage() {
  const registerMutation = useRegisterUser();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with:", registerForm);

    registerMutation.mutate({
      name: registerForm.name,
      email: registerForm.email,
      password: registerForm.password,
    });

    setRegisterForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <h1 className="text-3xl text-black font-bold font-[Inter]">
        Create Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[700px] w-full"
      >
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={registerForm.name}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={registerForm.email}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={registerForm.password}
          onChange={handleInputChange}
        />
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            placeholder="Create account"
            style={ButtonType.PRIMARY}
          />
        </div>
      </form>
    </Container>
  );
}
