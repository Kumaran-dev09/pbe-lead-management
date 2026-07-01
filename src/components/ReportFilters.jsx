import { useState } from "react";
import "../styles/reports.css";

export default function ReportFilters({ onSearch }) {

    const initialFilters = {

        search: "",

        company: "All",

        worker: "All",

        leadType: "All",

        assessment: "All",

        fromDate: "",

        toDate: ""

    };

    const [filters, setFilters] = useState(initialFilters);

    function change(e) {

        setFilters({

            ...filters,

            [e.target.name]: e.target.value

        });

    }

    function search() {

        if (onSearch) {

            onSearch(filters);

        }

    }

    function resetFilters() {

        setFilters(initialFilters);

        if (onSearch) {

            onSearch(initialFilters);

        }

    }

    return (

        <div className="report-filter-card">

            <h2>

                Filters

            </h2>

            <div className="filter-grid">

                {/* Search */}

                <input

                    type="text"

                    name="search"

                    placeholder="Search Customer / Mobile / Lead No"

                    value={filters.search}

                    onChange={change}

                />

                {/* Company */}

                <select

                    name="company"

                    value={filters.company}

                    onChange={change}

                >

                    <option value="All">All Companies</option>

                    <option value="Phoenix Bakery Equipments">

                        Phoenix Bakery Equipments

                    </option>

                    <option value="Phoenix Robot Technologies">

                        Phoenix Robot Technologies

                    </option>

                </select>

                {/* Worker */}

                <select

                    name="worker"

                    value={filters.worker}

                    onChange={change}

                >

                    <option value="All">All Workers</option>

                    <option value="PHX001">PHX001 - Kumar</option>

                    <option value="PHX002">PHX002 - Arun</option>

                </select>

                {/* Lead Type */}

                <select

                    name="leadType"

                    value={filters.leadType}

                    onChange={change}

                >

                    <option value="All">All Lead Types</option>

                    <option>New Bakery</option>

                    <option>Existing Bakery</option>

                    <option>Reference Customer</option>

                </select>

                {/* Assessment */}

                <select

                    name="assessment"

                    value={filters.assessment}

                    onChange={change}

                >

                    <option value="All">All Assessments</option>

                    <option>Initial Enquiry</option>

                    <option>Quotation Required</option>

                    <option>Follow-up Required</option>

                    <option>Site Visit Required</option>

                </select>

                {/* From Date */}

                <div>

                    <label>

                        From

                    </label>

                    <input

                        type="date"

                        name="fromDate"

                        value={filters.fromDate}

                        onChange={change}

                    />

                </div>

                {/* To Date */}

                <div>

                    <label>

                        To

                    </label>

                    <input

                        type="date"

                        name="toDate"

                        value={filters.toDate}

                        onChange={change}

                    />

                </div>

            </div>

            <div className="filter-buttons">

                <button

                    className="search-btn"

                    onClick={search}

                >

                    Search

                </button>

                <button

                    className="reset-btn"

                    onClick={resetFilters}

                >

                    Reset

                </button>

            </div>

        </div>

    );

}