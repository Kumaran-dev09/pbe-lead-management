import "../styles/reports.css";

export default function ReportDetailsModal({ open, lead, onClose }) {

    if (!open || !lead) return null;

    return (

        <div className="modal-overlay">

            <div className="report-details-modal">

                <div className="modal-header">

                    <h2>Lead Details</h2>

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

                <div className="report-section">

                    <h3>Customer Information</h3>

                    <div className="details-grid">

                        <Item label="Lead No" value={lead.leadNo} />

                        <Item label="Customer Name" value={lead.customerName} />

                        <Item label="Mobile" value={lead.mobile} />

                        <Item label="WhatsApp" value={lead.whatsapp} />

                        <Item label="Country" value={lead.country} />

                        <Item label="State" value={lead.state} />

                        <Item label="District" value={lead.district} />

                        <Item label="Area / Locality" value={lead.area} />

                        <Item label="Company" value={lead.company} />

                    </div>

                </div>

                {/* ======================================
                        BUSINESS INFORMATION
                ====================================== */}

                <div className="report-section">

                    <h3>Business Information</h3>

                    <div className="details-grid">

                        <Item
                            label="Business Type"
                            value={lead.businessType}
                        />

                        <Item
                            label="Business Model"
                            value={lead.businessModel}
                        />

                        <Item
                            label="Planned Opening"
                            value={lead.openingTimeline}
                        />

                        <Item
                            label="Production Area Size"
                            value={lead.productionArea}
                        />

                        <Item
                            label="Investment"
                            value={lead.investment}
                        />

                        <Item
                            label="Lead Type"
                            value={lead.leadType}
                        />

                    </div>

                </div>

                {/* ======================================
                        MACHINE INFORMATION
                ====================================== */}

                <div className="report-section">

                    <h3>Machine Selection</h3>

                    <div className="details-grid">

                        <Item
                            label="Selected Machines"
                            value={lead.machine}
                        />

                    </div>

                </div>

                {/* ======================================
                        EXISTING BAKERY
                ====================================== */}

                {lead.leadType === "Existing Bakery" && (

                    <div className="report-section">

                        <h3>Existing Bakery Information</h3>

                        <div className="details-grid">

                            <Item
                                label="Bakery Name"
                                value={lead.bakeryName}
                            />

                            <Item
                                label="Current Daily Production"
                                value={lead.currentProduction}
                            />

                            <Item
                                label="Existing Machines"
                                value={lead.existingMachines}
                            />

                        </div>

                    </div>

                )}

                {/* ======================================
                        REFERENCE CUSTOMER
                ====================================== */}

                {lead.leadType === "Reference Customer" && (

                    <div className="report-section">

                        <h3>Reference Customer Information</h3>

                        <div className="details-grid">

                            <Item
                                label="Reference Customer Name"
                                value={lead.referenceName}
                            />

                            <Item
                                label="Reference Customer Mobile"
                                value={lead.referenceMobile}
                            />

                            <Item
                                label="Reference Customer Place"
                                value={lead.referencePlace}
                            />

                        </div>

                    </div>

                )}

                {/* ======================================
                        WORKER INFORMATION
                ====================================== */}

                <div className="report-section">

                    <h3>Worker Information</h3>

                    <div className="details-grid">

                        <Item
                            label="Worker Name"
                            value={lead.worker}
                        />

                        <Item
                            label="Worker Opinion"
                            value={lead.assessment}
                        />

                    </div>

                </div>

                {/* ======================================
                        REMARKS
                ====================================== */}

                <div className="report-section">

                    <h3>Remarks</h3>

                    <div className="remarks-box">

                        {lead.remarks || "No Remarks"}

                    </div>

                </div>

                {/* ======================================
                        FOOTER
                ====================================== */}

                <div className="worker-footer">

                    <button
                        className="primary-btn"
                        onClick={onClose}
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>

    );

}

function Item({ label, value }) {

    return (

        <div>

            <label>{label}</label>

            <p>{value || "-"}</p>

        </div>

    );

}