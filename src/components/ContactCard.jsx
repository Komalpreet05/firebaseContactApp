import React from 'react'

import Contact from './Contact';
import AddAndUpdateContact from './AddAndUpdateContact';
import useCustom from '../hooks/useCustom';



const ContactCard = ({ contacts }) => {
    const { isOpen, onClose, onOpen } = useCustom();

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
            <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />

        </>
    )
}

export default ContactCard
