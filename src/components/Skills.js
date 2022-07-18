import React from "react";
import Skill from "./Skill";
import mySkills from "../mySkills.json";

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
                        width: "100%",
                        height: "8vh",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <img src="imgs/infoBar.png" alt="InfoBar" />
                </div>
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
                    {mySkills.map((item, index) => (
                        <Skill key={`skill-${index}`} item={item} />
                    ))}
                </div>
                <div>{"</Skills>"}</div>
            </div>
        </div>
    );
};

export default Skills;
