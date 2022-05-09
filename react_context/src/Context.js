import { createContext } from "react";

const themes={
    light:{
        foreground: "#00000",
        background:"#fffff"
    },
    dark: {
        foreground:"#ddddd",
        background:"#aaaaa"
    }
};

const ThemeContext = createContext(themes)

export default {themes, ThemeContext};