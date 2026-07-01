import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import LeadForm from "./pages/LeadForm";
import NewBakery from "./pages/NewBakery";
import Settings from "./pages/Settings";
import ExistingBakery from "./pages/ExistingBakery";
import ReferenceCustomer from "./pages/ReferenceCustomer";
import LeadSaved from "./pages/LeadSaved";
import Leads from "./pages/Leads";
import Reports from "./pages/Reports";
import Workers from "./pages/Workers";
import AdminDashboard from "./pages/AdminDashboard";

function WorkerProtected({ children }) {
  const worker = localStorage.getItem("worker");

  const expiry = localStorage.getItem("workerSessionExpiry");

  if (!worker || !expiry) {
    return <Navigate to="/" replace />;
  }

  if (Date.now() > Number(expiry)) {
    localStorage.removeItem("worker");

    localStorage.removeItem("workerSessionExpiry");

    return <Navigate to="/" replace />;
  }

  return children;
}
function AdminProtected({ children }) {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Worker Login */}

        <Route path="/" element={<Login />} />

        {/* Admin Login */}

        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Worker Dashboard */}

        <Route
          path="/dashboard"
          element={
            <WorkerProtected>
              <Dashboard />
            </WorkerProtected>
          }
        />

        {/* Lead Form */}

        <Route
          path="/lead"
          element={
            <WorkerProtected>
              <LeadForm />
            </WorkerProtected>
          }
        />
        <Route
          path="/new-bakery"
          element={
            <WorkerProtected>
              <NewBakery />
            </WorkerProtected>
          }
        />

        <Route
          path="/existing-bakery"
          element={
            <WorkerProtected>
              <ExistingBakery />
            </WorkerProtected>
          }
        />
<Route
    path="/reference-customer"
    element={
        <WorkerProtected>
            <ReferenceCustomer />
        </WorkerProtected>
    }
/>
<Route

    path="/lead-saved"

    element={<LeadSaved />}

/>
        {/* Admin */}
        <Route

path="/admin"

element={<AdminProtected><AdminDashboard/></AdminProtected>}

/> 
       <Route
    path="/admin/leads"
    element={
        <AdminProtected>
            <Leads />
        </AdminProtected>
    }
/>
<Route

    path="/admin/workers"

    element={

        <AdminProtected>

            <Workers/>

        </AdminProtected>

    }

/>
<Route

    path="/admin/reports"

    element={

        <AdminProtected>

            <Reports/>

        </AdminProtected>

    }

/>
<Route
    path="/admin/settings"
    element={
        <AdminProtected>
            <Settings />
        </AdminProtected>
    }
/>
      </Routes>
    </BrowserRouter>
  );
}
