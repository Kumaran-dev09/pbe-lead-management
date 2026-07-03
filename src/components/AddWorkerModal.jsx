import { useState } from "react";
import "../styles/workers.css";

export default function AddWorkerModal({

    open,

    onClose,

    onSave

}) {

    const [worker, setWorker] = useState({

        workerId: "",

        name: "",

        mobile: "",

        pin: "",

        target: 50,

        active: true,

        loginRequired: true

    });

    if (!open) return null;

    function change(e) {

        const { name, value, type, checked } = e.target;

        setWorker({

            ...worker,

            [name]: type === "checkbox" ? checked : value,

            ...(name === "loginRequired" && !checked ? { pin: "" } : {})

        });

    }

    function save() {

        if (
            worker.workerId.trim() === "" ||
            worker.name.trim() === "" ||
            worker.mobile.trim() === "" ||
            (worker.loginRequired && worker.pin.trim() === "")
        ) {

            alert("Please fill all required fields.");

            return;

        }

        onSave(worker);

        setWorker({

            workerId: "",

            name: "",

            mobile: "",

            pin: "",

            target: 50,

            active: true,

            loginRequired: true

        });

    }

    return (

        <div className="modal-overlay">

            <div className="worker-modal">

                <div className="modal-header">

                    <h2>

                        Add Worker

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                <div className="worker-form">

                    <div>

                        <label>

                            Worker ID

                        </label>

                        <input

                            name="workerId"

                            value={worker.workerId}

                            onChange={change}

                            placeholder="PHX001"

                        />

                    </div>

                    <div>

                        <label>

                            Worker Name

                        </label>

                        <input

                            name="name"

                            value={worker.name}

                            onChange={change}

                            placeholder="Worker Name"

                        />

                    </div>

                    <div>

                        <label>

                            Mobile

                        </label>

                        <input

                            name="mobile"

                            value={worker.mobile}

                            onChange={change}

                            placeholder="Mobile Number"

                        />

                    </div>

                    <div>

                        <label>

                            Login Required

                        </label>

                        <div className="switch-box">

                            <input

                                type="checkbox"

                                name="loginRequired"

                                checked={worker.loginRequired}

                                onChange={change}

                            />

                            <span>

                                {worker.loginRequired ? "Worker ID + PIN" : "Worker ID Only"}

                            </span>

                        </div>

                    </div>

                    {worker.loginRequired && (

                    <div>

                        <label>

                            PIN

                        </label>

                        <input

                            type="text"

                            name="pin"

                            value={worker.pin}

                            onChange={change}

                            placeholder="1234"

                        />

                    </div>

                    )}

                    <div>

                        <label>

                            Monthly Target

                        </label>

                        <input

                            type="number"

                            name="target"

                            value={worker.target}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>

                            Active

                        </label>

                        <div className="switch-box">

                            <input

                                type="checkbox"

                                name="active"

                                checked={worker.active}

                                onChange={change}

                            />

                            <span>

                                {worker.active ? "Active" : "Inactive"}

                            </span>

                        </div>

                    </div>

                </div>

                <div className="worker-footer">

                    <button

                        className="secondary-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="primary-btn"

                        onClick={save}

                    >

                        Save Worker

                    </button>

                </div>

            </div>

        </div>

    );

}
