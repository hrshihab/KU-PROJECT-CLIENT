import Image from 'next/image';
import React from 'react';
import { INews } from '@/typs';
import { formatDate } from '@/utils/formatDate'; // You'll need to create this utility

interface NewsDetailsProps {
    news: INews;
}

const NewsDetails = ({ news }: NewsDetailsProps) => {
    return (
        <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
            {/* Hero Image Section */}
            <div className='relative h-[400px] w-full'>
                <Image
                    src={news.imageUrl || '/fallback-news-image.jpg'}
                    alt={news.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover'
                />
            </div>
            
            {/* Content Section */}
            <div className='p-8'>
                {/* Metadata Bar */}
                <div className='flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600'>
                    <div className='flex items-center gap-2'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Published: {new Date(news.createdAt).toLocaleDateString('bn-BD', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Posted by: {news.createdBy}</span>
                    </div>
                    {news.updatedAt !== news.createdAt && (
                        <div className='flex items-center gap-2'>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Updated: {new Date(news.updatedAt).toLocaleDateString('bn-BD', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</span>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h1 className='text-3xl font-bold mb-6 text-gray-900'>
                    {news.title}
                </h1>

                {/* Description */}
                <div className='prose max-w-none mb-8'>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                        {news.description}
                    </p>
                </div>

                {/* Additional Details */}
                <div className='mt-8 pt-8 border-t border-gray-200'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h3 className='text-lg font-semibold text-gray-900'>Publication Details</h3>
                            <div className='space-y-2'>
                                <p className='text-sm text-gray-600'>
                                    <span className='font-medium'>Original Date:</span>{' '}
                                    {new Date(news.date).toLocaleDateString('bn-BD')}
                                </p>
                                <p className='text-sm text-gray-600'>
                                    <span className='font-medium'>Created At:</span>{' '}
                                    {new Date(news.createdAt).toLocaleDateString('bn-BD')}
                                </p>
                                <p className='text-sm text-gray-600'>
                                    <span className='font-medium'>Last Updated:</span>{' '}
                                    {new Date(news.updatedAt).toLocaleDateString('bn-BD')}
                                </p>
                            </div>
                        </div>
                        
                        <div className='space-y-4'>
                            <h3 className='text-lg font-semibold text-gray-900'>Additional Information</h3>
                            <div className='space-y-2'>
                                <p className='text-sm text-gray-600'>
                                    <span className='font-medium'>News ID:</span>{' '}
                                    {news.id}
                                </p>
                                <p className='text-sm text-gray-600'>
                                    <span className='font-medium'>Author:</span>{' '}
                                    {news.createdBy}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Buttons */}
                <div className='mt-8 pt-8 border-t border-gray-200'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Share This News</h3>
                    <div className='flex gap-4'>
                        <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                            Share on Facebook
                        </button>
                        <button className='px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors'>
                            Share on Twitter
                        </button>
                        <button className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'>
                            Share on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
