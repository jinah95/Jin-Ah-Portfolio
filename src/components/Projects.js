import React from "react";

const Projects = () => {
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
                <div>{"<Projects>"}</div>
                <div
                    style={{
                        width: "80vMin",
                        height: "60vh",
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}
                ></div>
                <div>{"</Projects>"}</div>
            </div>
        </div>
    );
};

export default Projects;
