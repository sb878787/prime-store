import Container from '@/components/Container';

const Product = async () => {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-3">
          <img src="" alt="ProductImage" />
        </div>

        <div className="col-span-9 p-4">
          <h2 className="font-bold text-2xl"></h2>
          <p className="text-gray-600"></p>
          <p className="font-bold">
            price: <span>$</span>
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 rounded bg-sky-500 text-white">+</button>
            <span className="mx-4">2</span>
            <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
