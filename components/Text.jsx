import "./CSS/text.css";
import Rive from "@rive-app/react-canvas";
import { gsap } from "gsap";

import { PathLine } from "react-svg-pathline";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";
import { MotionPathPlugin } from "gsap/all";
import { useEffect } from "react";

const Text = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

  useEffect(()=>{
     gsap.fromTo('.line', {drawSVG: 0}, {drawSVG: 9000,
          scrollTrigger: {
               trigger: ".pathLine",
               start: "top center",
               end: "bottom bottom",
               scrub: true
          }},
     )
  }, [])
  
 
  return (
    <>
      <section className="textSection">
        <div className="pathLine">
          <svg >
            <PathLine className="line"
              points={[
                { x: 0, y: 0 },
                { x: 900, y: 300 },
                { x: -100, y: 400 },
                { x: 2100, y: 700 },
                { x: 1100, y: 900 },
                { x: 2100, y: 1000 },
                { x: -200, y: 2000 },
                { x: 1750, y: 2000,},
                { x: 1450, y: 3000,},
                
                
              ]}
              stroke="#e5dbbd"
              strokeWidth="10"
              fill="none"
              r={500}
            />
          </svg>
        </div>

        <div>
          {" "}
          <h1 className="h1Text">I'm always learning new Skills</h1>
          <div className="textContainer">
            <Rive
              className="riveCoding"
              src="/boy.riv"
              stateMachines="State Machine 1"
            />
          </div>
        </div>

        <div>
          {" "}
          <h1 className="h1Text">On my Way of becoming</h1>
          <div className="textContainer">
            <Rive
              id="treeAnim"
              className="riveCoding"
              src="/riveTree.riv"
              stateMachines="Loading"
            />
          </div>
        </div>

        <div>
          {" "}
          <h1 className="h1Text">A Full Stack Developer</h1>
          <div className="textContainer">
            <Rive
              id="codingAnim"
              className="riveCoding"
              src="/computerCoder.riv"
              stateMachines="Buzy_Boy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Text;
