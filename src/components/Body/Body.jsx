import React from 'react'
import Carousel from './carousel/Carousel'
import Banner from './Banner/Banner'
import OurServices from './OurServices/OurServices'
import ContactUs from '../pages/ContactUs'
import LogoCarousel from './LogoCarousel/LogoCarousel'
import StatsAnimate from './Stats/StatsAnimate'

const Body = () => {
    return (
        <div>
            <Banner />
            <OurServices />
            <Carousel />
            <StatsAnimate />
            <LogoCarousel />
            <ContactUs />
        </div>
    )
}

export default Body
