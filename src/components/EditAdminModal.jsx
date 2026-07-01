import { useEffect, useState } from "react";
import "../styles/settings.css";

export default function EditAdminModal({

    open,

    admin,

    onClose,

    onSave

}) {

    const [form, setForm] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {

        if (admin) {

            setForm({

                ...admin,

                password: "",

                confirmPassword: ""

            });

        }

    }, [admin]);

    if (!open || !admin) return null;

    function change(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    function save() {

        if (form.password !== form.confirmPassword) {

            alert("Password and Confirm Password do not match.");

            return;

        }

        const updatedAdmin = {

            ...form,

            password:

                form.password.trim() === ""

                    ? admin.password

                    : form.password

        };

        delete updatedAdmin.confirmPassword;

        onSave(updatedAdmin);

    }

    return (

        <div className="modal-overlay">

            <div className="worker-modal">

                <div className="modal-header">

                    <h2>Edit Admin</h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                <div className="worker-form">

                    <div>

                        <label>Name</label>

                        <input

                            name="name"

                            value={form.name || ""}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Mobile Number</label>

                        <input

                            name="mobile"

                            value={form.mobile || ""}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Email Address</label>

                        <input

                            type="email"

                            name="email"

                            value={form.email || ""}

                            onChange={change}

                        />

                    </div>

                    <div>

                        <label>Role</label>

                        <select

                            name="role"

                            value={form.role || ""}

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

                            value={form.status || ""}

                            onChange={change}

                        >

                            <option>Active</option>

                            <option>Inactive</option>

                        </select>

                    </div>

                    <div>

                        <label>New Password</label>

                        <input

                            type={showPassword ? "text" : "password"}

                            name="password"

                            value={form.password || ""}

                            onChange={change}

                            placeholder="Enter New Password"

                        />

                    </div>

                    <div>

                        <label>Confirm Password</label>

                        <input

                            type={showPassword ? "text" : "password"}

                            name="confirmPassword"

                            value={form.confirmPassword || ""}

                            onChange={change}

                            placeholder="Confirm Password"

                        />

                    </div>

                    <div className="password-box">

                        <input

                            type="checkbox"

                            checked={showPassword}

                            onChange={() =>

                                setShowPassword(!showPassword)

                            }

                        />

                        <label>

                            Show Password

                        </label>

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

                        Save Changes

                    </button>

                </div>

            </div>

        </div>

    );

}