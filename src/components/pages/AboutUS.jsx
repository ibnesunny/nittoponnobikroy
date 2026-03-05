import React from 'react'
import AboutUSimg from '../../assets/images/aboutUS.jpg';
const AboutUS = () => {
  return (
    <div className='text-center gap-4 py-12'>
     <div>
       <h1>About Us</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laudantium ipsa a impedit architecto, magnam eligendi rem assumenda maxime, iusto voluptates ullam sit aliquam veniam.</p>
     </div>
     <div>
      <img src={AboutUSimg} alt="" />
     </div>
    </div>
  )
}

export default AboutUS
