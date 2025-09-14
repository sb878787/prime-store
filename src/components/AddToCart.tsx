'use client';

import { useShoppingCartContext } from '@/Hooks/useShoppingCartContext';

interface IAddToCartProps {
  id: string;
}

const AddToCart = ({ id }: IAddToCartProps) => {
  const { handleIncreaseCartQuantity, getCartQuantity, handleDecreaseCartQuantity } =
    useShoppingCartContext();

  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 rounded bg-sky-500 text-white"
        onClick={() => handleIncreaseCartQuantity(parseInt(id))}
      >
        +
      </button>
      <span className="mx-4">{getCartQuantity(parseInt(id))}</span>
      <button
        className="px-4 py-2 rounded bg-sky-500 text-white"
        onClick={() => handleDecreaseCartQuantity(parseInt(id))}
      >
        -
      </button>
    </div>
  );
};

export default AddToCart;
