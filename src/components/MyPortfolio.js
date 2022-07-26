import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import TimeLine from "./TimeLine";
import Footer from "./Footer";
import Dots from "./Dots";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const DIVIDER_HEIGHT = 5;

const MyPortfolio = () => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    const [noDots, setNoDots] = useState(true);

    useEffect(() => {
        let initialY = null;
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(false);
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight * 2 &&
                    scrollTop < pageHeight * 3
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(4);
                } else if (
                    scrollTop >= pageHeight * 3 &&
                    scrollTop < pageHeight * 4
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(5);
                } else {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
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
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(1);
                } else if (
                    scrollTop >= pageHeight * 2 &&
                    scrollTop < pageHeight * 3
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight * 3 &&
                    scrollTop < pageHeight * 4
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(false);
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight * 4 &&
                    scrollTop < pageHeight * 5
                ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setNoDots(true);
                    setScrollIndex(4);
                }
            }
        };
        const initTouch = (e) => {
            initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
        };

        const swipeDirection = (e) => {
            if (initialY !== null) {
                const currentY = `${
                    e.changedTouches ? e.changedTouches[0].clientY : e.clientY
                }`;

                let diffY = initialY - currentY;

                0 < diffY ? upper() : down();

                initialY = null;
            }
        };

        const upper = (e) => {
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
            if (scrollTop >= 0 && scrollTop < pageHeight) {
                outerDivRef.current.scrollTo({
                    top: pageHeight,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(2);
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 2,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(false);
                setScrollIndex(3);
            } else if (
                scrollTop >= pageHeight * 2 &&
                scrollTop < pageHeight * 3
            ) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 3,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(4);
            } else if (
                scrollTop >= pageHeight * 3 &&
                scrollTop < pageHeight * 4
            ) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 4,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(5);
            } else {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 4,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(5);
            }
        };

        const down = () => {
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (scrollTop >= 0 && scrollTop < pageHeight) {
                outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(1);
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(1);
            } else if (
                scrollTop >= pageHeight * 2 &&
                scrollTop < pageHeight * 3
            ) {
                outerDivRef.current.scrollTo({
                    top: pageHeight,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(2);
            } else if (
                scrollTop >= pageHeight * 3 &&
                scrollTop < pageHeight * 4
            ) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 2,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(false);
                setScrollIndex(3);
            } else if (
                scrollTop >= pageHeight * 4 &&
                scrollTop < pageHeight * 5
            ) {
                outerDivRef.current.scrollTo({
                    top: pageHeight * 3,
                    left: 0,
                    behavior: "smooth",
                });
                setNoDots(true);
                setScrollIndex(4);
            }
        };

        const outerDivRefCurrent = outerDivRef.current;

        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        outerDivRefCurrent.addEventListener("touchstart", initTouch);
        outerDivRefCurrent.addEventListener("touchend", swipeDirection);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
            outerDivRefCurrent.removeEventListener("touchstart", initTouch);
            outerDivRefCurrent.removeEventListener("touchend", swipeDirection);
        };
    }, []);

    return (
        <>
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
                <Intro className="yContainer" />
                <Skills id="2" className="yContainer" />
                <Projects id="3" className="yContainer" />
                <TimeLine id="4" className="yContainer" />
                <Footer id="5" className="yContainer" />
                <FooterContainer>Jin-Ah's portfolio</FooterContainer>
            </FullPageWrapper>
        </>
    );
};

export default MyPortfolio;

const FullPageWrapper = styled.div`
    height: 100vh;
    overflow-y: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    font-family: "East Sea Dokdo", sans-serif;
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
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
