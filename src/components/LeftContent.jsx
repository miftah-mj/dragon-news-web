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
            <div>
                {categories.map((category) => (
                    <div key={category.id} className="py-2">
                        <NavLink
                            // key={category.category_id}
                            to={`/category/${category.category_id}`}
                            className="text-gray-500 p-2 hover:text-gray-900 hover:bg-gray-200 "
                        >
                            {category.category_name}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftContent;
