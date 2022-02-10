import { createContext, ReactNode, useContext, useState } from "react";

interface MenuProviderProps {
    children: ReactNode;
}

interface MenuContextData {
    menuIsOpen: boolean,
    openMenu: () => void,
    closeMenu: () => void,
}

const MenuContext = createContext<MenuContextData>(
    {} as MenuContextData
);

export function MenuProvider({ children }: MenuProviderProps) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function openMenu() {
        setMenuIsOpen(true);
    }

    function closeMenu() {
        setMenuIsOpen(false);
    }

    return (
        <MenuContext.Provider value={{ menuIsOpen, openMenu, closeMenu }}>
            { children }
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    return context;
}