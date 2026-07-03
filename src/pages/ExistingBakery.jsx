import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TopBar from "../components/TopBar";
import { saveLead as saveLeadAPI } from "../api/leadApi";
import CompanySwitch from "../components/CompanySwitch";
import CustomerForm from "../components/CustomerForm";
import LocationSelector from "../components/LocationSelector";
import BusinessInfo from "../components/BusinessInfo";
import InvestmentSelector from "../components/InvestmentSelector";
import MachineSelector from "../components/MachineSelector";
import WorkerOpinion from "../components/WorkerOpinion";
import buildLeadRequest from "../utils/buildLeadRequest";
import LeadNotes from "../components/LeadNotes";
import "../styles/form.css";

export default function ExistingBakery() {
  const navigate = useNavigate();
  const location = useLocation();
  const [notes, setNotes] = useState("");
  const worker = JSON.parse(localStorage.getItem("worker"));

  /* ==========================================
       COMPANY
    ========================================== */

  const [company, setCompany] = useState("bakery");

  /* ==========================================
       CUSTOMER
    ========================================== */

  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    country: "India",
    state: "Tamil Nadu",
    district: "",
    area: ""
  });

  useEffect(() => {
    if (location.state?.scannedData) {
      setCustomer(prev => ({
        ...prev,
        name: location.state.scannedData.name || '',
        mobile: location.state.scannedData.mobile || '',
        whatsapp: location.state.scannedData.mobile || ''
      }));
    }
  }, [location.state]);

    /* ==========================================
       EXISTING BAKERY DETAILS
    ========================================== */

    const [bakery, setBakery] = useState({

        name: "",

        production: "",

        currentMachines: ""

    });

    /* ==========================================
       BUSINESS
    ========================================== */

const [business, setBusiness] = useState({

  businessType: "",

  businessModel: "",

  openingTimeline: "",

  productionArea: ""

});
    /* ==========================================
       INVESTMENT
    ========================================== */

    const [investment, setInvestment] = useState("");

    /* ==========================================
       WORKER OPINION
    ========================================== */

    const [workerOpinion, setWorkerOpinion] = useState("");

    /* ==========================================
       MACHINE SELECTION
    ========================================== */

    const [selectedMachines, setSelectedMachines] = useState([]);

    /* ==========================================
       SAVE LEAD
    ========================================== */

   async function saveLead() {

    /* ==========================================
       REQUIRED FIELD VALIDATION
    ========================================== */

    if (!customer.name.trim()) {
        alert("Customer Name is required.");
        return;
    }

    if (!customer.mobile.trim()) {
        alert("Mobile Number is required.");
        return;
    }

    if (!customer.whatsapp.trim()) {
        alert("WhatsApp Number is required.");
        return;
    }

    if (!bakery.name.trim()) {
        alert("Bakery Name is required.");
        return;
    }

    /* ==========================================
       BUILD REQUEST
    ========================================== */

    const lead = buildLeadRequest({

        leadType: "EXISTING_BAKERY",

        company,

        worker,

        customer,

        bakery,

        business,

        investment,

        selectedMachines,

        workerOpinion,

        notes

    });

    try {

        const response = await saveLeadAPI(lead);

        navigate("/lead-saved", {

            state: {

                lead: response

            }

        });

    } catch (error) {

        console.error(error);

        alert("Failed to Save Lead.");

    }



    }
      return (

    <div
      className={
        company === "bakery"
          ? "form-page light-theme"
          : "form-page dark-theme"
      }
    >

      {/* ==========================================
          TOP BAR
      ========================================== */}

      <TopBar

        company={company}

        setCompany={setCompany}

        worker={worker}

      />

      <div className="form-container">

        {/* ==========================================
            BACK BUTTON
        ========================================== */}

        <button

          className="back-btn"

          onClick={() => navigate("/dashboard")}

        >

          ← Dashboard

        </button>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <div className="page-header">

          <h1>

            Existing Bakery Upgrade

          </h1>

          <p>

            Capture existing bakery details and upgrade requirements.

          </p>

        </div>

        {/* ==========================================
            COMPANY SWITCH
        ========================================== */}

   <CompanySwitch

    company={company}

    setCompany={setCompany}

/>

        {/* ==========================================
            CUSTOMER INFORMATION
        ========================================== */}

        <CustomerForm

          customer={customer}

          setCustomer={setCustomer}

        />

        {/* ==========================================
            LOCATION
        ========================================== */}

        <LocationSelector

          customer={customer}

          setCustomer={setCustomer}

        />

        {/* ==========================================
            EXISTING BAKERY INFORMATION
        ========================================== */}

        <div className="form-card">

          <h2>

            Existing Bakery Information

          </h2>

          <p className="section-subtitle">

            Bakery Name is mandatory. Other details are optional.

          </p>

          <div className="form-grid">

            <div className="form-group">

              <label>

                Bakery Name <span className="required">*</span>

              </label>

              <input

                type="text"

                placeholder="ABC Bakery"

                value={bakery.name}

                onChange={(e) =>

                  setBakery({

                    ...bakery,

                    name: e.target.value

                  })

                }

              />

            </div>

            <div className="form-group">

              <label>

                Current Daily Production

              </label>

              <input

                type="text"

                placeholder="Product Name, Quantity of Production per Day"

                value={bakery.production}

                onChange={(e) =>

                  setBakery({

                    ...bakery,

                    production: e.target.value

                  })

                }

              />

            </div>

          </div>

          <div className="form-group">

            <label>

              Existing Machine Names

            </label>

            <textarea

              rows={5}

              placeholder={`Example: Rotary Rack Oven`}

              value={bakery.currentMachines}

              onChange={(e) =>

                setBakery({

                  ...bakery,

                  currentMachines: e.target.value

                })

              }

            />

            <small className="helper-text">

              Optional • Enter machine names manually.

            </small>

          </div>

        </div>
                {/* ==========================================
            BUSINESS INFORMATION
        ========================================== */}

        <BusinessInfo

          business={business}

          setBusiness={setBusiness}

        />

        {/* ==========================================
            INVESTMENT
        ========================================== */}

        <InvestmentSelector

          investment={investment}

          setInvestment={setInvestment}

        />

        {/* ==========================================
            MACHINE SELECTION
        ========================================== */}

        <MachineSelector

          company={company}

          investment={investment}

          selectedMachines={selectedMachines}

          setSelectedMachines={setSelectedMachines}

        />

        {/* ==========================================
            WORKER OPINION
        ========================================== */}

        <WorkerOpinion

          opinion={workerOpinion}

          setOpinion={setWorkerOpinion}

        />
        <LeadNotes

    notes={notes}

    setNotes={setNotes}

/>

        {/* ==========================================
            SAVE BUTTON
        ========================================== */}

        <button

          className="save-btn"

          onClick={saveLead}

        >

          Save Lead

        </button>

      </div>

    </div>

  );

}