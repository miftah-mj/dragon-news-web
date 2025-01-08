import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4 animate-bounce">
                404
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="btn btn-outline px-6 py-3 rounded-full animate-pulse"
            >
                Go Back to Home Page &rarr;
            </Link>
        </div>
    );
};

export default ErrorPage;
