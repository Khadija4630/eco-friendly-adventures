import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth, db } from "../firebase_init"; 
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
    const [userData, setUserData] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => { 
            if (auth.currentUser) {
                try {
                    const userDoc = doc(db, "users", auth.currentUser.uid); 
                    const docSnap = await getDoc(userDoc);

                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleUpdateProfile = () => {
        navigate("/update-profile"); 
    };

    if (!userData) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {userData.name}!</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <img
                    src={userData.image || "/default-avatar.png"} 
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-700">{userData.name}</h2>
                <p className="text-gray-600">{userData.email}</p>
                <button
                    className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
                    onClick={handleUpdateProfile}
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
