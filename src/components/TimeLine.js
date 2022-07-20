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
                            <Time index={index} item={item} />
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
`;

const TimeLineWrapper = styled.div`
    background: var(--primary-color);
    width: 80vmin;
    padding: 20px;
    height: 60vh;
`;

const OuterDiv = styled.div`
    border-left: 4px solid #998f70;
    width: 100%;
`;
