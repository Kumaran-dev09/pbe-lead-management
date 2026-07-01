import "../styles/workers.css";

export default function DeleteWorkerModal({

    open,

    worker,

    onClose,

    onDelete

}){

    if(!open) return null;

    return(

        <div className="modal-overlay">

            <div className="delete-modal">

                <h2>

                    Delete Worker

                </h2>

                <p>

                    Delete

                    <strong>

                        {" "}{worker?.name}

                    </strong>

                    ?

                </p>

                <div className="worker-footer">

                    <button

                        className="secondary-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="delete-confirm-btn"

                        onClick={onDelete}

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}
