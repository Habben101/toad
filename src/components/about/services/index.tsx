import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useComponentDidMount} from "../../../utils/component";

export function AboutService() {
    const ref = useRef<HTMLDivElement>(null);

    useComponentDidMount(() => {
        // This does not seem to work without a settimeout
        setTimeout(() => {
            const sections = gsap.utils.toArray(".gallery-item-wrapper");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    trigger: ref.current,
                    //   scroller: "#main-container",
                    pin: true,
                    scrub: 0.5,
                    snap: 1 / (sections.length - 1),
                    end: () => `+=${ref?.current?.offsetWidth}`,
                },
            });
            ScrollTrigger.refresh();
        });
    });

    return (
        <section data-scroll-section className="section-wrapper gallery-wrap">
            <div className="gallery" ref={ref}>
                <div className="gallery-counter">
                    <h2>
                        Prior Work and <br />
                        Services
                    </h2>
                </div>
                <div className="gallery-item-wrapper" ref={ref}>
                    <div></div>
                    <div className={"gallery-item"}>
                        <div className="gallery-item-info">
                            <h1 className="gallery-info-title">
                                Building Information Modeling
                            </h1>
                            {/* <h2 className="gallery-info-subtitle">Live the Beauty</h2> */}
                            <p className="gallery-info-category">
                                We've handled numerous BIM projects and
                                delivered 2D drawing and renderings, 3D models,
                                and 4D animations.
                            </p>
                        </div>
                        <div
                            className="gallery-item-image"
                            style={{ backgroundImage: `url(./ex.gif)` }}
                        ></div>
                    </div>
                    <div></div>
                </div>
                <div className="gallery-item-wrapper" ref={ref}>
                    <div></div>
                    <div className={"gallery-item"}>
                        <div className="gallery-item-info">
                            <h1 className="gallery-info-title">
                                Construction Sequencing
                            </h1>
                            {/* <h2 className="gallery-info-subtitle">Live the Beauty</h2> */}
                            <p className="gallery-info-category">
                                Adding the time dimmension to 3D models makes
                                them 4D models. It takes work but it can save
                                both massive and minor mistakes from occuring in
                                the field.
                            </p>
                        </div>
                        <div
                            className="gallery-item-image"
                            style={{ backgroundImage: `url(./4d-bim.gif)` }}
                        ></div>
                    </div>
                    <div></div>
                </div>
                <div className="gallery-item-wrapper" ref={ref}>
                    <div></div>
                    <div className={"gallery-item"}>
                        <div className="gallery-item-info">
                            <h1 className="gallery-info-title">
                                Inundation Modelling
                            </h1>
                            {/* <h2 className="gallery-info-subtitle">Live the Beauty</h2> */}
                            <p className="gallery-info-category">
                                Given satellite elevation data for an area we
                                can provide detailed inundation models whether
                                due to rain, flood, storm surge, or tsunami. For
                                this model we asked: What if ALL the ice melted?
                                This video shows what would happen to the land
                                formerly know as Wabanaki Country (currently the
                                state of Maine as well as provinces of Nova
                                Scotia, Prince Edward Island, New Brunswick, and
                                Quebec)
                            </p>
                        </div>
                        <iframe
                            className="gallery-item-image"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/a5Zm9lYLJAU"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="Embedded youtube"
                        ></iframe>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}
