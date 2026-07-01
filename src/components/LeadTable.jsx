import { useEffect, useState } from "react";

import LeadDetailsModal from "./LeadDetailsModal";
import EditLeadModal from "./EditLeadModal";
import DeleteConfirmation from "./DeleteConfirmation";
import SuccessToast from "./SuccessToast";

import "../styles/leads.css";
import { getFilteredLeads, updateLead, deleteLead as deleteLeadApi } from "../api/leadApi";

export default function LeadTable({ filters = {} }) {

    const [selectedLead, setSelectedLead] = useState(null);

    const [editLead, setEditLead] = useState(null);
    const [deleteLead, setDeleteLead] = useState(null);
  

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        async function loadLeads() {
            try {
                const data = await getFilteredLeads(filters || {});
                setLeads((data || []).map((lead) => ({
                    ...lead,
                    id: lead.id,
                    leadNo: lead.leadNo || lead.id,
                    customer: lead.customerName || lead.customer || "",
                    mobile: lead.mobile,
                    whatsapp: lead.whatsapp,
                    company: lead.company || "",
                    worker: lead.workerName || lead.workerId || "",
                    leadType: lead.leadType,
                    assessment: lead.assessment || lead.leadAssessment,
                    district: lead.district,
                    businessType: lead.businessType,
                    investment: lead.investment,
                    plannedOpening: lead.plannedOpening || lead.openingTimeline,
                    productionArea: lead.productionArea,
                    selectedMachines: lead.selectedMachines,
                    remarks: lead.remarks,
                    whatsappSent: false,
                })));
            } catch (error) {
                console.error(error);
            }
        }

        loadLeads();
    }, [filters]);

    async function saveEditedLead(updatedLead) {
        try {
            const saved = await updateLead(updatedLead.id, updatedLead);
            setLeads((prev) => prev.map((lead) => (lead.id === saved.id ? { ...lead, ...saved } : lead)));
            setEditLead(null);
            setToast(true);
        } catch (error) {
            console.error(error);
        }
    }

    function openWhatsApp(lead){

    const template =
`Hello ${lead.customer},

Thank you for visiting ${
lead.company==="Bakery"
?
"Phoenix Bakery Equipments"
:
"Phoenix Robot Technologies"
}.

Our representative ${lead.worker} will contact you shortly.

Regards,
Phoenix Team`;

    window.open(

        `https://wa.me/91${lead.mobile}?text=${encodeURIComponent(template)}`,

        "_blank"

    );

    setLeads(

        leads.map(item=>

            item.id===lead.id

            ?

            {

                ...item,

                whatsappSent:true

            }

            :

            item

        )

    );

}

   const [toast,setToast]=useState(false);
async function confirmDelete(){
        try {
            await deleteLeadApi(deleteLead.id);
            setLeads((prev) => prev.filter((lead) => lead.id !== deleteLead.id));
            setDeleteLead(null);
        } catch (error) {
            console.error(error);
        }
    }

    return(

        <>
<div className="lead-table-card">

<div className="lead-table-scroll">

<table className="lead-table">

                <thead>

                    <tr>

                        <th>Lead No</th>

                        <th>Customer</th>

                        <th>Mobile</th>

                        <th>Company</th>

                        <th>Worker</th>

                        <th>Lead Type</th>

                        <th>Assessment</th>

                        <th>District</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        leads.map((lead)=>(

                            <tr key={lead.id}>

                                <td>{lead.leadNo}</td>

                                <td>{lead.customer}</td>

                                <td>{lead.mobile}</td>

                                <td>{lead.company}</td>

                                <td>{lead.worker}</td>

                                <td>{lead.leadType}</td>

                                <td>{lead.assessment}</td>

                                <td>{lead.district}</td>

                                <td>

                                    <button

                                        className="action-btn view-btn"

                                        onClick={()=>setSelectedLead(lead)}

                                    >

                                        View

                                    </button>

                                    <button

                                        className="action-btn edit-btn"

                                        onClick={()=>setEditLead(lead)}

                                    >

                                        Edit

                                    </button>

                                    <button

className="action-btn delete-btn"

onClick={()=>setDeleteLead(lead)}

>

Delete

</button>

                                   <button

className={`action-btn ${
lead.whatsappSent
?
"whatsapp-done"
:
"whatsapp-btn"
}`}

onClick={()=>openWhatsApp(lead)}

>

{

lead.whatsappSent

?

"✓ Sent"

:

"WhatsApp"

}

</button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>
        </div>

        <LeadDetailsModal

            lead={selectedLead}

            onClose={()=>setSelectedLead(null)}

        />

        <EditLeadModal

            open={editLead!==null}

            lead={editLead}

            onClose={()=>setEditLead(null)}

            onSave={saveEditedLead}

        />
        <DeleteConfirmation

    open={deleteLead!==null}

    lead={deleteLead}

    onCancel={()=>setDeleteLead(null)}

    onConfirm={confirmDelete}

/>
<SuccessToast

    show={toast}

    message="Lead Updated Successfully."

    onClose={()=>setToast(false)}

/>
        </>

    );

}