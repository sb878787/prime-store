'use client';

// Next Imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import Container from './Container';
import CartIcon from './icons/CartIcon';

// Contexts
import { useShoppingCartContext } from '@/Hooks/useShoppingCartContext';

const Navbar = () => {
  const pathname = usePathname();

  const { cartTotalQty } = useShoppingCartContext();

  const navLinks = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/store',
      title: 'Store',
    },
  ];

  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`mr-4 ${pathname === item.href ? 'text-sky-500' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div>
            <Link href="/cart" className="flex relative">
              {cartTotalQty > 0 && (
                <span className="absolute top-0 right-0 text-[12px] px-[4px] bg-red-500 text-white rounded-full">
                  {cartTotalQty}
                </span>
              )}
              <CartIcon size={32} />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
