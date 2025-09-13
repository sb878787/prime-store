// Next Imports
import Image from 'next/image';

// Components
import Container from '@/components/Container';
import AddToCart from '@/components/AddToCart';

// Types
import { IProductItemProps } from '@/types/ProductItemType';

interface IProductProps {
  params: Promise<{ id: string }>;
}

const Product = async ({ params }: IProductProps) => {
  const { id } = await params;

  const result = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });
  const data = (await result.json()) as IProductItemProps;

  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-3">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={800}
            className="w-full h-56 object-cover object-center"
          />
        </div>

        <div className="col-span-9 p-4">
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p className="text-gray-600">{data.description}</p>
          <p className="font-bold">
            price: <span>{data.price}$</span>
          </p>

          <AddToCart id={id} />
        </div>
      </div>
    </Container>
  );
};

export default Product;
