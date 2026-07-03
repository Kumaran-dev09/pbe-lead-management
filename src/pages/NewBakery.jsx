import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TopBar from "../components/TopBar";
import CompanySwitch from "../components/CompanySwitch";
import CustomerForm from "../components/CustomerForm";
import LocationSelector from "../components/LocationSelector";
import BusinessInfo from "../components/BusinessInfo";
import InvestmentSelector from "../components/InvestmentSelector";
import MachineSelector from "../components/MachineSelector";
import WorkerOpinion from "../components/WorkerOpinion";
import "../styles/form.css";
import LeadNotes from "../components/LeadNotes";
import buildLeadRequest from "../utils/buildLeadRequest";
import { saveLead as saveLeadAPI } from "../api/leadApi";

export default function NewBakery() {
  const navigate = useNavigate();
  const location = useLocation();

  const worker = JSON.parse(localStorage.getItem("worker"));

  const [company, setCompany] = useState("bakery");
  const [notes, setNotes] = useState("");
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
     MACHINE LIST
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

    /* ==========================================
       BUILD REQUEST
    ========================================== */

    const lead = buildLeadRequest({

        leadType: "NEW_BAKERY",

        company,

        worker,

        customer,

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

      <TopBar

        company={company}

        setCompany={setCompany}

        worker={worker}

      />

      <div className="form-container">

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>

        <div className="page-header">

                    <h1>

                       New Bakery Setup

                    </h1>

                    <p>

                        Complete Bakery Project Solution

                    </p>

                </div>


        {/* COMPANY SWITCH */}

<CompanySwitch
  company={company}
  setCompany={setCompany}
/>


        {/* CUSTOMER */}

        <CustomerForm

          customer={customer}

          setCustomer={setCustomer}

        />

        {/* LOCATION */}

        <LocationSelector

          customer={customer}

          setCustomer={setCustomer}

        />

        {/* BUSINESS */}

        <BusinessInfo

          business={business}

          setBusiness={setBusiness}

        />

        {/* INVESTMENT */}

        <InvestmentSelector

          investment={investment}

          setInvestment={setInvestment}

        />

        {/* MACHINE */}

        <MachineSelector

          company={company}

          investment={investment}

          selectedMachines={selectedMachines}

          setSelectedMachines={setSelectedMachines}

        />

        {/* WORKER */}

        <WorkerOpinion

          opinion={workerOpinion}

          setOpinion={setWorkerOpinion}

        />
    

<LeadNotes

    notes={notes}

    setNotes={setNotes}

/>

        {/* SAVE */}

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