import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import WorkerFilters from "../components/WorkerFilters";
import WorkerTable from "../components/WorkerTable";

import "../styles/workers.css";

export default function Workers() {

    return (

        <div className="admin-layout">

            <Sidebar />

            <main className="admin-main">

                <Header title="Workers" />

                <div className="workers-container">

                    <WorkerFilters />

                    <WorkerTable />

                </div>

            </main>

        </div>

    );

}