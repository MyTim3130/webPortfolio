import './App.css'
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Text from '../components/Text.jsx';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/all';
import { useEffect } from 'react';

function App() {
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

     useEffect(() => {
          const smoother = ScrollSmoother.create({
            // your options here
          });
      
          return () => {
            // Clean up on unmount
            smoother.kill();
          };
        }, []);


  return (
    <>
   <div id="smooth-wrapper">
   <div id="smooth-content">
    <Hero></Hero>
    <About></About>
    <Text></Text>
    </div>
    </div>
    </>
  )
}

export default App
