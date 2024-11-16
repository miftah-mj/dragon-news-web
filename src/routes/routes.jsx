import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
