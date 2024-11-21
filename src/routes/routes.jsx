import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsArticle from "../pages/NewsArticle";
import SecuredRoute from "./SecuredRoute";

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
        path: "/news/:id",
        element: (
            <SecuredRoute>
                <NewsArticle />
            </SecuredRoute>
        ),
        loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*", // 404 Not Found
        element: <ErrorPage />,
    },
]);

export default routes;
