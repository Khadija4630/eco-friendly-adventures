import { useParams } from "react-router-dom";
import React, { useState ,useEffect} from "react";

const AdventureDetails = () => {
    const { id } = useParams(); 
    const [adventure, setAdventure] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchAdventureDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch("/adventures.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch adventure details");
                }
                const data = await response.json();
                const selectedAdventure = data.find(
                    (item) => item.AdventureID.toString() === id
                );

                if (!selectedAdventure) {
                    throw new Error("Adventure not found");
                }

                setAdventure(selectedAdventure);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAdventureDetails();
    }, [id]);

    if (!adventure) {
        return <div className="text-center">Adventure details not found.</div>;
    }

    if (loading) {
        return <div className="text-center">Loading adventure details...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }


    const handleExpertClick = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        if (currentHour >= 10 && currentHour < 20) {
            window.open("https://meet.google.com", "_blank");
        } else {
            setShowModal(true);
                alert("Talk with expert! Our experts are available between 10:00 AM and 8:00 PM.");
        }
    };

    return (
        <div className="adventure-details p-4">
            <img
                src={adventure.Image}
                alt={adventure.AdventureTitle}
                className="w-full h-96 object-cover my-4"
            />
            <h1 className="text-3xl font-bold">{adventure.AdventureTitle}</h1>
            <p className="text-sm text-gray-600 mb-4">
                <strong>Category:</strong> {adventure.CategoryName}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Short Description:</strong> {adventure.ShortDescription}
                </p>
                <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {adventure.Location}
            </p>
            <p className="text-gray-700 mb-2 ">
                <strong>Duration:</strong> {adventure.Duration}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Adventure Level:</strong> {adventure.AdventureLevel}
            </p>
            <p className="text-gray-700 mb-2 mt-2 font-bold">
                <strong>Cost:</strong> ${adventure.AdventureCost}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Max Group Size:</strong> {adventure.MaxGroupSize}
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Availability:</strong> {adventure.BookingAvailability}
            </p>
            <div className="mb-4">
                <h4 className="text-gray-800 font-semibold mb-1">
                    Included Items:
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                    {adventure.IncludedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="eco-friendly-features mt-4">
                <h4 className="font-semibold text-gray-800 mb-1">Eco-Friendly Features:</h4>
                <ul className="list-disc list-inside text-gray-700">
                    {adventure.EcoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <button
                onClick={handleExpertClick}
                className=" mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
            >
                Talk with Expert
            </button>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Consultation Time</h3>
                        <p className="text-gray-700">
                            Our experts are available between <strong>10:00 AM</strong> and <strong>8:00 PM</strong>. 
                            Please try again during those hours.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                            Close
                        </button>
                    </div>
                    </div>
            )}
        </div>
    );
};

export default AdventureDetails;
