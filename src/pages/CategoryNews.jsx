import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news);

    return (
        <div>
            <h3 className="text-xl font-semibold pb-4">Dragon News Home</h3>
            {/* cards */}
            <div className="space-y-4">
                {news.map((newsItem) => (
                    <NewsCard key={newsItem._id} newsItem={newsItem} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;
