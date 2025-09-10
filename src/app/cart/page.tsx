// Components
import CartItem from '@/components/CartItem';
import Container from '@/components/Container';

const Cart = () => {
  return (
    <Container>
      <h1 className="my-4">Cart</h1>

      <div>
        <CartItem />
      </div>

      <div className="border shadow-md p-4">
        <h3 className="text-xl font-bold">
          Total price: <span>$300</span>
        </h3>
        <h3 className="text-xl font-bold">
          Discount: <span>$120</span>
        </h3>
        <h3 className="text-xl font-bold">
          Final price: <span>$120</span>
        </h3>

        <div className='mt-3'>
          <input className='border px-4 py-2' placeholder="Discount code..." type="text" />
          <button className="px-4 py-2 rounded bg-sky-500 text-white ml-4">Apply</button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
