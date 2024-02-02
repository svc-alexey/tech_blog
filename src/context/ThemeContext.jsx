"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    const value = localStorage.getItem("theme");
    return value || "light";
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Установите значение по умолчанию

    useEffect(() => {
        // Обновите состояние темы при монтировании компонента
        setTheme(getFromLocalStorage());
    }, []);

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}
