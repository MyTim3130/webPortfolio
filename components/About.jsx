import "./CSS/about.css";
import Rive from "@rive-app/react-canvas";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const About = () => {
     gsap.registerPlugin(ScrollTrigger) ;

     const aboutEl = useRef(null);
     const skillsEl = useRef(null);
     const textEl = useRef(null);


     useEffect(()=>{
          gsap.fromTo(
               aboutEl.current,
               { y: 100, opacity: 0 },
               { y: 0, opacity: 1, duration: 1,
               scrollTrigger: {
                    trigger: '.aboutTrigger',
                    start: "bottom bottom", // Change these values based on your needs
                    end: "bottom center",
                    scrub: true
               }
               },
               
             );

              gsap.fromTo(
               skillsEl.current,
               { y: 100, opacity: 0 },
               { y: 0, opacity: 1, duration: 1,
               scrollTrigger: {
                    trigger: '.aboutTrigger',
                    start: "bottom bottom", // Change these values based on your needs
                    end: "bottom center",
                    scrub: true
               }
               },
               
             );

             gsap.fromTo(
               textEl.current,
               { x: -700, opacity: 0 },
               { x: 0, opacity: 1, duration: 1,
               scrollTrigger: {
                    trigger: '.textTrigger',
                    start: "top bottom", // Change these values based on your needs
                    end: "top center",
                    scrub: true
               }
               },
               
             );
     }, [])
  return (
    <>
      <section className="aboutSection">
        <span className="textAbout">
          <h2 ref={aboutEl} className="aboutTrigger">About</h2>
          <p ref={textEl} className="textTrigger">
            Hello! I'm a passionate web developer and technology enthusiast
            dedicated to crafting seamless digital experiences. With a robust
            skill set in HTML, CSS, JavaScript, React, Rive, and GSAP, I
            specialize in creating interactive and dynamic websites that are
            both aesthetically pleasing and functionally robust.
          </p>
        </span>

        <Rive
          className="riveSword"
          src="/starWars.riv"
          stateMachines="State Machine 1"
        />
        <div className="rivePlace"></div>

        <span className="textAbout">
          <h2 id="skillsTitle" ref={skillsEl}>Skills</h2>
          <div className="skills">
            <div>
              <img
                src="../src/assets/html-icon.svg"
                alt=""
                className="skillsImg"
              />
              <img
                src="../src/assets/css-icon.svg"
                alt=""
                className="skillsImg"
              />
              <img
                src="../src/assets/javascript-1.svg"
                alt=""
                className="skillsImg"
              />
            </div>
            <div>
              <img src="../src/assets/react.svg" alt="" className="skillsImg" />
              <img
                src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
                alt=""
                className="skillsImg"
              />
              <img
                src="https://framerusercontent.com/images/3zFbB2jdDFJ02sWnh7hLRZFujk.svg"
                alt=""
                className="skillsImg"
              />
            </div>
            <div>
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617"
                alt=""
                className="skillsImg"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png"
                alt=""
                className="skillsImg"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png"
                alt=""
                className="skillsImg"
              />
            </div>
          </div>
        </span>

      
      </section>


<div className="riveArrowContainer"> <Rive
          className="riveArrow"
          src="/arrow.riv"
          stateMachines="State Machine 1"
        />
        <text className="riveArrowText">Try Me!</text>
        </div>
     
    </>
  );
};

export default About;
