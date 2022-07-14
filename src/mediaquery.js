import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(min-width:0px) and (max-width:599px)",
    });
    return <React.Fragment>{isMobile && children}</React.Fragment>;
};
