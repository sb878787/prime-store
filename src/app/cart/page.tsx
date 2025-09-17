// Components
import CartItemList from '@/components/CartItemList';
import Container from '@/components/Container';

const Cart = () => {
  return (
    <Container>
      <h1 className="my-4">Cart</h1>

      <CartItemList />
    </Container>
  );
};

export default Cart;
