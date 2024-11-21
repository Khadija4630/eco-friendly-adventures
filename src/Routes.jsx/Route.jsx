import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/layout";
import { Navigate } from "react-router-dom";
import Travel from "../Components/Travel";
import AdventureDetails from "../Components/AdventureDetails";

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
        element: <Travel></Travel>,
        loader: async() => {
            const response = await fetch(`/adventures.json`); 
            if (!response.ok) {
                throw new Response("Failed to fetch data", { status: 404 });
            }
            
            const data = await response.json(); 
            console.log("Fetched Data hehe:", data);
            return data;
        
    },
},
{
    path: "/adventure/:id",
    element: <AdventureDetails></AdventureDetails>,
    loader: async ({params}) => {
        try {
            const response = await fetch(`/adventures.json`);
            if (!response.ok) {
                throw new Response("Failed to fetch data", { status: 404 });
            }
            const data = await response.json();
            console.log("Fetched Data:", data);

            const adventure = data.find(
                (adventure) => adventure.ID.toString() === params.id
            );

            if (!adventure) {
                throw new Response("Adventure not found", { status: 404 });
            }

            return adventure;
        } catch (error) {
            console.error("Loader Error:", error);
            throw error;
        }
    },
},
],
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
