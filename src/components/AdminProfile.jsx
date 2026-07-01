import "../styles/settings.css";

export default function AdminProfile() {

    const admin = {

        adminId: "PHXBE001",

        name: "DEEPANA",

        mobile: "+91 9600910222",

        email: "admin@phoenixbakeryequipments.in",

        role: "Super Admin",

        lastLogin: "14 Jun 2026 | 09:30 AM"

    };

    return (

        <div className="profile-card">

            <div className="profile-header">

                <div>

                    <h2>Admin Profile</h2>

                    <p>Phoenix Bakery CRM Administrator</p>

                </div>

            </div>

            <div className="profile-details">

                <div className="profile-row">

                    <span>Admin ID</span>

                    <strong>{admin.adminId}</strong>

                </div>

                <div className="profile-row">

                    <span>Admin Name</span>

                    <strong>{admin.name}</strong>

                </div>

                <div className="profile-row">

                    <span>Mobile Number</span>

                    <strong>{admin.mobile}</strong>

                </div>

                <div className="profile-row">

                    <span>Email Address</span>

                    <strong>{admin.email}</strong>

                </div>

                <div className="profile-row">

                    <span>Role</span>

                    <strong>{admin.role}</strong>

                </div>

                <div className="profile-row">

                    <span>Last Login</span>

                    <strong>{admin.lastLogin}</strong>

                </div>

            </div>

        </div>

    );

}