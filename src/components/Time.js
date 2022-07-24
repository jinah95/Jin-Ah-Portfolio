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
                {item.details && <Details>{item.details}</Details>}
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
    font-family: "East Sea Dokdo", sans-serif;
    height: calc(46vh / ${imgArray.length});
    @media screen and (max-width: 380px) {
        padding: 0 20px 0 20px;
    }
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
        border: 4.5px dotted orangered;
        margin-top: 8px;
    }
    @media screen and (max-width: 680px) {
        font-size: 0.5em;
        ::after {
            content: " ";
            position: absolute;
            width: 40px;
            height: 40px;
            background: url(${(props) => props.photo});
            background-color: #ffefba;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 999px;
            left: -82px;
            border: 3px solid orangered;
            margin-top: 12px;
        }
    }    
    @media screen and (max-width: 380px) {
            font-size: 0.4em;
            word-break: keep-all;
        }
    } ;
`;

const SubTitle = styled.span`
    font-size: 0.4em;
    word-break: keep-all;
    color: #333;
    @media screen and (max-width: 680px) {
        font-size: 0.35em;
    }
    @media screen and (max-width: 380px) {
        font-size: 0.28em;
        word-break: keep-all;
    }
`;

const Date = styled.span`
    font-size: 0.34em;
    @media screen and (max-width: 680px) {
        font-size: 0.31em;
    }
    @media screen and (max-width: 380px) {
        font-size: 0.27em;
        word-break: keep-all;
    }
`;

const Details = styled.span`
    font-size: 0.34em;
    background-color: #ffefba8a;
    padding: 0 1vw;
    margin: 0 0.3vw;
    color: royalblue;
    border: 1px solid #998f70;
    border-radius: 20px;
    @media screen and (max-width: 680px) {
        font-size: 0.3em;
    }
    @media screen and (max-width: 380px) {
        font-size: 0.25em;
        word-break: keep-all;
    }
`;
