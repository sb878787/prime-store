'use client';

import { createContext, useEffect, useState } from 'react';

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
  cartTotalQty: number;
  handleDecreaseCartQuantity: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;
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
      const isNotProductExist = prevItems.find((item) => item.id === id) == null;

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

  const handleDecreaseCartQuantity = (id: number) => {
    setCartItems((prevItems) => {
      const isLastOne = prevItems.find((item) => item.id === id)?.quantity === 1;

      if (isLastOne) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseCartQuantity,
        getCartQuantity,
        cartTotalQty,
        handleDecreaseCartQuantity,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
