import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import mySkills from "../mySkills.json";

const Skills = () => {
    return (
        <div className="inner" style={{ fontSize: "3.5em" }}>
            <Container>
                <div>{"<Skills>"}</div>
                <InfoWrapper>
                    <img src="imgs/infoBar.png" alt="InfoBar" />
                </InfoWrapper>
                <SkillWrapper>
                    {mySkills.map((item, index) => (
                        <Skill key={`skill-${index}`} item={item} />
                    ))}
                </SkillWrapper>
                <div>{"</Skills>"}</div>
            </Container>
        </div>
    );
};

export default Skills;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 85vh;
    padding-bottom: 7vh;
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 6.5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 680px) {
        height: 5vh;
        justify-content: center;
    } ;
`;

const SkillWrapper = styled.div`
    width: 80vmin;
    height: 70vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5vh 0;
    @media screen and (max-width: 680px) {
        width: 85vmin;
        height: 100vh;
    } ;
`;
