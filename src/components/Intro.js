import e from "express";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Intro = () => {
    const topArray = [30, 63, 23, 40];
    const leftArray = [10, 18, 10, 7];

    // const imotionGroup = ["💬", "👨‍👩‍👦‍👦", "📈", "📚"];
    const commentsGroup = [
        "원활한 소통을",
        " 유저 편의에 집중",
        "개인조직 생산성 강화에 도모",
        "끊임없이 발전",
    ];
    const ref = useRef(null);

    // drag 관련 함수
    let dragged = null;

    const DragStart = (e) => {
        dragged = e.target;
    };

    const DragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const DragDrop = (e) => {
        e.preventDefault();
        if (e.target.id === "dropzone") {
            dragged.parentNode.removeChild(dragged);
            e.target.appendChild(dragged);
        }
    };

    useEffect(() => {
        // setItemWidth(ref.current.clientWidth);
        // setItemHeight(ref.current.clientHeight);
    }, []);

    return (
        <div className="inner">
            <AllContainers>
                {/* <BeforeZone
                    draggable="true"
                    id="dropzone"
                    onDragOver={(e) => DragOver(e)}
                    onDrop={(e) => DragDrop(e)}
                >
                    <DraggableItem
                        id="1"
                        draggable="true"
                        ref={ref}
                        onDragStart={(e) => DragStart(e)}
                        topFar={topArray[0]}
                        leftFar={leftArray[0]}
                    ></DraggableItem>
                    <DraggableItem
                        draggable="true"
                        ref={ref}
                        onDragStart={(e) => DragStart(e)}
                        topFar={topArray[1]}
                        leftFar={leftArray[1]}
                    ></DraggableItem>
                </BeforeZone>
                <div></div> */}
                <MainContainer>
                    <div style={{ height: "8vh", fontSize: "3.5em" }}>
                        " 저는{" "}
                    </div>
                    <div
                        style={{
                            width: "40vw",
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
                        {/* <div
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
                            wordBreak: "keep-all",
                            whiteSpace: "nowrap ",
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
                    </div>*/}

                        <DropZone
                            draggable="true"
                            id="dropzone"
                            onDragOver={(e) => DragOver(e)}
                            onDrop={(e) => DragDrop(e)}
                        >
                            이모지를 드래그 하여 이 곳으로 옮겨 주세요~
                        </DropZone>
                    </div>
                    <div style={{ height: "6vh", fontSize: "2em" }}>하는 </div>
                    <div style={{ height: "8vh", fontSize: "2.5em" }}>
                        프론트엔드 개발자
                    </div>
                    <div style={{ height: "10vh", fontSize: "3.5em" }}>
                        박 진 아 입니다"{" "}
                    </div>
                </MainContainer>
                {/* <BeforeZone
                    draggable="true"
                    id="dropzone"
                    onDragOver={(e) => DragOver(e)}
                    onDrop={(e) => DragDrop(e)}
                >
                    <DraggableItem
                        draggable="true"
                        onDragStart={(e) => DragStart(e)}
                        topFar={topArray[2]}
                        leftFar={leftArray[2]}
                    ></DraggableItem>
                    <DraggableItem
                        draggable="true"
                        onDragStart={(e) => DragStart(e)}
                        topFar={topArray[3]}
                        leftFar={leftArray[3]}
                    ></DraggableItem>
                </BeforeZone> */}
            </AllContainers>
        </div>
    );
};

export default Intro;

const AllContainers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85vh;
    padding-bottom: 7vh;
`;

const DropZone = styled.div`
    width: 80%;
    height: 40vh;
    line-height: 40vh;
    text-align: center;
    border: 1.8px dotted #998f70;
    position: relative;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
`;
const BeforeZone = styled.div`
    width: 30vw;
    height: 85vh;
    padding-bottom: 7vh;
    position: relative;
`;

const DraggableItem = styled.div`
    width: 10vw;
    height: 10vh;
    text-align: center;
    border-radius: 50px;
    border: 1.8px solid orangered;
    position: absolute;
    top: ${(props) => props.topFar}vh;
    left: ${(props) => props.leftFar}vw;
`;
