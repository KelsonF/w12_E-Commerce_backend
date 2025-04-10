import { Product } from "@/domain/models/Product";
import { User } from "@/domain/models/User";
import { createContext } from "react";

type CheckoutContextType = {
  cart: Product[];
  user: User | null;
  address: {
    name: string;
    address: string;
    city: string;
    zipcode: string;
  } | null;
  paymentOption: string | null;
  setCart: React.Dispatch<React.SetStateAction<CheckoutContextType["cart"]>>;
  setUser: React.Dispatch<React.SetStateAction<CheckoutContextType["user"]>>;
  setAddress: React.Dispatch<
    React.SetStateAction<CheckoutContextType["address"]>
  >;
  setPaymentOption: React.Dispatch<
    React.SetStateAction<CheckoutContextType["paymentOption"]>
  >;
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export { CheckoutContext, type CheckoutContextType };
