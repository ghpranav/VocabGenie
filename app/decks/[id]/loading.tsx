export default function LoadingDecksPage() {
  return (
    <div className="flex-grow flex justify-center items-center p-2">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-right text-xs text-gray-400 italic">
              Loading...
            </p>
          </div>
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
