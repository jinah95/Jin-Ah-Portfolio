import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import TimeLine from "./TimeLine";
import Footer from "./Footer";
import Dots from "./Dots";
import { useRef, useEffect, useState } from "react";

const DIVIDER_HEIGHT = 5;

const MyPortfolio = () => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log("skill 페이지로");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    console.log("Projects 페이지로");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight * 2 &&
                    scrollTop < pageHeight * 3
                ) {
                    console.log("Projects 페이지로");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(4);
                } else if (
                    scrollTop >= pageHeight * 3 &&
                    scrollTop < pageHeight * 4
                ) {
                    console.log("Projects 페이지로");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(5);
                } else {
                    console.log("현재 3페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(5);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (
                    scrollTop >= pageHeight * 2 &&
                    scrollTop < pageHeight * 3
                ) {
                    console.log("현재 12페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight * 3 &&
                    scrollTop < pageHeight * 4
                ) {
                    console.log("현재 192페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight * 4 &&
                    scrollTop < pageHeight * 5
                ) {
                    console.log("현재 192페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(4);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    return (
        <div ref={outerDivRef} className="outer">
            <Dots scrollIndex={scrollIndex} />
            <Intro />
            <div className="divider"></div>
            <Skills />
            <div className="divider"></div>
            <Projects />
            <div className="divider"></div>
            <TimeLine />
            <div className="divider"></div>
            <Footer />
            <div className="divider"></div>
        </div>
    );
};

export default MyPortfolio;
