import { useState } from "react";

import AddAdminModal from "./AddAdminModal";
import ViewAdminModal from "./ViewAdminModal";
import EditAdminModal from "./EditAdminModal";
import DeleteAdminModal from "./DeleteAdminModal";
import SuccessToast from "./SuccessToast";

import "../styles/settings.css";

export default function AdminTable() {

    const [open, setOpen] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [editAdmin, setEditAdmin] = useState(null);
    const [deleteAdmin, setDeleteAdmin] = useState(null);

    const [search, setSearch] = useState("");

    const [toast, setToast] = useState({
        show: false,
        message: ""
    });

    const [admins, setAdmins] = useState([
        {
            id: 1,
            adminId: "ADM001",
            name: "Kumaran",
            mobile: "9876543210",
            email: "admin@phoenixbakeryequipments.in",
            username: "kumaran",
            password: "1234",
            role: "Super Admin",
            status: "Active"
        },
        {
            id: 2,
            adminId: "ADM002",
            name: "Phoenix Admin",
            mobile: "9876543211",
            email: "staff@phoenixbakeryequipments.in",
            username: "phoenix",
            password: "1234",
            role: "Admin",
            status: "Active"
        }
    ]);

    /* ===========================
       ADD ADMIN
    =========================== */

    function saveAdmin(admin) {

        setAdmins([...admins, admin]);

        setOpen(false);

        setToast({
            show: true,
            message: "Admin Added Successfully."
        });

    }

    /* ===========================
       UPDATE ADMIN
    =========================== */

    function updateAdmin(updated) {

        setAdmins(

            admins.map(admin =>
                admin.id === updated.id
                    ? updated
                    : admin
            )

        );

        setEditAdmin(null);

        setToast({
            show: true,
            message: "Admin Updated Successfully."
        });

    }

    /* ===========================
       DELETE ADMIN
    =========================== */

    function removeAdmin() {

        setAdmins(

            admins.filter(

                admin => admin.id !== deleteAdmin.id

            )

        );

        setDeleteAdmin(null);

        setToast({
            show: true,
            message: "Admin Deleted Successfully."
        });

    }

    /* ===========================
       SEARCH
    =========================== */

    const filteredAdmins = admins.filter(admin =>

        admin.adminId.toLowerCase().includes(search.toLowerCase()) ||

        admin.name.toLowerCase().includes(search.toLowerCase()) ||

        admin.mobile.includes(search) ||

        admin.email.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <>

            <div className="settings-card">

                <div className="admin-table-top">

                    <h2 className="settings-title">

                        Admin Management

                    </h2>

                    <button

                        className="add-admin-btn"

                        onClick={() => setOpen(true)}

                    >

                        Add Admin

                    </button>

                </div>

                <div className="admin-search">

                    <input

                        type="text"

                        placeholder="Search Admin..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />

                </div>

                <div className="admin-table-wrapper">

                    <table className="admin-table">

                        <thead>

                            <tr>

                                <th>Admin ID</th>

                                <th>Name</th>

                                <th>Mobile</th>

                                <th>Email</th>

                                <th>Role</th>

                                <th>Status</th>

                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                filteredAdmins.length > 0 ?

                                    filteredAdmins.map(admin => (

                                        <tr key={admin.id}>

                                            <td>{admin.adminId}</td>

                                            <td>{admin.name}</td>

                                            <td>{admin.mobile}</td>

                                            <td>{admin.email}</td>

                                            <td>{admin.role}</td>

                                            <td>

                                                <span className="admin-status">

                                                    {admin.status}

                                                </span>

                                            </td>

                                            <td>

                                                <div className="admin-actions">

                                                    <button

                                                        className="action-btn view-btn"

                                                        onClick={() => setSelectedAdmin(admin)}

                                                    >

                                                        View

                                                    </button>

                                                    <button

                                                        className="action-btn edit-btn"

                                                        onClick={() => setEditAdmin(admin)}

                                                    >

                                                        Edit

                                                    </button>

                                                    <button

                                                        className="action-btn delete-btn"

                                                        onClick={() => setDeleteAdmin(admin)}

                                                    >

                                                        Delete

                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                    :

                                    (

                                        <tr>

                                            <td colSpan="7" style={{

                                                textAlign: "center",

                                                padding: "30px"

                                            }}>

                                                No Admin Found

                                            </td>

                                        </tr>

                                    )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

            <AddAdminModal

                open={open}

                onClose={() => setOpen(false)}

                onSave={saveAdmin}

            />

            <ViewAdminModal

                open={selectedAdmin !== null}

                admin={selectedAdmin}

                onClose={() => setSelectedAdmin(null)}

            />

            <EditAdminModal

                open={editAdmin !== null}

                admin={editAdmin}

                onClose={() => setEditAdmin(null)}

                onSave={updateAdmin}

            />

            <DeleteAdminModal

                open={deleteAdmin !== null}

                admin={deleteAdmin}

                onCancel={() => setDeleteAdmin(null)}

                onDelete={removeAdmin}

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