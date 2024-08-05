import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Residuos } from "./pages/residuos";
import { Details } from "./pages/details";


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

    
])