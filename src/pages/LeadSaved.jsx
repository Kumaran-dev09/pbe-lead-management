import { useLocation, useNavigate } from "react-router-dom";
import "../styles/leadSaved.css";

export default function LeadSaved() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const lead = state?.lead || {};

    return (

        <div className="lead-success-page">

            <div className="lead-success-card">

                <div className="success-icon">
                    ✅
                </div>

                <h1>Lead Saved Successfully</h1>

                <p className="success-subtitle">
                    Customer lead has been saved into Phoenix CRM.
                </p>

                <div className="lead-info">

                    <div className="info-row">
                        <span>Lead Number</span>
                        <strong>{lead.leadNo || "-"}</strong>
                    </div>

                    <div className="info-row">
                        <span>Customer</span>
                        <strong>{lead.customerName || "-"}</strong>
                    </div>

                    <div className="info-row">
                        <span>Mobile</span>
                        <strong>{lead.mobile || "-"}</strong>
                    </div>

                    <div className="info-row">
                        <span>Company</span>
                        <strong>
                            {lead.company === "robot"
                                ? "Phoenix Robot Technologies"
                                : "Phoenix Bakery Equipments"}
                        </strong>
                    </div>

                    <div className="info-row">
                        <span>Worker</span>
                        <strong>{lead.workerName || "-"}</strong>
                    </div>

                </div>

                <div className="success-buttons">

                    <button
                        className="next-btn"
                        onClick={() =>
    navigate("/dashboard", {
        state: {
            scrollToLeadSelection: true
        }
    })
}
                    >
                        ➕ Add Next Lead
                    </button>

                    <button
                        className="dashboard-btn"
                        onClick={() => navigate("/dashboard")}
                    >
                        🏠 Dashboard
                    </button>

                </div>

            </div>

        </div>

    );

}