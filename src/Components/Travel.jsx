// Cards.js
import React from 'react';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

const Travel = () => {
    const data =useLoaderData();
    const isLoggedIn = true; // Replace with actual login state

    if (!data) {
        return <div className="text-center">Loading...</div>; // Handle loading state
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Eco-Adventures</h1>
            <Card adventures={data} isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default Travel;