/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ click, handleClick }) {

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center md:gap-12 sm:gap-8">
        <img
          onClick={handleClick}
          className="hover:scale-[80%] cursor-pointer scale-75 transition-all"
          src={click ? "/images/menu-icon.png" : "/images/menu-close.png"}
          alt="menu"
        />
        <NavLink to="https://cue-source-website.vercel.app/">
          <p className="text-white md:text-3xl sm:text-xl font-bold font-['Inter] cursor-pointer hover:text-green-500 transition-all duration-100 ease-in-out">
            CueSource
          </p>
        </NavLink>
      </div>
      <div className=" flex items-center justify-center md:gap-10 sm:gap-5">
        <div className="flex justify-between items-center md:gap-5 sm:gap-1">
         <NavLink to='/create-quests'>
         <div className="border-green-700 border-2 md:py-3 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium md:hover:scale-[102%] hover:bg-green-700 hover:text-white hover:border-white transition-all ease-in-out active:scale-95 cursor-pointer">
            Create Quest
          </div>
         </NavLink>
          <NavLink to="/forum">
            <div className="border-green-700 border-2 md:py-3 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium md:hover:scale-[102%] hover:bg-green-700 hover:text-white hover:border-white transition-all ease-in-out active:scale-95 cursor-pointer">
              Explore Quest
            </div>
          </NavLink>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <img src="/images/bell-icon.png" alt="" />
          <NavLink to="/profile">
            <img
              className="h-10 w-10 rounded-full object-cover hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
