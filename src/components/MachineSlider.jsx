import { useEffect, useState } from "react";

import SliderContent from "./SliderContent";
import MachineCards from "./MachineCards";
import SliderDots from "./SliderDots";

import "../styles/machineSlider.css";

export default function MachineSlider({

    company,

    machines

}) {

    const [current, setCurrent] = useState(0);

    /* ==========================================
       AUTO SLIDE
    ========================================== */

    useEffect(() => {

        if (!machines || machines.length === 0) return;

        const timer = setInterval(() => {

            setCurrent((prev) =>
                (prev + 1) % machines.length
            );

        }, 4000);

        return () => clearInterval(timer);

    }, [machines]);

    if (!machines || machines.length === 0) {

        return null;

    }

    /* ==========================================
       CURRENT MACHINE
    ========================================== */

    const currentMachine = machines[current];

    /* ==========================================
       NEXT 4 MACHINES
    ========================================== */

    const visibleMachines = [];

    for (let i = 0; i < 4; i++) {

        visibleMachines.push(

            machines[(current + i) % machines.length]

        );

    }

    /* ==========================================
       NEXT
    ========================================== */

    function nextSlide() {

        setCurrent(

            (prev) => (prev + 1) % machines.length

        );

    }

    /* ==========================================
       PREVIOUS
    ========================================== */

    function prevSlide() {

        setCurrent(

            (prev) =>

                prev === 0

                    ? machines.length - 1

                    : prev - 1

        );

    }

    return (

        <section className={`machine-slider ${company}`}>

            {/* LEFT */}

            <button

                className="slider-arrow left"

                onClick={prevSlide}

            >

                ❮

            </button>

            {/* CENTER */}

            <div className="slider-wrapper">

                <SliderContent

                    machine={currentMachine}

                />

                <MachineCards

                    machines={visibleMachines}

                />

            </div>

            {/* RIGHT */}

            <button

                className="slider-arrow right"

                onClick={nextSlide}

            >

                ❯

            </button>

            {/* DOTS */}

            <SliderDots

                total={machines.length}

                current={current}

                onSelect={setCurrent}

            />

        </section>

    );

}