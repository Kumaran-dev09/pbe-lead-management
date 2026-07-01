import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../services/api";
import "../styles/login.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  async function login() {
    if (!username.trim()) {
      setMessage("Please enter Admin Username");

      return;
    }

    if (!password.trim()) {
      setMessage("Please enter Password");

      return;
    }

    try {
      setLoading(true);

      setMessage("");

      const admin = await adminLogin(username, password);

      if (!admin || !admin.username) {
        setLoading(false);

        setMessage("Invalid Username or Password");

        return;
      }

      localStorage.setItem("admin", JSON.stringify(admin));

      navigate("/admin");
    } catch (error) {
      console.log(error);

      setMessage("Server Connection Failed");
    } finally {
      setLoading(false);
    }
  }

  function workerLogin() {
    navigate("/");
  }

  function website() {
    window.open(
      "https://phoenixbakeryequipments.in",

      "_blank",
    );
  }

  function whatsapp() {
    window.open(
      "https://wa.me/919600910222",

      "_blank",
    );
  }

  return (
    <div className="login-page">
      <div className="login-bg-circle circle1"></div>

      <div className="login-bg-circle circle2"></div>

      <div className="login-bg-circle circle3"></div>

      <div className="glass-login-card">
        <div className="login-logo">

    <div className="logo-icon">

        <img
            src="/images/logo.png"
            alt="Phoenix Logo"
            className="login-logo-img"
        />

    </div>

</div>
        <div className="login-heading">
          <p className="portal-title">ADMIN PORTAL</p>

          <h1>Phoenix Bakery Equipments</h1>

          <span>Administrator Login</span>
        </div>

        <div className="input-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="eye-btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {message && <div className="login-error">{message}</div>}

        <button className="login-btn" onClick={login} disabled={loading}>
          {loading ? "Please Wait..." : "Admin Login"}
        </button>

        <div className="login-divider">
          <span>Quick Access</span>
        </div>

        <div className="login-bottom-buttons">
          <button className="social-btn" onClick={website}>
            🌐
            <span>Website</span>
          </button>

          <button className="social-btn" onClick={whatsapp}>
            💬
            <span>WhatsApp</span>
          </button>

          <button className="social-btn admin-btn" onClick={workerLogin}>
            👷
            <span>Worker Login</span>
          </button>
        </div>

        <div className="login-footer">© 2026 Phoenix Bakery Equipments</div>
      </div>
    </div>
  );
}
