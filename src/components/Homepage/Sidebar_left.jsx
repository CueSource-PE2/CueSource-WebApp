import React from 'react'

function Sidebar_left() {
    return (
        <>
        <div>
                <img className='scale-90 -ml-4 rounded-md mb-4' src="/images/forum_img.png" alt="" />
                <div className='absolute top-[27%] left-2 flex flex-col justify-center items-center gap-3'>
                <p className="text-white text-base font-normal font-['Open Sans']">The adventure awaits you!!</p>
                <div className='border-green-700 border-2 md:py-3 sm:py-1 bg-white md:px-5 sm:px-2 w-fit text-center text-green-700 md:rounded-md sm:rounded-sm font-medium md:hover:scale-105 hover:bg-green-00 hover:text-white hover:border-white hover:bg-green-800 transition-all delay-75 ease-in-out cursor-pointer'>Explore Quest</div>
                </div>
                </div>
                <div className="px-2 w-fit py-5 -ml-1 rounded-md bg-zinc-700 bg-opacity-75">
                    <p className="text-white text-base font-normal font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all hover:delay-100 ease-in-out cursor-pointer px-2">📜 Articles</p>
                    <p className="text-white text-base font-normal font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all hover:delay-100 ease-in-out cursor-pointer px-2">📽️ Resources</p>
                    <p className="text-white text-base font-normal font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all hover:delay-100 ease-in-out cursor-pointer px-2">💡 faq</p>
                    <p className="text-white text-base font-normal font-['Segoe UI'] py-2 flex gap-1 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all hover:delay-100 ease-in-out cursor-pointer px-2"><img className=' scale-75' src="/images/DEV_img_icon.png" alt="" /> Bookmarks</p>
                    <p className="text-white text-base font-normal font-['Segoe UI'] py-2 mb-2 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all hover:delay-100 ease-in-out cursor-pointer px-2">📖 Guides</p>
                    <p className="text-white text-base font-normal font-['Segoe UI'] py-2 mb-1 hover:bg-slate-400 hover:bg-opacity-15 hover:transition-all hover:delay-100 ease-in-out cursor-pointer px-2">🤔 Software comparisons</p>
                </div>
        </>
    )
}

export default Sidebar_left