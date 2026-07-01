export default function CompanySwitch({
  company,
  setCompany,
}) {
  return (
    <div className="company-switch-form">

      {/* Bakery */}

      <button
        type="button"
        className={
          company === "bakery"
            ? "company-btn active-company"
            : "company-btn"
        }
        onClick={() => setCompany("bakery")}
      >
        <img
          src="/images/logo.png"
          alt="Phoenix Bakery"
          className="company-btn-logo"
        />

        <span>Phoenix Bakery Equipments</span>
      </button>

      {/* Robot */}

      <button
        type="button"
        className={
          company === "robot"
            ? "company-btn active-company"
            : "company-btn"
        }
        onClick={() => setCompany("robot")}
      >
        <img
          src="/images/robot-logo.png"
          alt="Phoenix Robot"
          className="company-btn-logo"
        />

        <span>Phoenix Robot Technologies</span>
      </button>

    </div>
  );
}