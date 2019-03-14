import React, { FunctionComponent, ReactNode, createContext, useState } from "react";
import MediaQuery from "react-responsive";
import { minDesktopWidth } from '../Breakpoints';
import { WithChildren } from "../../types";


type SideNavToggleContextState = {
    shown: boolean,
    setSideNavVisibility?: React.Dispatch<React.SetStateAction<boolean>>
}

type Props = {

} & WithChildren

const defaultContextValue: SideNavToggleContextState = { shown: false }

export const SideNavToggleContext = createContext(defaultContextValue);

const SideNavToggleProvider: FunctionComponent<Props> = (props: Props) => {
    const [shown, setSideNavVisibility] = useState(false);
    return (
        <SideNavToggleContext.Provider value={{ shown, setSideNavVisibility }}>
            <MediaQuery minWidth={minDesktopWidth}>
                {(matches) => {
                    if (matches) {
                        setSideNavVisibility(true);
                    }
                    return props.children
                }}
            </MediaQuery>
        </SideNavToggleContext.Provider>
    );
}
export default SideNavToggleProvider;