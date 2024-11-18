import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/layout";
import Cards from "../Components/cards";

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
        loader: ({ params }) =>
            fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
            ),
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
