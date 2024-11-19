import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-4 bg-gray-100 p-2">
            <div className="bg-primary text-white text-xl font-medium px-4 py-3 w-fit">
                Latest
            </div>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to="/news" className="hover:text-red-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vel possimus, eveniet, a necessitatibus doloribus animi
                    maxime accusamus architecto iure ea velit est dolorum facere
                    ad soluta? Enim sequi facilis nobis.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
