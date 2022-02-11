import { createContext, ReactNode, useContext, useState } from "react";

interface ChangeThemeProviderProps {
    children: ReactNode;
    switchTheme: () => void;
}

interface ChangeThemeContextData {
    changeTheme: () => void;
}

const ChangeThemeContext = createContext<ChangeThemeContextData>(
    {} as ChangeThemeContextData
);

export function ChangeThemeProvider({ children, switchTheme }: ChangeThemeProviderProps) {
    function changeTheme() {
        switchTheme();
    }

    return (
        <ChangeThemeContext.Provider value={{ changeTheme }}>
            { children }
        </ChangeThemeContext.Provider>
    );
}

export function useChangeTheme() {
    const context = useContext(ChangeThemeContext);
    return context;
}