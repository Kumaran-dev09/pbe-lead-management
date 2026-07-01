export default function SliderDots({

    total,

    current,

    onSelect

}) {

    return (

        <div className="slider-dots">

            {Array.from({ length: total }).map((_, index) => (

                <span

                    key={index}

                    className={
                        current === index
                            ? "dot active"
                            : "dot"
                    }

                    onClick={() => onSelect(index)}

                />

            ))}

        </div>

    );

}