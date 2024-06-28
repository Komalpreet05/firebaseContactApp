import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from "formik"
import { doc, addDoc, updateDoc, collection } from 'firebase/firestore'
import { db } from "../config/firebase"
import { toast } from 'react-toastify'

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    // console.log(con);
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose();
            toast.success("Contact Added")
        }
        catch (err) {
            console.log(err)
        }
    }


    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("Changes Saved Successfully");
        }
        catch (err) {
            console.log(err)
        }
    }
    // console.log(isUpdate)
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} className="text-white">
                <Formik initialValues={
                    isUpdate ?
                        {
                            name: contact.name,
                            email: contact.email
                        } : {
                            name: "",
                            email: ""
                        }}
                    onSubmit={(values) => {
                        console.log(values)
                        isUpdate ? updateContact(values, contact.id) :
                            addContact(values)
                    }}
                >
                    <Form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='name'>Name</label>
                            <Field name="name" className="border h-10 " />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='Email'>Email</label>
                            <Field name="email" type="email" className="border h-10 " />
                        </div>
                        <button className='bg-orange px-3 py-1.5 border self-end rounded-lg'>
                            {isUpdate ? "Update" : "Add"} Contact
                        </button>
                    </Form>
                </Formik>

            </Modal>
        </div>
    )
}

export default AddAndUpdateContact
