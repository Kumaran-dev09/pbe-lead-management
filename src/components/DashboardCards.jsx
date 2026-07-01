import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "./StatCard";
import { getDashboard } from "../services/api";

export default function DashboardCards() {

    const navigate = useNavigate();
    const [summary, setSummary] = useState({
        totalLeads: 0,
        todayLeads: 0,
        weeklyLeads: 0,
        monthlyLeads: 0,
        companyStats: {},
        leadTypeStats: {},
        workerStats: {},
    });

    useEffect(() => {
        async function loadSummary() {
            try {
                const data = await getDashboard();
                setSummary(data || {});
            } catch (error) {
                console.error(error);
            }
        }

        loadSummary();
    }, []);

    const cards = [
        { title: "Total Leads", value: summary.totalLeads || 0, path: "/admin/leads" },
        { title: "Today's Leads", value: summary.todayLeads || 0, path: "/admin/leads" },
        { title: "Weekly Leads", value: summary.weeklyLeads || 0, path: "/admin/leads" },
        { title: "Monthly Leads", value: summary.monthlyLeads || 0, path: "/admin/leads" },
        { title: "Companies", value: Object.keys(summary.companyStats || {}).length, path: "/admin/leads" },
        { title: "Lead Types", value: Object.keys(summary.leadTypeStats || {}).length, path: "/admin/leads" },
        { title: "Workers", value: Object.keys(summary.workerStats || {}).length, path: "/admin/workers" }
    ];

    return (

        <div className="dashboard-cards">

            {

                cards.map((card,index)=>(

                    <div
                        key={index}
                        onClick={() => navigate(card.path)}
                        style={{ cursor:"pointer" }}
                    >

                        <StatCard

                            title={card.title}

                            value={card.value}

                        />

                    </div>

                ))

            }

        </div>

    );

}