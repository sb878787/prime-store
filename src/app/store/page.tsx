// Next Import
import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import ProductItem from '@/components/ProductItem';
import Pagination from '@/components/Pagination';
import Container from '@/components/Container';
import Search from '@/components/Search';

// Types
import { IProductList } from '@/types/ProductItemType';

export const metadata: Metadata = {
  title: 'Store',
};

interface IStorePageProps {
  // params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

const StorePage = async ({ searchParams }: IStorePageProps) => {
  const page = (await searchParams).page ?? '1';
  const per_page = (await searchParams).per_page ?? '5';
  const title = (await searchParams).title ?? '';

  const result = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${per_page}&title=${title}`,
    {
      cache: 'no-store',
    },
  );
  const data = (await result.json()) as IProductList;

  return (
    <Container>
      <h1 className="py-4">Store</h1>

      <Search />

      <div className="grid grid-cols-4 gap-6 mb-5">
        {data.data.map((item) => (
          <Link key={item.id} href={`/store/product/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>

      <Pagination pageCount={data.pages} />
    </Container>
  );
};

export default StorePage;
