import { useEffect, useState } from "react";
import ReportDetailsModal from "./ReportDetailsModal";
import ExportExcelModal from "./ExportExcelModal";
import "../styles/reports.css";
import { getLeads } from "../api/leadApi";

export default function ReportTable() {

    const [selectedLead, setSelectedLead] = useState(null);
    const [exportOpen,setExportOpen]=useState(false);
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        async function loadLeads() {
            try {
                const data = await getLeads();
                setLeads(data || []);
            } catch (error) {
                console.error(error);
            }
        }

        loadLeads();
    }, []);

    return (

        <>

            <div className="report-table-card">
<div className="report-top">

    <button

        className="export-btn"

        onClick={()=>setExportOpen(true)}

    >

        Export Excel

    </button>

    <button

        className="print-btn"

        onClick={()=>window.print()}

    >

        Print

    </button>

</div>
                <table className="report-table">

                    <thead>

                        <tr>

                            <th>Lead No</th>

                            <th>Customer</th>

                            <th>Mobile</th>

                            <th>Company</th>

                            <th>Lead Type</th>

                            <th>Worker</th>

                            <th>District</th>

                            <th>Assessment</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            leads.map((lead,index)=>(

                                <tr key={index}>

                                    <td>{lead.leadNo}</td>

                                    <td>{lead.customerName}</td>

                                    <td>{lead.mobile}</td>

                                    <td>{lead.company}</td>

                                    <td>{lead.leadType}</td>

                                    <td>{lead.worker}</td>

                                    <td>{lead.district}</td>

                                    <td>{lead.assessment}</td>

                                    <td>{lead.status}</td>

                                    <td>

                                        <button

                                            className="view-btn"

                                            onClick={()=>setSelectedLead(lead)}

                                        >

                                            View

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <ReportDetailsModal

                open={selectedLead!==null}

                lead={selectedLead}

                onClose={()=>setSelectedLead(null)}

            />
            <ExportExcelModal

    open={exportOpen}

    onClose={()=>setExportOpen(false)}

    onExport={(fields)=>{

        console.log(fields);

        setExportOpen(false);

    }}

/>

        </>

    );

}