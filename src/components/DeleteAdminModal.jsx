import "../styles/settings.css";

export default function DeleteAdminModal({

    open,

    admin,

    onCancel,

    onDelete

}){

    if(!open || !admin) return null;

    return(

        <div className="modal-overlay">

            <div className="delete-modal">

                <h2>

                    Delete Admin

                </h2>

                <p>

                    Delete

                    <strong>

                        {" "}{admin.name}

                    </strong>

                    ?

                </p>

                <div className="worker-footer">

                    <button

                        className="secondary-btn"

                        onClick={onCancel}

                    >

                        Cancel

                    </button>

                    <button

                        className="delete-btn"

                        onClick={onDelete}

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}