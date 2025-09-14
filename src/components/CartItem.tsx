'use client';

// React Imports
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import AddToCart from './AddToCart';

// Types
import { IProductItemProps } from '@/types/ProductItemType';

interface ICartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: ICartItemProps) => {
  const [data, setData] = useState({} as IProductItemProps);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      const { data } = res;

      setData(data);
    });
  });

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
      <img
        className="col-span-2 w-full h-48 object-center object-cover"
        src={data.image}
        alt="ProductImage"
      />

      <div className="col-span-10 p-4">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p>
          count: <span>{quantity}</span>
        </p>
        <p>
          price: <span>${data.price}</span>
        </p>

        <AddToCart id={id.toString()} />
      </div>
    </div>
  );
};

export default CartItem;
