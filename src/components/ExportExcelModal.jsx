import { useState } from "react";
import "../styles/reports.css";

export default function ExportExcelModal({

    open,

    onClose,

    onExport

}){

    const [fields,setFields]=useState({

        leadNo:true,

        customerName:true,

        mobile:true,

        whatsapp:true,

        district:true,

        leadType:true,

        businessType:true,

        businessModel:true,

        investment:true,

        machine:true,

        worker:true,

        assessment:true,

        remarks:true,

        createdDate:true

    });

    if(!open) return null;

    function toggle(e){

        setFields({

            ...fields,

            [e.target.name]:e.target.checked

        });

    }

    return(

        <div className="modal-overlay">

            <div className="export-modal">

                <div className="modal-header">

                    <h2>

                        Export Excel

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                <div className="export-grid">

                    {

                        Object.keys(fields).map(field=>(

                            <label key={field}>

                                <input

                                    type="checkbox"

                                    name={field}

                                    checked={fields[field]}

                                    onChange={toggle}

                                />

                                {field}

                            </label>

                        ))

                    }

                </div>

                <div className="worker-footer">

                    <button

                        className="secondary-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="primary-btn"

                        onClick={()=>onExport(fields)}

                    >

                        Export Excel

                    </button>

                </div>

            </div>

        </div>

    );

}