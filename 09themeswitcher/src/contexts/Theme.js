import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //edhar hum log default value dehh sakte hain .


    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});


//themprovider export from the same file ...
export const ThemeProvider = ThemeContext.Provider;

//ak custom hoocks.
export default function useTheme() {
    return useContext(ThemeContext);
}