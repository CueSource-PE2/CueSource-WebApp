// eslint-disable-next-line no-unused-vars
import React from 'react'

function RightBar() {
    return (
        <>
        <div className='px-3 flex flex-col justify-end w-full'>
                <div className=' flex flex-col items-start'>
                <div className="text-white text-base font-bold font-['Segoe UI'] mb-2">More Information:</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👍🏽 Code of Conduct</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">🤓 Privacy Policy</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-2 active:scale-95 select-none">👀 Terms of Use</div>
                <div className="pl-2 pr-10 py-2 w-full text-white text-base font-normal font-['Segoe UI'] bg-slate-400 bg-opacity-15 hover:transition-all ease-in-out cursor-pointer rounded-md hover:bg-zinc-400 hover:bg-opacity-40 mb-4 active:scale-95 select-none">🔃 Refresh feed?</div>
                </div>
                <p className=' text-slate-500 text-sm'>©️ All rights reserved</p>
            </div>
        </>
    )
}

export default RightBar
