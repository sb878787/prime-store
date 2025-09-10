// Next Imports
import type { Metadata } from 'next';

// Styles
import './globals.css';

// Components
import Layout from '@/components/Layout';

// Context
import { ShoppingCartContextProvider } from '@/context/ShoppingCartContext';

export const metadata: Metadata = {
  title: {
    default: 'Prime Store',
    template: 'Prime Store | %s',
  },
  description:
    'Professional portfolio project: Modern e-commerce starter built with Next.js 15, React 19, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShoppingCartContextProvider>
          <Layout>{children}</Layout>
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
