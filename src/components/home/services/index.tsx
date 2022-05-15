import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
    useEffect(() => {
        gsap.set(".serviceBox__number", {
            opacity: 0,
            y: 50,
        });
        gsap.set(".serviceBox__title", {
            opacity: 0,
            y: 75,
            scale: 0.9,
        });
        gsap.set(".serviceBox__text", {
            opacity: 0,
            y: 40,
        });
        gsap.set(".plus-more", {
            opacity: 0,
            y: 30,
        });

        ScrollTrigger.batch(".serviceBox", {
            onEnter: (batch) => {
                batch.forEach((card, index) =>
                    gsap.to(card.children, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.5,
                        delay: index * 0.3,
                    }),
                );
            },
            once: true,
        });
    }, []);

    return (
        <div data-bg="#3E4FE8" data-color="blue-switcher">
            <div className="toadServices relative">
                <h1 className="toadService__title fade-bt">Our Services</h1>
                <div className="toadServices__wrapper">
                    <div className="serviceBox">
                        <div
                            className="serviceBox__number"
                            data-animation="fade"
                        >
                            01
                        </div>
                        <h3 className="serviceBox__title" data-animation="fade">
                            BIM Services
                        </h3>
                        <div
                            className="serviceBox__text"
                            data-animation="paragraph"
                        >
                            Keeping track of 3d systems requires a lot of time
                            and attention to detail, but modeling can prevent
                            costly mistakes from taking place in the field.
                            IOToad allows companies to scale their virtual
                            modeling capacity while eliminating much of the
                            burden of bringing on a new hire.
                        </div>
                        <div
                            data-animation="fade"
                            className="plus-more"
                            aria-label="Digital Design Services for all Disciplines"
                        >
                            <Link href="/service/bmi" passHref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    xmlSpace="preserve"
                                >
                                    <path d="M30 0H20C9 0 0 9 0 20v10c0 11 9 20 20 20h10c11 0 20-9 20-20V20C50 9 41 0 30 0zm18 30c0 9.9-8.1 18-18 18H20c-9.9 0-18-8.1-18-18V20c0-9.9 8.1-18 18-18h10c9.9 0 18 8.1 18 18v10z"></path>
                                    <path d="M26.6 15H24v9.5H14V27h10v8.8h2.6V27h9.1v-2.5h-9.1z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <div
                            className="serviceBox__number"
                            data-animation="fade"
                        >
                            02
                        </div>
                        <h3 className="serviceBox__title" data-animation="fade">
                            Automation
                        </h3>
                        <div
                            className="serviceBox__text"
                            data-animation="paragraph"
                        >
                            The wheels of innovation keep turning at an
                            ever-faster pace. Automate your business processes
                            to keep up with the times. Of course, not all of
                            your business can be automated, but with each
                            passing year more and more components can be. That's
                            why ioToad is so into the idea of <i>kiazen</i>.
                        </div>
                        <div
                            data-animation="fade"
                            className="plus-more"
                            aria-label="Digital Design Services for all Disciplines"
                        >
                            <Link href="/service/automation" passHref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    xmlSpace="preserve"
                                >
                                    <path d="M30 0H20C9 0 0 9 0 20v10c0 11 9 20 20 20h10c11 0 20-9 20-20V20C50 9 41 0 30 0zm18 30c0 9.9-8.1 18-18 18H20c-9.9 0-18-8.1-18-18V20c0-9.9 8.1-18 18-18h10c9.9 0 18 8.1 18 18v10z"></path>
                                    <path d="M26.6 15H24v9.5H14V27h10v8.8h2.6V27h9.1v-2.5h-9.1z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <div
                            className="serviceBox__number"
                            data-animation="fade"
                        >
                            03
                        </div>
                        <h3 className="serviceBox__title" data-animation="fade">
                            Offshoring
                        </h3>
                        <div
                            className="serviceBox__text"
                            data-animation="paragraph"
                        >
                            Offshoring business processes can save you barrels
                            of money. Wages in developing nations are remarkably
                            cheap and well-educated candidates abound. All of
                            our development work is handled in collaboration
                            with a number of contractors mostly in Africa.
                        </div>
                        <div
                            data-animation="fade"
                            className="plus-more"
                            aria-label="Digital Design Services for all Disciplines"
                        >
                            <Link href="/service/offshoring" passHref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    xmlSpace="preserve"
                                >
                                    <path d="M30 0H20C9 0 0 9 0 20v10c0 11 9 20 20 20h10c11 0 20-9 20-20V20C50 9 41 0 30 0zm18 30c0 9.9-8.1 18-18 18H20c-9.9 0-18-8.1-18-18V20c0-9.9 8.1-18 18-18h10c9.9 0 18 8.1 18 18v10z"></path>
                                    <path d="M26.6 15H24v9.5H14V27h10v8.8h2.6V27h9.1v-2.5h-9.1z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
