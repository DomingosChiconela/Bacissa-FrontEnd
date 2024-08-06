import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Residuos } from "./pages/residuos";
import { Details } from "./pages/details";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ChatPage } from "./pages/chat";
import { ConversationsList } from "./pages/pagechat";


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
    {
        path: "/sing-up",
        element: <Register/>
    },
    
    {
        path: "/chat/:id",
        element: <ChatPage/>
    },
    {
        path: "/chats",
        element: <ConversationsList/>
    },
   

    
])