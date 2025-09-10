import type { Metadata } from 'next';
import Link from 'next/link';

import ProductItem from '@/components/ProductItem';

export const metadata: Metadata = {
  title: 'Store',
};

const StorePage = () => {
  const data = [
    {
      id: '1',
      image:
        'https://cdn.besparto.ir/upload/posts/2025-02-06/73f853cce602b089bb049ef50a7e5ef1.webp',
      title: 'title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet qui asperiores, sint quos magni non recusandae doloribus, similique inventore officia a dicta enim suscipit dignissimos at rerum illo ipsam.',
      price: 20,
    },
    {
      id: '2',
      image:
        'https://cdn.besparto.ir/upload/posts/2025-02-06/10751aca6867c03f85759f1fc438a062.webp',
      title: 'title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet qui asperiores, sint quos magni non recusandae doloribus, similique inventore officia a dicta enim suscipit dignissimos at rerum illo ipsam.',
      price: 25,
    },
    {
      id: '3',
      image:
        'https://cdn.besparto.ir/upload/posts/2023-08-27/5c230f5a1ef108f2ef323e9464c70e00.jpeg',
      title: 'title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet qui asperiores, sint quos magni non recusandae doloribus, similique inventore officia a dicta enim suscipit dignissimos at rerum illo ipsam.',
      price: 30,
    },
    {
      id: '4',
      image:
        'https://cdn.besparto.ir/upload/posts/2025-02-06/73f853cce602b089bb049ef50a7e5ef1.webp',
      title: 'title 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet qui asperiores, sint quos magni non recusandae doloribus, similique inventore officia a dicta enim suscipit dignissimos at rerum illo ipsam.',
      price: 18,
    },
    {
      id: '5',
      image:
        'https://cdn.besparto.ir/upload/posts/2025-05-28/e5fd38aa1cd3b8d5eda917e6fefe9973.jpeg',
      title: 'title 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet qui asperiores, sint quos magni non recusandae doloribus, similique inventore officia a dicta enim suscipit dignissimos at rerum illo ipsam.',
      price: 55,
    },
  ];

  return (
    <>
      <h1 className="py-4">Store</h1>

      <div className="grid grid-cols-4 gap-6">
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
