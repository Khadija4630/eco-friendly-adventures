
// const UserContext = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default UserContext;

import React, { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Mock login function
    const login = (userData) => {
        setUser(userData);
    };

    // Logout function
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;