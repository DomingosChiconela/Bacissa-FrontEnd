import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Residuos } from "./pages/residuos";
import { Details } from "./pages/details";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";


export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/residuos",
        element: <Residuos/>
    },
    {
        path: "/residuos/:id",
        element: <Details/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/login",
        element: <Login/>
    },

    
])