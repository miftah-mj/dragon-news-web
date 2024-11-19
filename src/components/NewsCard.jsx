import { AiOutlineEye, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const NewsCard = ({ newsItem }) => {
    const { image_url, title, details, author, rating, total_view } =
        newsItem || {};
    return (
        <div className="card border border-gray-200 rounded-md">
            {/* Author Info */}
            <div className="flex items-center space-x-4 p-4">
                <div>
                    <img
                        className="w-12 rounded-full"
                        src={author.img}
                        alt="Author"
                    />
                </div>

                <div>
                    <h2 className="font-bold text-sm text-gray-800">
                        {author.name}
                    </h2>
                    <p className="text-xs text-gray-500">
                        {author.published_date}
                    </p>
                </div>
            </div>

            <figure>
                <img src={image_url} alt="News" className="object-cover" />
            </figure>

            <div className="card-body">
                <h3 className="card-title text-lg font-semibold text-gray-800">
                    {title}
                </h3>
                <p className="text-sm text-gray-600">
                    {details.slice(0, 150)}...{" "}
                </p>
                <a
                    href="#"
                    className="text-sm font-semibold text-orange-400 hover:underline"
                >
                    Read More
                </a>
            </div>
            <hr className="mx-4" />

            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar
                            key={index}
                            className={`text-lg text-yellow-500 ${
                                index < Math.round(rating.number)
                                    ? ""
                                    : "opacity-30"
                            }`}
                        />
                    ))}
                    <span className="text-sm text-gray-700">
                        {rating.number}
                    </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                    <AiOutlineEye className="text-lg" />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    newsItem: PropTypes.object.isRequired,
};

export default NewsCard;
