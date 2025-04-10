import React, { useContext, useState } from "react";
import {
  CheckoutContext,
  CheckoutContextType,
} from "../contexts/checkoutContext";

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
