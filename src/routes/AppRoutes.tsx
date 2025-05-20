import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import ProfilesPage from "../pages/ProfilesPage";
import ProfilePage from "../pages/ProfilePage";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFoundPage />,
    },
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
]);
