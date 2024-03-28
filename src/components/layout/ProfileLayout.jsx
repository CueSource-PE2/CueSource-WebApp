import React from 'react'
import Navbar from '../Profile/ProfileNavbar'
import Sidebar from '../Profile/Sidebar'
import RightBar from '../Profile/RightBar'

function ProfileLayout({children}) {
    return (
        <>
        <Navbar />
        <div className='flex justify-center gap-5 mx-5'>
            <div className='w-[20%]'><Sidebar /></div>
            <div className='w-[60%]'>{children}</div>
            <div className='flex items-end w-[20%]'><RightBar /></div>
        </div>
        </>
    )
}

export default ProfileLayout
