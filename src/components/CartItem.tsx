const CartItem = () => {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
      <img
        className="col-span-2 w-full h-48 object-center object-cover"
        src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png"
        alt="ProductImage"
      />

      <div className="col-span-10 p-4">
        <h2 className="text-xl font-bold">title</h2>
        <p>
          count: <span>3</span>
        </p>
        <p>
          price: <span>$100</span>
        </p>

        <div className="mt-4">
          <button className="px-4 py-2 rounded bg-sky-500 text-white">+</button>
          <span className="mx-4">2</span>
          <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
