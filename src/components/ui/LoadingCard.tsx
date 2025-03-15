const LoadingCard = () => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
