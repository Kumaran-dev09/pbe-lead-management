export default function StatCard({

    title,

    value

}){

    return(

        <div className="stat-card">

            <div className="stat-content">

                <h4>

                    {title}

                </h4>

                <h2>

                    {value}

                </h2>

            </div>

        </div>

    );

}