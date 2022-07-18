import React, { useState } from "react";
import Carousel from "./Carousel";
import styled from "styled-components";
import project from "../projects.json";

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = (idx) => {
        if (slideIndex === project.length) {
            return;
        }
        setSlideIndex(slideIndex + 1);
    };

    const prevSlide = () => {
        if (slideIndex === 1) {
            return;
        }
        setSlideIndex(slideIndex - 1);
    };

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
                {" "}
                <div>{"<Projects>"}</div>
                <div
                    style={{
                        width: "80vMin",
                        height: "63vh",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ArrowLeft onClick={prevSlide}>
                        <img src="imgs/arrow-left.png" alt="arrow-left" />
                    </ArrowLeft>
                    <div
                        style={{
                            width: "80vMin",
                            height: "63vh",
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            backgroundColor: "white",
                        }}
                    >
                        <Carousel slideIndex={slideIndex} />
                    </div>
                    <ArrowRight onClick={nextSlide}>
                        <img src="imgs/arrow-left.png" alt="arrow-left" />
                    </ArrowRight>
                </div>
                <InfoMent>
                    - <TargetPage>{slideIndex}</TargetPage> / {project.length} -
                </InfoMent>
                <div>{"</Projects>"}</div>
            </div>
        </div>
    );
};

export default Projects;

const ArrowLeft = styled.div`
    cursor: pointer;
`;
const ArrowRight = styled.div`
    transform: scaleX(-1);
    cursor: pointer;
`;

const Comment = styled.span`
    font-size: 0.3em;
`;

const InfoMent = styled.div`
    font-size: 0.4em;
`;
const TargetPage = styled.span`
    font-weight: bold;
    color: red;
`;
