import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[60px] bg-white my-4 rounded-lg '>
            <div className='flex items-center justify-center gap-2 h-full text-xl font-medium'>
                <img src='/images/firebase.svg' alt='logo' />
                <h1>Firebase Contact App</h1>
            </div>
        </div>
    )
}

export default Navbar
