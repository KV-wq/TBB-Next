import Image from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

type ProductCardProps = {
  product: Product;
  isInCart: boolean;
  onAddToCart: (id: number) => void;
  formatPrice: (price: number) => string;
};

export const ProductCard = ({
  product,
  isInCart,
  onAddToCart,
  formatPrice,
}: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col h-full">
      <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <span className="text-lg font-medium">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product.id)}
            disabled={isInCart}
            className={`text-xs uppercase px-3 py-2 rounded-none transition-colors ${
              isInCart
                ? "bg-gray-100 text-gray-400 border border-gray-200"
                : "bg-black text-white hover:bg-white hover:text-black border border-black"
            }`}
          >
            {isInCart ? "В корзине" : "В корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};
