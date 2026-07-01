import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TopBar from "../components/TopBar";
import CompanySwitch from "../components/CompanySwitch";
import MachineSlider from "../components/MachineSlider";

import "../styles/dashboard.css";
import machines from "../data/machines";
import { getDashboard, getRecentLeads } from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const leadSelectionRef = useRef(null);

  const [company, setCompany] = useState("bakery");

  const worker = JSON.parse(localStorage.getItem("worker"));

  const [todayLeads, setTodayLeads] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);
  const [recentLeads, setRecentLeads] = useState([]);

  /* ==========================================
       AUTO SLIDER
    ========================================== */

  useEffect(() => {
    const loadData = async () => {
      try {
        const summary = await getDashboard();
        setTodayLeads(summary?.todayLeads || 0);
        setTotalLeads(summary?.totalLeads || 0);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const loadRecent = async () => {
      try {
        const leads = await getRecentLeads();
        setRecentLeads(
          (leads || []).map((lead) => ({
            leadNo: lead.leadNo || lead.id,
            customer: lead.customerName || lead.customer || "",
            mobile: lead.mobile || "",
            category: lead.leadType || "",
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    loadRecent();
  }, []);

  /* ==========================================
       SCROLL TO LEAD SECTION
    ========================================== */

  useEffect(() => {
    if (location.state?.scrollToLead) {
      setTimeout(() => {
        leadSelectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }, 200);
    }
  }, [location, navigate]);

  return (
    <div
      className={
        company === "bakery" ? "dashboard light-theme" : "dashboard dark-theme"
      }
    >
      <TopBar company={company} worker={worker} />

      <div className="dashboard-container">
        {/* COMPANY SWITCH */}

        <CompanySwitch company={company} setCompany={setCompany} />

        {/* MACHINE SLIDER */}

        <MachineSlider company={company} machines={machines[company]} />

        {/* DASHBOARD CARDS */}

        <section className="stats-row">
          <div className="stat-box">
            <span>Today's Leads</span>

            <h2>{todayLeads}</h2>
          </div>

          <div className="stat-box">
            <span>Total Leads</span>

            <h2>{totalLeads}</h2>
          </div>
        </section>

        {/* WELCOME */}

        <section className="welcome-card">
          <h2>👋 Welcome {worker?.name}</h2>

          <p>
            Capture customer leads quickly during the exhibition and manage them
            efficiently using Phoenix CRM.
          </p>
        </section>

        {/* LEAD SELECTION */}

        <section
          id="lead-selection"
          ref={leadSelectionRef}
          className="category-grid"
        >
          {/* NEW BAKERY */}

          <div
            className="category-card"
            onClick={() => navigate("/new-bakery")}
          >
            <img src="/images/new-bakery.jpg" alt="New Bakery" />

            <div className="category-content">
              <h2>New Bakery Setup</h2>

              <p>Complete Bakery Project Solution</p>
            </div>

            <div className="category-arrow">→</div>
          </div>

          {/* EXISTING */}

          <div
            className="category-card"
            onClick={() => navigate("/existing-bakery")}
          >
            <img src="/images/existing-bakery.jpg" alt="Existing Bakery" />

            <div className="category-content">
              <h2>Existing Bakery Upgrade</h2>

              <p>Upgrade Existing Bakery Machines</p>
            </div>

            <div className="category-arrow">→</div>
          </div>

          {/* REFERENCE */}

          <div
            className="category-card"
            onClick={() => navigate("/reference-customer")}
          >
            <img
              src="/images/reference-customer.jpg"
              alt="Reference Customer"
            />

            <div className="category-content">
              <h2>Reference Customer</h2>

              <p>Existing Customer Recommendation</p>
            </div>

            <div className="category-arrow">→</div>
          </div>
        </section>
        {/* ==========================================
                    RECENT LEADS
                ========================================== */}

        <section className="recent-section">
          <div className="recent-header">
            <h2>Recent Leads</h2>
          </div>

          {recentLeads.length === 0 ? (
            <div className="empty-recent">No Recent Leads Found</div>
          ) : (
            <div className="recent-table-wrapper">
              <table className="recent-table">
                <thead>
                  <tr>
                    <th>Lead No</th>

                    <th>Customer Name</th>

                    <th>Mobile</th>

                    <th>Category</th>
                  </tr>
                </thead>

                <tbody>
                  {recentLeads.map((lead, index) => (
                    <tr key={index}>
                      <td>{lead.leadNo}</td>

                      <td>{lead.customer}</td>

                      <td>{lead.mobile}</td>

                      <td>{lead.category}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
