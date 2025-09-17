'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import CartItem from './CartItem';

// Hooks
import { useShoppingCartContext } from '@/Hooks/useShoppingCartContext';

// Types
import { IProductItemProps } from '@/types/ProductItemType';
import { IDiscount } from '@/types/DiscountType';

// Functions
import { formatNumberWithCommas } from '@/utils/number';

const CartItemList = () => {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    axios('http://localhost:3001/products').then((res) => {
      const { data } = res;
      setData(data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = data.find((product) => product.id == item.id);

    return total + (selectedProduct?.price || 0) * item.quantity;
  }, 0);

  const handleSubmitDiscount = () => {
    axios(`http://localhost:3001/discounts?code=${discountCode}`).then((res) => {
      const data = res.data as IDiscount[];
      const discountedPrice = ((data[0]?.percentage || 0) / 100) * totalPrice;
      const finalPrice = totalPrice - discountedPrice;
      setDiscountedPrice(discountedPrice);
      setFinalPrice(finalPrice);
    });
  };

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="border shadow-md p-4">
        <h3 className="text-xl font-bold">
          Total price: <span>${formatNumberWithCommas(totalPrice)}</span>
        </h3>
        <h3 className="text-xl font-bold">
          Discount: <span>${formatNumberWithCommas(discountedPrice)}</span>
        </h3>
        <h3 className="text-xl font-bold">
          Final price: <span>${formatNumberWithCommas(finalPrice)}</span>
        </h3>

        <div className="mt-3">
          <input
            className="border px-4 py-2"
            placeholder="Discount code..."
            type="text"
            onChange={(e) => setDiscountCode(e.target.value)}
            value={discountCode}
          />

          <button
            className="px-4 py-2 rounded bg-sky-500 text-white ml-4"
            onClick={handleSubmitDiscount}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
