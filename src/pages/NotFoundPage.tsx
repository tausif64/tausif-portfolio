import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-xl">Oops! The page you are looking for does not exist.</p>
            <Link
                to="/"
                className="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-gray-400 transition duration-200"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;