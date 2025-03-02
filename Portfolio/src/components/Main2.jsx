import React from 'react'
import SplitText from "./SplitText";
import './main.css'
import AnimatedComponent from './AnimatedComponents';

function Main2() {
  return (
    <>
<div className='Main2-grid'>


<center>

<AnimatedComponent>



<SplitText
  text="ACHIEVMENTS"
  className="achievments"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
 
/>
</AnimatedComponent>

</center>
</div>
    </>
  )
}

export default Main2