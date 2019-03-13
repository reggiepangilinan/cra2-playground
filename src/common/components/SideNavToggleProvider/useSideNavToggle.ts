import { useContext } from "react";
import { isDesktopSize } from "../Breakpoints";
import { SideNavToggleContext } from "./index";

export default function useSideNavToggle() {
    const { shown, setSideNavVisibility } = useContext(SideNavToggleContext);
    return {
        shown,
        hide: () => setSideNavVisibility && setSideNavVisibility(false),
        show: () => setSideNavVisibility && setSideNavVisibility(true),
        toggleSideNav: () => {
            if (isDesktopSize())
                return;
            setSideNavVisibility && setSideNavVisibility(!shown);
        }
    }
}
