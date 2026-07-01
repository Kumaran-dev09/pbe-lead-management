import { useEffect, useState } from "react";

export default function CustomerForm({

    customer,

    setCustomer

}) {

    const [sameWhatsapp,setSameWhatsapp] = useState(true);

    useEffect(()=>{

        if(sameWhatsapp){

            setCustomer({

                ...customer,

                whatsapp:customer.mobile

            });

        }

    },[customer.mobile,sameWhatsapp]);

    function update(field,value){

        setCustomer({

            ...customer,

            [field]:value

        });

    }

    return(

        <div className="form-card">

            <h2>

                Customer Information

            </h2>

            <div className="form-grid">

                <div>

                    <label>

                        Customer Name *

                    </label>

                    <input

                        type="text"

                        placeholder="Customer Name"

                        value={customer.name}

                        onChange={(e)=>update("name",e.target.value)}

                    />

                </div>

                <div>

                    <label>

                        Mobile Number *

                    </label>

                    <input

                        type="tel"

                        placeholder="Mobile Number"

                        value={customer.mobile}

                        maxLength={10}

                        onChange={(e)=>update("mobile",e.target.value)}

                    />

                </div>

                <div className="full-width">

                    <label className="checkbox-label">

                        <input

                            type="checkbox"

                            checked={sameWhatsapp}

                            onChange={()=>setSameWhatsapp(!sameWhatsapp)}

                        />

                        Same WhatsApp Number

                    </label>

                </div>

                <div>

                    <label>

                        WhatsApp Number

                    </label>

                    <input

                        type="tel"

                        value={customer.whatsapp}

                        placeholder="WhatsApp Number"

                        disabled={sameWhatsapp}

                        maxLength={10}

                        onChange={(e)=>update("whatsapp",e.target.value)}

                    />

                </div>

            </div>

        </div>

    );

}