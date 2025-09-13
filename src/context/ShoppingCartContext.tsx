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
};

export const ShoppingCartContext = createContext({} as TShoppingCartContext);

export function ShoppingCartContextProvider({ children }: TShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

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
    <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseCartQuantity }}>{children}</ShoppingCartContext.Provider>
  );
}
