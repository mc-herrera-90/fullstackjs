import { useState, useContext, createContext } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    // Get theme value in localStorage
    const storageTheme = localStorage.getItem("theme");

    const [theme, setTheme] = useState(storageTheme || "light");


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
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