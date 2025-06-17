import { useState, useContext, createContext } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
        { children }
     </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme solo puede usarse dentro de ThemeProvider");
    }
    return context
}