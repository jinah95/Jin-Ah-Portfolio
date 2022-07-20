import React from "react";
import styled from "styled-components";
import school from "./images/school.png";
import job from "./images/job.png";
import award from "./images/award.png";

const imgArray = [school, job, award];

const Time = ({ item, index }) => {
    return (
        <Card>
            <Info>
                <MainTitle photo={imgArray[imgArray.length - index - 1]}>
                    {item.main}
                </MainTitle>
                <SubTitle>{item.sub}</SubTitle>
                <Date>{item.date}</Date>
            </Info>
        </Card>
    );
};

export default Time;

const Card = styled.div`
    position: relative;
    margin: 0 0 10px 35px;
    padding: 0 20px 10px 20px;
    background: #ffefba8a;
    color: #998f70;
    border-radius: 8px;
    word-break: keep-all;
    white-space: pre-line;
    word-wrap: break-word;
    height: calc(55vh / ${imgArray.length});
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
`;

const MainTitle = styled.span`
    color: orangered;
    position: relative;
    font-size: 0.6em;

    ::after {
        content: " ";
        position: absolute;
        width: 55px;
        height: 55px;
        background: url(${(props) => props.photo});
        background-color: #ffefba;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 999px;
        left: -92px;
        border: 4.5px dotted #998f70;
        margin-top: 8px;
    }
`;

const SubTitle = styled.span`
    font-size: 0.4em;
    word-break: keep-all;
    color: #333;
`;

const Date = styled.span`
    font-size: 0.34em;
`;
