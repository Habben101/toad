import React from "react";
import { Lottie } from "@components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import {useComponentDidMount} from "../../../utils/component";
gsap.registerPlugin(ScrollTrigger, CustomEase);

export const AboutHeader: React.FC = () => {
    useComponentDidMount(() => {
        const a = {
            ease5: CustomEase.create("ease5", ".075, .82, .165, 1"),
        };
        const e = document.querySelectorAll("[data-bg]"),
        t = document.querySelectorAll("[data-color]")
        e.length && t.forEach((col) => {
            if (col instanceof HTMLElement) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: col,
                        start: "top 50%",
                        end: "bottom 50%",
                        // scroller: ".smooth-scroll",
                        onEnter: function () {
                            document.querySelector("body").classList.add(col.dataset.color)
                        },
                        onEnterBack: function () {
                            document.querySelector("body").classList.add(col.dataset.color)
                        },
                        onLeave: function () {
                            document.querySelector("body").classList.remove(col.dataset.color)
                        },
                        onLeaveBack: function () {
                            document.querySelector("body").classList.remove(col.dataset.color)
                        }
                    }
                })
        }
        }),
        e.forEach((col) => {
            if (col instanceof HTMLElement) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: col,
                    start: "top 50%",
                    end: "bottom 50%",
                    // scroller: ".smooth-scroll",
                    onEnter: function() {
                        gsap.to(document.documentElement, {
                            ease: a.ease5,
                            duration: 1.8,
                            backgroundColor: col.dataset.bg,
                            // overwrite: "auto"
                        })
                    },
                    onEnterBack: function() {
                        gsap.to(document.documentElement, {
                            ease: a.ease5,
                            duration: 1.8,
                            backgroundColor: col.dataset.bg,
                            // overwrite: "auto"
                        })
                    }
                }
            })
        }
    })
    })
    return (
        <div className="header_container" data-bg="#D9D9D9" data-color="white-switcher">
            <div className="flexRow">
                <h1 className="header__title">About</h1>
                <Lottie />
            </div>
            <div className="paddingTop">
                <div className="spacer"></div>
                <div className="flexRow full-width-section">
                    <h1 className="headerTitle">
                        All about <br />
                        ioToad
                        <div className="headerTitle__underline"></div>
                    </h1>
                    <div className="headerContent__wrapper">
                        <p>
                            At IOToad our goal is to provide businesses with
                            outsourced engineering and automation services.
                            Founded in 2021, IOToads mission is to pay good
                            people for good work, especially those who couldn't
                            find work anywhere else. To ensure that we our
                            working with the best and brightest, IOToad pays our
                            engineers from extremely underinvested countries
                            where educated individuals are highly under utilized
                            like Ethiopia, Kenya, and Tanzania. IOToad pays
                            double the national average salary for to get the
                            most talented individuals possible.
                        </p>
                        <br />
                        <blockquote>
                            <p>
                                "Having spent nearly a year in East Africa, I
                                recognize that the only way to lift up this part
                                of the world is to start treating them as part
                                of the global economy. No one is talking about
                                outsourcing to Africa, but its a huge mistake.
                                There are so many smart people, ready to do the
                                hard work that we can't afford to do ourselves.
                                Every construction job should be completed in 3D
                                before a human starts work. It is imperative to
                                the safety of construction workers, all of our
                                time and resources, and of course the bottom
                                line."
                            </p>
                        </blockquote>
                        <figcaption>
                            —John Brindley, <cite>founder IOToad </cite>
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
};
