import Image from 'next/image';
import Link from 'next/link';
import { INews } from '@/typs';

interface NewsCardProps {
  news: INews;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className='card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow'>
        <div className='relative h-48'>
          <Image
            src={news.imageUrl || '/fallback-news-image.jpg'}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl font-semibold mb-2 line-clamp-2'>{news.title}</h3>
          <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{news.description}</p>
          <div className='flex justify-between items-center text-sm text-gray-500'>
            <span>{new Date(news.createdAt).toLocaleDateString()}</span>
            <span>{news.createdBy}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
