import { useEffect, useState } from "react";
import "../styles/reports.css";
import { getDashboard } from "../services/api";

export default function ReportSummaryCards() {

    const [summary, setSummary] = useState({
        totalLeads: 0,
        todayLeads: 0,
        weeklyLeads: 0,
        monthlyLeads: 0,
        leadTypeStats: {},
        companyStats: {},
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
        { title: "Total Leads", value: summary.totalLeads || 0 },
        { title: "Today's Leads", value: summary.todayLeads || 0 },
        { title: "Weekly Leads", value: summary.weeklyLeads || 0 },
        { title: "Monthly Leads", value: summary.monthlyLeads || 0 },
        { title: "Companies", value: Object.keys(summary.companyStats || {}).length },
        { title: "Lead Types", value: Object.keys(summary.leadTypeStats || {}).length }
    ];

    return (

        <div className="summary-grid">

            {

                cards.map((card,index)=>(

                    <div

                        className="summary-card"

                        key={index}

                    >

                        <h4>

                            {card.title}

                        </h4>

                        <h2>

                            {card.value}

                        </h2>

                    </div>

                ))

            }

        </div>

    );

}