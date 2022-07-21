import React from "react";
import styled from "styled-components";

const percentColor = (percent) => {
    if (percent <= 30) {
        return "#FFAD8B";
    } else if (30 < percent && percent <= 50) {
        return "#FF9166";
    } else if (50 < percent && percent <= 70) {
        return "#FF743F";
    } else if (70 < percent && percent <= 90) {
        return "#FF591A";
    } else {
        return "#FF4500";
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
                <HashTagWrapper>
                    {" "}
                    {item.HashTag.map((tag, index) => (
                        <HashTag key={`tag-${index}`}># {tag}</HashTag>
                    ))}
                </HashTagWrapper>
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
    width: 80vmin;
    height: 9.4vh;
    margin: 0.5vh 0;
    background-color: #ffefba8a;
    border-radius: 20px;
    @media screen and (max-width: 680px) {
        width: 85vmin;
        margin: 0.15vh 0;
    } ;
`;

const SkillImg = styled.img`
    width: 8vmin;
    height: 8vmin;
    border: 2px solid #998f70;
    border-radius: 50px;
    padding: 0.2vh 0.2vw;
`;

const PercentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 60vmin;
    @media screen and (max-width: 680px) {
        justify-content: space-evenly;
    } ;
`;

const PercentConstruct = styled.div`
    height: 3.6vmin;
    width: 58vmin;
    border: 2px solid #998f70;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.34vw;
    margin-top: 0.4vh;
`;

const Percent = styled.div`
    height: 2.9vmin;
    width: ${(props) => (props.percent / 100) * 60}vmin;
    border-radius: 18px;
    position: absolute;
    background: no-repeat
        linear-gradient(to right, #ffc6ac 20%, ${(props) => props.color});
    line-height: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Text = styled.div`
    position: absolute;
    right: 0;
    font-size: 0.42em;
    padding-right: 0.5em;
    @media screen and (max-width: 680px) {
        font-size: 0.32em;
    } ;
`;

const HashTagWrapper = styled.div`
    display: flex;
    word-break: keep-all;
    height: 5vmin;
    @media screen and (max-width: 680px) {
        margin-bottom: 1.5vh;
    } ;
`;
const HashTag = styled.span`
    font-size: 0.33em;
    padding-left: 0.4vw;
    text-align: center;
    word-break: keep-all;
    @media screen and (max-width: 680px) {
        font-size: 0.28em;
        padding-left: 0.1vw;
        padding-bottom: 0.1vh;
    } ;
`;
