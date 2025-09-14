'use client';

// Components
import CartItem from './CartItem';

// Hooks
import { useShoppingCartContext } from '@/Hooks/useShoppingCartContext';

const CartItemList = () => {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartItemList;
