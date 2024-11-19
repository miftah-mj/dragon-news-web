import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftContent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategories(data.data.news_category);
            });
    }, []);

    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    // }

    return (
        <div>
            <h3 className="text-xl font-semibold pb-4">All Category</h3>

            <div className="flex flex-col gap-2 w-fit">
                {categories.map((category) => (
                    <NavLink
                        key={category.category_id}
                        to={`/category/${category.category_id}`}
                        className="text-gray-500 px-4 py-2 rounded-md hover:text-gray-900"
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftContent;
