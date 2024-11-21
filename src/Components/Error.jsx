import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-4">Sorry, the page you are looking for does not exist.</p>
            <button 
                className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
                onClick={handleGoHome}
            >
                Go to Home
            </button>
        </div>
    );
};

export default NotFoundPage;