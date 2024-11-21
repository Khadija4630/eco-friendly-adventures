import React, { useState } from 'react';
import { auth ,db} from '../firebase_init'; 
import { doc, updateDoc } from 'firebase/firestore';

const UpdateProfilePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const handleUpdate = async () => {
        if (auth.currentUser ) {
            const userDoc = doc(db, 'users', auth.currentUser .uid);
            await updateDoc(userDoc, {
                name,
                email,
                image,
            });
            alert('Profile updated successfully!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Update Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 ">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded mb-4 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 rounded mb-4 w-full"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="border border-gray-300 p-2 rounded mb-4 w-full"
                />
                <button
                    className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
                    onClick={handleUpdate}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
