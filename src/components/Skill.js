import React from "react";

const Skill = ({ item }) => {
    console.log(item);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                height: "8vh",
            }}
        >
            <img
                src={item.skillImg}
                alt="logo192"
                style={{ width: "8.5vMin", height: "8.5vMin" }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }}
            >
                <div
                    style={{
                        height: "4vh",
                        width: "30vw",
                        border: "2px solid black",
                        borderRadius: "20px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingLeft: "0.2vw",
                    }}
                >
                    <div
                        style={{
                            height: "3vh",
                            width: "28vw",
                            border: "2px dashed black",
                            borderRadius: "18px",
                            position: "absolute",
                            backgroundColor: "white",
                            lineHeight: "0.5em",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                right: "0",
                                fontSize: "0.5em",
                                paddingRight: "0.5em",
                            }}
                        >
                            <div>{item.percent}%</div>
                        </div>
                    </div>
                </div>
                {/* <div style={{ width: "30vw", wordBreak: "keep-all" }}>
                    <div style={{ fontSize: "0.32em" }}>{item.comment}</div>
                </div> 뒤집으면 코멘트 나오게? */}
            </div>
        </div>
    );
};

export default Skill;
