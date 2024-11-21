import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Travel = () => {
    const [travels, setTravels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = false; 
    const navigate = useNavigate(); 

    useEffect(() =>{
        AOS.init({
            duration: 1200, 
            easing: "ease-in-out",
            once: true, 
            offset: 100,
        });
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

    const handleExplore = (id) => {
        if (isLoggedIn) {
            navigate(`/adventure/${id}`);
        }
         else {
            navigate("/login" , { state: { from: `/adventure/${id}` }});
        }
    };

    return (
        <div>
            <h1  data-aos="fade-down" className="md:text-3xl text-2xl font-bold text-center text-black my-5">Explore all the Eco-Friendly Adventures</h1>
            <p  data-aos="fade-up" className="text-lg md:text-xl text-gray-700 text-center mb-6 md:w-[50%] mx-auto">
        Discover our collection of thrilling adventures designed to connect you with nature while prioritizing sustainability. 
        Each experience comes with unique eco-friendly features and an opportunity to explore the wonders of the great outdoors. 
        Click "Explore Now" to learn more and start your journey!
        </p>
    <div className="adventure-list text-black grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {travels.map((adventure) => (
                    <div  data-aos="zoom-in-up" key={adventure.AdventureID} className="adventure-card border p-4 m-2 rounded shadow-md">
                        <h2 className="text-2xl font-semibold">{adventure.AdventureTitle}</h2>
                        <img
                            src={adventure.Image}
                            alt={adventure.AdventureTitle}
                            className="w-full h-56  object-cover rounded-md"
                        />
                        <p className="text-sm text-gray-600 mb-4">
                <strong>Category:</strong> {adventure.CategoryName}
                    </p>
                    <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {adventure.Location}
                    </p>
                        <div  data-aos="fade-up" className="eco-friendly-features mt-2">
                            <h4 className="font-semibold text-xl">Eco-Friendly Features:</h4>
                            <ul className="list-disc list-inside text-lg text-gray-500">
                                {adventure.EcoFriendlyFeatures.map((feature, index) => (
                                    <li data-aos="fade-in" key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <button
                        data-aos="flip-up"
                            onClick={() => handleExplore(adventure.AdventureID)}
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