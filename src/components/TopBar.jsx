import { useNavigate } from "react-router-dom";

export default function TopBar({
  company,
  worker,
  onScan
}) {

  const navigate = useNavigate();

  function goToLeadSelection() {

    navigate("/dashboard", {
      state: {
        scrollToLead: true,
      },
    });

  }

  return (

    <header className="topbar">

      {/* Company Logo */}

      <div className="company-left">

        <img
          src={
            company === "bakery"
              ? "/images/logo.png"
              : "/images/robot-logo.png"
          }
          alt={
            company === "bakery"
              ? "Phoenix Bakery Equipments"
              : "Phoenix Robot Technologies"
          }
          className="logo"
        />

        <div>

          <h2>
            {company === "bakery"
              ? "Phoenix Bakery Equipments"
              : "Phoenix Robot Technologies"}
          </h2>

          <span>
            Welcome {worker?.name}
          </span>

        </div>

      </div>

      {/* Navigation */}

      <nav className="topbar-nav">

        <button
    onClick={() =>
        navigate("/dashboard", {
            state: {
                scrollToLead: true,
            },
        })
    }
>
    📋 Lead Selection
</button>

<button onClick={onScan}>
    📷 Scan QR
</button>

        <button
          onClick={() => navigate("/admin-login")}
        >
          🔐 Admin Login
        </button>

      </nav>

    </header>

  );

}