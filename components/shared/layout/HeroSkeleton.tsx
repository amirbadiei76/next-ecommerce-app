export function HeroSkeleton() {
    return (
      <div className="animate-pulse flex items-center gap-6 p-6 bg-gray-100 rounded-xl h-[300px] mb-6">
        <div className="flex-1 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-12 bg-gray-300 rounded w-32"></div>
        </div>
  
        <div className="w-64 h-64 bg-gray-300 rounded-xl"></div>
      </div>
    );
}
  