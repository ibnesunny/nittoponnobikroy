import React from 'react'
import AboutUSimg from '../../assets/images/aboutUS.jpg';
const AboutUS = () => {
  return (
    <div className='text-center gap-4 py-12'>
     <div>
       <h1>About Us</h1>
      <p>Nitto Ponno Bikroy is the authorized dealer of IGT Gas Safety Devices in Bangladesh. The IGT Gas Safety Device is an advanced LPG regulator that detects gas leaks, monitors cylinder pressure, and automatically shuts off gas to prevent accidents. It ensures safe and worry-free cooking for every home. We are committed to making every kitchen in Bangladesh safer with this life-saving technology.</p>
     </div>
     <div>
      <img src={AboutUSimg} alt="About Nitto Ponno Bikroy - IGT Gas Safety Device dealer" />
     </div>
    </div>
  )
}

export default AboutUS
