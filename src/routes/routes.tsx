// https://www.youtube.com/watch?v=943D7U74_sQ Goat indian dude who carried me

import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import ProfilesPage from "../pages/ProfilesPage.tsx";
import ProfilePage from "../pages/ProfilePage.tsx";
import NavBar from "../components/NavBar.tsx";
export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <NavBar />
                <Outlet />
            </>
        ),
        errorElement: <NotFoundPage />,
        children: [
            { index: true, element: <LandingPage /> },
            {
                path: "/profiles",
                element: <ProfilesPage />,
                children: [
                    {
                        path: "/profiles/:profileId",
                        element: <ProfilePage />,
                    },
                ],
            },
        ],
    },
]);
