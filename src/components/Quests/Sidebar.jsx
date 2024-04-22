/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <>
        <div className='py-5 px-2 w-80 flex flex-col justify-center items-start bg-black/90'>
            <NavLink to='/profile' className="text-white text-xl w-full font-semibold font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all ease-in-out cursor-pointer px-2 select-none active:scale-95"><h2>Profile</h2></NavLink>
            <NavLink to='/create-quests' className="text-white text-xl w-full font-semibold font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all ease-in-out cursor-pointer px-2 select-none active:scale-95 bg-slate-400 bg-opacity-20"><h2>Your Quests</h2></NavLink>
            <h2 className="text-white text-xl w-full font-semibold font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all ease-in-out cursor-pointer px-2 select-none active:scale-95">Your Bids</h2>
            <h2 className="text-white text-xl w-full font-semibold font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all ease-in-out cursor-pointer px-2 select-none active:scale-95">Account</h2>
            <h2 className="text-white text-xl w-full font-semibold font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all ease-in-out cursor-pointer px-2 select-none active:scale-95">Settings</h2>
        </div>
        </>
    )
}

export default Sidebar
