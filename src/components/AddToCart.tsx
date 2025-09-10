'use client';

import { useShoppingCartContext } from '@/Hooks/useShoppingCartContext';

const AddToCart = () => {
  const { cartItems } = useShoppingCartContext();

  return (
    <div className="mt-4">
      <button className="px-4 py-2 rounded bg-sky-500 text-white">+</button>
      <span className="mx-4">2</span>
      <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
    </div>
  );
};

export default AddToCart;
