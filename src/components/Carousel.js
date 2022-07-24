import React from "react";
import Project from "./Project";
import project from "../projects.json";
import styled from "styled-components";

const Carousel = ({ slideIndex, click, setClick }) => {
    return (
        <CarouselWrapper>
            {project.map((item, index) => (
                <SliderWrapper
                    className={
                        slideIndex === index + 1 && click
                            ? "is_active_click"
                            : slideIndex === index + 1
                            ? "is_NoClick"
                            : "is_pass"
                    }
                    onClick={() => setClick((cur) => !cur)}
                >
                    <Slider id="card" key={`project-${index}`}>
                        <FrontSide>
                            <Project project={item} front={true} />
                        </FrontSide>
                        <BackSide>
                            <Project project={item} back={true} />
                        </BackSide>
                    </Slider>
                </SliderWrapper>
            ))}
        </CarouselWrapper>
    );
};

export default Carousel;

const CarouselWrapper = styled.div`
    position: relative;
    width: inherit;
    height: inherit;
    font-family: "East Sea Dokdo", sans-serif;
`;

const SliderWrapper = styled.div`
    position: absolute;
    width: inherit;
    height: inherit;
    opacity: 1;
    &.is_active_click #card {
        transform-style: preserve-3d;
        transform: rotateY(180deg);
        transition: opacity ease-in-out 0.001s, transform 0.4s ease-in-out 0.03s;
    }
    &.is_pass #card {
        opacity: 0;
        pointer-events: none;
        transform-style: preserve-3d;
        transform: rotateY(0);
        transition: opacity ease-in-out 0.001s, transform 0.4s ease-in-out 0.03s;
    }
    &.is_NoClick #card {
        transform-style: preserve-3d;
        transform: rotateY(0);
        transition: opacity ease-in-out 0.001s, transform 0.4s ease-in-out 0.03s;
    }
`;

const FrontSide = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ffefba;
    transform: rotateY(0deg);
    border-radius: 20px;
    position: absolute;
    width: 100%;
    height: 54vh;
    backface-visibility: hidden;
    @media screen and (max-width: 680px) {
        height: 50vh;
    } ;
`;
const BackSide = styled.div`
    position: absolute;
    border-radius: 20px;
    width: 100%;
    height: 54vh;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: #ffc6ac;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-break: break-all:
    @media screen and (max-width: 680px) {
        height: 50vh;
    } ;
`;

const Slider = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
