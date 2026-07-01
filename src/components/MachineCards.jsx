export default function MachineCards({

    machines

}) {

    return (

        <div className="slider-images">

            {machines.map((machine, index) => (

                <div

                    key={index}

                    className={
                        index === 0
                            ? "machine-card active"
                            : "machine-card"
                    }

                >

                    <img

                        src={machine.image}

                        alt={machine.title}

                    />

                    <div className="machine-name">

                        {machine.title}

                    </div>

                </div>

            ))}

        </div>

    );

}