import React, { useState, useEffect } from "react";
import { FaDollarSign, FaClock, FaTree, FaMountain } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AdventureHighlights = () => {
    const [adventures, setAdventures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });

        const fetchAdventures = async () => {
            setLoading(true);
            try {
                const response = await fetch("adventures.json"); // Path to your JSON file
                if (!response.ok) {
                    throw new Error("Failed to fetch adventure data");
                }
                const data = await response.json();
                setAdventures(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAdventures();
    }, []);

    if (loading) {
        return <div className="text-center">Loading adventure highlights...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (adventures.length === 0) {
        return <div className="text-center">No adventures available at the moment.</div>;
    }

    return (
        <div className="my-8 p-6 bg-gray-100 rounded-md shadow-md">
            <h2  data-aos="fade-down" className="md:text-3xl text-2xl text-yellow-500 font-bold text-center mb-4">
                Adventure Highlights
            </h2>
            <p data-aos="fade-up" className="text-lg md:text-xl text-gray-600 text-center mb-6 md:w-[60%] mx-auto">
            Discover the key highlights of each adventure, including its duration, difficulty level, cost, and eco-friendly features. 
            Get a quick overview of what makes each experience unique and start planning your next thrilling journey!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adventures.map((adventure) => (
                    <div
                        key={adventure.AdventureID}
                        data-aos="zoom-in-up"
                        className="border rounded-md shadow-lg p-4 bg-white"
                    >
                        <img
                            src={adventure.Image}
                            alt={adventure.AdventureTitle}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className=" text-xl md:text-2xl font-bold text-gray-700 mb-2 flex items-center">
                            <FaMountain className="mr-2 text-green-500" />
                            {adventure.AdventureTitle}
                        </h3>
                        <div className="bg-gray-100 p-3 rounded-md">
                            <p className="text-sm text-gray-700 mb-2 flex items-center">
                                <FaClock className="mr-2 text-blue-500" />
                                <strong>Duration:</strong> {adventure.Duration}
                            </p>
                            <p className="text-sm text-gray-700 mb-2 flex items-center">
                                <FaTree className="mr-2 text-green-500" />
                                <strong>Level:</strong> {adventure.AdventureLevel}
                            </p>
                            <p  data-aos="flip-up" className="text-sm text-gray-700 mb-2 flex items-center">
                                <FaDollarSign className="mr-2 text-yellow-500" />
                                <strong>Cost:</strong> ${adventure.AdventureCost}
                            </p>
                            <div>
                                <h4 className="text-gray-800 font-semibold mb-1">Eco-Friendly Features:</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    {adventure.EcoFriendlyFeatures.map((feature, index) => (
                                        <li data-aos="fade-in"  key={index} className="flex items-start mb-1">
                                            <FaTree className="mr-2 text-green-400 mt-1" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdventureHighlights;
