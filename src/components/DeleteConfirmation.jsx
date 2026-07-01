import "../styles/leads.css";

export default function DeleteConfirmation({

    open,

    lead,

    onCancel,

    onConfirm

}) {

    if (!open) return null;

    return (

        <div className="modal-overlay">

            <div className="delete-modal">

                <h2>

                    Delete Lead

                </h2>

                <p>

                    Are you sure you want to delete

                    <strong>

                        {" "}{lead?.customer}

                    </strong>

                    ?

                </p>

                <div className="delete-actions">

                    <button

                        className="secondary-btn"

                        onClick={onCancel}

                    >

                        Cancel

                    </button>

                    <button

                        className="delete-confirm-btn"

                        onClick={onConfirm}

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}