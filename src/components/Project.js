import React from "react";
import styled from "styled-components";
import img1 from "./images/survivalcoding.png";
import img2 from "./images/toreolre.png";
import img3 from "./images/savetheearth.png";
import img4 from "./images/myPortfolio.png";

const imgArray = [img1, img2, img3, img4];

const Project = ({ project, front, back }) => {
    return (
        <Wrapper>
            {!back && (
                <ProjectCard>
                    <ImgWrapper>
                        <Img photo={imgArray[project.img - 1]} />
                    </ImgWrapper>
                    <TextWrapper>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <Summary>{project.summary}</Summary>
                        <Duration>{project.duration}</Duration>
                        <SkillWrapper>
                            {project.skills.map((skill, index) => (
                                <Skill key={`pro-skill-${index}`}>
                                    {skill}
                                </Skill>
                            ))}
                        </SkillWrapper>
                    </TextWrapper>
                </ProjectCard>
            )}
            {!front && (
                <ProjectBackCard>
                    <TextWrapper>
                        <Results>
                            {" "}
                            <PointTitle>{"👉 전체 기능 👈"} </PointTitle>{" "}
                            <Contents>{project.results}</Contents>
                            <PointTitle>{"👉 구현 기능 👈"} </PointTitle>{" "}
                            {project.myWorks.map((item, index) => (
                                <MyWorks key={`myworks-${index}`}>
                                    <Page>[{item.page}]</Page>
                                    <PageDetails> {item.details}</PageDetails>
                                </MyWorks>
                            ))}
                        </Results>
                    </TextWrapper>
                </ProjectBackCard>
            )}
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
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`;
const ProjectBackCard = styled.div`
    width: inherit;
    height: 53.5vh;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
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
    padding-top: 1.5vh;
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
    @media screen and (max-width: 680px) {
        font-size: 0.7em;
    } ;
`;
const Summary = styled.div`
    font-size: 0.5em;
    word-break: keep-all;
    @media screen and (max-width: 680px) {
        font-size: 0.35em;
    } ;
`;
const Results = styled.div`
    font-size: 0.32em;
    word-break: break-all;
    padding: 0 1.5vw;
    @media screen and (max-width: 680px) {
        font-size: 0.28em;
    } ;
`;

const Duration = styled.div`
    font-size: 0.35em;
    color: #998f70;
    @media screen and (max-width: 680px) {
        font-size: 0.32em;
    } ;
`;

const PointTitle = styled.span`
    font-size: 1.2em;
    font-weight: bold;
`;

const Contents = styled.div`
    word-break: keep-all;
    border-bottom: 1.8px solid orangered;
`;

const SkillWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    white-space: normal;
`;

const Skill = styled.div`
    width: auto;
    height: 3vh;
    line-height: 3vh;
    font-size: 0.3em;
    text-align: center;
    border-radius: 20px;
    background-color: #ffefba8a;
    padding: 0 1vw;
    margin: 0 0.3vw;
    color: royalblue;
    border: 1px solid #998f70;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
    @media screen and (max-width: 680px) {
        height: 5vh;
        line-height: 5vh;
        font-size: 0.28em;
    } ;
`;

const MyWorks = styled.div`
    display: grid;
    grid-template-row: 1fr 3fr;
`;

const Page = styled.div`
    word-wrap: break-word;
    word-break: keep-all;
    white-space: nowrap;
    font-weight: bold;
    font-size: 1.1em;
    @media screen and (max-width: 680px) {
        font-size: 0.9em;
    } ;
`;
const PageDetails = styled.div`
    word-wrap: break-word;
    word-break: keep-all;
    font-size: 1em;
    @media screen and (max-width: 680px) {
        font-size: 0.8em;
    } ;
`;
