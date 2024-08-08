import { AdminDashboard } from "../components/dashboard/adminDashboard"
import { Dashboard} from "../components/dashboard/dashboard"
import { Header } from "../components/header"

const adMin = false
export const DashPage = () => {
    return (
        <div>
            <Header/>
        <Dashboard />
        { adMin && <AdminDashboard/>}

        </div>
    )
} 