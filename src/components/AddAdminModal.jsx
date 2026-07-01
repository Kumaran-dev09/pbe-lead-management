import { useState } from "react";
import "../styles/settings.css";

export default function AddAdminModal({

    open,

    onClose,

    onSave

}) {

    const [admin, setAdmin] = useState({

        adminId: "",

        name: "",

        mobile: "",

        email: "",

        username: "",

        password: "",

        confirmPassword: "",

        role: "Admin",

        status: "Active"

    });

    if (!open) return null;

    function change(e) {

        setAdmin({

            ...admin,

            [e.target.name]: e.target.value

        });

    }

    function save() {

        if (admin.password !== admin.confirmPassword) {

            alert("Password does not match");

            return;

        }

        onSave({

            ...admin,

            id: Date.now()

        });

    }

    return (

        <div className="modal-overlay">

            <div className="worker-modal">

                <div className="modal-header">

                    <h2>Add Admin</h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                <div className="worker-form">

                    <div>

                        <label>Admin ID</label>

                        <input

                            name="adminId"

                            value={admin.adminId}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Name</label>

                        <input

                            name="name"

                            value={admin.name}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Mobile</label>

                        <input

                            name="mobile"

                            value={admin.mobile}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Email</label>

                        <input

                            name="email"

                            value={admin.email}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Username</label>

                        <input

                            name="username"

                            value={admin.username}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Password</label>

                        <input

                            type="text"

                            name="password"

                            value={admin.password}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Confirm Password</label>

                        <input

                            type="text"

                            name="confirmPassword"

                            value={admin.confirmPassword}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Role</label>

                        <select

                            name="role"

                            value={admin.role}

                            onChange={change}

                        >

                            <option>Super Admin</option>

                            <option>Admin</option>

                            <option>Manager</option>

                            <option>Sales</option>

                        </select>

                    </div>

                    <div>

                        <label>Status</label>

                        <select

                            name="status"

                            value={admin.status}

                            onChange={change}

                        >

                            <option>Active</option>

                            <option>Inactive</option>

                        </select>

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

                        Save Admin

                    </button>

                </div>

            </div>

        </div>

    );

}