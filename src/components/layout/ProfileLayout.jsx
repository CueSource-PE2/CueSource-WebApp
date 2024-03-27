import React from 'react'

function ProfileLayout({children}) {
    return (
        <>
        <div className='flex justify-center items-center gap-5'>
            <Sidebar />
            <div>{children}</div>
        </div>
        </>
    )
}

export default ProfileLayout
