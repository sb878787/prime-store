// Next Import
import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import ProductItem from '@/components/ProductItem';

// Types
import { IProductItemProps } from '@/types/ProductItemType';

export const metadata: Metadata = {
  title: 'Store',
};

const StorePage = async () => {
  const result = await fetch('http://localhost:3001/products', { cache: 'no-store' })
  const data = await result.json() as IProductItemProps[]

  return (
    <>
      <h1 className="py-4">Store</h1>

      <div className="grid grid-cols-4 gap-6 mb-5">
        {data.map((item) => (
          <Link key={item.id} href={`/store/product/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default StorePage;
