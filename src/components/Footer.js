import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

    const copiedText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("  복사되었습니다.", {
                icon: ({ theme, type }) => (
                    <img
                        src="MYLOGO.png"
                        alt="mylogo"
                        style={{
                            width: "4vmin",
                            height: "4vmin",
                        }}
                    />
                ),
            });
        } catch (e) {
            toast.error("실패했습니다. 다시 시도해주세요!");
        }
    };

    return (
        <div className="inner" style={{ fontSize: "3.5em" }}>
            <ToastContainer
                autoClose={3000}
                icon={false}
                style={{ fontSize: "0.38em" }}
            />
            <Container>
                <div>{"<Footer>"}</div>
                <ProfileWrapper>
                    <HalfWrapper>
                        {isMobile && (
                            <MainTitle>
                                <WrapperTitle>
                                    <PointTitle>"</PointTitle> 찍어내는 개발이
                                    아닌
                                </WrapperTitle>
                                <WrapperTitle>
                                    <PointTitle>성능 최적화</PointTitle> 와{" "}
                                    <PointTitle>유저의 편의성</PointTitle>을
                                </WrapperTitle>{" "}
                                <WrapperTitle>
                                    {" "}
                                    고려한 개발을 하고 싶습니다.{" "}
                                    <PointTitle>"</PointTitle>
                                </WrapperTitle>
                            </MainTitle>
                        )}
                        <ProfileImage src="imgs/photo.png" alt="person" />
                        <NameTitle>
                            프론트엔드 개발자{" "}
                            <PointTitle> 박 진 아 </PointTitle>
                        </NameTitle>
                        <ContactWrapper>
                            #Contact
                            <IconsWrapper>
                                <Icon
                                    src="imgs/kakaotalk.png"
                                    alt="kakaotalk"
                                    onClick={(e) =>
                                        copiedText(
                                            process.env.REACT_APP_CONTACT_KAKAO
                                        )
                                    }
                                />
                                <Icon
                                    src="imgs/email.png"
                                    alt="email"
                                    onClick={() =>
                                        copiedText(
                                            process.env.REACT_APP_CONTACT_EMAIL
                                        )
                                    }
                                />
                            </IconsWrapper>
                            #Links
                            <IconsWrapper>
                                <Icon
                                    src="imgs/github.png"
                                    alt="github"
                                    onClick={() =>
                                        window.open(
                                            process.env
                                                .REACT_APP_CONTACT_GITHUB_URL
                                        )
                                    }
                                />
                                <Icon
                                    src="imgs/blog.png"
                                    alt="blog"
                                    onClick={() =>
                                        window.open(
                                            process.env
                                                .REACT_APP_CONTACT_BLOG_URL
                                        )
                                    }
                                />
                                <Icon
                                    src="imgs/Instagram.png"
                                    alt="Instagram"
                                    onClick={() =>
                                        window.open(
                                            process.env
                                                .REACT_APP_CONTACT_INSTAGRAM
                                        )
                                    }
                                />
                            </IconsWrapper>
                        </ContactWrapper>
                    </HalfWrapper>
                    {!isMobile && (
                        <TitleWrapper>
                            <MainTitle>
                                <WrapperTitle>
                                    <PointTitle>"</PointTitle> 찍어내는 개발이
                                    아닌
                                </WrapperTitle>
                                <WrapperTitle>
                                    <PointTitle>성능 최적화</PointTitle> 와{" "}
                                    <PointTitle>유저의 편의성</PointTitle>을
                                </WrapperTitle>{" "}
                                <WrapperTitle>
                                    {" "}
                                    고려한 개발을 하고 싶습니다.{" "}
                                    <PointTitle>"</PointTitle>
                                </WrapperTitle>
                            </MainTitle>
                            <MentionsWrapper>
                                안녕하세요! 프론트엔드 개발자 박진아 입니다.{" "}
                                <br />
                                제 포트폴리오에 귀한 시간을 내어주셔서
                                감사합니다.
                                <br />
                                <br />약 1년 8개월 간 광고플랫폼사에서 일하며,
                                기획을 처음 접하고 개발자와 수많은 소통을 하게
                                되었습니다.
                                <br />
                                <br />
                                <HightLight>
                                    “내가 개발자라면 ?” 많은 소통 속 갈망이
                                    생겼습니다.
                                </HightLight>
                                <br />
                                현재 국비지원 개발교육 6개월 총 3회 프로젝트를
                                수행하며{" "}
                                <HightLight>
                                    개발자로의 직무전환에 확신이 듭니다.
                                </HightLight>{" "}
                                <br />
                                네! <br />
                                <HightLight>
                                    전 이제 <b>프론트엔드 개발자</b> 로 나아가고
                                    싶습니다!
                                </HightLight>
                                <HightLight>
                                    저의{" "}
                                    <b>
                                        성실함 꼼꼼함 {"&"} 유저의 편의성과
                                        최적화에 대한 갈망
                                    </b>{" "}
                                </HightLight>
                                <HightLight>
                                    무한히 성장할 저를 믿고 이끌어줄 회사를 찾고
                                    있습니다.
                                </HightLight>{" "}
                            </MentionsWrapper>
                        </TitleWrapper>
                    )}
                </ProfileWrapper>
                <div>{"</Footer>"}</div>
            </Container>
        </div>
    );
};

export default Footer;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 85vh;
    padding-bottom: 7vh;
`;

const ProfileImage = styled.img`
    height: 35vmin;
`;

const ProfileWrapper = styled.div`
    width: 80vmin;
    height: 63vh;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5vh 0;
    @media screen and (max-width: 680px) {
        justify-content: center;
    } ;
`;

const TitleWrapper = styled.div`
    width: 48vmin;
    height: 63vh;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5em;
    padding: 10vh 0;
`;

const HalfWrapper = styled.div`
    height: 63vh;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5em;
    border-right: 1px solid black;
    padding-right: 1.7vw;
    @media screen and (max-width: 680px) {
        border-right: none;
        padding-right: 0;
    } ;
`;

const WrapperTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const PointTitle = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0 0.4vw;
`;

const NameTitle = styled.div`
    width: 100%;
    height: 5vh;
    border: 1px dashed black;
    border-radius: 75px;
    background-color: #ffefba8a;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 0.7em;
    margin: 1vh 0;
    padding: 0 0.4vw;
`;

const ContactWrapper = styled.div`
    width: 100%;
    height: 30vh;
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 0.4vw;
    @media screen and (max-width: 680px) {
        height: 20vh;
    } ;
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1vh 0;
`;

const Icon = styled.img`
    height: 4.5vh;
    cursor: pointer;
    @media screen and (max-width: 680px) {
        height: 3.5vh;
    } ;
`;
const MainTitle = styled.div`
    width: 100%;
    height: 12vh;
    border-radius: 75px;
    background-color: #ffefba8a;
    border: 1px dashed black;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.7em;
    @media screen and (max-width: 680px) {
        width: 80vmin;
        margin: 1.2vh 0;
        height: 20vmin;
        font-size: 0.6em;
    } ;
`;
const MentionsWrapper = styled.div`
    height: 47vh;
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.7em;
    word-break: keep-all;
    margin: 1.2vh 0;
    padding: 1vh 0.3vw;
`;

const HightLight = styled.span`
    background: linear-gradient(to top, yellow 50%, transparent 50%);
`;
