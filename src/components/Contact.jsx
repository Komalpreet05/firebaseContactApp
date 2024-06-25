import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "../config/firebase"
const Contact = ({ con, isOpen, onClose }) => {
    const deleteContact = async (id) => {
        try {
            await deleteDoc((doc(db, "contacts", id)))
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div key={con.id} className='bg-yellow flex p-1 justify-between rounded-lg'>
                <div className='flex items-center gap-1'>
                    <HiOutlineUserCircle className='text-orange text-4xl' />
                    <div className='flex items-start flex-col'>
                        <h2 className='text-md'>{con.name}</h2>
                        <p className='text-sm'>{con.email}</p>
                    </div>
                </div>
                <div className='flex items-center text-3xl'>

                    <RiEditCircleLine className='cursor-pointer' />
                    <IoMdTrash onClick={() => deleteContact(con.id)} className='text-orange cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Contact
