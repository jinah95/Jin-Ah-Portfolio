import React from "react";
import Project from "./Project";
import project from "../projects.json";
import styled from "styled-components";

const Carousel = ({ slideIndex }) => {
    return (
        <CarouselWrapper>
            {project.map((item, index) => (
                <Slider
                    key={`project-${index}`}
                    className={
                        slideIndex === index + 1 ? "is_active" : "is_pass"
                    }
                >
                    <Project project={item} />
                </Slider>
            ))}
        </CarouselWrapper>
    );
};

export default Carousel;

const CarouselWrapper = styled.div`
    position: relative;
    width: inherit;
    height: inherit;
`;

const Slider = styled.div`
    width: inherit;
    height: inherit;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &.is_pass {
        opacity: 0;
        transition: opacity ease-in-out 0.01s;
    }
    &.is_active {
        opacity: 1;
    }
`;
