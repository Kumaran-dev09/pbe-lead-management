import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import LiveActivity from "../components/LiveActivity";

import "../styles/admin.css";

export default function AdminDashboard() {

    return (

        <div className="admin-layout">

            <Sidebar />

            <main className="admin-main">

                <Header
                    title="Dashboard"
                    showCompanyFilter={true}
                />

                <div className="dashboard-content">

                    <DashboardCards />

                    <LiveActivity />

                </div>

            </main>

        </div>

    );

}