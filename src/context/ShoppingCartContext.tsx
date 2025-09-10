'use client';

import { createContext, useState } from 'react';

type TShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type TCartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({});

export function ShoppingCartContextProvider({ children }: TShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>{children}</ShoppingCartContext.Provider>
  );
}
