import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";
import { SplitText } from "gsap-trial/SplitText";
import { CustomEase } from "gsap/CustomEase";
import {useComponentDidMount} from "../../../utils/component";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, CustomEase, SplitText);
const scrollToRef = (ref: any) => {
    const element = ref;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
};

export const VideoSlider: React.FC = () => {
    const ref = useRef(null);
    const videoWrapper = useRef<HTMLDivElement>(null);
    const InfoBox = useRef<HTMLDivElement>(null);
    const executeScroll = () =>
        scrollToRef(document.querySelector("#toadVideo"));
        
    
    useComponentDidMount(() => { 
        
        const a = {
            ease1: CustomEase.create("ease1", ".45,.01,.07,1"),
            ease2: CustomEase.create("ease2", "M0,0 C0.496,0.174 0.396,1 1,1"),
            ease3: CustomEase.create("ease3", "M0,0 C0.35,0.028 0.338,1 1,1"),
            ease4: CustomEase.create("ease4", ".58,.01,.16,1"),
            ease5: CustomEase.create("ease5", ".075, .82, .165, 1"),
            ease6: CustomEase.create("ease6", ".65, .05, .36, 1"),
        };

        const elements = {
                intro: ".intro",
                introTitle: ".intro__title",
                introInner: ".intro__inner",
                introContent: ".intro__content",
                scrollTo: ".scroll-to__inner",
                showCaseHeader: ".showcases__header",
                videoSection: ".toadVideo",
                videoWrapper: ".toadVideoWrapper",
                videoIframe: ".toadVideoWrapper__video",
                videoInfoWrapper: ".toadVideoWrapper__info",
                videoinfoBox: ".toadVideoWrapper__infoBox",
                videoTopText: ".toadVideo__top-text",
                progressBar: ".progress__circle__current",
                title: ".toadVideoWrapper__infoInner",
                circleCurrentNumber: ".hp-video__circle__current",
            },
            introTitle = new SplitText(elements.introTitle, {
                type: "chars, words,",
                charsClass: "char",
                wordsClass: "word",
            }),
            introTitleCharsInner = new SplitText(introTitle.chars, {
                type: "chars",
                charsClass: "char__inner",
            });
        gsap.timeline({
            scrollTrigger: {
                trigger: elements.intro,
                start: "top top",
                // //scroller: document.querySelector("[data-scroll-container]"),
                scrub: true,
                pin: ".intro__inner__wrapper",
                invalidateOnRefresh: !1,
                end: "bottom center",
            },
        });
        const i = gsap.timeline({
            reversed: false,
            paused: true,
        });
        i.to(
            introTitleCharsInner.chars,
            {
                duration: 1.5,
                y: "-100%",
                ease: a.ease1,
            },
            "0",
        ),
            i.to(
                [elements.introContent, elements.scrollTo],
                {
                    duration: 0.5,
                    autoAlpha: 0,
                    ease: a.ease1,
                },
                "0",
            );
        i.to(
            elements.videoTopText,
            {
                duration: 1,
                autoAlpha: 1,
                ease: a.ease1,
            },
            "0.5",
        );
        gsap.timeline({
            scrollTrigger: {
                trigger: elements.intro,
                start: "top top",
                //scroller: document.querySelector("[data-scroll-container]"),
                scrub: true,
                end: () => "5% top",
                invalidateOnRefresh: true,
                onEnterBack: () => {
                    i.timeScale(1.2).reverse();
                },
                onLeave: () => {
                    i.timeScale(1).play();
                },
            },
        });
        if (ref.current) {
            const definitelyAnElement = ref.current;
          }
        const thisPinWrap = ref.current.querySelector(".toadVideoWrapper");
        const thisAnimWrap = thisPinWrap.querySelector(
            ".toadVideoWrapper__info"
        );
        const getToValue = () => -(thisAnimWrap.scrollWidth + 100);
        
        const videoInfoWrapperWidth = InfoBox.current.offsetWidth,
            horizontalScrollLength = videoInfoWrapperWidth;
        InfoBox.current.getAttribute("data-total"),
            gsap.utils.toArray(".toadVideoWrapper__infoBox");
        gsap.to(".toadVideoWrapper__video", {
            scrollTrigger: {
                trigger: ".toadVideo",
                //scroller: document.querySelector("[data-scroll-container]"),
                scrub: true,
                start: "top top ",
                end: () => videoInfoWrapperWidth,
                pin: true,
                invalidateOnRefresh: true,
            },
        });
        const n = gsap.to(elements.videoinfoBox, {
            scrollTrigger: {
                trigger: elements.videoSection,
                //scroller: document.querySelector("[data-scroll-container]"),
                scrub: 1.5,
                start: "top top",
                end: () => videoInfoWrapperWidth,
                pin: true,
                // markers: true,
                invalidateOnRefresh: true,
            },
            x: () =>
                thisAnimWrap.classList.contains("to-right") ? getToValue() : 0,
            ease: "none",
        });
        const section = gsap.utils.toArray(elements.title);
        section.forEach((e: any) => {
            const t = e.getAttribute("data-index");
            const currentNumber= document.querySelector("#circleCurrent")

            
            gsap.to(e, {
                scrollTrigger: {
                    containerAnimation: n,
                    trigger: e,
                    start: "left right",
                    //scroller: document.querySelector("[data-scroll-container]"),
                    toggleClass: "active",
                    invalidateOnRefresh: true,
                    onEnter: () => {
                        currentNumber.innerHTML = t;
                    },
                    onLeaveBack: () => {
                        let e;
                        currentNumber.innerHTML =
                            (e = t - 1) < 10
                                ? "0" + e.toString()
                                : e.toString();
                    },
                },
            });
        }),
            gsap.set(elements.progressBar, {
                rotation: -90,
                transformOrigin: "center",
                drawSVG: "0%",
            }),
            gsap.to(elements.progressBar, {
                scrollTrigger: {
                    trigger: elements.videoSection,
                    //scroller: document.querySelector("[data-scroll-container]"),
                    pin: true,
                    scrub: true,
                    start: "top top",
                    end: () => videoInfoWrapperWidth,
                    onUpdate: (e) => {
                        e.progress.toFixed(2);
                    },
                },
                drawSVG: "100%",
                duration: 1,
                ease: "none",
            });
    });
    
    return (
        <section
            className="horizontal"
            ref={ref}
            data-bg="#D9D9D9"
            data-color="white-switcher"
        >
            <div className="col col-10 over intro relative">
                <div
                    className="intro__inner"
                    data-title="What we do"
                    data-next="section-1"
                >
                    <div className="intro__inner__wrapper">
                        <h1
                            className="intro__title overflow"
                            data-animation="fadeCustom"
                        >
                            Design through
                            <br />
                            <b>Innovation</b>
                        </h1>
                        <div className="intro__content">
                            <div ata-animation="fadeCustom">
                                <p>Real Assistance for Virtual Construction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="scroll-to"
                    id="scroll-to-target"
                    data-target="#toadVideo"
                    onClick={executeScroll}
                >
                    <div className="scroll-to__inner">
                        <div className="scroll-to__text">SCROLL TO EXPLORE</div>
                    </div>
                </div>
            </div>
            <div className="toadVideo relative" id="toadVideo">
                <div className="toadVideo__circle">
                    <svg
                        id="progress"
                        className="progress"
                        viewBox="0 0 200 200"
                    >
                        <circle
                            className="progress__circle"
                            cx="100"
                            cy="100"
                            r="97"
                        ></circle>
                        <circle
                            className="progress__circle__current"
                            cx="100"
                            cy="100"
                            r="97"
                            data-svg-origin="100 100"
                            transform="matrix(0,-1,1,0,0,200)"
                        ></circle>
                    </svg>
                    <div className="hp-video__circle__counter">
                        <div
                            className="hp-video__circle__current"
                            id="circleCurrent"
                        >
                            00
                        </div>
                        <div className="hp-video__circle__total">/04</div>
                    </div>
                </div>
                <div className="video__text js-intro-hide">
                    WE EXIST TO
                    <br />
                    CREATE
                </div>
                <div className="toadVideoWrapper">
                    <div className="toadVideoWrapper__video">
                        <div className="toadVideo__top-text">
                            WE EXIST TO
                            <br />
                            CREATE
                        </div>
                        <iframe
                            src="https://fast.wistia.net/embed/iframe/snll9y06z0"
                            title=""
                            allow="autoplay; fullscreen"
                        ></iframe>
                    </div>
                    <div
                        className="toadVideoWrapper__info to-right"
                        data-total="4"
                        ref={InfoBox}
                    >
                        <div
                            className="toadVideoWrapper__infoBox videoWrapperInfoBox"
                            ref={videoWrapper}
                        >
                            <div
                                className="toadVideoWrapper__infoInner"
                                data-index="01"
                            >
                                <div className="toadVideoWrapper__infoNum">
                                    01
                                </div>
                                <h2 className="toadVideoWrapper__infoTitle">
                                    BIM Implementation Services
                                </h2>
                            </div>
                        </div>
                        <div className="toadVideoWrapper__infoBox videoWrapperInfoBox">
                            <div
                                className="toadVideoWrapper__infoInner"
                                data-index="02"
                            >
                                <div className="toadVideoWrapper__infoNum">
                                    02
                                </div>
                                <h2 className="toadVideoWrapper__infoTitle">
                                    Automation
                                </h2>
                            </div>
                        </div>
                        <div className="toadVideoWrapper__infoBox videoWrapperInfoBox">
                            <div
                                className="toadVideoWrapper__infoInner"
                                data-index="03"
                            >
                                <div className="toadVideoWrapper__infoNum">
                                    03
                                </div>
                                <h2 className="toadVideoWrapper__infoTitle">
                                    Offshoring
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


