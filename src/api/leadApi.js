const BASE_URL = "http://localhost:8080/api/leads";

export async function saveLead(lead) {

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lead)
    });

    if (!response.ok) {
        throw new Error("Failed to Save Lead");
    }

    return await response.json();
}

/* ======================================
   GET ALL LEADS
====================================== */

export async function getLeads() {

    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to Load Leads");
    }

    return await response.json();
}

export async function getFilteredLeads(filters = {}) {
    const params = new URLSearchParams();

    if (filters.company) params.append("company", filters.company);
    if (filters.leadType) params.append("leadType", filters.leadType);
    if (filters.keyword) params.append("search", filters.keyword);

    const query = params.toString();
    const url = query ? `${BASE_URL}/page?${query}` : `${BASE_URL}/page`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to Load Filtered Leads");
    }

    return await response.json();
}

export async function updateLead(id, lead) {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lead)
    });

    if (!response.ok) {
        throw new Error("Failed to Update Lead");
    }

    return await response.json();
}

export async function deleteLead(id) {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to Delete Lead");
    }
}

/* ======================================
   GET RECENT 6 LEADS
====================================== */

export async function getRecentLeads() {

    const leads = await getLeads();

    return leads
        .sort(
            (a, b) =>
                new Date(b.createdAt) -
                new Date(a.createdAt)
        )
        .slice(0, 6);
}