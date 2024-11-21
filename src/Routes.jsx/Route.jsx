import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/layout";
import { Navigate } from "react-router-dom";
import Travel from "../Components/Travel";
import AdventureDetails from "../Components/AdventureDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import UpdateProfilePage from "../Components/UpdateProfile";
import PrivateRoute from "../routes.jsx/PrivateRoute";
import ProfilePage from "../Components/ProfilePage";

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
},
{
    path: "/adventure/:id",
    element: (
        <PrivateRoute>
            <AdventureDetails />
        </PrivateRoute>
    ),
    // loader: async ({params}) => {
    //     try {
    //         const response = await fetch(`/adventures.json`);
    //         if (!response.ok) {
    //             throw new Response("Failed to fetch data", { status: 404 });
    //         }
    //         const data = await response.json();
    //         console.log("Fetched Data:", data);

    //         const adventure = data.find(
    //             (adventure) => adventure.AdventureID.toString() === params.id
    //         );

    //         if (!adventure) {
    //             throw new Response("Adventure not found", { status: 404 });
    //         }

    //         return adventure;
    //     } catch (error) {
    //         console.error("Loader Error:", error);
    //         throw error;
    //     }
    // },
},
],
},
    {
    path: "/userProfile",
    element:(
        <PrivateRoute>
            <ProfilePage></ProfilePage>
        </PrivateRoute>
    ),
    },
    {
    path: "*",
    element:<h1>404 - Page Not Found</h1>,
    },
    {
    path: "/login",
    element: <Login />,
    },
    {
    path: "/updateProfile",
    element:  (
        <PrivateRoute>
            <UpdateProfilePage />
        </PrivateRoute>
    ),
    },
    {
    path: "/register",
    element: <Register></Register>,
    },
    
]);

export default route;
