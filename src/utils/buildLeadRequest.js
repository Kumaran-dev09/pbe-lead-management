export default function buildLeadRequest({

    leadType,

    company,

    worker,

    customer,

    business,

    investment,

    selectedMachines,

    workerOpinion,

    notes,

    bakery = {},

    reference = {}

}) {

    return {

        /* ==============================
           LEAD
        ============================== */

        leadType,

        company,

        /* ==============================
           WORKER
        ============================== */

        workerId: worker?.workerId || "",

        workerName: worker?.name || "",

        /* ==============================
           CUSTOMER
        ============================== */

        customerName: customer.name,

        mobile: customer.mobile,

        whatsapp: customer.whatsapp,

        /* ==============================
           LOCATION
        ============================== */

        country: customer.country,

        state: customer.state,

        district: customer.district,

        area: customer.area || "",

        /* ==============================
           EXISTING BAKERY
        ============================== */

        bakeryName: bakery.name || "",

        currentProduction: bakery.production || "",

        existingMachines: bakery.currentMachines || "",

        /* ==============================
           REFERENCE CUSTOMER
        ============================== */

        referenceCustomerName: reference.name || "",

        referenceCustomerMobile: reference.mobile || "",

        referenceCustomerPlace: reference.place || "",

        customerRequirement: reference.requirement || "",

        /* ==============================
           BUSINESS
        ============================== */

        businessType: business.businessType,

        businessModel: business.businessModel,

        plannedOpening: business.openingTimeline,

        productionArea: business.productionArea,

        investment,

        /* ==============================
           MACHINES
        ============================== */

        selectedMachines: selectedMachines
            .map(machine =>
                `${machine.machineName}${machine.variant ? " - " + machine.variant : ""}`
            )
            .join(", "),

        /* ==============================
           LEAD
        ============================== */

        leadAssessment: workerOpinion,

        remarks: notes || ""

    };

}