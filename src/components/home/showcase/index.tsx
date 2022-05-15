import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export const Showcase: React.FC = () => {
    const showcasesRef = useRef(null);
    const scrollRef = useRef(null);
    useEffect(() => {
        // const element = scrollRef.current;

        // const aa = document.querySelector(".toadVideo");

        // // const bb = element.offsetWidth - aa.offsetTop;
        // // const con = element.querySelector('.showcase-box')

        const revealContainers = document.querySelectorAll(".ani-holder");

        revealContainers.forEach((container) => {
            const image = container.querySelector("img");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    once: true,
                    toggleActions: "play play none none",
                },
            });

            tl.set(container, { autoAlpha: 1 });
            tl.to(container, {
                duration: 2,
                "clip-path": "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
                ease: "power3.out",
                paused: true,
                // overwrite: "auto"
            });
            tl.to(image, {
                duration: 2,
                "clip-path": "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
                scale: 1,
                alpha: 1,
                transformOrigin: "center center",
                ease: "power3.out",
                // overwrite: "auto"
            });
        });

        const a = {
            ease1: CustomEase.create("ease1", ".45,.01,.07,1"),
        };
        const elements = {
            showCaseHeader: ".showcases__header",
        };
        const t = gsap.timeline({
            reversed: false,
            paused: true,
        });
        t.to(
            scrollRef.current,
            {
                duration: 0.5,
                autoAlpha: 0,
                ease: a.ease1,
            },
            "0",
        ),
            gsap.to(scrollRef.current, {
                scrollTrigger: {
                    trigger: ".showcases",
                    start: "top top",
                    // scroller: document.querySelector("[data-scroll-container]"),
                    scrub: true,
                    end: "80% center",
                    invalidateOnRefresh: true,
                    onEnterBack: () => {
                        t.timeScale(1.2).reverse();
                    },
                    onLeave: () => {
                        t.play();
                    },
                },
            });

        // `useEffect`'s cleanup phase
        // return () => scroll.destroy();
    }, []);
    return (
        <div className="showcases" id="showcases">
            <div
                className="showcases__inner"
                data-bg="#1d1d1d"
                data-color="black-switcher"
            >
                <header
                    className="col col-10 over showcases__header"
                    ref={scrollRef}
                >
                    <h3 className="showcases__title fade-bt">
                        Project Showcase
                    </h3>
                </header>
                <div className="col col-12 relative">
                    <div className="showcases__wrapper">
                        <div className="showcases__wrapper__inner">
                            <div
                                className="showcases__wrapper__column"
                                id="prx-col-1"
                            >
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="showcases__wrapper__column"
                                id="prx-5"
                            >
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="showcase-box"
                                    data-animation="image"
                                >
                                    <div className="ani-holder">
                                        <div className="showcase-box__info">
                                            <div className="showcase-box__info__overlay"></div>
                                        </div>
                                        <img
                                            src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            data-src="https://www.team-tda.com/wp-content/uploads/tda-showcase-05.jpg"
                                            className="lazy lazy-image ani-holder__img"
                                            itemProp="image"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="showcases__btn fade-bt">
                    <a href="/showcases" className="showcases__btn__link">
                        <svg
                            viewBox="0 0 31 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeWidth="2" d="M16 0v31M0 14h31"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
