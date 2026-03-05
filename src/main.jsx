import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Body from './components/Body/Body.jsx'
import AboutUS from './components/pages/AboutUS.jsx'
import ContactUs from './components/pages/ContactUs.jsx'
import HowWorks from './components/pages/HowWorks.jsx'
import Appointment from './components/pages/Appointment.jsx'
// import CirclingClockSpinner from './components/pages/circling-clock.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUS /> },
      { path: "/contact-us", element: <ContactUs /> },
      // { path: "/career", element: <Career /> },
      // { path:"/lo", element:<CirclingClockSpinner /> },

      { path: "/appointment", element: <Appointment /> },
      { path: "/how-works", element: <HowWorks /> },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
