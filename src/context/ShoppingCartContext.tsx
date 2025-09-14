'use client';

import { createContext, useState } from 'react';

type TShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type TCartItem = {
  id: number;
  quantity: number;
};

type TShoppingCartContext = {
  cartItems: TCartItem[];
  handleIncreaseCartQuantity: (id: number) => void;
  getCartQuantity: (id: number) => number;
  cartTotalQty: number
};

export const ShoppingCartContext = createContext({} as TShoppingCartContext);

export function ShoppingCartContextProvider({ children }: TShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.quantity;
  }, 0);

  const getCartQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const handleIncreaseCartQuantity = (id: number) => {
    setCartItems((prevItems) => {
      let isNotProductExist = prevItems.find((item) => item.id === id) == null;

      if (isNotProductExist) {
        return [...prevItems, { id, quantity: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseCartQuantity, getCartQuantity, cartTotalQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
