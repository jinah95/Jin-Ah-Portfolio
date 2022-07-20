import React from "react";
import styled from "styled-components";
import img1 from "./images/survivalcoding.png";
import img2 from "./images/toreolre.png";
import img3 from "./images/savetheearth.png";

const imgArray = [img1, img2, img3];

const Project = ({ project }) => {
    return (
        <Wrapper>
            <ProjectCard>
                <ImgWrapper>
                    <Img photo={imgArray[project.img - 1]} />
                </ImgWrapper>
                <TextWrapper>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <Summary>{project.summary}</Summary>
                    <Results>
                        {">"} {project.results}
                    </Results>
                </TextWrapper>
            </ProjectCard>
            <Links>
                <Icon
                    src="imgs/github.png"
                    alt="github"
                    onClick={() => window.open(`${project.github}`)}
                />
                <Icon
                    src="imgs/demo.png"
                    alt="demo"
                    onClick={() => window.open(`${project.demo}`)}
                />
            </Links>
        </Wrapper>
    );
};

export default Project;

const Wrapper = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2vh 0;
`;
const ProjectCard = styled.div`
    width: inherit;
    height: 53.5vh;
    text-align: center;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const TextWrapper = styled.div`
    height: 26vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1vh 2vw;
`;
const ImgWrapper = styled.div`
    width: inherit;
    display: flex;
    justify-content: center;
`;

const Img = styled.div`
    background-image: url(${(props) => props.photo});
    width: 75vmin;
    height: 28vmin;
    background-size: cover;
    background-repeat: round;
`;
const ProjectTitle = styled.div`
    font-size: 0.9em;
    font-weight: bold;
    color: orangered;
`;
const Summary = styled.div`
    font-size: 0.5em;
    word-break: keep-all;
`;
const Results = styled.div`
    font-size: 0.38em;
    word-break: keep-all;
    color: #998f70;
`;
const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1.8px solid orangered;
    margin: 0 2vw;
    height: 7.5vh;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const Icon = styled.img`
    width: inherit;
    height: 4.3vh;
    cursor: pointer;
`;
