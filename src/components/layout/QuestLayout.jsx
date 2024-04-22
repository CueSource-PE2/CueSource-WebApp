/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Quests/ProfileNavbar'
import Sidebar from '../Quests/Sidebar'
import RightBar from '../Quests/RightBar'

function QuestLayout({children}) {
    return (
        <>
        <Navbar />
        <div className='flex justify-center gap-5 mx-5'>
            <div className='w-[20%] mr-5'><Sidebar /></div>
            <div className='w-[60%]'>{children}</div>
            <div className='flex items-end w-[20%]'><RightBar /></div>
        </div>
        </>
    )
}

export default QuestLayout