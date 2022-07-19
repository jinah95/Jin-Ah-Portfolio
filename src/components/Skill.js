import React from "react";
import styled from "styled-components";

const percentColor = (percent) => {
    if (percent <= 30) {
        return "#F6FDA2";
    } else if (30 < percent && percent <= 50) {
        return "#A2EDFD";
    } else if (50 < percent && percent <= 70) {
        return "#ECB8FF";
    } else if (70 < percent && percent <= 90) {
        return "#FFB8CD";
    } else {
        return "#AAFDA2";
    }
};

const Skill = ({ item }) => {
    return (
        <Container>
            <SkillImg src={item.skillImg} alt="logo192" />
            <PercentWrapper>
                <PercentConstruct>
                    <Percent
                        percent={item.percent}
                        color={percentColor(item.percent)}
                    >
                        <Text>
                            <div>{item.percent}%</div>
                        </Text>
                    </Percent>
                </PercentConstruct>
                {/* <div style={{ width: "30vw", wordBreak: "keep-all" }}>
                    <div style={{ fontSize: "0.32em" }}>{item.comment}</div>
                </div> 뒤집으면 코멘트 나오게? */}
            </PercentWrapper>
        </Container>
    );
};

export default Skill;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 8vh;
`;

const SkillImg = styled.img`
    width: 8.5vmin;
    height: 8.5vmin;
`;

const PercentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const PercentConstruct = styled.div`
    height: 4vh;
    width: 30vw;
    border: 2px solid black;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.2vw;
`;

const Percent = styled.div`
    height: 3vh;
    width: ${(props) => (props.percent / 100) * 30}vw;
    border: 2px dashed black;
    border-radius: 18px;
    position: absolute;
    background-color: ${(props) => props.color};
    line-height: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Text = styled.div`
    position: absolute;
    right: 0;
    font-size: 0.5em;
    padding-right: 0.5em;
`;
