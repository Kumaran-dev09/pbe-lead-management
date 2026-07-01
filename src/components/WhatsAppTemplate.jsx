import { useEffect, useState } from "react";
import "../styles/leads.css";
import SuccessToast from "../components/SuccessToast";

export default function WhatsAppTemplate() {

    const defaultMessage =
`Hello {customerName},

Thank you for visiting {company}.

Our representative {employeeName} will contact you shortly.

Regards,
Phoenix Team`;

    const [message, setMessage] = useState(defaultMessage);

    const [lastSaved, setLastSaved] = useState("");
const [toast,setToast]=useState(false);

    useEffect(() => {

        const savedTemplate = localStorage.getItem("whatsappTemplate");

        const savedTime = localStorage.getItem("whatsappTemplateSavedTime");

        if (savedTemplate) {

            setMessage(savedTemplate);

        }

        if (savedTime) {

            setLastSaved(savedTime);

        }

    }, []);

    function resetTemplate() {

        setMessage(defaultMessage);

    }

    function saveTemplate() {

        localStorage.setItem(

            "whatsappTemplate",

            message

        );

        const now = new Date().toLocaleString();

        localStorage.setItem(

            "whatsappTemplateSavedTime",

            now

        );

        setLastSaved(now);

        setToast(true);

    }

    return (

        <div className="whatsapp-card">

            <div className="whatsapp-header">

                <h2>

                    WhatsApp Message Center

                </h2>

            </div>

            <textarea

                rows="10"

                value={message}

                onChange={(e)=>setMessage(e.target.value)}

                placeholder="Enter WhatsApp Message Template"

            />

            {

                lastSaved &&

                <div className="template-status">

                    <strong>

                        Last Saved :

                    </strong>

                    {" "}

                    {lastSaved}

                </div>

            }

            <div className="whatsapp-buttons">

                <button

                    className="secondary-btn"

                    onClick={resetTemplate}

                >

                    Reset

                </button>

                <button

                    className="primary-btn"

                    onClick={saveTemplate}

                >

                    Save Template

                </button>

            </div>

            <div className="placeholder-help">

                <h4>

                    Available Placeholders

                </h4>

                <p>

                    <strong>{`{customerName}`}</strong>

                    {" "}→ Customer Name

                </p>

                <p>

                    <strong>{`{company}`}</strong>

                    {" "}→ Company Name

                </p>

                <p>

                    <strong>{`{employeeName}`}</strong>

                    {" "}→ Employee Name

                </p>
            </div>
<SuccessToast

show={toast}

message="WhatsApp Template Saved Successfully."

onClose={()=>setToast(false)}

/>

        </div>

    );

}