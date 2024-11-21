import React, { useState, useEffect } from "react";
import { FaHiking,FaMapMarkerAlt, FaLightbulb, FaLeaf } from "react-icons/fa"; 
import AOS from "aos";
import "aos/dist/aos.css";

const AdventureInstructions = () => {
    const [specialInstructions, setSpecialInstructions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: "ease-out",
            once: true, 
            offset: 100,
        });
        const fetchAdventures = async () => {
            setLoading(true);
            try {
                const response = await fetch("adventures.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch adventure data");
                }
                const data = await response.json();
                setSpecialInstructions(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAdventures();
    }, []);

    if (loading) {
        return <div className="text-center">Loading special instructions...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (specialInstructions.length === 0) {
        return <div className="text-center">No special instructions available at the moment.</div>;
    }

    return (
        <div className="my-8 p-6 bg-gray-100 rounded-md shadow-md ">
            <h2  data-aos="fade-down" className="text-2xl md:text-3xl text-black font-bold text-center mb-4">Adventure Tips & Special Instructions</h2>
            <p  data-aos="fade-up" className="text-lg md:text-xl text-gray-600 text-center mb-6 md:w-[60%] mx-auto">
            Dive into essential tips and special instructions for each adventure. 
            From packing advice to safety guidelines, ensure you’re fully prepared to enjoy every moment of your trip while respecting nature and local customs.
            </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialInstructions.map((adventure) => (
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
                        <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center">
                            <FaHiking className="mr-2 text-green-500" />
                            {adventure.AdventureTitle}
                        </h3>
                        <p className="text-xl text-gray-600 mb-4 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-red-500" />
                            <strong>Location:</strong> {adventure.Location}
                        </p>
                        <div className="bg-gray-100 p-3 rounded-md">
                            <h4 className="text-gray-800 font-bold mb-2 flex items-center">
                                <FaLeaf className="mr-2 text-green-500"></FaLeaf>Special Instructions:
                            </h4>
                            <ul className="list-disc list-inside">
                                {adventure.SpecialInstructions.map((instruction, index) => (
                                    <li
                                        data-aos="fade-in"
                                        key={index}
                                        className="text-gray-500 flex items-start mb-2"
                                    >
                                        <FaLightbulb className="mr-2 text-yellow-500 mt-1" />
                                        {instruction}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdventureInstructions;
