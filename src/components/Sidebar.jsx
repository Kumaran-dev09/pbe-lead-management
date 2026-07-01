import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {

    const menus = [

        { name: "Dashboard", icon: "🏠", path: "/admin" },

        { name: "Leads", icon: "📋", path: "/admin/leads" },

        { name: "Workers", icon: "👨‍💼", path: "/admin/workers" },

        { name: "Reports", icon: "📊", path: "/admin/reports" },

        { name: "Settings", icon: "⚙", path: "/admin/settings" }

    ];

    return (

        <aside className="sidebar">

            <div className="sidebar-top">

                <img

                    src="/images/logo.png"

                    alt="Phoenix"

                    className="sidebar-logo"

                />

                <h2>

                    Phoenix

                </h2>

            </div>

            <nav>

                {

                    menus.map((menu) => (

                        <NavLink

                            key={menu.name}

                            to={menu.path}

                            className={({ isActive }) =>

                                isActive

                                    ? "sidebar-link active"

                                    : "sidebar-link"

                            }

                        >

                            <span className="sidebar-icon">

                                {menu.icon}

                            </span>

                            {menu.name}

                        </NavLink>

                    ))

                }

            </nav>

            <button

                className="logout-button"

                onClick={() => {

                    localStorage.removeItem("admin");

                    window.location.href = "/admin-login";

                }}

            >

                🚪 Logout

            </button>

        </aside>

    );

}