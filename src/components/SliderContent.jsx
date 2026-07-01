export default function SliderContent({

    machine

}) {

    return (

        <div className="slider-content">

            <h2>

                {machine.title}

            </h2>

            {

                machine.subTitle && (

                    <h3>

                        {machine.subTitle}

                    </h3>

                )

            }

            <p>

                {machine.description}

            </p>

            <button

                className="view-btn"

            >

                View Details

            </button>

        </div>

    );

}