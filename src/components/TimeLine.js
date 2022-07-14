import React from "react";

const TimeLine = () => {
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
                <div>{"<TimeLine>"}</div>
                <div className="timeline">
                    <div className="outerDiv">
                        <div className="card">
                            <div className="info">
                                <span className="title">인천대학교 졸업</span>
                                <span className="subtitle">
                                    무역 / 중어중국 전공
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                <span className="title">
                                    온라인 광고 플랫폼사
                                </span>
                                <span className="subtitle">
                                    광고 효율 관리 / 기획
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                <span className="title">
                                    엘리스 AI 트랙 4기 수료
                                </span>
                                <span className="subtitle">
                                    엘리스 개발자 교육 과정 수료 완료
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                <span className="title">
                                    엘리스 AI 트랙 4기 수료
                                </span>
                                <span className="subtitle">
                                    엘리스 개발자 교육 과정 수료 완료
                                </span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                <span className="title">
                                    엘리스 AI 트랙 4기 수료
                                </span>
                                <span className="subtitle">
                                    엘리스 개발자 교육 과정 수료 완료
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{"</TimeLine>"}</div>
            </div>
        </div>
    );
};

export default TimeLine;
