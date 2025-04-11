import React, { useContext, useEffect, useState } from "react";
import {
  CheckoutContext,
  CheckoutContextType,
} from "../contexts/checkoutContext";
import { LocalStorage } from "@/domain/services/LocalStorageService";

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CheckoutContextType["cart"]>([]);
  const [user, setUser] = useState<CheckoutContextType["user"]>(null);
  const [address, setAddress] = useState<CheckoutContextType["address"]>(null);
  const [paymentOption, setPaymentOption] =
    useState<CheckoutContextType["paymentOption"]>(null);

  useEffect(() => {
    const savedCart: CheckoutContextType["cart"] =
      LocalStorage.instance.read("cart") || [];
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    LocalStorage.instance.save("cart", cart);
  }, [cart]);

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        user,
        address,
        paymentOption,
        setCart,
        setUser,
        setAddress,
        setPaymentOption,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
