import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/layout";
import Cards from "../Components/AdventureCard";

const route = createBrowserRouter([
    {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
        },
        {
        path: "/category/:id",
        element: <Cards></Cards>,
        loader: async ({ params }) => {
            const response = await fetch(`/adventures.json`); // Replace with your data URL
            if (!response.ok) {
                throw new Response("Failed to fetch data", { status: 404 });
            }
            // return response.json(); 
            const data = await response.json(); // Parse JSON
            const filteredData = data.filter(adventure => adventure.CategoryName === params.id);
            return filteredData;
        },
    },
    ],
    },
    {
    path: "/adventureDetails",
    element: <h1>Details Layout</h1>,
    },
    {
    path: "/myProfile",
    element: <h1>Details Layout</h1>,
    },
    {
    path: "auth",
    element: <h1>Login</h1>,
    },
    {
    path: "*",
    element: <h1>Error</h1>,
    },
]);

export default route;
