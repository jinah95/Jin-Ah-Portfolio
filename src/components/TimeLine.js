import React from "react";
import styled from "styled-components";
import TimeHistory from "../timeline.json";
import Time from "./Time";

const TimeLine = () => {
    return (
        <div className="inner" style={{ fontSize: "3.5em" }}>
            <Container>
                <div>{"<TimeLine>"}</div>

                <TimeLineWrapper>
                    <OuterDiv>
                        {TimeHistory.map((item, index) => (
                            <div key={`Time-${index}`}>
                                <Direction>
                                    <DirectionImg
                                        src="imgs/upDirection.png"
                                        alt="up"
                                    />
                                </Direction>
                                <Time index={index} item={item} />
                            </div>
                        ))}
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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85vh;
    padding-bottom: 7vh;
    font-family: "East Sea Dokdo", sans-serif;
    @media screen and (max-width: 680px) {
        height: 100vh;
        justify-content: center;
        overflow-y: hidden;
    } ;
`;

const TimeLineWrapper = styled.div`
    background: var(--primary-color);
    width: 80vmin;
    padding: 20px;
    height: 60vh;
    display: flex;
    align-items: center;
`;

const OuterDiv = styled.div`
    border-left: 4px solid orangered;
    width: 100%;
    @media screen and (max-width: 680px) {
        border-left: 3.5px solid orangered;
    }
`;

const Direction = styled.div`
    color: orangered;
    height: 3vh;
    margin-left: 35px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 680px) {
        height: 2vh;
    }
`;

const DirectionImg = styled.img`
    height: 3vh;
    @media screen and (max-width: 680px) {
        height: 2vh;
    }
`;
