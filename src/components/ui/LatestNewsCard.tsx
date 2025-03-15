import { INews   } from "@/typs";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const LatestNewsCard = ({ news }:{news:INews}) => {
  return (
    <div key={news.id} className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={news.imageUrl}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-xl h-96"
        />
      </figure>
      <div className="card-body">
        <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 px-2 py-1 rounded-full">
          <FaCalendar className="mr-2" />
          {news.createdAt}
        </p>
        <h2 className="card-title">{news.title}</h2>
        <p className="text-gray-500">
          {news.description.length > 100
            ? news.description.slice(0, 180) + "..."
            : news.description}
          <Link href={`/blogs/${news.id}`} className="text-accent">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="avatar items-center">
            <div className="w-8 mr-1 rounded-full">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width={100}
                height={100}
                alt="author image"
              />
            </div>
            <span>{news.createdBy}</span>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
