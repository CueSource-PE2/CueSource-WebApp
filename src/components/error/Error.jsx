/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'; 

function Error() {
  return (
    <div className="main-content">
      <div className="book">
        <img id="animation" src="./images/bookAstro.png" alt="" height="265px" width="256px" />
      </div>
      <div className="error">
        <h1>Error 404</h1>
        <p>Looks like you are teleported to the wrong page</p>
       <NavLink to='/'> <button id="myButton" className='hover:scale-[102%] active:scale-95 cursor-pointer transition duration-300 ease-in-out border-2'>Go Back</button></NavLink>
      </div>
      <div className="rocket">
        <img src="./images/rocket_astro.png" alt="" height="300px" width="300px" />
      </div>
    </div>
  );
}

export default Error;
