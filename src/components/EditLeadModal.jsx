import { useEffect, useState } from "react";
import "../styles/leads.css";

export default function EditLeadModal({

    lead,

    open,

    onClose,

    onSave,

}) {

    const [form, setForm] = useState({});

    useEffect(() => {

        if (lead) {

            setForm(lead);

        }

    }, [lead]);

    if (!open) return null;

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    function save() {

        onSave(form);

    }

    return (

        <div className="modal-overlay">

            <div className="edit-modal large-modal">

                {/* ======================================
                        HEADER
                ====================================== */}

                <div className="modal-header">

                    <h2>Edit Lead</h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                {/* ======================================
                        CUSTOMER INFORMATION
                ====================================== */}

                <div className="detail-section">

                    <h3>Customer Information</h3>

                    <div className="edit-grid">

                        <div>

                            <label>Customer Name</label>

                            <input

                                name="customerName"

                                value={form.customerName || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Mobile Number</label>

                            <input

                                name="mobile"

                                value={form.mobile || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>WhatsApp Number</label>

                            <input

                                name="whatsapp"

                                value={form.whatsapp || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Company</label>

                            <select

                                name="company"

                                value={form.company || ""}

                                onChange={handleChange}

                            >

                                <option value="">
                                    Select Company
                                </option>

                                <option value="Bakery">
                                    Phoenix Bakery Equipments
                                </option>

                                <option value="Robot">
                                    Phoenix Robot Technologies
                                </option>

                            </select>

                        </div>

                        <div>

                            <label>Country</label>

                            <input

                                name="country"

                                value={form.country || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>State</label>

                            <input

                                name="state"

                                value={form.state || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>District</label>

                            <input

                                name="district"

                                value={form.district || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Area / Locality</label>

                            <input

                                name="area"

                                value={form.area || ""}

                                onChange={handleChange}

                            />

                        </div>

                    </div>

                </div>

                {/* ======================================
                        BUSINESS INFORMATION
                ====================================== */}

                <div className="detail-section">

                    <h3>Business Information</h3>

                    <div className="edit-grid">

                        <div>

                            <label>Lead Type</label>

                            <select

                                name="leadType"

                                value={form.leadType || ""}

                                onChange={handleChange}

                            >

                                <option>New Bakery</option>

                                <option>Existing Bakery</option>

                                <option>Reference Customer</option>

                            </select>

                        </div>

                        <div>

                            <label>Business Type</label>

                            <input

                                name="businessType"

                                value={form.businessType || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Business Model</label>

                            <input

                                name="businessModel"

                                value={form.businessModel || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Planned Opening</label>

                            <input

                                name="openingTimeline"

                                value={form.openingTimeline || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Production Area Size</label>

                            <input

                                name="productionArea"

                                value={form.productionArea || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Investment</label>

                            <input

                                name="investment"

                                value={form.investment || ""}

                                onChange={handleChange}

                            />

                        </div>

                    </div>

                </div>
                                {/* ======================================
                        MACHINE SELECTION
                ====================================== */}

                <div className="detail-section">

                    <h3>Machine Selection</h3>

                    <div className="edit-grid">

                        <div style={{ gridColumn: "1 / -1" }}>

                            <label>Selected Machines</label>

                            <textarea

                                rows="4"

                                name="selectedMachines"

                                value={form.selectedMachines || ""}

                                onChange={handleChange}

                                placeholder="Selected Machines"

                            />

                        </div>

                    </div>

                </div>

                {/* ======================================
                        EXISTING BAKERY
                ====================================== */}

                {form.leadType === "Existing Bakery" && (

                    <div className="detail-section">

                        <h3>Existing Bakery Information</h3>

                        <div className="edit-grid">

                            <div>

                                <label>Bakery Name</label>

                                <input

                                    name="bakeryName"

                                    value={form.bakeryName || ""}

                                    onChange={handleChange}

                                />

                            </div>

                            <div>

                                <label>Current Daily Production</label>

                                <input

                                    name="currentProduction"

                                    value={form.currentProduction || ""}

                                    onChange={handleChange}

                                />

                            </div>

                            <div style={{ gridColumn: "1 / -1" }}>

                                <label>Existing Machines</label>

                                <textarea

                                    rows="3"

                                    name="existingMachines"

                                    value={form.existingMachines || ""}

                                    onChange={handleChange}

                                />

                            </div>

                        </div>

                    </div>

                )}

                {/* ======================================
                        REFERENCE CUSTOMER
                ====================================== */}

                {form.leadType === "Reference Customer" && (

                    <div className="detail-section">

                        <h3>Reference Customer Information</h3>

                        <div className="edit-grid">

                            <div>

                                <label>Reference Customer Name</label>

                                <input

                                    name="referenceName"

                                    value={form.referenceName || ""}

                                    onChange={handleChange}

                                />

                            </div>

                            <div>

                                <label>Reference Customer Mobile</label>

                                <input

                                    name="referenceMobile"

                                    value={form.referenceMobile || ""}

                                    onChange={handleChange}

                                />

                            </div>

                            <div>

                                <label>Reference Customer Place</label>

                                <input

                                    name="referencePlace"

                                    value={form.referencePlace || ""}

                                    onChange={handleChange}

                                />

                            </div>

                        </div>

                    </div>

                )}

                {/* ======================================
                        WORKER INFORMATION
                ====================================== */}

                <div className="detail-section">

                    <h3>Worker Information</h3>

                    <div className="edit-grid">

                        <div>

                            <label>Worker Name</label>

                            <input

                                name="worker"

                                value={form.worker || ""}

                                onChange={handleChange}

                            />

                        </div>

                        <div>

                            <label>Worker Opinion</label>

                            <select

                                name="assessment"

                                value={form.assessment || ""}

                                onChange={handleChange}

                            >

                                <option>Initial Enquiry</option>

                                <option>Quotation Required</option>

                                <option>Follow-up Required</option>

                                <option>Site Visit Required</option>

                            </select>

                        </div>

                    </div>

                </div>

                {/* ======================================
                        REMARKS
                ====================================== */}

                <div className="detail-section">

                    <h3>Remarks</h3>

                    <textarea

                        rows="5"

                        name="remarks"

                        value={form.remarks || ""}

                        onChange={handleChange}

                        placeholder="Enter Remarks"

                    />

                </div>

                {/* ======================================
                        FOOTER
                ====================================== */}

                <div className="modal-footer">

                    <button

                        className="secondary-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="primary-btn"

                        onClick={save}

                    >

                        Save Changes

                    </button>

                </div>

            </div>

        </div>

    );

}