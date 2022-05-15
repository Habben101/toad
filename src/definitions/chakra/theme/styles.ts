import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: {
            h1: {
                fontWeight: "medium",
                marginBottom: "0.5em",
            },
            p: {
                marginBottom: "1em",
            },
            li: {
                listStyle: "none",
            },
        },
    },
} as GlobalStyles;
