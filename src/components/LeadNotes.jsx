import "../styles/form.css";
export default function LeadNotes({

    notes,

    setNotes

}) {

    return (

        <section className="form-card">

            <h2>Notes / Remarks</h2>

            <p className="section-subtitle">

                Add customer requirements or important discussion points.

            </p>

            <textarea

                className="notes-box"

                rows={5}

                maxLength={500}

                value={notes}

                onChange={(e)=>setNotes(e.target.value)}

                placeholder="Example:
• Customer wants quotation today
• Budget around ₹20 Lakhs
• Interested in Rotary Rack Oven
• Call after 5 PM"

            />

            <div className="notes-count">

                {notes.length} / 500

            </div>

        </section>

    );

}