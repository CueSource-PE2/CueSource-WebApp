import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Bidding from './Bidding/Bidding'

function Forum() {
    return (
        <section className='flex justify-between py-4 overflow-y-hidden'>
            <div className='left-0 flex flex-col justify-start relative w-[20%]'>
               <Sidebar />
            </div>

            <div className='w-[60%] flex flex-col px-5 py-1 items-center'>
                <input className=' bg-white opacity-90 w-full h-12 mb-5 flex text-md text-slate-800 font-medium item-center border-2 border-slate-500 focus:ring-1 focus:ring-slate-800 justify-start px-2 py-1 items-center placeholder:text-slate-400 placeholder:text-md rounded-md' placeholder='Search...' type="text" />
                <div className='w-full h-[530px] overflow-y-auto scroll-smooth flex flex-col items-center' style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
                    <Bidding />
                    <Bidding />
                    <Bidding />
                    <Bidding />
                    <Bidding />
                    <Bidding />
                    <Bidding />
                </div>
            </div>

            <div className='w-[20%] px-3 flex flex-col justify-end'>
            <div className=' flex flex-col items-start'>
                <div className="text-white text-base font-bold font-['Segoe UI'] mb-2">More Information:</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👍🏽 Code of Conduct</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">🤓 Privacy Policy</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👀 Terms of Use</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-4 active:scale-95 select-none">🔃 Refresh feed?</div>
                </div>
                <p className=' text-slate-500 text-sm'>©️ All rights reserved</p>
            </div>
        </section>
    )
}

export default Forum;