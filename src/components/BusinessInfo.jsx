export default function BusinessInfo({
  business,

  setBusiness,
}) {
  function update(field, value) {
    setBusiness({
      ...business,

      [field]: value,
    });
  }

  return (
    <div className="form-card">
      <h2>Business Information</h2>

      <div className="form-grid">
        {/* ==========================================
            BUSINESS TYPE
        ========================================== */}

        <div>
          <label>Business Type</label>

          <select
            value={business.businessType}
            onChange={(e) => update("businessType", e.target.value)}
          >
            <option value="">Select</option>

            <option>Bakery</option>

            <option>Cake Shop</option>

            <option>Cookies Unit</option>

            <option>Sweets Shop</option>

            <option>Snacks / Namkeen</option>

            <option>Murukku Unit</option>

            <option>Chips Manufacturing</option>

            <option>Mixture Manufacturing</option>

            <option>Bakery + Sweets</option>

            <option>Bakery + Snacks</option>

            <option>Central Kitchen</option>

            <option>Hotel / Restaurant</option>

            <option>Industrial Food Manufacturing</option>

            <option>Other</option>
          </select>
        </div>

        {/* ==========================================
            BUSINESS MODEL
        ========================================== */}

        <div>
          <label>Business Model</label>

          <select
            value={business.businessModel}
            onChange={(e) => update("businessModel", e.target.value)}
          >
            <option value="">Select</option>

            <option>Retail</option>

            <option>Wholesale</option>

            <option>Both</option>
          </select>
        </div>

        {/* ==========================================
            PLANNED OPENING
        ========================================== */}

        <div>
          <label>Planned Opening</label>

          <select
            value={business.openingTimeline}
            onChange={(e) => update("openingTimeline", e.target.value)}
          >
            <option value="">Select</option>

            <option>Already Started</option>

            <option>Within 1 Month</option>

            <option>Within 3 Months</option>

            <option>Within 6 Months</option>

            <option>Within 12 Months</option>

            <option>Just Planning</option>

            <option>Not Decided</option>
          </select>
        </div>

        {/* ==========================================
            PRODUCTION AREA
        ========================================== */}

        <div>
          <label>Production Area Size</label>

          <select
            value={business.productionArea}
            onChange={(e) => update("productionArea", e.target.value)}
          >
            <option value="">Select</option>

            <option>Home Based</option>

            <option>Below 300 sq.ft</option>

            <option>300 - 500 sq.ft</option>

            <option>500 - 1000 sq.ft</option>

            <option>1000 - 2000 sq.ft</option>

            <option>2000 - 5000 sq.ft</option>

            <option>Above 5000 sq.ft</option>
          </select>
        </div>
      </div>
    </div>
  );
}
