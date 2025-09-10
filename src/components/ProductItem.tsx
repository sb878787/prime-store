interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductItem = ({ image, title, price }: IProductItemProps) => {
  return (
    <div className="shadow-md">
      <img src={image} alt="ProductImage" className="w-full h-48 object-cover object-center" />

      <div className="p-2">
        <h3 className="font-bold">{title}</h3>
        <p>
          price: <span>{price}$</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
