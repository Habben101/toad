import React, { PropsWithChildren, useEffect, useRef } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/global.scss";
import Navbar from "@components/navbar";
import NavigationDrawer from "@components/NavigationDrawer";
import { NavItems } from "types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Footer } from "@components/footer";
import { Lines } from "@components/lines";
import {CustomEase} from "gsap/CustomEase";
// import useLocoScroll from "@components/locomotive";
// import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const navItems: NavItems = [
    { title: 'Why ioToad', href: '/features' },
    { title: 'Products', href: '/pricing' },
    { title: 'Solutions', href: '/contact' },
    { title: 'About Us', href: '/about' },
];

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

    const scrollRef = useRef(null);
    useEffect(() => {
        const a = {
            ease1: CustomEase.create("ease1", ".45,.01,.07,1"),
            ease2: CustomEase.create("ease2", "M0,0 C0.496,0.174 0.396,1 1,1"),
            ease3: CustomEase.create("ease3", "M0,0 C0.35,0.028 0.338,1 1,1"),
            ease4: CustomEase.create("ease4", ".58,.01,.16,1"),
            ease5: CustomEase.create("ease5", ".075, .82, .165, 1"),
            ease6: CustomEase.create("ease6", ".65, .05, .36, 1")
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
                            // @ts-ignore: Object is possibly 'null'.
                            document.querySelector("body").classList.add(col.dataset.color)
                        },
                        onEnterBack: function () {
                            // @ts-ignore: Object is possibly 'null'.
                            document.querySelector("body").classList.add(col.dataset.color)
                        },
                        onLeave: function () {
                            // @ts-ignore: Object is possibly 'null'.
                            document.querySelector("body").classList.remove(col.dataset.color)
                        },
                        onLeaveBack: function () {
                            // @ts-ignore: Object is possibly 'null'.
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
                            overwrite: "auto"
                        })
                    },
                    onEnterBack: function() {
                        gsap.to(document.documentElement, {
                            ease: a.ease5,
                            duration: 1.8,
                            backgroundColor: col.dataset.bg,
                            overwrite: "auto"
                        })
                    }
                }
            })
        }
        })

    }, [])
    return (
        <Providers>
            <div>
                
            </div>
                <Lines />
                <Navbar items={navItems} />
                <div className="appWrapper smooth-scroll" ref={scrollRef} data-scroll-container>
                    <Component {...pageProps} />
                </div>
                <Footer />
           
        </Providers>
    );
}
function Providers<T>({ children }: PropsWithChildren<T>) {
    return (
        <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    );
}
export default MyApp;
