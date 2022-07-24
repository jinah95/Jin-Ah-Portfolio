import React from "react";
import { useMediaQuery } from "react-responsive";

const DIVIDER_HEIGHT = 5;

const Dot = ({ num, scrollIndex, outerDivRef, setScrollIndex, setNoDots }) => {
    const pageHeight = window.innerHeight;
    const dotsClickHandler = (e, num) => {
        e.preventDefault();
        outerDivRef.current.scrollTo({
            top: pageHeight * (num - 1) + DIVIDER_HEIGHT * (num - 1),
            left: 0,
            behavior: "smooth",
        });
        setScrollIndex(num);
        setNoDots(false);
    };

    return (
        <div
            style={{
                width: 6,
                height: 6,
                border: "1px solid #998f70",
                borderRadius: 999,
                backgroundColor:
                    scrollIndex === num ? "orangered" : "transparent",
                transitionDuration: "0.5s",
                transition: "background-color 0.5s ease-in-out",
                cursor: "pointer",
            }}
            onClick={(e) => {
                dotsClickHandler(e, num);
            }}
        ></div>
    );
};

const Dots = ({ scrollIndex, outerDivRef, setScrollIndex, setNoDots }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });
    return (
        isMobile && (
            <div style={{ position: "fixed", top: "47%", right: 15 }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: 20,
                        height: 100,
                    }}
                >
                    <Dot
                        num={1}
                        scrollIndex={scrollIndex}
                        outerDivRef={outerDivRef}
                        setScrollIndex={setScrollIndex}
                    ></Dot>
                    <Dot
                        num={2}
                        scrollIndex={scrollIndex}
                        outerDivRef={outerDivRef}
                        setScrollIndex={setScrollIndex}
                    ></Dot>
                    <Dot
                        num={3}
                        scrollIndex={scrollIndex}
                        outerDivRef={outerDivRef}
                        setScrollIndex={setScrollIndex}
                        setNoDots={setNoDots}
                    ></Dot>
                    <Dot
                        num={4}
                        scrollIndex={scrollIndex}
                        outerDivRef={outerDivRef}
                        setScrollIndex={setScrollIndex}
                    ></Dot>
                    <Dot
                        num={5}
                        scrollIndex={scrollIndex}
                        outerDivRef={outerDivRef}
                        setScrollIndex={setScrollIndex}
                    ></Dot>
                </div>
            </div>
        )
    );
};

export default Dots;
