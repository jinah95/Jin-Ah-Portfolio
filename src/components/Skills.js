import React from "react";
import Skill from "./Skill";

const Skills = () => {
    return (
        <div className="inner" style={{ fontSize: "3.5em" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "85vh",
                    paddingBottom: "7vh",
                }}
            >
                <div>{"<Skills>"}</div>
                <div
                    style={{
                        width: "80vMin",
                        height: "60vh",
                        border: "2px solid black",
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Skill />
                </div>
                <div>{"</Skills>"}</div>
            </div>
        </div>
    );
};

export default Skills;
