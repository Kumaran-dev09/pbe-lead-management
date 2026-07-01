import "../styles/workers.css";

export default function WorkerFilters() {

    return (

        <div className="worker-filter-card">

            <input

                placeholder="Search Worker"

            />


            <select>

                <option>

                    All Status

                </option>

                <option>

                    Active

                </option>

                <option>

                    Inactive

                </option>

            </select>

            <button>

                Search

            </button>

        </div>

    );

}