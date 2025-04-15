type CategoryFilterProps = {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
};

export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="mb-6">
      <nav className="flex flex-wrap justify-center gap-3 md:gap-8">
        <button
          onClick={() => onCategoryChange(null)}
          className={`text-sm uppercase px-3 py-2 transition-all ${
            activeCategory === null
              ? " text-black !border-b !border-black"
              : "text-gray-500 border-b border-transparent hover:border-gray-300"
          }`}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`text-sm uppercase px-3 py-2 transition-all ${
              activeCategory === category
                ? " text-black border-b border-black"
                : "text-gray-500 border-b border-transparent hover:border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};
