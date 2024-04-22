/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex justify-between items-center mx-8 mt-3 mb-5'>
                <NavLink to='https://cue-source-website.vercel.app/'><p className="text-white md:text-3xl sm:text-xl font-bold font-['Inter] cursor-pointer hover:text-green-500 transition-all duration-100 ease-in-out">CueSource</p></NavLink>
                <NavLink to='/'><div className=' border-2 border-green-700 rounded-md bg-white px-5 py-1 font-semibold text-green-700 cursor-pointer hover:scale-[102%] transition duration-300 ease-in-out hover:bg-green-700 hover:text-white'>Home</div></NavLink>            
        </div>
    )
}

export default Navbar;
