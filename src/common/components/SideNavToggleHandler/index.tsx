import React, { FunctionComponent, ReactNode } from "react";
import MediaQuery from "react-responsive";
import { minDesktopWidth, isDesktopSize } from '../Breakpoints';
import { useSideNavToggle } from "./useSideNavToggle";




type Props = {
    render: (shown: Boolean, toggleSideNav: () => void) => ReactNode
}

const SideNavToggleHandler: FunctionComponent<Props> = (props: Props) => {

    const { shown, toggleSideNav, show } = useSideNavToggle(isDesktopSize());

    return (
        <MediaQuery minWidth={minDesktopWidth}>
            {(matches) => {
                if (matches)
                    show();
                return props.render;
            }}
        </MediaQuery>
    );
}
export default SideNavToggleHandler;