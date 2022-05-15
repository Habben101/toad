import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useColorMode, Button, Flex, Box, IconButton } from "@chakra-ui/react";
import {
    ScrollPositionEffectProps,
    useScrollPosition,
} from "../../hooks/useScrollPosition";
import { NavItems, SingleNavItem } from "../../../types";
import { media } from "../../utils/media";
import Container from "../container";
import Drawer from "../drawer";
import { HamburgerIcon } from "@components/icons/HamburgerIcon";
import { Logo } from "../logo";
import SvgProfile from "@components/icons/Profile";

// const ColorSwitcher = dynamic(() => import('../darkmodeswitch'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = "up" | "down" | "none";
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
    const router = useRouter();
    const { toggle } = Drawer.useDrawer();
    // const [scrollingDirection, setScrollingDirection] =
    //     useState<ScrollingDirections>("none");

    // let lastScrollY = useRef(0);
    // const lastRoute = useRef("");
    // const stepSize = useRef(50);

    // useScrollPosition(
    //     scrollPositionCallback,
    //     [router.asPath],
    //     undefined,
    //     undefined,
    //     50,
    // );

    // function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    //     const routerPath = router.asPath;
    //     const hasRouteChanged = routerPath !== lastRoute.current;

    //     if (hasRouteChanged) {
    //         lastRoute.current = routerPath;
    //         setScrollingDirection("none");
    //         return;
    //     }

    //     const currentScrollY = currPos.y;
    //     const isScrollingUp = currentScrollY > lastScrollY.current;
    //     const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    //     const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    //     const isInNonCollapsibleArea = lastScrollY.current > -50;

    //     if (isInNonCollapsibleArea) {
    //         setScrollingDirection("none");
    //         lastScrollY.current = currentScrollY;
    //         return;
    //     }

    //     if (!hasScrolledWholeStep) {
    //         lastScrollY.current = currentScrollY;
    //         return;
    //     }

    //     setScrollingDirection(isScrollingUp ? "up" : "down");
    //     lastScrollY.current = currentScrollY;
    // }

    // const isNavbarHidden = scrollingDirection === "down";
    // const isTransparent = scrollingDirection === "none";

    return (
        <NavbarContainer>
            <Flex alignItems="center" justify="space-between" px={10} as="nav">
                <Flex>
                    <NextLink href="/" passHref>
                        <LogoWrapper>
                            <Logo />
                        </LogoWrapper>
                    </NextLink>
                    <NavItemList>
                        {items.map((singleItem) => (
                            <NavItem key={singleItem.href} {...singleItem} />
                        ))}
                    </NavItemList>
                </Flex>
                <Flex>
                    {/* <Box mx={2}>
                <ColorSwitcher />
            </Box> */}
                    <NextLink href="/Signup" passHref>
                        <IconButton
                            aria-label="Toggle menu"
                            icon={<SvgProfile />}
                            mx={2}
                        />
                    </NextLink>
                    <IconButton
                        aria-label="Toggle menu"
                        icon={<HamburgerIcon />}
                        background="none"
                        display={["flex", "flex", "none", "none"]}
                        onClick={toggle}
                        mx={2}
                    />
                </Flex>
            </Flex>
        </NavbarContainer>
    );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
    return (
        <NavItemWrapper outlined={outlined}>
            <NextLink href={href} passHref>
                <a>{title}</a>
            </NextLink>
        </NavItemWrapper>
    );
}

const NavItemList = styled.div`
    display: flex;
    list-style: none;

    ${media("<tablet")} {
        display: none;
    }
`;

const LogoWrapper = styled.a`
    display: flex;
    margin-right: auto;
    text-decoration: none;

    color: rgb(var(--logoColor));
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
    background-color: ${(p) =>
        p.outlined ? "rgb(var(--primary))" : "transparent"};
    border-radius: 0.5rem;
    font-size: 1.3rem;
    text-transform: capitalize;
    line-height: 2;

    &:hover {
        background-color: ${(p) =>
            p.outlined ? "rgb(var(--primary), 0.8)" : "transparent"};
        transition: background-color 0.2s;
    }

    a {
        display: flex;
        color: ${(p) =>
            p.outlined
                ? "rgb(var(--textSecondary))"
                : "rgb(var(--text), 0.75)"};
        letter-spacing: 0.025em;
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        font-weight: 700;
    }

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;

const NavbarContainer = styled.div<Partial<NavbarContainerProps>>`
    position: sticky;
    top: 0;
    padding: 1.5rem 0;
    width: 100%;
    height: 8rem;
    z-index: var(--z-navbar);

    background-color: rgb(var(--navbarBackground));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    visibility: ${(p) => (p.hidden ? "hidden" : "visible")};
    transform: ${(p) =>
        p.hidden
            ? `translateY(-8rem) translateZ(0) scale(1)`
            : "translateY(0) translateZ(0) scale(1)"};

    transition-property: transform, visibility, height, box-shadow,
        background-color;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
`;

const ColorSwitcherContainer = styled.div`
    margin: 0 1rem;
`;
