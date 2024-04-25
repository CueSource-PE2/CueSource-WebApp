/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Quest_Details({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose(); // Notify the parent component that the details component is closed
    };

    return (
        <>
            {isOpen && (
                <div className='py-5 px-1 flex justify-center items-start rounded-md bg-[#111111] w-full h-full mb-3 cursor-pointer'>
                    <div className='p-5 flex flex-col justify-start items-start rounded-md bg-slate-200 w-full h-full cursor-pointer'>
                        <h2 className='text-green-700 font-medium text-base mb-5 border-b-2 border-green-700'>Quest Details:</h2>
                <div className='flex flex-col justify-start items-start gap-1 w-full mb-2'>
                    <p className='text-green-700 font-medium text-sm'>Quest Title:</p>
                    <div className='w-full py-2 px-4 rounded-md border-2 border-slate-300 text-slate-600 text-sm font-medium'>Lorem Ipsum</div>
                </div>
                <div className='flex flex-col justify-start items-start gap-1 w-full mb-2'>
                    <p className='text-green-700 font-medium text-sm'>Bid Description:</p>
                    <div className='w-full h-[70px] px-4 rounded-md border-2 border-slate-300 text-slate-600 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque rerum totam ipsam dicta, aut velit explicabo repellendus dolore dolorum corporis asperiores, expedita laborum voluptate, labore eligendi doloremque a nam!</div>
                </div>
                <div className='flex justify-between items-start w-full mb-5'>
                    <div className='flex flex-col justify-between items-start w-[40%] gap-1'>
                    <p className='text-green-700 font-medium text-sm'>Bid Price:</p>
                    <div className='w-full py-2 px-4 rounded-md border-2 border-slate-300 text-slate-600 text-sm font-medium'>$20 per hour</div>
                    </div>
                    <div className='flex flex-col justify-between items-start w-[40%] gap-1'>
                    <p className='text-green-700 font-medium text-sm'>Issue Link:</p>
                    <div className='w-full py-2 px-4 rounded-md border-2 border-slate-300 text-slate-600 text-sm font-medium'>https://dummylink_issue.github.com</div>
                    </div>
                </div>
                    <div className='flex flex-col justify-start items-start gap-1 w-full mb-12'>    
                        <div className='flex flex-col w-full justify-start items-start'>
                            <p className='text-green-700 font-medium text-sm mb-4'>Tags:</p>
                        <div className='flex justify-start items-start gap-2 px-5 py-1 h-[35px] bg-white w-fit text-slate-600 font-medium text-sm rounded-md'>
                        TensorFlow &nbsp; Python &nbsp; Machine Learning &nbsp; AI
                    </div>
                        </div>
                       
                    </div>
                    <div className='w-full flex justify-end items-end'>
                            <button onClick={handleClose} className='px-5 py-1 rounded-md text-white bg-green-700 hover:bg-green-800 active:scale-95 transition-all duration-300 ease-in-out font-semibold'>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Quest_Details;