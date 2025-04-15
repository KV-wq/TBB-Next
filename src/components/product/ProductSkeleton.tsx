export const ProductSkeleton = () => {
  return (
    <div className="animate-pulse card p-4">
      <div className="bg-gray-200 aspect-[3/4] w-full mb-4 rounded"></div>
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div className="flex justify-between items-center">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
};
