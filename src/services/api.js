const API = `${import.meta.env.VITE_API_URL}/api`;

/* =========================================
   Worker Login
========================================= */

export async function loginWorker(workerId, pin) {

    const res = await fetch(`${API}/workers/login`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            workerId,

            pin

        })

    });

    if (!res.ok) {

        return null;

    }

    return await res.json();

}

/* =========================================
   Get All Workers
========================================= */

export async function getWorkers() {

    const res = await fetch(`${API}/workers`);

    if (!res.ok) {

        return [];

    }

    return await res.json();

}

/* =========================================
   Add Worker
========================================= */

export async function saveWorker(worker) {

    const res = await fetch(`${API}/workers`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(worker)

    });

    return await res.json();

}

/* =========================================
   Update Worker
========================================= */

export async function updateWorker(worker) {

    const res = await fetch(

        `${API}/workers/${worker.workerId}`,

        {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(worker)

        }

    );

    return await res.json();

}

/* =========================================
   Delete Worker
========================================= */

export async function deleteWorker(workerId) {

    await fetch(

        `${API}/workers/${workerId}`,

        {

            method: "DELETE"

        }

    );

}

/* =========================================
   Save Lead
========================================= */

export async function saveLead(lead) {

    const res = await fetch(`${API}/leads`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(lead)

    });

    return await res.json();

}

/* =========================================
   Dashboard
========================================= */

export async function getDashboard() {

    const res = await fetch(`${API}/leads/dashboard`);

    return await res.json();

}

/* =========================================
   Recent Leads
========================================= */

export async function getRecentLeads() {

    const res = await fetch(`${API}/leads/recent`);

    return await res.json();

}

/* =========================================
   Admin Login
========================================= */

export async function adminLogin(username, password) {

    const res = await fetch(`${API}/admin/login`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            username,

            password

        })

    });

    if (!res.ok) {

        return null;

    }

    return await res.json();

}