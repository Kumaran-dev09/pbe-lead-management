import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWorker } from "../services/api";
import "../styles/login.css";

export default function Login() {

    const navigate = useNavigate();

    const [workerId, setWorkerId] = useState("");
    const [pin, setPin] = useState("");

    const [showPin, setShowPin] = useState(false);

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    async function login() {

        if (!workerId.trim()) {

            setMessage("Please enter Worker ID");

            return;

        }

        try {

            setLoading(true);

            setMessage("");

            const worker = await loginWorker(

                workerId,

                pin

            );

            if (!worker) {

                setLoading(false);

                setMessage("Invalid Worker ID or PIN");

                return;

            }

            if (worker.active === false) {

                setLoading(false);

                setMessage("Worker account is inactive");

                return;

            }

            const session = {

                workerId: worker.workerId,

                name: worker.name,

                mobile: worker.mobile,

                pin: worker.pin,

                target: worker.target,

                active: worker.active,

                loginRequired: worker.loginRequired,

                createdAt: worker.createdAt,

                updatedAt: worker.updatedAt

            };

            const expiry =

                Date.now()

                +

                5 * 60 * 60 * 1000;

            localStorage.setItem(

                "worker",

                JSON.stringify(session)

            );

            localStorage.setItem(

                "workerSessionExpiry",

                expiry

            );

            navigate("/dashboard");

        }

        catch (err) {

            console.error(err);

            setMessage(

                "Unable to connect to server."

            );

        }

        finally {

            setLoading(false);

        }

    }

    function openWebsite() {

        window.open(

            "https://phoenixbakeryequipments.in",

            "_blank"

        );

    }

    function openWhatsapp() {

        window.open(

            "https://wa.me/919600910222",

            "_blank"

        );

    }

    function adminLogin() {

        navigate("/admin-login");

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

                    <p className="portal-title">

                        STAFF PORTAL

                    </p>

                    <h1>

                        Phoenix Bakery Equipments

                    </h1>

                    <span>

                        Bakery Expo Lead Capture System

                    </span>

                </div>

                <div className="input-group">

                    <label>

                        Worker ID

                    </label>

                    <input

                        type="text"

                        placeholder="Enter Worker ID"

                        value={workerId}

                        onChange={(e)=>setWorkerId(e.target.value)}

                    />

                </div>

                <div className="input-group">

                    <label>

                        PIN

                    </label>

                    <div className="password-box">

                        <input

                            type={

                                showPin

                                ? "text"

                                : "password"

                            }

                            placeholder="Enter PIN"

                            value={pin}

                            onChange={(e)=>setPin(e.target.value)}

                        />

                        <button

                            type="button"

                            className="eye-btn"

                            onClick={()=>setShowPin(!showPin)}

                        >

                            {showPin ? "Hide" : "Show"}

                        </button>

                    </div>

                </div>

                {

                    message &&

                    <div className="login-error">

                        {message}

                    </div>

                }

                <button

                    className="login-btn"

                    onClick={login}

                    disabled={loading}

                >

                    {

                        loading

                        ?

                        "Please Wait..."

                        :

                        "Worker Login"

                    }

                </button>

                <div className="login-divider">

                    <span>

                        Quick Access

                    </span>

                </div>

                <div className="login-bottom-buttons">

                    <button

                        className="social-btn"

                        onClick={openWebsite}

                    >

                        🌐

                        <span>

                            Phoenix Website

                        </span>

                    </button>

                    <button

                        className="social-btn"

                        onClick={openWhatsapp}

                    >

                        💬

                        <span>

                            WhatsApp

                        </span>

                    </button>

                    <button

                        className="social-btn admin-btn"

                        onClick={adminLogin}

                    >

                        🔐

                        <span>

                            Admin Login

                        </span>

                    </button>

                </div>

                <div className="login-footer">

                    © 2026 Phoenix Bakery Equipments

                </div>

            </div>

        </div>

    );

}
