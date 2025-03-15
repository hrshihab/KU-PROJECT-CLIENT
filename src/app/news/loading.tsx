import LoadingCard from '@/components/ui/LoadingCard';
import React from 'react';

const NewsLoadingPage = () => {
  // Create an array of 6 items to show loading state
  const loadingItems = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div className='w-[90%] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
        {loadingItems.map((index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsLoadingPage;

// echo "# blogiz-starter-pack" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/hridoy281810/blogiz-starter-pack.git
// git push -u origin main