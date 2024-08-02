import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Users/Pages/home";


export const route = createBrowserRouter ([
    {
        path: "/",
        element:<Home/>
    },
])