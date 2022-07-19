import React from "react";
import styled from "styled-components";
import school from "./images/school.png";

const TimeLine = () => {
    return (
        <div className="inner" style={{ fontSize: "3.5em" }}>
            <Container>
                <div>{"<TimeLine>"}</div>
                <TimeLineWrapper>
                    <OuterDiv>
                        <Card>
                            <Info>
                                <MainTitle>인천대학교 졸업</MainTitle>
                                <SubTitle>무역 / 중어중국 전공</SubTitle>
                            </Info>
                        </Card>
                        <Card>
                            <Info>
                                <MainTitle>온라인 광고 플랫폼사</MainTitle>
                                <SubTitle>광고 효율 관리 / 기획</SubTitle>
                            </Info>
                        </Card>
                        <Card>
                            <Info>
                                <MainTitle>엘리스 AI 트랙 4기 수료</MainTitle>
                                <SubTitle>
                                    엘리스 개발자 교육 과정 수료 완료
                                </SubTitle>
                            </Info>
                        </Card>
                        <Card>
                            <Info>
                                <MainTitle>엘리스 AI 트랙 4기 수료</MainTitle>
                                <SubTitle>
                                    엘리스 개발자 교육 과정 수료 완료
                                </SubTitle>
                            </Info>
                        </Card>
                        <Card>
                            <Info>
                                <MainTitle>엘리스 AI 트랙 4기 수료</MainTitle>
                                <SubTitle>
                                    엘리스 개발자 교육 과정 수료 완료
                                </SubTitle>
                            </Info>
                        </Card>
                    </OuterDiv>
                </TimeLineWrapper>
                <div>{"</TimeLine>"}</div>
            </Container>
        </div>
    );
};

export default TimeLine;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85vh;
    padding-bottom: 7vh;
`;

const TimeLineWrapper = styled.div`
    background: var(--primary-color);
    width: 80vmin;
    padding: 20px;
    height: 60vh;
`;

const OuterDiv = styled.div`
    border-left: 2px solid #333;
    width: 100%;
`;

const Card = styled.div`
    position: relative;
    margin: 0 0 10px 20px;
    padding: 0 10px 10px 10px;
    background: #333;
    color: gray;
    border-radius: 8px;
    word-break: keep-all;
    white-space: pre-line;
    word-wrap: break-word;
    height: calc(60vh / 6);
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MainTitle = styled.span`
    color: orangered;
    position: relative;
    font-size: 0.6em;
    ::after {
        content: " ";
        position: absolute;
        width: 30px;
        height: 30px;
        background: url(${school});
        background-color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 999px;
        left: -50px;
        border: 3px solid orangered;
        margin-top: 10px;
    }
`;

const SubTitle = styled.span`
    font-size: 0.5em;
`;
