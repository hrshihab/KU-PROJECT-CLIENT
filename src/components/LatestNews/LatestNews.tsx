import { INews } from '@/typs';
import React from 'react';
import LatestNewsCard from '../ui/LatestNewsCard';
import NewsCard from '../ui/NewsCard';

const LatestNews = ({news}:{news:INews[]}) => {
  console.log(news)
  return (
    <div className='w-[90%] mx-auto'>
     <h1 className='text-4xl text-center my-5'>Latest News From <span className='text-accent'>Khulna University</span> </h1>
   <p className='text-xl text-center text-gray-400  w-2/4 mx-auto'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
   <div className='grid grid-cols-2 gap-4 my-5'>
    {
        news.slice(0,2).map((news)=> <LatestNewsCard key={news.id} news={news} />)
    }
   </div>
   <div className='grid grid-cols-3 gap-4 my-5'>
    {
        news.slice(2,5).map((news)=> <NewsCard key={news.id} news={news} />)
    }
   </div>
    </div>
  );
};

export default LatestNews;