import React from 'react'

const NoContact = () => {
    return (
        <div className='flex gap-3 items-center justify-center h-[75vh]'>
            <img src='/images/noContact.png' alt='no contact' />
            <p className='text-white text-lg'>No Contacts found</p>
        </div>
    )
}

export default NoContact
