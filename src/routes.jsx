import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Residuos } from "./pages/residuos";
import { Details } from "./pages/details";
import { Profile } from "./pages/profile";
import { ChatPage } from "./pages/chat";
import { ConversationsList } from "./pages/pagechat";
import { DashPage } from "./pages/dashpage";
import { ErrorPage } from "./pages/errorpage";
import ProtectedRoute from "./components/ProtectedRoute";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Users } from "./pages/userpage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/residuos",
    element:<Residuos /> 
  },
  {
    path: "/residuos/:id",
    element:<Details /> 
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Profile />} /> 
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/login/sing-up",
    element: <Register />
  },
  {
    path: "/chat/:id",
    element: <ProtectedRoute element={<ChatPage />} /> 
  },
  {
    path: "/chats",
    element: <ProtectedRoute element={<ConversationsList />} /> 
  },
  {
    path: "/dashpage",
    element: <ProtectedRoute element={<DashPage />} /> 
  },
  {
    path: "/users",
    element: <ProtectedRoute element={<Users />} /> 
  },
 
]);
