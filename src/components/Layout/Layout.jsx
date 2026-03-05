import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import CirclingClockSpinner from '../pages/circling-clock'

const Layout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);

    },2000);
    return () => clearTimeout(timer);
      }, []);
      if(loading){
        //spinner showing
        return <CirclingClockSpinner/>;
      }
      
  return (
    <div className='max-w-[1440px] dark:bg-white  mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
