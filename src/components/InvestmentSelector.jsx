export default function InvestmentSelector({

    investment,

    setInvestment

}){

    return(

        <div className="form-card">

            <h2>

                Investment

            </h2>

            <div className="form-grid">

                <div>

                    <label>

                        Investment Amount

                    </label>

                    <select

                        value={investment}

                        onChange={(e)=>setInvestment(e.target.value)}

                    >

                        <option value="">

                            Select Investment

                        </option>

                        <option>

                            Below 5 Lakhs

                        </option>

                        <option>

                            5 - 8 Lakhs

                        </option>

                        <option>

                            8 - 10 Lakhs

                        </option>

                        <option>

                            10 - 15 Lakhs

                        </option>

                        <option>

                            15 - 20 Lakhs

                        </option>

                        <option>

                            20 - 30 Lakhs

                        </option>

                        <option>

                            Above 30 Lakhs

                        </option>

                    </select>

                </div>

            </div>

        </div>

    );

}