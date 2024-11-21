import { useLoaderData } from "react-router-dom";

const AdventureDetails = () => {
    const adventure = useLoaderData();

    if (!adventure) {
        return <div className="text-center">Adventure details not found.</div>;
    }

    return (
        <div className="adventure-details p-4">
            <h1 className="text-3xl font-bold">{adventure.AdventureTitle}</h1>
            <img
                src={adventure.Image}
                alt={adventure.AdventureTitle}
                className="w-full h-96 object-cover my-4"
            />
            <p className="mt-2">{adventure.Description}</p>
            <p className="mt-2 font-bold">Cost: ${adventure.AdventureCost}</p>
            <p className="mt-2">Duration: {adventure.Duration}</p>
            <p className="mt-2">Level: {adventure.AdventureLevel}</p>
            <p className="mt-2">Location: {adventure.Location}</p>
            <div className="eco-friendly-features mt-4">
                <h4 className="font-semibold">Eco-Friendly Features:</h4>
                <ul className="list-disc list-inside">
                    {adventure.EcoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdventureDetails;
