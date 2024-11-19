import React from 'react';
import {useNavigate } from 'react-router-dom';
const AdventureCard = ({ adventure, isLoggedIn }) => {
        const navigate = useNavigate();
    
        const handleExploreNow = () => {
            if (isLoggedIn) {
                navigate(`/adventure/${adventure.ID}`); // Navigate to adventure detail page
            } else {
                navigate('/login'); // Redirect to login page
            }
        };
    
        return (
            <div className="adventure-card bg-gradient-to-r from-green-400 to-blue-500 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src={adventure.Image} alt={adventure.AdventureTitle} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-xl font-bold text-white mt-3">{adventure.AdventureTitle}</h3>
                <p className="text-white mt-2">{adventure.ShortDescription}</p>
                <div className="eco-friendly-features mt-2 text-white">
                    <h4 className="font-semibold">Eco-Friendly Features:</h4>
                    <ul className="list-disc list-inside">
                        {adventure.EcoFriendlyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={handleExploreNow}
                    className="mt-4 bg-blue-600 hover:bg-light-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    Explore Now
                </button>
            </div>
        );
    };
    
export default AdventureCard;