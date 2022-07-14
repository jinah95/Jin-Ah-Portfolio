import React from "react";

const Dot = ({ num, scrollIndex }) => {
    return (
        <div
            style={{
                width: 6,
                height: 6,
                border: "1px solid black",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "black" : "transparent",
                transitionDuration: "0.5s",
                transition: "background-color 0.5s ease-in-out",
            }}
        ></div>
    );
};

const Dots = ({ scrollIndex }) => {
    return (
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
                <Dot num={1} scrollIndex={scrollIndex}></Dot>
                <Dot num={2} scrollIndex={scrollIndex}></Dot>
                <Dot num={3} scrollIndex={scrollIndex}></Dot>
                <Dot num={4} scrollIndex={scrollIndex}></Dot>
                <Dot num={5} scrollIndex={scrollIndex}></Dot>
            </div>
        </div>
    );
};

export default Dots;
