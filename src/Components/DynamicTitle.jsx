import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();
    const titles = {
        "/": "Home | Adventure Site",
        "/category/01": "Category 1 | Adventure Site",
        "/category/02": "Category 2 | Adventure Site",
        "/category/03": "Category 2 | Adventure Site",
        "/category/04": "Category 2 | Adventure Site",
        "/adventure/:id": "Adventure Details | Adventure Site",
        "/tips": "Adventure Tips | Adventure Site",
        "/login": "Login | Adventure Site",
        "/myProfile": "Profile | Adventure Site",
    };

    useEffect(() => {
        const path = location.pathname;
        if (path.startsWith("/category/")) {
            const categoryId = path.split("/")[2];
            document.title = `Category ${categoryId} | Adventure Site`;
        } else if (path.startsWith("/adventure/")) {
            const adventureId = path.split("/")[2];
            document.title = `Adventure ${adventureId} Details | Adventure Site`;
        } else {
            document.title = titles[path] || "Adventure Site";
        }
    }, [location]);

    return null; 
};

export default DynamicTitle;
