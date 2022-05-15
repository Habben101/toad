import React, { PropsWithChildren, useEffect, useRef } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/global.scss";
import Navbar from "@components/navbar";
import NavigationDrawer from "@components/NavigationDrawer/index";
import { NavItems } from "types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Footer } from "@components/footer";
import { Lines } from "@components/lines/index";
import {CustomEase} from "gsap/CustomEase";
// import useLocoScroll from "@components/locomotive";
// import LocomotiveScroll from 'locomotive-scroll';
import {useComponentDidMount} from "../src/utils/component";
gsap.registerPlugin(ScrollTrigger, CustomEase);

const navItems: NavItems = [
    { title: 'Why ioToad', href: '/features' },
    { title: 'Products', href: '/pricing' },
    { title: 'Solutions', href: '/contact' },
    { title: 'About Us', href: '/about' },
];

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

    return (
        <Providers>
                <Lines />
                <Navbar items={navItems} />
                <div className="appWrapper smooth-scroll">
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
