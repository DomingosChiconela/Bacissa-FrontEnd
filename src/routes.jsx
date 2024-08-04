import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Residuos } from "./pages/residuos";


export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/residuos",
        element: <Residuos/>
    },
    
])