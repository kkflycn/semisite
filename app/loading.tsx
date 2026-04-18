export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-[#080810]">
      {/* Page hero skeleton */}
      <div className="border-b border-white/[0.06] bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-3 animate-pulse">
          <div className="h-3 w-20 bg-white/[0.06] rounded-full" />
          <div className="h-8 w-72 bg-white/[0.06] rounded-lg" />
          <div className="h-4 w-96 bg-white/[0.04] rounded-lg" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 animate-pulse">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.05] rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] bg-white/[0.04]" />
              <div className="p-4 space-y-2.5">
                <div className="h-3 w-16 bg-white/[0.06] rounded" />
                <div className="h-4 w-28 bg-white/[0.06] rounded" />
                <div className="h-3 w-full bg-white/[0.04] rounded" />
                <div className="h-3 w-3/4 bg-white/[0.04] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
