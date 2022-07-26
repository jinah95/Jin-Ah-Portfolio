import React, { useState } from "react";
import Carousel from "./Carousel";
import styled from "styled-components";
import project from "../projects.json";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

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
            <Container>
                {" "}
                <div>{"<Projects>"}</div>
                <ProjectCardWrapper>
                    <ArrowLeft onClick={prevSlide}>
                        <ArrowImg src="imgs/arrow-left.png" alt="arrow-left" />
                    </ArrowLeft>
                    <CarouselWrapper>
                        <InfoWebComment>
                            ※ 클릭 시, 상세설명이 나타납니다.
                        </InfoWebComment>
                        <Carousel slideIndex={slideIndex} />
                    </CarouselWrapper>
                    <ArrowRight onClick={nextSlide}>
                        <ArrowImg src="imgs/arrow-left.png" alt="arrow-left" />
                    </ArrowRight>
                </ProjectCardWrapper>
                <Links>
                    <Icon
                        src="imgs/github.png"
                        alt="github"
                        onClick={() =>
                            window.open(project[slideIndex - 1].github)
                        }
                    />
                    <Icon
                        src="imgs/demo.png"
                        alt="demo"
                        onClick={() =>
                            window.open(project[slideIndex - 1].demo)
                        }
                    />
                </Links>
                <InfoMent>
                    - <TargetPage>{slideIndex}</TargetPage> / {project.length} -
                </InfoMent>
                <div>{"</Projects>"}</div>
                {isMobile && (
                    <InfoWebComment className="isMobile">
                        ↓ 아래로 내리시면 다음페이지로 이동합니다. ↓
                    </InfoWebComment>
                )}
            </Container>
        </div>
    );
};

export default Projects;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 85vh;
    @media screen and (max-width: 680px) {
        height: 100vh;
        height: -webkit-fill-available;
        height: fill-available;
        justify-content: center;
    } ;
`;

const ProjectCardWrapper = styled.div`
    width: 80vmin;
    height: 57vh;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "East Sea Dokdo", sans-serif;
    @media screen and (max-width: 680px) {
        height: 50vh;
    } ;
`;

const CarouselWrapper = styled.div`
    width: 80vmin;
    height: 57vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (max-width: 680px) {
        height: 50vh;
    } ;
`;

const ArrowLeft = styled.div`
    cursor: pointer;
`;
const ArrowImg = styled.img`
    @media screen and (max-width: 680px) {
        width: 7vw;
    } ;
`;
const ArrowRight = styled.div`
    transform: scaleX(-1);
    cursor: pointer;
`;

const InfoMent = styled.div`
    font-size: 0.4em;
`;
const TargetPage = styled.span`
    font-weight: bold;
    color: orangered;
`;

const InfoWebComment = styled.div`
    font-size: 0.35em;
    color: orangered;
    padding-left: 0.5vw;
    &.isMobile {
        font-size: 0.3em;
    }
`;
const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1vh;
    padding: 0.5vh 0;
    height: 5vh;
    width: 80vmin;
    border-radius: 20px;
    background-color: #ffefba8a;
    @media screen and (max-width: 680px) {
        height: 3vh;
        margin-top: 4vh;
    } ;
`;

const Icon = styled.img`
    width: 4.5vmin;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 680px) {
        width: 4vmin;
    } ;
`;
