import { ReactNode } from 'react';
import Header from '../header';

export default function UkLayout({
  children
}: {
  children: ReactNode
}) {
  return (
      <>
        <Header />
      {children}
    </>
  );
}