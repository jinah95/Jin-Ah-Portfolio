import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const topArray = [30, 63, 21, 40];
const leftArray = [10, 15, 10, 3];

const imotionGroup = ["π¬", "π¨βπ©βπ¦βπ¦", "π", "π"];
const commentsGroup = [
    "μνν μν΅μ",
    " μ μ  νΈμμ μ§μ€",
    "κ°μΈμ‘°μ§ μμ°μ± κ°νμ λλͺ¨",
    "λμμμ΄ λ°μ ",
];

const Intro = () => {
    const [dropState, setDropState] = useState([false, false, false, false]);
    const [droppedArray, setDroppedArray] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

    const ref = useRef(null);

    // drag κ΄λ ¨ ν¨μ
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
            const newDropArray = [...dropState];
            newDropArray[dragged.id - 1] = true;
            setDropState(newDropArray);
            setDroppedArray((cur) => cur + 1);
        } else if (e.target.id === "beforezone") {
            dragged.parentNode.removeChild(dragged);
            e.target.appendChild(dragged);
            const newDropArray = [...dropState];
            newDropArray[dragged.id - 1] = false;
            setDropState(newDropArray);
            setDroppedArray((cur) => cur - 1);
        }
    };

    return (
        <div className="inner">
            {!isMobile && (
                <AllContainers>
                    <BeforeZone
                        draggable="true"
                        id="beforezone"
                        onDragOver={(e) => DragOver(e)}
                        onDrop={(e) => DragDrop(e)}
                    >
                        <DraggableItem
                            id="1"
                            draggable="true"
                            className={dropState[0] ? "isdroped" : ""}
                            ref={ref}
                            onDragStart={(e) => DragStart(e)}
                            topFar={topArray[0]}
                            leftFar={leftArray[0]}
                        >
                            {imotionGroup[0]}
                            {dropState[0] && (
                                <DropedComment>
                                    {commentsGroup[0]}
                                </DropedComment>
                            )}
                        </DraggableItem>
                        <DraggableItem
                            id="2"
                            className={dropState[1] ? "isdroped" : ""}
                            draggable="true"
                            ref={ref}
                            onDragStart={(e) => DragStart(e)}
                            topFar={topArray[1]}
                            leftFar={leftArray[1]}
                        >
                            {imotionGroup[1]}
                            {dropState[1] && (
                                <DropedComment>
                                    {commentsGroup[1]}
                                </DropedComment>
                            )}
                        </DraggableItem>
                    </BeforeZone>
                    <MainContainer>
                        <div style={{ height: "8vh", fontSize: "3.5em" }}>
                            " μ λ{" "}
                        </div>
                        <div
                            style={{
                                width: "80%",
                                height: "100vh",
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
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    backgroundColor: "#ffefba8a",
                                    borderRadius: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        borderBottom: "2px dashed orangered",
                                        height: "6vh",
                                        width: "90%",
                                        margin: "0 0.5vw",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        height: "6vh",
                                        backgroundColor: "orangered",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 1.5vw",
                                        borderRadius: "20px",
                                        fontSize: "1.2em",
                                    }}
                                >
                                    <img
                                        src="imgs/search.png"
                                        alt="search"
                                        style={{
                                            height: "4vh",
                                        }}
                                    />
                                    {/* π */}
                                </div>
                            </div>
                            {droppedArray !== 4 && (
                                <InfoMent>
                                    β» λ λ€λλ μ΄λͺ¨μ§λ₯Ό κ²μ λ°μ€ μμΌλ‘
                                    λ£μ΄λ³΄μΈμ! .
                                </InfoMent>
                            )}
                            <DropZone
                                draggable="true"
                                className={droppedArray === 4 ? "isDone" : ""}
                                id="dropzone"
                                onDragOver={(e) => DragOver(e)}
                                onDrop={(e) => DragDrop(e)}
                            ></DropZone>
                        </div>
                        <div style={{ height: "6vh", fontSize: "2em" }}>
                            νλ{" "}
                        </div>
                        <div style={{ height: "8vh", fontSize: "2.5em" }}>
                            νλ‘ νΈμλ κ°λ°μ
                        </div>
                        <MyName>
                            <Name className={droppedArray === 4 ? "name1" : ""}>
                                λ°{" "}
                            </Name>
                            <Name className={droppedArray === 4 ? "name2" : ""}>
                                {" "}
                                μ§{" "}
                            </Name>
                            <Name className={droppedArray === 4 ? "name3" : ""}>
                                μ{" "}
                            </Name>
                            <span
                                style={{
                                    height: "8vh",
                                    fontSize: "0.45em",
                                    animation: "none",
                                }}
                            >
                                μλλ€.
                            </span>
                            "{" "}
                        </MyName>
                    </MainContainer>
                    <BeforeZone
                        draggable="true"
                        id="beforezone"
                        onDragOver={(e) => DragOver(e)}
                        onDrop={(e) => DragDrop(e)}
                    >
                        <DraggableItem
                            id="3"
                            draggable="true"
                            className={dropState[2] ? "isdroped" : ""}
                            onDragStart={(e) => DragStart(e)}
                            topFar={topArray[2]}
                            leftFar={leftArray[2]}
                        >
                            {imotionGroup[2]}
                            {dropState[2] && (
                                <DropedComment>
                                    {commentsGroup[2]}
                                </DropedComment>
                            )}
                        </DraggableItem>
                        <DraggableItem
                            id="4"
                            draggable="true"
                            className={dropState[3] ? "isdroped" : ""}
                            onDragStart={(e) => DragStart(e)}
                            topFar={topArray[3]}
                            leftFar={leftArray[3]}
                        >
                            {imotionGroup[3]}
                            {dropState[3] && (
                                <DropedComment>
                                    {commentsGroup[3]}
                                </DropedComment>
                            )}
                        </DraggableItem>
                    </BeforeZone>
                </AllContainers>
            )}
            {isMobile && (
                <AllContainers>
                    {" "}
                    <MainContainer>
                        <div style={{ height: "8vh", fontSize: "3.2em" }}>
                            " μ λ{" "}
                        </div>
                        <SearchContainer>
                            <div
                                style={{
                                    width: "85%",
                                    height: "6vh",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    backgroundColor: "#ffefba8a",
                                    borderRadius: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        borderBottom: "2px dashed orangered",
                                        height: "6vh",
                                        width: "90%",
                                        margin: "0 1.2vw",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        height: "6vh",
                                        backgroundColor: "orangered",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 1.5vw",
                                        borderRadius: "20px",
                                        fontSize: "1.2em",
                                    }}
                                >
                                    <img
                                        src="imgs/search.png"
                                        alt="search"
                                        style={{
                                            height: "2.8vh",
                                        }}
                                    />
                                </div>
                            </div>
                            <DropZone className="isMobile">
                                <DraggableItem id="1" className="isMobile">
                                    {imotionGroup[0]}

                                    <DropedComment>
                                        {commentsGroup[0]}
                                    </DropedComment>
                                </DraggableItem>
                                <DraggableItem id="2" className="isMobile">
                                    {imotionGroup[1]}

                                    <DropedComment>
                                        {commentsGroup[1]}
                                    </DropedComment>
                                </DraggableItem>
                                <DraggableItem id="3" className="isMobile">
                                    {imotionGroup[2]}

                                    <DropedComment>
                                        {commentsGroup[2]}
                                    </DropedComment>
                                </DraggableItem>
                                <DraggableItem id="4" className="isMobile">
                                    {imotionGroup[3]}

                                    <DropedComment>
                                        {commentsGroup[3]}
                                    </DropedComment>
                                </DraggableItem>
                            </DropZone>
                        </SearchContainer>
                        <div style={{ height: "6vh", fontSize: "2em" }}>
                            νλ{" "}
                        </div>
                        <div style={{ height: "8vh", fontSize: "2.5em" }}>
                            νλ‘ νΈμλ κ°λ°μ
                        </div>
                        <MyName>
                            <Name className={droppedArray === 4 ? "name1" : ""}>
                                λ°{" "}
                            </Name>
                            <Name className={droppedArray === 4 ? "name2" : ""}>
                                {" "}
                                μ§{" "}
                            </Name>
                            <Name className={droppedArray === 4 ? "name3" : ""}>
                                μ{" "}
                            </Name>
                            <span
                                style={{
                                    height: "8vh",
                                    fontSize: "0.65em",
                                    animation: "none",
                                }}
                            >
                                μλλ€.
                            </span>
                            "{" "}
                        </MyName>
                    </MainContainer>
                </AllContainers>
            )}
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
    background-color: #ffefba8a;
    border: 1.8px dashed orangered;
    border-radius: 35px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.1vh 0.2vw;
    &.isDone {
        justify-content: center;
        border: none;
        background-color: orangered;
        padding: 0.1vh 0.5vw;
    }
    &.isMobile {
        justify-content: center;
        background-color: #ffefba8a;
        border: none;
        width: 85%;
    }
`;
const InfoMent = styled.span`
    color: orangered;
    font-size: 1.3em;
    margin: 2vh 0 0 1vw;
    word-break: keep-all;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
    width: 80%;
`;
const BeforeZone = styled.div`
    width: 40%;
    height: 85vh;
    padding-bottom: 7vh;
    position: relative;
`;

const DraggableItem = styled.div`
    width: auto;
    height: 10vh;
    text-align: center;
    font-size: 3.5em;
    border-radius: 50px;
    position: absolute;
    cursor: pointer;
    top: ${(props) => props.topFar}vh;
    left: ${(props) => props.leftFar}vw;
    animation: motion 0.5s linear 0s infinite alternate;
    @keyframes motion {
        0% {
            margin-top: 0px;
        } /* μ²μ μμΉ */
        100% {
            margin-top: 0.8vh;
        } /* λ§μ§λ§ μμΉ */
    }
    &.isdroped {
        position: relative;
        top: auto;
        left: auto;
        height: 9vh;
        line-height: 9vh;
        border: 1.6px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5em;
        margin: 0.15vh 0;
        cursor: pointer;
        background-color: #ffefba8a;
        @media screen and (max-width: 800px) {
            font-size: 2em;
        }
        animation: none;
    }
    @media screen and (max-width: 800px) {
        top: ${(props) => props.topFar}vh;
        left: ${(props) => props.leftFar}vw;
        font-size: 2em;
    }
    @media screen and (max-width: 680px) {
        font-size: 1.5em;
        height: 8vh;
        line-height: 8vh;
        position: relative;
        top: auto;
        left: auto;
        display: flex;
        justify-content: center;
        border: 1.8px solid orangered;
        margin: 0.15vh 0;
        animation: none;
        cursor: auto;
    }
    @media screen and (max-width: 340px) {
        font-size: 1.2em;
        white-space: nowrap;
        animation: none;
        cursor: auto;
    }
`;

const SearchContainer = styled.div`
    width: 80%;
    height: 100vh;
    border: 1.8px solid orangered;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 20px;
`;
const DropedComment = styled.div`
    font-size: 0.8em;
    margin-left: 1vw;
    white-space: nowrap;
    @media screen and (max-width: 850px) {
        white-space: nowrap;
        word-break: keep-all;
        font-size: 0.75em;
    }
    @media screen and (max-width: 680px) {
        font-size: 0.9em;
        white-space: nowrap;
    }
    @media screen and (max-width: 340px) {
        font-size: 0.85em;
        white-space: nowrap;
    }
`;
const MyName = styled.div`
    height: 11vh;
    font-size: 4.3em;
    @media screen and (max-width: 680px) {
        font-size: 3em;
    }
`;

const Name = styled.span`
    font-weight: bold;
    &.name1 {
        animation: gradient 0.6s ease-in-out 0s 5;
        @keyframes gradient {
            100% {
                background: linear-gradient(to bottom, #ff4500, #ffc6ac);
                color: transparent;
                -webkit-background-clip: text;
            }
        }
    }
    &.name2 {
        animation: gradient 0.6s ease-in-out 0s 5;
        @keyframes gradient {
            100% {
                background: linear-gradient(to bottom, #ff4500, #ffc6ac);
                color: transparent;
                -webkit-background-clip: text;
            }
        }
    }
    &.name3 {
        animation: gradient 0.6s ease-in-out 0s 5;
        @keyframes gradient {
            100% {
                background: linear-gradient(to bottom, #ff4500, #ffc6ac);
                );
                color: transparent;
                -webkit-background-clip: text;
            }
        }
    }
`;
