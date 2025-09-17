'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import CartItem from './CartItem';

// Hooks
import { useShoppingCartContext } from '@/Hooks/useShoppingCartContext';

// Types
import { IProductItemProps } from '@/types/ProductItemType';

// Functions
import { formatNumberWithCommas } from '@/utils/number';

const CartItemList = () => {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((res) => {
      const { data } = res;
      setData(data);
    });
  }, []);

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="border shadow-md p-4">
        <h3 className="text-xl font-bold">
          Total price:{' '}
          <span>
            $
            {formatNumberWithCommas(
              cartItems.reduce((total, item) => {
                const selectedProduct = data.find((product) => product.id == item.id);

                return total + (selectedProduct?.price || 0) * item.quantity;
              }, 0),
            )}
          </span>
        </h3>
        <h3 className="text-xl font-bold">
          Discount: <span>$120</span>
        </h3>
        <h3 className="text-xl font-bold">
          Final price: <span>$120</span>
        </h3>

        <div className="mt-3">
          <input className="border px-4 py-2" placeholder="Discount code..." type="text" />
          <button className="px-4 py-2 rounded bg-sky-500 text-white ml-4">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
