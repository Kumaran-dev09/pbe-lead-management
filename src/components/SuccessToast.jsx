import { useEffect } from "react";
import "../styles/toast.css";

export default function SuccessToast({

    show,

    message,

    onClose

}) {

    useEffect(() => {

        if (!show) return;

        const timer = setTimeout(() => {

            onClose();

        }, 3000);

        return () => clearTimeout(timer);

    }, [show, onClose]);

    if (!show) return null;

    return (

        <div className="success-toast">

            <div className="toast-icon">

                ✓

            </div>

            <div className="toast-content">

                <h4>

                    Success

                </h4>

                <p>

                    {message}

                </p>

            </div>

        </div>

    );

}