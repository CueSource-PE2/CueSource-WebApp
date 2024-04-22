/* eslint-disable no-unused-vars */
import React from 'react'

function Card() {
    return (
       <div className='p-5 flex flex-col justify-center items-center rounded-md bg-slate-100 w-full mb-3 cursor-pointer hover:scale-[101%] transition-all duration-300'>
        <div className='flex justify-start items-start w-full gap-2 mb-3'>
            <img className='h-8 w-8 rounded-full object-cover' src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='flex flex-col items-start'>
                <div className="text-neutral-700 text-sm font-medium font-['Segoe UI']">Arlene McCoy</div>
                <div className="text-neutral-600 text-xs font-normal font-['Segoe UI']">May 12</div>
            </div>
        </div>
        <div className=' flex flex-col mb-5'>
        <div className="text-neutral-900 text-2xl font-bold font-['Segoe UI'] mb-2">There is an issue with the deployment of my project in Vercel</div>
        <div className='flex gap-2 text-md text-slate-800'>
            <div className='flex'><p className='text-red-600'>#</p>csharp</div>
            <div className='flex'><p className='text-blue-600'>#</p>dotnet</div>
            <div className='flex'><p className='text-green-600'>#</p>programming</div>
            <div className='flex'><p className='text-purple-600'>#</p>productivity</div>
        </div>
        </div>
        <div className='px-5 flex justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-2'>
                <img className='' src="/images/emoticons.png" alt="" />
                <p className="text-neutral-800 text-sm font-medium font-['Segoe UI']">19 interactions</p>
            </div>
            <div className='flex gap-1 items-center'>
                <p className="text-neutral-800 text-sm font-medium font-['Segoe UI']">Bookmark!</p>
                <img src="/images/bookmark.png" alt="" />
            </div>
        </div>
       </div>
    )
}

export default Card
