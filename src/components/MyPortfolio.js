import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import TimeLine from "./TimeLine";
import Footer from "./Footer";
import Dots from "./Dots";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useRef, useEffect, useState } from "react";

const DIVIDER_HEIGHT = 3;

let vh = 0;
const MyPortfolio = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    const [noDots, setNoDots] = useState(true);

    useEffect(() => {
        let initialY = null;
        let timer;
        const wheelHandler = (e, deltaY, scrollTop, pageHeight) => {
            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight - DIVIDER_HEIGHT) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#skill").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight - DIVIDER_HEIGHT &&
                    scrollTop < pageHeight * 2 - DIVIDER_HEIGHT * 2
                ) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#project").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight * 2 - DIVIDER_HEIGHT * 2 &&
                    scrollTop < pageHeight * 3 - DIVIDER_HEIGHT * 3
                ) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#timeline").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(4);
                } else if (
                    scrollTop >= pageHeight * 3 - DIVIDER_HEIGHT * 3 &&
                    scrollTop < pageHeight * 4 - DIVIDER_HEIGHT * 4
                ) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#footer").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(5);
                } else {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#footer").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(5);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(1);
                } else if (
                    scrollTop >= pageHeight * 1 &&
                    scrollTop < pageHeight * 2
                ) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#skill").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight * 2 &&
                    scrollTop < pageHeight * 3
                ) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#project").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight * 3 &&
                    scrollTop < pageHeight * 4
                ) {
                    outerDivRef.current.scrollTo({
                        top: document.querySelector("#timeline").offsetTop,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(4);
                } else if (
                    scrollTop >= pageHeight * 4 &&
                    scrollTop < pageHeight * 5
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(4);
                }
            }
        };

        const swipeDirection = (e, currentY) => {
            const pageHeight = window.innerHeight;

            if (initialY !== null) {
                let diffY = initialY - currentY;

                if (2 < Math.abs(diffY) && Math.abs(diffY) < pageHeight * 0.8) {
                    0 < diffY ? upper() : down();
                }

                initialY = null;
            }
        };

        const upper = () => {
            // const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            // const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (scrollIndex === 1) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#skill").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(2);
            } else if (scrollIndex === 2) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#project").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(false);
                setScrollIndex(3);
            } else if (scrollIndex === 3) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#timeline").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(4);
            } else if (scrollIndex === 4) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#footer").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(5);
            } else {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#footer").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(5);
            }
        };

        const down = () => {
            // const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            // const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (scrollIndex === 1) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#intro").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(1);
            } else if (scrollIndex === 2) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#intro").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(1);
            } else if (scrollIndex === 3) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#skill").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(2);
            } else if (scrollIndex === 4) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#project").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(false);
                setScrollIndex(3);
            } else if (scrollIndex === 5) {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#timeline").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(4);
            } else {
                outerDivRef.current.scrollTo({
                    top: document.querySelector("#timeline").offsetTop,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(4);
            }
        };

        const outerDivRefCurrent = outerDivRef.current;

        outerDivRefCurrent.addEventListener(
            "wheel",
            (e) => {
                const { deltaY } = e;
                const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
                const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

                if (timer) {
                    // 이전 요청의 timer가 남아있다면 지우기
                    clearTimeout(timer);
                }
                timer = setTimeout((e) => {
                    wheelHandler(e, deltaY, scrollTop, pageHeight);
                }, 600);
            },
            {
                passive: true,
            }
        );

        outerDivRefCurrent.addEventListener(
            "touchstart",
            (e) => {
                if (timer) {
                    // 이전 요청의 timer가 남아있다면 지우기
                    clearTimeout(timer);
                }
                initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
                timer = setTimeout((event) => {}, 1000);
            },
            {
                passive: true,
            }
        );
        outerDivRefCurrent.addEventListener(
            "touchend",
            (e) => {
                if (timer) {
                    // 이전 요청의 timer가 남아있다면 지우기
                    clearTimeout(timer);
                }

                const currentY = `${
                    e.changedTouches ? e.changedTouches[0].clientY : e.clientY
                }`;
                timer = setTimeout((e) => {
                    swipeDirection(e, currentY);
                }, 500);
            },
            {
                passive: true,
            }
        );

        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
            outerDivRefCurrent.removeEventListener(
                "touchstart",
                (e) => {
                    if (timer) {
                        // 이전 요청의 timer가 남아있다면 지우기
                        clearTimeout(timer);
                    }

                    initialY = `${
                        e.touches ? e.touches[0].clientY : e.clientY
                    }`;
                    timer = setTimeout((event) => {}, 600);
                },
                {
                    passive: true,
                }
            );
            outerDivRefCurrent.removeEventListener(
                "touchend",
                (e) => {
                    if (timer) {
                        // 이전 요청의 timer가 남아있다면 지우기
                        clearTimeout(timer);
                    }

                    const currentY = `${
                        e.changedTouches
                            ? e.changedTouches[0].clientY
                            : e.clientY
                    }`;

                    timer = setTimeout((e) => {
                        swipeDirection(e, currentY);
                    }, 900);
                },
                {
                    passive: true,
                }
            );
        };
    }, [scrollIndex]);

    useEffect(() => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    return (
        <div style={{ overflow: "hidden", height: "100%" }}>
            {/* <Comment>
                # UI상 해당 페이지에서 ScrollDots는 숨겨두었습니다.
            </Comment> */}
            <FullPageWrapper ref={outerDivRef} className="outer">
                {noDots && (
                    <Dots
                        scrollIndex={scrollIndex}
                        outerDivRef={outerDivRef}
                        setScrollIndex={setScrollIndex}
                        setNoDots={setNoDots}
                    />
                )}

                <Child id="intro">
                    <Intro className="yContainer" id="Intro" />
                </Child>
                <Child id="skill">
                    <Skills className="yContainer" />
                </Child>
                <Child id="project">
                    <Projects className="yContainer" />
                </Child>
                <Child id="timeline">
                    <TimeLine className="yContainer" />
                </Child>
                <Child id="footer">
                    <Footer className="yContainer" />
                </Child>

                {!isMobile && (
                    <FooterContainer>Jin-Ah's portfolio</FooterContainer>
                )}
            </FullPageWrapper>
        </div>
    );
};

export default MyPortfolio;

const FullPageWrapper = styled.div`
    height: 100vh;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    font-family: "East Sea Dokdo", sans-serif;
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
    @media screen and (max-width: 680px) {
        height: 100vh;
        overflow-y: hidden;
    } ;
`;

const Child = styled.div`
    height: 100vh;
    @media screen and (max-width: 680px) {
        height: 100%;
        overflow-y: hidden;
    } ;
`;

const FooterContainer = styled.span`
    height: 7vh;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffefba8a;
    color: #998f70;
    padding: 0 25px;
    font-size: 2.5em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: "East Sea Dokdo", sans-serif;
`;
