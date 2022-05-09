import { useContext } from "react";
import { ThemeContext } from "./Context";

export default function HelloWorld(){
    const theme = useContext(ThemeContext)

    return(
        <div>
            <button
                style={{
                    color: theme.foreground,
                    backgroundColor: theme.background
                }}
            >
                theme Button
            </button>
        </div>
    )
}