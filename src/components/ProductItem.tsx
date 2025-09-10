// Next Imports
import Image from 'next/image';

// Types
import { IProductItemProps } from '@/types/ProductItemType';

const ProductItem = ({ image, title, price }: IProductItemProps) => {
  return (
    <div className="shadow-md">
      <Image
        src={image}
        alt={title}
        width={600}
        height={600}
        className="w-full h-48 object-cover object-center"
        priority={false}
      />

      <div className="p-2">
        <h3 className="font-bold truncate">{title}</h3>
        <p>
          price: <span>{price}$</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
