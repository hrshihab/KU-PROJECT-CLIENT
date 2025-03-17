import NewsDetails from '@/components/ui/NewsDetails';
import { INews } from '@/typs';
import React from 'react';

interface IParamsId {
    params: {
        newsId: string
    }
}

// export const generateStaticParams = async () => {
//     try {
//         const res = await fetch('https://ku-server-eta.vercel.app/api/v1/news', {
//             next: {
//                 revalidate: 3600
//             }
//         });
//         const response = await res.json();
//         // Access the data array from the response
//         const newsItems = response?.data || [];
        
//         return newsItems.slice(0, 3).map((news: INews) => ({
//             newsId: news.id.toString()
//         }));
//     } catch (error) {
//         console.error('Error generating static params:', error);
//         return [];
//     }
// }

const NewsDetailsPage = async ({ params }: IParamsId) => {
    try {
        const res = await fetch(`https://ku-server-eta.vercel.app/api/v1/news/${params.newsId}`, {
            cache: "no-store"
        });
        const response = await res.json();
       // console.log(response);
        
        // Access the news data from the response structure
        const news = response?.data;

        if (!news) {
            throw new Error('News not found');
        }

        return (
            <div className='w-[90%] mx-auto'>
                <h1 className='text-4xl text-center my-5'>News Details From <span className='text-accent'>KU News</span></h1>
                <p className='text-xl text-center text-gray-400 w-2/4 mx-auto'>
                    <i>Stay updated with the latest news and events from Khulna University</i>
                </p>
                <div className='my-5'>
                    <NewsDetails news={news} />
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error:', error);
        return (
            <div className='w-[90%] mx-auto text-center py-10'>
                <h1 className='text-2xl text-red-500'>Error loading news details</h1>
                <p className='text-gray-600 mt-2'>Please try again later</p>
            </div>
        );
    }
};

export default NewsDetailsPage;