import React from 'react'

import Contact from './Contact';
const ContactCard = ({ contacts }) => {

    return (
        <>
            <div className='mt-4 flex flex-col gap-4'>
                {
                    contacts.map((con) => {
                        return (
                            <Contact con={con} key={con.id} ></Contact>
                        )
                    })
                }
            </div>


        </>
    )
}

export default ContactCard
