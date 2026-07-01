import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import AdminProfile from "../components/AdminProfile";
import AdminTable from "../components/AdminTable";
import BackupRestore from "../components/BackupRestore";
import SystemInformation from "../components/SystemInformation";

import "../styles/settings.css";

export default function Settings() {

    return (

        <div className="admin-layout">

            <Sidebar />

            <main className="admin-main">

                <Header title="Settings" />

                <div className="settings-page">

                    <AdminProfile />

                    <AdminTable />


                    <BackupRestore />

                    <SystemInformation />

                </div>

            </main>

        </div>

    );

}