import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LeadFilters from "../components/LeadFilters";
import WhatsAppTemplate from "../components/WhatsAppTemplate";
import LeadTable from "../components/LeadTable";

import "../styles/leads.css";

export default function Leads() {
    const [filters, setFilters] = useState({});

    return (

        <div className="admin-layout">

            <Sidebar />

            <main className="admin-main">

                <Header title="Leads" />

                <div className="leads-container">

                    <LeadFilters

    onSearch={setFilters}

/>

                    <WhatsAppTemplate />

                    <LeadTable filters={filters} />

                </div>

            </main>

        </div>

    );

}