import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ReportFilters from "../components/ReportFilters";
import ReportTable from "../components/ReportTable";
import ReportSummaryCards from "../components/ReportSummaryCards";

import "../styles/reports.css";

export default function Reports() {

    return (

        <div className="admin-layout">

            <Sidebar />

            <main className="admin-main">
<Header

    title="Reports"

    showCompanyFilter={true}

/>

                <div className="reports-page">

         <ReportSummaryCards />

<ReportFilters />

<ReportTable />

                </div>

            </main>

        </div>

    );

}