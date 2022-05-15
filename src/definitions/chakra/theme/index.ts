import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

import colors from "./foundations/colors";

import fontSizes from "./foundations/fontSizes";

import fonts from "./foundations/fonts";

import breakpoints from "./foundations/beakpoints";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

const overrides = {
    ...styles,
    body: {
        bg: "",
    },
    html: {
        bg: "",
    },
    fonts,
    colors,
    fontSizes,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
    },
};

const theme = extendTheme(overrides);

export default theme;
