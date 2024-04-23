/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

function CoverMenu({click, handleClick}) {
    return (
        <>
        <div className='h-screen w-screen -mx-10 -mt-5 bg-slate-900/80 flex flex-col justify-start items-start'>
        <img onClick={handleClick} className='hover:scale-[80%] ml-10 mt-5 mb-20 cursor-pointer scale-75 transition-all' src={click ? "" : "/images/menu-close.png"} alt="menu" />
            <div className='flex flex-col ml-10 gap-12 items-start justify-center text-white font-semibold text-4xl'>
             <NavLink onClick={handleClick} to='/forum'> <h2 className='cursor-pointer hover:translate-x-3 hover:scale-[102%] hover:text-slate-100 transition duration-300 ease-in-out'>Forum</h2></NavLink>
            <h2 className='cursor-pointer hover:translate-x-3 hover:scale-[102%] hover:text-slate-100 transition duration-300 ease-in-out'>About us</h2>
            <h2 className='cursor-pointer hover:translate-x-3 hover:scale-[102%] hover:text-slate-100 transition duration-300 ease-in-out'>Contact us</h2>
            <h2 className='cursor-pointer hover:translate-x-3 hover:scale-[102%] hover:text-slate-100 transition duration-300 ease-in-out'>Settings</h2>
            <h2 className='cursor-pointer hover:translate-x-3 hover:scale-[102%] hover:text-slate-100 transition duration-300 ease-in-out'>Log out</h2>
            </div>
        </div>
        </>
    )
}

export default CoverMenu
