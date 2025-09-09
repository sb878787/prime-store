import type { Metadata } from 'next';
import './globals.css';

import Layout from '@/components/Layout';

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
