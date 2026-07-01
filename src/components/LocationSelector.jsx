import { useState } from "react";
import "../styles/form.css";

const countries = [
  "India",
  "Sri Lanka",
  "Bangladesh",
  "Nepal",
  "Bhutan",
  "Other",
];

const states = [
  "Tamil Nadu",
  "Karnataka",
  "Kerala",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Other",
];

const districts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanniyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivagangai",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
  "Other",
];

export default function LocationSelector({
  customer,

  setCustomer,
}) {
  const [districtSearch, setDistrictSearch] = useState("");

  const filteredDistricts = districts.filter((item) =>
    item.toLowerCase().includes(districtSearch.toLowerCase()),
  );

  function update(field, value) {
    setCustomer({
      ...customer,

      [field]: value,
    });
  }

  return (
    <div className="form-card">
      <h2>Location</h2>

      <div className="form-grid">
        <div>
          <label>Country</label>

          <select
            value={customer.country}
            onChange={(e) => update("country", e.target.value)}
          >
            {countries.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          {customer.country === "Other" && (
            <input
              placeholder="Enter Country"
              onChange={(e) => update("countryOther", e.target.value)}
            />
          )}
        </div>

        <div>
          <label>State</label>

          <select
            value={customer.state}
            onChange={(e) => update("state", e.target.value)}
          >
            {states.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          {customer.state === "Other" && (
            <input
              placeholder="Enter State"
              onChange={(e) => update("stateOther", e.target.value)}
            />
          )}
        </div>

        <div>
          <label>District</label>

          <select
            value={customer.district}
            onChange={(e) => update("district", e.target.value)}
          >
            {filteredDistricts.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          {customer.district === "Other" && (
            <input
              placeholder="Enter District"
              onChange={(e) => update("districtOther", e.target.value)}
            />
          )}
        </div>

        <div>
          <label>
            Area / Locality <small>(Optional)</small>
          </label>

          <input
            type="text"
            placeholder="Example: Gandhipuram"
            value={customer.area || ""}
            onChange={(e) => update("area", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
