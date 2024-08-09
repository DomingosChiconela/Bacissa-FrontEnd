import { useAuth } from "../AuthContext";
import { AdminDashboard } from "../components/dashboard/adminDashboard";
import { Dashboard } from "../components/dashboard/dashboard";
import { Header } from "../components/header";

export const DashPage = () => {
    const { user } = useAuth(); 
    const isAdmin = user && user.role === 'admin';

    return (
        <div>
            <Header />
            {!isAdmin && <Dashboard />} 
            {isAdmin && <AdminDashboard />}
        </div>
    );
};
