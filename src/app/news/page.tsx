'use client'
  
import { useGetNewsQuery } from '@/redux/api/baseApi';
import React, { useState } from 'react';
import NewsCard from '@/components/ui/NewsCard';

// First, update your INews interface to match the response:
export interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  createdBy: string;
  date: string;
  updatedAt: string;
}

const NewsPage = () => {
  const { data } = useGetNewsQuery(undefined);
  // Access the news array from the response structure
  const news = data?.data || [];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6; // Number of news items per page

  // Filter and sort news
  const filteredAndSortedNews = news
    .filter((newsItem: INews) => 
      newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: INews, b: INews) => {
      if (sortBy === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return 0;
    });

  // Pagination logic
  const totalNews = filteredAndSortedNews.length;
  const totalPages = Math.ceil(totalNews / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredAndSortedNews.slice(indexOfFirstNews, indexOfLastNews);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
      
  return (
    <div className='w-[90%] mx-auto pb-12'>
      {/* Updated Header Section */}
      <div className="text-center py-12 space-y-6">
        <h1 className='text-5xl font-bold tracking-tight'>
          Latest News from{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400'>
            Khulna University
          </span>
        </h1>
        <p className='text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed'>
          Stay updated with the latest news, events, and announcements from our university community.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
            {news.length}+ Articles
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
            </svg>
            Latest Updates
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Breaking News
          </span>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm'>
        <div className='w-full md:w-1/2'>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Search news..."
              className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className='w-full md:w-auto'>
          <select
            className='w-full md:w-48 py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all appearance-none bg-white'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
        {currentNews.map((newsItem: INews) => (
          <NewsCard
            key={newsItem.id}
            news={{
              ...newsItem,
              imageUrl: newsItem.imageUrl, // Map imageUrl to image for consistency
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalNews > newsPerPage && (
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {pageNumbers.map((number) => (
            number === 1 ||
            number === totalPages ||
            (number >= currentPage - 1 && number <= currentPage + 1)
            ? (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === number
                    ? 'bg-cyan-500 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {number}
              </button>
            ) : number === currentPage - 2 || number === currentPage + 2 ? (
              <span key={number} className="px-2">...</span>
            ) : null
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center text-gray-500 mt-6">
        Showing {indexOfFirstNews + 1}-{Math.min(indexOfLastNews, totalNews)} of {totalNews} news items
      </div>

      {/* No Results Message */}
      {filteredAndSortedNews.length === 0 && (
        <div className='text-center text-gray-500 py-10'>
          No news found matching your search.
        </div>
      )}
    </div>
  );
};

export default NewsPage;