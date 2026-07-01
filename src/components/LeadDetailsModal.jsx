import "../styles/leads.css";

export default function LeadDetailsModal({

    lead,

    onClose

}) {

    if (!lead) return null;

    return (

        <div className="modal-overlay">

            <div className="lead-modal">

                <div className="modal-header">

                    <h2>Lead Details</h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                {/* Customer Information */}

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

                {/* Business */}

                <div className="report-section">

    <h3>Business Information</h3>

    <div className="details-grid">

        <Item label="Business Type" value={lead.businessType} />

        <Item label="Business Model" value={lead.businessModel} />

        <Item label="Planned Opening" value={lead.openingTimeline} />

        <Item label="Production Area Size" value={lead.productionArea} />

        <Item label="Investment" value={lead.investment} />

        <Item label="Lead Type" value={lead.leadType} />

    </div>

</div>

                {/* Machine */}

                <div className="report-section">

                    <h3>Machine Selection</h3>

                    <div className="details-grid">

                        <Item

                            label="Interested Machine"

                            value={lead.machine}

                        />

                    </div>

                </div>

                {/* Existing Bakery */}

                {

                    lead.leadType === "Existing Bakery" && (

                        <div className="report-section">

                            <h3>Existing Bakery Information</h3>

                            <div className="details-grid">

                                <Item

                                    label="Bakery Name"

                                    value={lead.bakeryName}

                                />

                                <Item

                                    label="Daily Production"

                                    value={lead.production}

                                />

                                <Item

                                    label="Existing Machines"

                                    value={lead.existingMachines}

                                />

                            </div>

                        </div>

                    )

                }

                {/* Reference Customer */}

               {
    lead.leadType === "Reference Customer" && (

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

    )
}

                {/* Assessment */}

                <div className="report-section">

                    <h3>Lead Assessment</h3>

                    <div className="details-grid">

                        <Item

                            label="Assessment"

                            value={lead.assessment}

                        />

                        <Item

                            label="Worker"

                            value={lead.worker}

                        />

                    </div>

                </div>

                {/* Remarks */}

                <div className="report-section">

                    <h3>Remarks</h3>

                    <div className="remarks-box">

                        {lead.remarks || "No Remarks"}

                    </div>

                </div>

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

function Item({

    label,

    value

}) {

    return (

        <div>

            <label>{label}</label>

            <p>{value || "-"}</p>

        </div>

    );

}