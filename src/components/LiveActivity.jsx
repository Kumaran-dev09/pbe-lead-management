import { useEffect, useState } from "react";
import "../styles/admin.css";
import { useNavigate } from "react-router-dom";
import { getRecentLeads } from "../services/api";

export default function LiveActivity() {
const navigate = useNavigate();
    const [recentLeads, setRecentLeads] = useState([]);

    useEffect(() => {
        async function loadRecent() {
            try {
                const leads = await getRecentLeads();
                setRecentLeads((leads || []).map((lead) => ({
                    leadNo: lead.leadNo || lead.id,
                    customerName: lead.customerName || lead.customer || "",
                    mobile: lead.mobile || "",
                    company: lead.company || "",
                    worker: lead.workerName || lead.workerId || "",
                    leadType: lead.leadType || "",
                    time: lead.createdAt ? new Date(lead.createdAt).toLocaleString() : ""
                })));
            } catch (error) {
                console.error(error);
            }
        }

        loadRecent();
    }, []);

    return (

        <section className="live-activity">

            <div className="live-header">

                <h2>Recent Leads</h2>
<button
    className="view-all-btn"
    onClick={() => navigate("/admin/leads")}
>
    View All
</button>

            </div>

            <div className="table-wrapper">

                <table className="live-table">

                    <thead>

                        <tr>

                            <th>Lead No</th>

                            <th>Customer</th>

                            <th>Mobile</th>

                            <th>Company</th>

                            <th>Worker</th>

                            <th>Lead Type</th>

                            <th>Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            recentLeads.map((lead,index)=>(

                                <tr key={index}>

                                    <td>{lead.leadNo}</td>

                                    <td>{lead.customerName}</td>

                                    <td>{lead.mobile}</td>

                                    <td>{lead.company}</td>

                                    <td>{lead.worker}</td>

                                    <td>{lead.leadType}</td>

                                    <td>{lead.time}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </section>

    );

}