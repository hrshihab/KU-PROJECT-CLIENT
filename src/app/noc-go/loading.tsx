import React from 'react';

const NOCGOLoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto py-12">
      {/* Header Skeleton */}
      <div className="text-center mb-12 animate-pulse">
        <div className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto mb-4"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
            <div className="h-6 w-20 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Filter Skeleton */}
      <div className="flex justify-between mb-6 animate-pulse">
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-20 h-10 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="animate-pulse">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex p-4 border-b border-gray-200">
              <div className="w-16 h-4 bg-gray-200 rounded mr-4"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NOCGOLoadingPage; 