'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Components
import AddToCart from './AddToCart';

// Types
import { IProductItemProps } from '@/types/ProductItemType';

interface ICartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: ICartItemProps) => {
  const [data, setData] = useState<IProductItemProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`http://localhost:3001/products/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as IProductItemProps;
        if (!cancelled) setData(json);
      } catch (e: unknown) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="grid grid-cols-12 bg-slate-100 mb-4 animate-pulse p-4 rounded-lg">
        <div className="col-span-2 h-48 bg-slate-300 rounded" />
        <div className="col-span-10 pl-4">
          <div className="h-6 bg-slate-300 w-3/4 mb-3 rounded" />
          <div className="h-4 bg-slate-300 w-1/3 mb-2 rounded" />
          <div className="h-4 bg-slate-300 w-1/4 mb-4 rounded" />
          <div className="h-10 bg-slate-300 w-32 rounded" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
        Failed to load product {id}. {error ? `Error: ${error}` : ''}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4 rounded-lg overflow-hidden">
      <div className="col-span-2 relative h-48">
        <Image
          src={data.image}
          alt={data.title ?? 'Product image'}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 33vw, 200px"
          priority
        />
      </div>

      <div className="col-span-10 p-4">
        <h2 className="text-xl font-bold line-clamp-2">{data.title}</h2>
        <p>
          count: <span>{quantity}</span>
        </p>
        <p>
          price: <span>${data.price}</span>
        </p>

        <AddToCart id={String(id)} />
      </div>
    </div>
  );
};

export default CartItem;
