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
                    <InfoWebComment>
                        ※ 마우스 오버 시, 상세설명이 나타납니다.
                    </InfoWebComment>
                    <InfoImg src="imgs/infoBar.png" alt="InfoBar" />
                </InfoWrapper>
                <SkillWrapper>
                    {mySkills.map((item, index) => (
                        <Skill key={`skill-${index}`} item={item} />
                    ))}
                </SkillWrapper>
                <InfoMobileComment>
                    ※ 클릭 시, 상세설명이 나타납니다.
                </InfoMobileComment>
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
    font-family: "East Sea Dokdo", sans-serif;
    @media screen and (max-width: 680px) {
        height: calc(var(--var, 1vh) * 100);
        justify-content: center;
    } ;
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 6.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 680px) {
        height: 4vh;
        flex-direction: column;
        justify-content: flex-end;
    } ;
`;
const InfoImg = styled.img`
    @media screen and (max-width: 680px) {
        height: 3.8vh;
    } ;
`;
const InfoWebComment = styled.div`
    font-size: 0.33em;
    color: orangered;
    padding-left: 0.5vw;
    @media screen and (max-width: 680px) {
        display: none;
    } ;
`;
const InfoMobileComment = styled.div`
    display: none;
    font-size: 0.3em;
    color: orangered;
    @media screen and (max-width: 680px) {
        display: flex;
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
        height: 58vh;
    } ;
`;
