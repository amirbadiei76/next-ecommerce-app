export default function LatestProductsSkeleton() {
    return (
      <section className="space-y-6 animate-pulse">
        <div className="h-6 w-40 bg-gray-300 rounded"></div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-gray-100">
              <div className="h-32 w-full bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    );
}
  