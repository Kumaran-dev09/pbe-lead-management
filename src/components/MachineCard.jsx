import { useState } from "react";

export default function MachineCard({
  machine,
  company,
  selectedMachines,
  setSelectedMachines,
}) {
  const [expanded, setExpanded] = useState(false);

  /* ==========================================
     CHECK MACHINE SELECTED
  ========================================== */

  function machineSelected() {
    return selectedMachines.some(
      (item) => item.machineId === machine.id
    );
  }

  /* ==========================================
     GET SELECTED VARIANT
  ========================================== */

  function selectedVariant() {
    const data = selectedMachines.find(
      (item) => item.machineId === machine.id
    );

    return data?.variant || "";
  }

  /* ==========================================
     SELECT / UNSELECT MACHINE
  ========================================== */

  function toggleMachine() {
    if (machineSelected()) {
      setSelectedMachines(
        selectedMachines.filter(
          (item) => item.machineId !== machine.id
        )
      );
    } else {
      setSelectedMachines([
        ...selectedMachines,
        {
          machineId: machine.id,
          company: company,
          machineName: machine.name,
          variant: "",
          quantity: 1,
        },
      ]);
    }
  }

  /* ==========================================
     CHANGE VARIANT
  ========================================== */

  function changeVariant(value) {
    setSelectedMachines(
      selectedMachines.map((item) => {
        if (item.machineId === machine.id) {
          return {
            ...item,
            variant: value,
          };
        }

        return item;
      })
    );
  }

  return (
    <div className="machine-card">

      {/* ==========================================
          MACHINE HEADER
      ========================================== */}

      <div className="machine-header">

        <div className="machine-left">

          <input
            type="checkbox"
            checked={machineSelected()}
            onChange={toggleMachine}
            className="machine-check"
          />

          <div className="machine-title">

            <h3>{machine.name}</h3>

            {machineSelected() && (
              <small>Selected</small>
            )}

          </div>

        </div>

        {machine.variants.length > 0 && (

          <button
            type="button"
            className="expand-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "▲" : "▼"}
          </button>

        )}

      </div>

      {/* ==========================================
          VARIANT SECTION
      ========================================== */}

      {expanded && machine.variants.length > 0 && (

        <div className="variant-section">

          {machine.variants.map((variant, index) => (

            <label
              key={index}
              className={
                selectedVariant() === variant
                  ? "variant-item active-variant"
                  : "variant-item"
              }
            >

              <input
                type="radio"
                disabled={!machineSelected()}
                checked={selectedVariant() === variant}
                onChange={() => changeVariant(variant)}
              />

              <span>{variant}</span>

            </label>

          ))}

        </div>

      )}

    </div>
  );
}