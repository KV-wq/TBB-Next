import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
  cartItemsCount: number;
};

export const Layout = ({ children, cartItemsCount }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={cartItemsCount} />
      <main className="container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}; 