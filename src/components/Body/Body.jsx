import React from 'react'
import Carousel from './carousel/Carousel'
import Banner from './Banner/Banner'
import InfoCards from './InfoCards/InfoCards'
import OurServices from './OurServices/OurServices'
import ContactUs from '../pages/ContactUs'
import LogoCarousel from './LogoCarousel/LogoCarousel'
import StatsAnimate from './Stats/StatsAnimate'

const Body = () => {
    return (
        <div className=''>
            <Banner />
            <InfoCards />
            <Carousel />
            <OurServices />
            <StatsAnimate />
            <LogoCarousel />
            <ContactUs />

        </div>
    )
}

export default Body
