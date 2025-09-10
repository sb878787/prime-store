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
}

export const ShoppingCartContext = createContext({} as TShoppingCartContext);

export function ShoppingCartContextProvider({ children }: TShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>{children}</ShoppingCartContext.Provider>
  );
}
