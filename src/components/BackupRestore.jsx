import "../styles/settings.css";

export default function BackupRestore() {

    function downloadDatabase() {

        alert("Database Backup Download Started");

        // Later:
        // window.open("http://localhost:8080/api/backup/database");

    }

    function downloadLeads() {

        alert("Leads Excel Download Started");

        // Later:
        // window.open("http://localhost:8080/api/reports/export/leads");

    }

    function downloadWorkers() {

        alert("Workers Excel Download Started");

        // Later:
        // window.open("http://localhost:8080/api/workers/export");

    }

    return (

        <div className="settings-card">

            <h2 className="settings-title">

                Backup & Export

            </h2>

            <div className="backup-grid">

                <div className="backup-card">

                    <div className="backup-icon">

                        💾

                    </div>

                    <h3>

                        Database Backup

                    </h3>

                    <p>

                        Download complete MySQL database backup.

                    </p>

                    <button

                        className="primary-btn"

                        onClick={downloadDatabase}

                    >

                        Download Database Backup

                    </button>

                </div>

                <div className="backup-card">

                    <div className="backup-icon">

                        📄

                    </div>

                    <h3>

                        Leads Report

                    </h3>

                    <p>

                        Download all customer leads in Excel format.

                    </p>

                    <button

                        className="primary-btn"

                        onClick={downloadLeads}

                    >

                        Download Leads Excel

                    </button>

                </div>

                <div className="backup-card">

                    <div className="backup-icon">

                        👷

                    </div>

                    <h3>

                        Workers Report

                    </h3>

                    <p>

                        Download complete worker details in Excel.

                    </p>

                    <button

                        className="primary-btn"

                        onClick={downloadWorkers}

                    >

                        Download Workers Excel

                    </button>

                </div>

            </div>

        </div>

    );

}