import { useState } from "react";
import "../styles/header.css";

export default function Header({

    title,

    showCompanyFilter = false,

    onCompanyChange

}) {

    const [company, setCompany] = useState("ALL");

    function handleChange(e) {

        const value = e.target.value;

        setCompany(value);

        if (onCompanyChange) {

            onCompanyChange(value);

        }

    }

    return (

        <header className="admin-header">

            <div>

                <h1>

                    {title}

                </h1>

                <p>

                    Phoenix Bakery CRM

                </p>

            </div>

            {

                showCompanyFilter &&

                <div className="header-right">

                    <select

                        value={company}

                        onChange={handleChange}

                    >

                        <option value="ALL">

                            All Companies

                        </option>

                        <option value="BAKERY">

                            Phoenix Bakery Equipments

                        </option>

                        <option value="ROBOT">

                            Phoenix Robot Technologies

                        </option>

                    </select>

                </div>

            }

        </header>

    );

}