import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const Travel = () => {
    const [travels, setTravels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = false; 
    useEffect(() =>{
        const fetchAdventures = async () => {
            setLoading(true);
            try {
                const response = await fetch('adventures.json');
                if (!response.ok) {
                    throw new Error("Failed to fetch adventures");
                }
                const data = await response.json();
                setTravels(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAdventures();
    }, []);

    if (loading) {
        return <div className="text-center">Loading adventures...</div>;
    }

    
    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    
    if (travels.length === 0) {
        return <div className="text-center">No adventures available.</div>;
    }

    const handleExplore = (AdventureID) => {
        if (isLoggedIn) {
            Navigate(`/adventure/${AdventureID}`);
        } else {
            Navigate("/auth");
        }
    };

    return (
        <div>
            <h1 className="md:text-3xl text-2xl font-bold text-center text-black my-5">Eco-Adventures</h1>
            <div className="adventure-list text-black grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {travels.map((adventure) => (
                    <div key={adventure.AdventureID} className="adventure-card border p-4 m-2 rounded shadow-md">
                        <h2 className="text-2xl font-semibold">{adventure.AdventureTitle}</h2>
                        <img
                            src={adventure.Image}
                            alt={adventure.AdventureTitle}
                            className="w-full h-56  object-cover rounded-md"
                        />
                        <div className="eco-friendly-features mt-2">
                            <h4 className="font-semibold text-xl">Eco-Friendly Features:</h4>
                            <ul className="list-disc list-inside text-lg text-gray-500">
                                {adventure.EcoFriendlyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <button
                            onClick={() => handleExplore(adventure.ID)}
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Explore Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Travel;

{/* .map(adventure => (
                    <div key={adventure.ID} className="adventure-card border p-4 m-2 rounded shadow-md">
                        <h2 className="text-xl font-semibold">{adventure.AdventureTitle}</h2>
                        <img src={adventure.Image} alt={adventure.AdventureTitle} className="w-full h-48 object-cover rounded-md" />
                        <p className="mt-2">{adventure.ShortDescription}</p>
                        <p className="mt-2 font-bold">Cost: ${adventure.AdventureCost}</p>
                        <p className="mt-2">Duration: {adventure.Duration}</p>
                        <p className="mt-2">Level: {adventure.AdventureLevel}</p>
                        <p className="mt-2">Location: {adventure.Location}</p>
                        <div className="eco-friendly-features mt-2">
                            <h4 className="font-semibold">Eco-Friendly Features:</h4>
                            <ul className="list-disc list-inside">
                                {adventure.EcoFriendlyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <Link
                            to={`/adventure/${adventure.ID}`}
                            className="text-blue-500 underline mt-2 block"
                        >
                            View Details
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}