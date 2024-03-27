import React from 'react'

function Sidebar() {
    return (
        <>
        <div className='w-fit h-full py-3 px-4 rounded-md bg-zinc-700 bg-opacity-75 flex flex-col justify-between items-center'>
            <div className='flex flex-col gap-2 justify-center items-center mb-8 w-full'>
                <p className="text-white text-2xl font-bold font-['Segoe UI'] mb-2 text-left">Tags you follow</p>
                <div className='w-full rounded-md bg-black px-4 py-12 flex flex-col justify-start items-start gap-2'>
                    <div className='flex flex-col gap-3 text-md text-slate-300'>
                        <div className='flex'><p className='text-red-600'>#</p>csharp</div>
                        <div className='flex'><p className='text-blue-600'>#</p>dotnet</div>
                        <div className='flex'><p className='text-green-600'>#</p>programming</div>
                        <div className='flex'><p className='text-purple-600'>#</p>productivity</div>
                    </div>
                </div>
            </div>
            <img className='scale-90 rounded-md' src="/images/forum_img.png" alt="" />
            <div className='absolute top-[80%] left-10 flex flex-col justify-center items-center gap-3'>
                <p className="text-white text-base font-normal font-['Open Sans']">The adventure awaits you!!</p>
                <div className='border-green-700 border-2 md:py-2 sm:py-1 bg-white md:px-3 sm:px-2 w-fit text-center text-green-700 md:rounded-md sm:rounded-sm font-medium md:hover:scale-105 hover:bg-green-00 hover:text-white hover:border-white hover:bg-green-800 transition-all delay-75 ease-in-out cursor-pointer'>Create Quest</div>
                </div>
        </div>
        </>
    )
}

export default Sidebar
