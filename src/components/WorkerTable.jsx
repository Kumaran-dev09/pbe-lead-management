import { useEffect, useState } from "react";

import AddWorkerModal from "./AddWorkerModal";
import WorkerDetailsModal from "./WorkerDetailsModal";
import EditWorkerModal from "./EditWorkerModal";
import DeleteWorkerModal from "./DeleteWorkerModal";
import SuccessToast from "./SuccessToast";

import "../styles/workers.css";
import { getWorkers, saveWorker as saveWorkerApi, updateWorker as updateWorkerApi, deleteWorker as deleteWorkerApi } from "../services/api";

export default function WorkerTable() {

    const [open, setOpen] = useState(false);
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [editWorker, setEditWorker] = useState(null);
    const [deleteWorkerData, setDeleteWorkerData] = useState(null);

    const [toast, setToast] = useState({
        show: false,
        message: ""
    });

    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        async function loadWorkers() {
            try {
                const data = await getWorkers();
                setWorkers((data || []).map((worker) => ({ ...worker, status: worker.active ? "Active" : "Inactive" })));
            } catch (error) {
                console.error(error);
            }
        }

        loadWorkers();
    }, []);

    // ==========================
    // Add Worker
    // ==========================

    async function handleSaveWorker(worker) {
        try {
            const created = await saveWorkerApi(worker);
            setWorkers(prev => [...prev, { ...created, status: created.active ? "Active" : "Inactive" }]);
            setOpen(false);
            setToast({ show: true, message: "Worker Added Successfully." });
        } catch (error) {
            console.error(error);
        }
    }

    // ==========================
    // Edit Worker
    // ==========================

    async function handleUpdateWorker(updated) {
        try {
            const saved = await updateWorkerApi(updated);
            setWorkers(prev => prev.map(worker => worker.workerId === saved.workerId ? { ...worker, ...saved, status: saved.active ? "Active" : "Inactive" } : worker));
            setEditWorker(null);
            setToast({ show: true, message: "Worker Updated Successfully." });
        } catch (error) {
            console.error(error);
        }
    }

    // ==========================
    // Delete Worker
    // ==========================

    async function handleDeleteWorker() {
        try {
            await deleteWorkerApi(deleteWorkerData.workerId);
            setWorkers(prev => prev.filter(worker => worker.workerId !== deleteWorkerData.workerId));
            setDeleteWorkerData(null);
            setToast({ show: true, message: "Worker Deleted Successfully." });
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <>

            <div className="worker-table-card">

                <div className="worker-top">

                    <h2>Workers</h2>

                    <button

                        className="add-worker-btn"

                        onClick={() => setOpen(true)}

                    >

                        Add Worker

                    </button>

                </div>

                <table className="worker-table">

                    <thead>

                        <tr>

                            <th>Worker ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Target</th>
                            <th>Today</th>
                            <th>Monthly</th>
                            <th>Status</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            workers.map((worker) => (

                                <tr key={worker.id}>

                                    <td>{worker.workerId}</td>
                                    <td>{worker.name}</td>
                                    <td>{worker.mobile}</td>
                                    <td>{worker.target}</td>
                                    <td>{worker.today}</td>
                                    <td>{worker.monthly}</td>
                                    <td>{worker.status}</td>

                                    <td>

                                        <div className="worker-actions">

                                            <button

                                                className="action-btn view-btn"

                                                onClick={() => setSelectedWorker(worker)}

                                            >

                                                View

                                            </button>

                                            <button

                                                className="action-btn edit-btn"

                                                onClick={() => setEditWorker(worker)}

                                            >

                                                Edit

                                            </button>

                                            <button

                                                className="action-btn delete-btn"

                                                onClick={() => setDeleteWorkerData(worker)}

                                            >

                                                Delete

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <AddWorkerModal

                open={open}

                onClose={() => setOpen(false)}

                onSave={handleSaveWorker}

            />

            <WorkerDetailsModal

                open={selectedWorker !== null}

                worker={selectedWorker}

                onClose={() => setSelectedWorker(null)}

            />

            <EditWorkerModal

                open={editWorker !== null}

                worker={editWorker}

                onClose={() => setEditWorker(null)}

                onSave={handleUpdateWorker}

            />

            <DeleteWorkerModal

                open={deleteWorkerData !== null}

                worker={deleteWorkerData}

                onClose={() => setDeleteWorkerData(null)}

                onDelete={handleDeleteWorker}

            />

            <SuccessToast

                show={toast.show}

                message={toast.message}

                onClose={() =>

                    setToast({

                        show: false,

                        message: ""

                    })

                }

            />

        </>

    );

}