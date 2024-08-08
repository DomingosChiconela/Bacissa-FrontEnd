import { AdminDashboard } from "../components/dashboard/adminDashboard"
import { Dashboard} from "../components/dashboard/dashboard"
import { Header } from "../components/header"

export const DashPage = () => {
    return (
        <div>
            <Header/>
        <Dashboard />
        <AdminDashboard/>

        </div>
    )
} 