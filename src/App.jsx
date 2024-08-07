import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider> 
      <RouterProvider router={route} />
    </AuthProvider>
  );
};

export default App;
