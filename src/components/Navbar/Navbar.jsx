import React from 'react'

function Navbar() {
    return (
        <div className=' flex justify-between items-center'>
            <div className='flex items-center md:gap-12 sm:gap-8'>
            <img className='hover:scale-90 cursor-pointer scale-75 transition-all' src="/images/menu-icon.png" alt="menu" />
            <p className="text-white md:text-3xl sm:text-xl font-bold font-['Inter] cursor-pointer hover:border-b-2 pb-1 transition-all duration-100 ease-in-out">CueSource</p>
            </div>
            <div className=' flex items-center justify-center md:gap-10 sm:gap-5'>
            <div className='flex justify-between items-center md:gap-5 sm:gap-1'>
                <div className='border-green-700 border-2 md:py-3 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium md:hover:scale-105 hover:bg-green-700 hover:text-white hover:border-white transition-all delay-100 ease-in-out cursor-pointer'>Create Quest</div>
                <div className='border-green-700 border-2 md:py-3 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium md:hover:scale-105 hover:bg-green-700 hover:text-white hover:border-white transition-all delay-100 ease-in-out cursor-pointer'>Explore Quest</div>
             </div>   
                <div className=' flex justify-center items-center gap-2'>
                    <img src="/images/bell-icon.png" alt="" />
                    <img className='h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
