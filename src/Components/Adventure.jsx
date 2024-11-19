import React from 'react';
import AdventureCard from './AdventureCard';

const Card = ({ adventures, isLoggedIn }) => {
    console.log("Adventures:", adventures); 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {data.map(adventure => (
                <AdventureCard key={adventure.ID} adventure={adventure} isLoggedIn={isLoggedIn} ></AdventureCard>
            ))}
        </div>
    );
};

export default Card;