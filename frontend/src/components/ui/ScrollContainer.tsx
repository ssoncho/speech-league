import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const ScrollContainer = ({ className, children }: any) => {
    return (
        <OverlayScrollbarsComponent
            className={"os-theme-dark " + className}
            options={{ scrollbars: { autoHide: "never" } }}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
};

export default ScrollContainer;
