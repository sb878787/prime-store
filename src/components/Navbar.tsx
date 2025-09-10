'use client';

// Next Imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import Container from './Container';
import CartIcon from './icons/CartIcon';

const Navbar = () => {
  const pathname = usePathname();

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
            <Link href='/cart'>
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
