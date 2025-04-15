"use client";

import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductList } from "@/components/product/ProductList";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { products } from "@/data/products";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const isInCart = (productId: number) => cart.includes(productId);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(price);
  };

  return (
    <Layout cartItemsCount={cart.length}>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductList
        products={filteredProducts}
        loading={loading}
        isInCart={isInCart}
        addToCart={addToCart}
        formatPrice={formatPrice}
      />
    </Layout>
  );
}
