import "../styles/settings.css";

export default function ViewAdminModal({

    open,

    admin,

    onClose

}) {

    if (!open || !admin) return null;

    return (

        <div className="modal-overlay">

            <div className="admin-view-modal">

                <div className="modal-header">

                    <h2>Admin Details</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                <div className="admin-view-grid">

                    <Item
                        label="Admin ID"
                        value={admin.adminId}
                    />

                    <Item
                        label="Admin Name"
                        value={admin.name}
                    />

                    <Item
                        label="Mobile Number"
                        value={admin.mobile}
                    />

                    <Item
                        label="Email Address"
                        value={admin.email}
                    />

                    <Item
                        label="Username"
                        value={admin.username}
                    />

                    <Item
                        label="Role"
                        value={admin.role}
                    />

                    <Item
                        label="Status"
                        value={admin.status}
                    />

                </div>

                <div className="worker-footer">

                    <button

                        className="primary-btn"

                        onClick={onClose}

                    >

                        Close

                    </button>

                </div>

            </div>

        </div>

    );

}

function Item({

    label,

    value

}) {

    return (

        <div className="admin-view-item">

            <label>

                {label}

            </label>

           <div className="view-value">

    {value || "-"}

</div>

        </div>

    );

}