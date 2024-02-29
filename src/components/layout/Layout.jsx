import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <section className='mt-5 mx-10'>
        <Navbar />
      <div className='w-full h-full'>{children}</div>
      </section> 
  );
};

export default Layout;