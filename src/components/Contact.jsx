import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "../config/firebase"
import AddAndUpdateContact from './AddAndUpdateContact';
import useCustom from '../hooks/useCustom';
import { toast } from "react-toastify";

const Contact = ({ con }) => {
    const deleteContact = async (id) => {
        try {
            await deleteDoc((doc(db, "contacts", id)));
            toast.success("Contact Deleted");
        }
        catch (err) {
            console.log(err);
        }
    }
    // console.log(con);
    const { isOpen, onClose, onOpen } = useCustom();

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

                    <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
                    <IoMdTrash onClick={() => deleteContact(con.id)} className='text-orange cursor-pointer' />
                </div>
            </div>

            <AddAndUpdateContact isUpdate isOpen={isOpen} onClose={onClose} contact={con} />
        </>
    )
}

export default Contact
