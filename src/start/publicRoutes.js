import { lazy } from "react";

const publicRoutes = [
    {
        exact: true, 
        path: "/",
        component: lazy(() => import("./../components/public/landingPage/AirbnbUnique"))
    },
]

export default publicRoutes;