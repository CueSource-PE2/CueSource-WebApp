/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

function CreateQuest({ viewQuestDetails }) {
    

    return (
        <>
        <div className='p-5 flex flex-col justify-center items-center rounded-md bg-slate-100 w-full mb-3 cursor-pointer'>
        <div className='flex justify-between items-center w-full  mb-3'>
        <div className='flex justify-start items-start w-full gap-2'>
            <img className='h-8 w-8 rounded-full object-cover' src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='flex flex-col items-start'>
                <div className="text-neutral-700 text-sm font-medium font-['Segoe UI']">Name- Bid Maker</div>
                <div className="text-neutral-600 text-xs font-normal font-['Segoe UI']">date: bid</div>
            </div>
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
            <button onClick={viewQuestDetails} className='px-5 py-1 text-white bg-green-700 hover:scale-[102%] active:scale-95 rounded-sm font-semibold border-2 border-green-700 hover:border-green-700 hover:bg-white hover:text-green-700 transition-all duration-300 ease-in-out'>Details</button>
            </div>
       </div>
        </>
    )
}

export default CreateQuest
