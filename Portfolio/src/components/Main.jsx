import React from 'react'
import './main.css'
import BlurText from "./BlurText";
import AnimatedContent from './AnimatedContent';
// import bgimg from '../assets/bgimg.jpg';
import Magnet from './Magnet';
import TrueFocus from './TrueFocus';
import MetaBalls from './components2/MetaBalls.jsx'
import FadeContent from './FadeContent'
import AnimatedComponent from './AnimatedComponents.jsx';


function Main() {
 const handleAnimationComplete = () => {
  console.log('Animation completed!');
}; 
return (
    <>
    
    

<div className='main-grid'>

<MetaBalls
          color="black"
          cursorBallColor="black"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
/>
 
      <Magnet padding={500} disabled={false} magnetStrength={45}>
        <AnimatedContent
        distance={300}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
    <center>
    <AnimatedComponent>
        <div className='name-grid'>
          <p className='hiText'>Hi, I'm</p>

        <BlurText
        text="Tejas Somnathe"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 TejasText"
        />
        </div>

        
  
  <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <div className='para'>
            <p style={{
              color : "white",
              fontSize: "35px",
              margin: "10px",
              
            }}>
              {/* <a>
                A
              </a> */}
            
            <a style={{
              color : "#2CF6B3",
              fontSize: "10px",
              fontWeight:900,
            }}>
              <TrueFocus 
sentence="Frontend Developer"
manualMode={false}
blurAmount={5}
borderColor="aqua"
animationDuration={2}
pauseBetweenAnimations={1}
/>
              
            </a>
             Specializing in React and modern web technologies. I build fast, responsive, and user-friendly applications with clean code and seamless user experiences.
            </p>

        </div>
  </FadeContent>
  </AnimatedComponent>
 
        </center>
</AnimatedContent>
</Magnet>

<MetaBalls
          color="black"
          cursorBallColor="black"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
/>

      
       
    </div> 

    

    
    
    </> )
}

export default Main