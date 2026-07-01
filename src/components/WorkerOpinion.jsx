export default function WorkerOpinion({

  opinion,

  setOpinion,

}) {

  const options = [

  {
    value: "QUOTATION_REQUIRED",
    label: "Quotation Required",
  },

  {
    value: "FOLLOW_UP_REQUIRED",
    label: "Follow-up Required",
  },

  {
    value: "SITE_VISIT_REQUIRED",
    label: "Site Visit Required",
  },

  {
    value: "INITIAL_ENQUIRY",
    label: "Initial Enquiry",
  },

];

  return (

    <div className="form-card">

      <h2>

        Lead Assessment

      </h2>

      <p className="section-subtitle">

        Select the next action required for this lead.

      </p>

      <div className="radio-grid">

        {options.map((item) => (

          <label key={item.value}>

            <input

              type="radio"

              checked={opinion === item.value}

              onChange={() => setOpinion(item.value)}

            />

            {item.label}

          </label>

        ))}

      </div>

    </div>

  );

}