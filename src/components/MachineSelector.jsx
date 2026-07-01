import { useEffect, useState } from "react";

import bakeryMachines from "../data/bakeryMachines";
import robotMachines from "../data/robotMachines";

import MachineCard from "./MachineCard";

export default function MachineSelector({
  company,
  selectedMachines,
  setSelectedMachines,
  investment,
}) {
  const [machines, setMachines] = useState([]);
  const [fullSetup, setFullSetup] = useState(false);

  /* ==========================================
     LOAD COMPANY MACHINES
  ========================================== */

  useEffect(() => {
    if (company === "bakery") {
      setMachines(bakeryMachines);
    } else {
      setMachines(robotMachines);
    }
  }, [company]);

  /* ==========================================
     FULL SETUP
  ========================================== */

  function toggleFullSetup() {
    if (fullSetup) {
      setFullSetup(false);
      setSelectedMachines([]);
    } else {
      setFullSetup(true);

      const allMachines = machines.map((machine) => ({
        machineId: machine.id,
        company: company,
        machineName: machine.name,
        variant: "",
        quantity: 1,
      }));

      setSelectedMachines(allMachines);
    }
  }

  /* ==========================================
     RESET FULL SETUP
  ========================================== */

  useEffect(() => {
    if (selectedMachines.length === machines.length && machines.length > 0) {
      setFullSetup(true);
    } else {
      setFullSetup(false);
    }
  }, [selectedMachines, machines]);

  /* ==========================================
     INVESTMENT PLACEHOLDER
     (Phase 6)
  ========================================== */

  useEffect(() => {
    if (!investment) return;

    // Phase 6
    // Auto Machine Recommendation
  }, [investment]);

  return (
    <div className="form-card">

      <h2>Machine Selection</h2>

      <p className="machine-subtitle">
        Select required machines for this customer.
      </p>

      {/* FULL SETUP */}

      <div className="full-setup-box">
        <label className="full-setup-label">
          <input
            type="checkbox"
            checked={fullSetup}
            onChange={toggleFullSetup}
          />

          Full Setup
        </label>
      </div>

      {/* MACHINE LIST */}

      <div className="machine-list">

        {machines.length === 0 ? (

          <div className="empty-machine">

            No Machines Found

          </div>

        ) : (

          machines.map((machine) => (

            <MachineCard
              key={machine.id}
              machine={machine}
              company={company}
              selectedMachines={selectedMachines}
              setSelectedMachines={setSelectedMachines}
            />

          ))

        )}

      </div>

    </div>
  );
}