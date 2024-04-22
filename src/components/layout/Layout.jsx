/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CoverMenu from '../Navbar/CoverMenu';

const Layout = ({ children }) => {
    const [click, setClick] = useState(true);

    function handleClick() {
        setClick(!click);
    }

    return (
        <section className='mt-5 mx-10 select-none'>
            {click ? <Navbar click={click} handleClick={handleClick} /> : ''}
            {click ? <div className='w-full h-full'>{children}</div> : <CoverMenu click={click} handleClick={handleClick} />}
        </section> 
    );
};

export default Layout;
