import React from 'react'

import RollingGallery from './RollingGallery'
  
function Footer() {
  return (
    <div>
        
      <RollingGallery autoplay={true} pauseOnHover={true} />    
        
    </div>
  )
}

export default Footer