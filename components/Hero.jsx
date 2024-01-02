import "./CSS/hero.css";
import SocialIcons from "./SocialIcons.jsx";
import Rive from "@rive-app/react-canvas";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";


const Hero = () => {
  const topBorderEl = useRef(null);
  const bottomBorderEl = useRef(null);
  const header1El = useRef(null);
  const header2El = useRef(null);
  const header3El = useRef(null);
  const spiderEl = useRef(null);
  const socialsEl = useRef(null);
  const lineTopEl = useRef(null);
  const lineBottomEl = useRef(null);

  useEffect(() => {
    gsap.fromTo(topBorderEl.current, { x: -500 }, { x: 0, duration: 2 });
    gsap.fromTo(bottomBorderEl.current, { x: +500 }, { x: 0, duration: 2 });
    gsap.fromTo(
      header1El.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      header2El.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      header3El.current,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );
    gsap.fromTo(
     spiderEl.current,
     { y: -500 },
     { y: 0, duration: 5 }
   );
   gsap.fromTo(
     lineTopEl.current,
     { y: 60 },
     { y: 0, duration: 1 }
   );
   gsap.fromTo(
     lineBottomEl.current,
     { y: -60 },
     { y: 0, duration: 1 }
   );
  
  }, []);

  useEffect(()=>{
     gsap.fromTo(
          socialsEl.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
  }, [1000])

  useEffect(()=>{

  },[])

  return (
    <>
      <div className="black"></div>
      <div className="accentBorder" id="topBorder" ref={topBorderEl}></div>

      <div ref={spiderEl}>
        {" "}
        <Rive
          className="spiderRive"
          src="/bouncing_spider.riv"
          stateMachines="State Machine 1"
        />
      </div>

      <section className="Hero">
        <div className="headTextContainer">
          <h1 ref={header1El}>Hi! My Name is Tim.</h1>
          <h1 ref={header2El}>Hi! My Name is Tim.</h1>
          <h1 ref={header3El}>Hi! My Name is Tim.</h1>
        </div>

        <div className="line" ref={lineTopEl}></div>

        <div className="socials" ref={socialsEl}>
          
          <SocialIcons></SocialIcons>
        </div>
        <div className="line" ref={lineBottomEl}></div>
      </section>
      <div
        className="accentBorder"
        id="bottomBorder"
        ref={bottomBorderEl}
      ></div>
    </>
  );
};

export default Hero;
