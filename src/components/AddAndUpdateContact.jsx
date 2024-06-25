import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from "formik"
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../config/firebase"

const AddAndUpdateContact = ({ isOpen, onClose }) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} className="text-white">
                <Formik initialValues={{
                    name: "",
                    email: ""
                }}
                    onSubmit={(values) => {
                        console.log(values)
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
                            Add Contact
                        </button>
                    </Form>
                </Formik>

            </Modal>
        </div>
    )
}

export default AddAndUpdateContact
