import React from 'react'
import './header.css'
import AnimatedContent from './AnimatedContent';
import myimg from '../assets/myimg.jpg';
import AnimatedComponent from './AnimatedComponents';

function Header() {
  return (
  
   
   <div className='header-grid'>
        <div>
            <img className='myImg' src={myimg} alt="img" />
        </div>
        <AnimatedComponent>

        
        <AnimatedContent
  distance={40}
  direction="horizontal"
  reverse={true}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
    <div>
            <button style={{marginRight:'9px'}}>Hire</button>
            <button>Contact</button>
        </div>
</AnimatedContent>
</AnimatedComponent>
        
    </div>
  )
  
}

export default Header