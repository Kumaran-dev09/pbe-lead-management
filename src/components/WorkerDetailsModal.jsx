import "../styles/workers.css";

export default function WorkerDetailsModal({

    worker,

    open,

    onClose

}){

    if(!open || !worker) return null;

    return(

        <div className="modal-overlay">

            <div className="worker-details-modal">

                <div className="modal-header">

                    <h2>

                        Worker Details

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ×

                    </button>

                </div>

                <div className="worker-details-grid">

                    <div>

                        <label>

                            Worker ID

                        </label>

                        <p>

                            {worker.workerId}

                        </p>

                    </div>

                    <div>

                        <label>

                            Worker Name

                        </label>

                        <p>

                            {worker.name}

                        </p>

                    </div>

                    <div>

                        <label>

                            Mobile

                        </label>

                        <p>

                            {worker.mobile}

                        </p>

                    </div>

                    <div>

                        <label>

                            PIN

                        </label>

                        <p>

                            {worker.pin}

                        </p>

                    </div>

                    <div>

                        <label>

                            Monthly Target

                        </label>

                        <p>

                            {worker.target}

                        </p>

                    </div>

                    <div>

                        <label>

                            Today's Leads

                        </label>

                        <p>

                            {worker.today ?? 0}

                        </p>

                    </div>

                    <div>

                        <label>

                            Monthly Leads

                        </label>

                        <p>

                            {worker.monthly ?? 0}

                        </p>

                    </div>

                    <div>

                        <label>

                            Status

                        </label>

                        <p>

                            {worker.active ? "Active" : "Inactive"}

                        </p>

                    </div>

                    <div>

                        <label>

                            Created Date

                        </label>

                        <p>

                            {worker.createdAt || "-"}

                        </p>

                    </div>

                    <div>

                        <label>

                            Updated Date

                        </label>

                        <p>

                            {worker.updatedAt || "-"}

                        </p>

                    </div>

                </div>

                <div className="worker-footer">

                    <button

                        className="primary-btn"

                        onClick={onClose}

                    >

                        Close

                    </button>

                </div>

            </div>

        </div>

    );

}