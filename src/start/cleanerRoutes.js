import { lazy } from "react";

const cleanerRoutes = [
    {
        exact: true,
        path: "/cleaners",
        component: lazy(() => import("../components/Contacts/Contact.jsx"))
    },
    {
        exact: true,
        path: "/cleanersform",
        component: lazy(() => import("../components/Contacts/ContactFormPage"))
    },
    {
        exact: true,
        path: "/cleanersform/:id/edit",
        component: lazy(() => import("../components/Contacts/ContactFormPage"))
    },
];

export default cleanerRoutes;