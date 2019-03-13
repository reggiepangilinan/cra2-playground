import { useState } from "react";
import { isDesktopSize } from "../Breakpoints";

export const useSideNavToggle = (initialState: boolean) => {
    const [shown, toggleSideNav] = useState(initialState);
    return {
        shown,
        hide: () => toggleSideNav(false),
        show: () => toggleSideNav(true),
        toggleSideNav: () => {
            if (isDesktopSize())
                return;
            toggleSideNav(!shown);
        }
    }
}