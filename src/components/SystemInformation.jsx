import "../styles/settings.css";

export default function SystemInformation() {

    return (

        <div className="settings-card">

            <h2 className="settings-title">

                System Information

            </h2>

            <div className="system-grid">

                <div className="system-item">

                    <label>Application</label>

                    <p>PBE Lead Management System</p>

                </div>

                <div className="system-item">

                    <label>Version</label>

                    <p>Version 1.0.0</p>

                </div>

                <div className="system-item">

                    <label>Frontend</label>

                    <p>React + Vite</p>

                </div>

                <div className="system-item">

                    <label>Backend</label>

                    <p>Spring Boot</p>

                </div>

                <div className="system-item">

                    <label>Database</label>

                    <p>MySQL</p>

                </div>

                <div className="system-item">

                    <label>Java Version</label>

                    <p>Java 24</p>

                </div>

                <div className="system-item">

                    <label>Server Status</label>

                    <span className="status-online">

                        ● Online

                    </span>

                </div>

                <div className="system-item">

                    <label>Developer</label>

                    <p>KUMARAN</p>

                </div>

                <div className="system-item">

                    <label>Support Email</label>

                    <p>kumaran14306@gmail.com</p>

                </div>

                <div className="system-item">

                    <label>Website</label>

                    <p>phoenixbakeryequipments.in</p>

                </div>

                <div className="system-item">

                    <label>Support</label>

                    <p>+91 8838772761</p>

                </div>

                <div className="system-item">

                    <label>Last Updated</label>

                    <p>June 2026</p>

                </div>

            </div>

        </div>

    );

}