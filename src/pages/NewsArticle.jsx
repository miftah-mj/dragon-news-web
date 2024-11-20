import { TfiArrowCircleLeft } from "react-icons/tfi";
import Header from "../components/Header";
import RightContent from "../components/RightContent";
import { Link, useLoaderData } from "react-router-dom";

const NewsArticle = () => {
    const data = useLoaderData();
    const newsData = data.data[0];
    // console.log(newsData);

    return (
        <div>
            <header>
                <Header />
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-3 gap-6">
                <section className="col-span-2">
                    <h3 className="text-xl font-semibold pb-4">Dragon News</h3>
                    <div className="shadow-md border rounded-lg p-4">
                        {/* News Image */}
                        <figure>
                            <img
                                src={newsData && newsData.image_url}
                                alt="News"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="">
                            {/* Title */}
                            <h1 className="text-2xl font-bold text-gray-800 my-5">
                                {newsData.title}
                            </h1>

                            {/* Article Content */}
                            <p className="text-gray-700 text-sm leading-relaxed mb-8">
                                {newsData && newsData.details}
                            </p>

                            {/* Navigation Button */}
                            <Link
                                to={`/category/${
                                    newsData && newsData?.category_id
                                }`}
                                className="flex items-center space-x-2 bg-primary hover:bg-red-600 text-white px-4 py-2 rounded-sm w-fit"
                            >
                                <TfiArrowCircleLeft className="text-xl" />
                                <span className="text-sm font-medium">
                                    All news in this category
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <aside className="col-span-1">
                    <RightContent />
                </aside>
            </main>
        </div>
    );
};

export default NewsArticle;
