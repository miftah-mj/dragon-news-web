import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/01")
            .then((res) => res.json())
            .then((data) => {
                setLatestNews(data.data);
            });
    }, []);

    return (
        <div className="flex items-center gap-4 bg-gray-100 p-2">
            <div className="bg-primary text-white text-xl font-medium px-4 py-3 w-fit">
                Latest
            </div>
            <Marquee pauseOnHover={true} className="space-x-10">
                <div className="flex gap-10">
                    {latestNews.map((newsItem) => (
                        <Link
                            key={newsItem._id}
                            to={`/news/${newsItem._id}`}
                            className="hover:text-red-500"
                        >
                            {newsItem.title}
                        </Link>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;
