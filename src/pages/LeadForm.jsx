import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";
import { saveLead } from "../services/api.js";

const machines = ["Rotary Rack Oven", "Spiral Kneader", "Planetary Mixer", "Cookies Machine", "Full Bakery Setup"];
const budgets = ["Below 1 lakh", "1-3 lakhs", "3-5 lakhs", "5-10 lakhs", "Above 10 lakhs"];
const times = ["Immediate", "This month", "1-3 months", "3-6 months", "Just researching"];

export default function LeadForm() {
  const navigate = useNavigate();
  const worker = JSON.parse(localStorage.getItem("worker") || "null");
  const [lead, setLead] = useState({
    source: "Worker Portal",
    category: "New Bakery Setup",
    customerName: "",
    mobile: "",
    whatsapp: "",
    businessName: "",
    city: "",
    district: "",
    state: "",
    interestedMachine: "",
    budget: "",
    purchaseTime: "",
    preferredContactTime: "",
    remarks: "",
  });

  function update(field, value) {
    setLead((old) => ({ ...old, [field]: value }));
  }

  async function submit() {
    await saveLead({ ...lead, workerId: worker?.workerId, workerName: worker?.name });
    navigate("/dashboard");
  }

  return (
    <div>
      <TopBar worker={worker} />
      <main className="container narrow">
        <p className="eyebrow">Lead Qualification</p>
        <h1>Customer details</h1>
        <select value={lead.category} onChange={(e) => update("category", e.target.value)}>
          <option>New Bakery Setup</option>
          <option>Existing Bakery Upgrade</option>
          <option>Reference Customer</option>
        </select>
        <input placeholder="Customer Name" value={lead.customerName} onChange={(e) => update("customerName", e.target.value)} />
        <input placeholder="Mobile" value={lead.mobile} onChange={(e) => update("mobile", e.target.value)} />
        <input placeholder="WhatsApp" value={lead.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
        <input placeholder="Business Name" value={lead.businessName} onChange={(e) => update("businessName", e.target.value)} />
        <div className="grid-two">
          <input placeholder="City" value={lead.city} onChange={(e) => update("city", e.target.value)} />
          <input placeholder="District" value={lead.district} onChange={(e) => update("district", e.target.value)} />
        </div>
        <input placeholder="State" value={lead.state} onChange={(e) => update("state", e.target.value)} />
        <select value={lead.interestedMachine} onChange={(e) => update("interestedMachine", e.target.value)}>
          <option value="">Interested Machine</option>
          {machines.map((item) => <option key={item}>{item}</option>)}
        </select>
        <div className="grid-two">
          <select value={lead.budget} onChange={(e) => update("budget", e.target.value)}>
            <option value="">Budget</option>
            {budgets.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={lead.purchaseTime} onChange={(e) => update("purchaseTime", e.target.value)}>
            <option value="">Purchase Time</option>
            {times.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <input placeholder="Preferred Contact Time" value={lead.preferredContactTime} onChange={(e) => update("preferredContactTime", e.target.value)} />
        <textarea placeholder="Remarks" value={lead.remarks} onChange={(e) => update("remarks", e.target.value)} />
        <button onClick={submit}>Save Lead</button>
      </main>
    </div>
  );
}
