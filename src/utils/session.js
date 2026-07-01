export function isWorkerLoggedIn() {

    const worker = localStorage.getItem("worker");

    const expiry = localStorage.getItem("workerSessionExpiry");

    if (!worker || !expiry) {

        return false;

    }

    if (Date.now() > Number(expiry)) {

        localStorage.removeItem("worker");

        localStorage.removeItem("workerSessionExpiry");

        return false;

    }

    return true;

}

export function logoutWorker() {

    localStorage.removeItem("worker");

    localStorage.removeItem("workerSessionExpiry");

}