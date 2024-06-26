/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

function Bidding() {

    const [hover, setHover] = useState(false)

    function hoverPopup() {
        setHover(!hover);
    }

        const [notifications, setNotifications] = useState([]);
      
        const removeNotif = (id) => {
          setNotifications((pv) => pv.filter((n) => n.id !== id));
        };
    
    return (
        <>
        <div className='relative p-5 flex flex-col justify-center items-start rounded-md bg-slate-100 w-full mb-3 cursor-pointer'>
            <div className='flex justify-between items-center w-full mb-3'>
            <div className='flex justify-start items-start w-full gap-2'>
            <img className='h-8 w-8 rounded-full object-cover' src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='flex flex-col items-start'>
                <div className="text-neutral-700 text-sm font-medium font-['Segoe UI']">Name- Bid Maker</div>
                <div className="text-neutral-600 text-xs font-normal font-['Segoe UI']">date: bid</div>
            </div>
            </div>
                <div className='flex justify-center items-center gap-2'>
                <div onClick={hoverPopup} className={`border-green-700 border-2 md:py-2 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium hover:scale-[102%] transition duration-300 ease-in-out cursor-pointer active:scale-95 ${hover ? `hidden` : `visible`}`}>Bid?</div>
                <div className={`flex gap-2 justify-center items-center ${hover ? `visible` : `hidden`}`}>
                    <input type="date" placeholder='Enter Time' className='border-green-700 border-2 md:py-2 sm:py-1 bg-white md:px-3 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium' />
                    <input type="number" placeholder='Enter value in Dollars $' className='border-green-700 border-2 md:py-2 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium' />
                    <div onClick={() => {
                        hoverPopup();
                        setNotifications((pv) => [generateRandomNotif(), ...pv]);
                    }} className={`border-green-700 border-2 md:py-2 sm:py-1 bg-white md:px-5 sm:px-2 text-center text-green-700 md:rounded-md sm:rounded-sm font-medium hover:scale-[102%] transition duration-300 ease-in-out cursor-pointer active:scale-95`}>Place?</div>
                </div>
                <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
                <div className='border-green-700 border-2 md:py-2 sm:py-1 bg-green-700 md:px-5 sm:px-2 text-center text-white md:rounded-md sm:rounded-sm font-medium hover:scale-[102%] transition duration-300 ease-in-out cursor-pointer active:scale-95'>Details</div>
                </div>
            </div>

            <div className='pl-10 flex flex-col justify-start items-start'>
                <p className='text-black text-xl font-bold mb-1'>Bid Description</p>
                <p className="text-black text-base font-semibold font-['Segoe UI'] mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis incidunt enim.</p>
                <div className='flex gap-1 justify-center items-center mb-4'>
                    <p className="text-black text-base font-bold font-['Segoe UI']">Bid Price | </p>
                    <p className="text-black text-base font-bold font-['Segoe UI']">Current Lowest Bid</p>
                </div>
                <div className='flex gap-2 text-md text-slate-800'>
            <div className='flex'><p className='text-red-600'>#</p>csharp</div>
            <div className='flex'><p className='text-blue-600'>#</p>dotnet</div>
            <div className='flex'><p className='text-green-600'>#</p>programming</div>
            <div className='flex'><p className='text-purple-600'>#</p>productivity</div>
        </div>
            </div>
            </div>
        </>
    )
}

export default Bidding

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-4 flex items-start rounded-sm gap-2 text-sm font-medium shadow-lg text-white bg-green-700 pointer-events-auto"
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

const generateRandomNotif = () => {
    return { text: `Bid placed successfully` };
  };
