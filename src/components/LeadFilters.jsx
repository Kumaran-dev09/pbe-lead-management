import { useState } from "react";

import "../styles/leads.css";

export default function LeadFilters({

    onSearch

}){

    const [keyword,setKeyword]=useState("");

    const [company,setCompany]=useState("");

    const [leadType,setLeadType]=useState("");

    function search(){

        onSearch({

            keyword,

            company,

            leadType

        });

    }

    return(

        <div className="lead-filter-card">

            <input

                placeholder="Search Customer / Mobile"

                value={keyword}

                onChange={(e)=>setKeyword(e.target.value)}

            />

            <select

                value={company}

                onChange={(e)=>setCompany(e.target.value)}

            >

                <option value="">

                    All Companies

                </option>

                <option value="Bakery">

                    Phoenix Bakery Equipments

                </option>

                <option value="Robot">

                    Phoenix Robot Technologies

                </option>

            </select>

            <select

                value={leadType}

                onChange={(e)=>setLeadType(e.target.value)}

            >

                <option value="">

                    All Lead Types

                </option>

                <option value="NEW_BAKERY">

                    New Bakery

                </option>

                <option value="EXISTING_BAKERY">

                    Existing Bakery

                </option>

                <option value="REFERENCE_CUSTOMER">

                    Reference Customer

                </option>

            </select>

            <button

                className="search-btn"

                onClick={search}

            >

                Search

            </button>

        </div>

    );

}