import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import CategoryNews from "../pages/CategoryNews";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Navigate to="/category/01" />,
            },
            {
                path: "/category/:id",
                element: <CategoryNews />,
                loader: ({ params }) =>
                    fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/news",
        element: <NewsLayout />,
    },
    {
        path: "auth",
        element: <AuthLayout />,
    },
    {
        path: "*", // 404 Not Found
        element: <ErrorPage />,
    },
]);

export default routes;
