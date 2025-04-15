import { Product, ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./ProductSkeleton";

type ProductListProps = {
  products: Product[];
  loading: boolean;
  isInCart: (id: number) => boolean;
  addToCart: (id: number) => void;
  formatPrice: (price: number) => string;
};

export const ProductList = ({
  products,
  loading,
  isInCart,
  addToCart,
  formatPrice,
}: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        : products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={isInCart(product.id)}
              onAddToCart={addToCart}
              formatPrice={formatPrice}
            />
          ))}
    </div>
  );
};
