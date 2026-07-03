import { useState, useEffect } from "react";
import "../styles/workers.css";

export default function EditWorkerModal({

    open,

    worker,

    onClose,

    onSave

}){

    const [form,setForm]=useState({

        workerId:"",

        name:"",

        mobile:"",

        pin:"",

        target:50,

        active:true,

        loginRequired:true

    });

    useEffect(()=>{

        if(worker){

            setForm({

                workerId:worker.workerId || "",

                name:worker.name || "",

                mobile:worker.mobile || "",

                pin:worker.pin || "",

                target:worker.target || 50,

                active:worker.active ?? true,

                loginRequired:worker.loginRequired ?? true

            });

        }

    },[worker]);

    if(!open) return null;

    function change(e){

        const{

            name,

            value,

            type,

            checked

        }=e.target;

        setForm({

            ...form,

            [name]:

                type==="checkbox"

                ? checked

                : value,

            ...(name === "loginRequired" && !checked ? { pin: "" } : {})

        });

    }

    function save(){

        onSave(form);

    }

    return(

        <div className="modal-overlay">

            <div className="worker-modal">

                <div className="modal-header">

                    <h2>

                        Edit Worker

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

                            value={form.workerId}

                            readOnly

                            className="readonly-input"

                        />

                    </div>

                    <div>

                        <label>

                            Worker Name

                        </label>

                        <input

                            name="name"

                            value={form.name}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>

                            Mobile

                        </label>

                        <input

                            name="mobile"

                            value={form.mobile}

                            onChange={change}

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

                                checked={form.loginRequired}

                                onChange={change}

                            />

                            <span>

                                {form.loginRequired

                                    ? "Worker ID + PIN"

                                    : "Worker ID Only"}

                            </span>

                        </div>

                    </div>

                    {form.loginRequired && (

                    <div>

                        <label>

                            PIN

                        </label>

                        <input

                            type="text"

                            name="pin"

                            value={form.pin}

                            onChange={change}

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

                            value={form.target}

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

                                checked={form.active}

                                onChange={change}

                            />

                            <span>

                                {form.active

                                    ? "Active"

                                    : "Inactive"}

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

                        Update Worker

                    </button>

                </div>

            </div>

        </div>

    );

}
