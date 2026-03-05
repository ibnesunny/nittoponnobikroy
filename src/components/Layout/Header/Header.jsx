import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo1.png'
import TrueFocus from '../TrueFocus/TrueFocus'
const Header = () => {
    // const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleMenuClick = () => setOpen(false);

    // const logout = () => {
    //     signOut(auth);
    // }
    const menuItem = (
        <>

            <li>
                <Link to="/" onClick={handleMenuClick}
                    className="hover:bg-cyan-100 hover:text-dark-500 active:bg-orange-100 rounded-md px-2"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link to="/how-works" onClick={handleMenuClick}
                    className="hover:bg-red-100 hover:text-red-500 active:bg-red-200 rounded-md px-2"
                >
                    How It's Work
                </Link>
            </li>
         
            <li>
                <Link to="/about" onClick={handleMenuClick}
                    className="hover:bg-red-100 hover:text-red-500 active:bg-red-200 rounded-md px-2"
                >
                    About
                </Link>
            </li>
          
            <li>
                <Link to="/contact-us" onClick={handleMenuClick}
                    className="hover:bg-cyan-100 hover:text-red-500 active:bg-yellow-200 rounded-md px-2"
                >
                    Contact US
                </Link>
            </li>

            {/* <li> {"" ? <button className='btn btn-ghost' onClick={""}>Sign out</button> : <Link to="/login">Login</Link>}</li> */}
            {/* <li> { <button className='btn btn-ghost' >Sign out</button>} </li> */}

        </>
    );
    return (
        <div className="navbar flex lg:justify-around position-absulate">

            {/* { for small & Medium Device } */}

            <div className="navbar flex justify-around lg:hidden">
                <div className="relative mr-7 ref={dropdownRef}">

                    <button
                        className="btn btn-ghost"
                        onClick={() => setOpen(!open)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>

                    {/* Dropdown Menu */}
                    {open && (
                        <ul className="absolute mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                            {menuItem}
                        </ul>
                    )}
                </div>
                <div className='lg:navbar-center flex flex-between items-center'>

                    <Link to="/" className="" onClick={handleMenuClick}> 
                    <TrueFocus
                        borderColor="orange"
                        pauseBetweenAnimations={1}
                    />
                    </Link>



                </div>
                <div>
                    <img className='h-[50px] w-[70px]' src={logo} alt="" />
                </div>
            </div>



            {/* For Large Device  */}
            <div className="navbar hidden lg:flex justify-evenly">
                <div>
                    <img className='h-[60px] w-[80px]' src={logo} alt="Nitto-Ponno-Bikroy-logo" />
                </div>
                <div className='p-0'>
                    <TrueFocus


                        borderColor="orange"
                        pauseBetweenAnimations={1}
                    />
                    {/* <Link to="/" className="btn btn-ghost normal-case text-4xl font-bold text-cyan-500 hover:bg-base-100">Nitto Ponno Bikroy</Link> */}
                </div>

                <div>
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Header
