import React from "react";

const Intro = () => {
    return (
        <div className="inner">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "85vh",
                    paddingBottom: "7vh",
                }}
            >
                <div style={{ height: "8vh", fontSize: "3.5em" }}>" 저는 </div>
                <div
                    style={{
                        width: "80vMin",
                        height: "100vh",
                        border: "2px solid black",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        borderRadius: "20px",
                    }}
                >
                    <div
                        style={{
                            width: "80%",
                            height: "6vh",
                            borderBottom: "2px solid black",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="imgs/search.png"
                            alt="search"
                            style={{ height: "3.5vh" }}
                        />
                    </div>
                    <div
                        style={{
                            width: "80%",
                            height: "7vh",
                            lineHeight: "7vh",
                            border: "2px solid black",
                            borderRadius: "20px",
                            textAlign: "center",
                            fontSize: "2em",
                        }}
                    >
                        원활한 소통을
                    </div>
                    <div
                        style={{
                            width: "80%",
                            height: "7vh",
                            lineHeight: "7vh",
                            border: "2px solid black",
                            borderRadius: "20px",
                            textAlign: "center",
                            fontSize: "2em",
                        }}
                    >
                        유저 편의에 집중
                    </div>
                    <div
                        style={{
                            width: "80%",
                            height: "7vh",
                            lineHeight: "7vh",
                            border: "2px solid black",
                            borderRadius: "20px",
                            textAlign: "center",
                            fontSize: "2em",
                        }}
                    >
                        개인조직 생산성 강화에 도모
                    </div>
                    <div
                        style={{
                            width: "80%",
                            height: "7vh",
                            lineHeight: "7vh",
                            border: "2px solid black",
                            borderRadius: "20px",
                            textAlign: "center",
                            fontSize: "2em",
                        }}
                    >
                        끊임없이 발전
                    </div>
                </div>
                <div style={{ height: "6vh", fontSize: "2em" }}>하는 </div>
                <div style={{ height: "8vh", fontSize: "2.5em" }}>
                    프론트엔드 개발자
                </div>
                <div style={{ height: "10vh", fontSize: "3.5em" }}>
                    박 진 아 입니다"{" "}
                </div>
            </div>
        </div>
    );
};

export default Intro;
