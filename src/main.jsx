import React from "react";
import ReactDOM from "react-dom/client";
// import Layout from "./Layout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Jobs from "./pages/Jobs.jsx";
import Support from "./pages/Support.jsx";
import ComfortLayout from "./ComfortLayout.jsx";
import MobileJobListing from "./components/JobListing/MobileJobListing.jsx";
import FAQs from "./pages/FAQs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ComfortLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "faqs",
                element: <FAQs />,
            },
        ],
    },
    // mobile routes
    {
        path: "m",
        element: <ComfortLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "jobs/:id",
                element: <MobileJobListing />,
            },
        ],
    },
    // jobs route
    {
        path: "jobs",
        element: <ComfortLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: <Jobs />,
            },
            {
                path: ":id",
                element: <Jobs />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
