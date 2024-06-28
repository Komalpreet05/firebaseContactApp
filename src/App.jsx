
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "./config/firebase"
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useCustom from './hooks/useCustom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useCustom();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      }
      catch (err) {
        console.log(err)
      }
    }
    getContacts()

  }, [contacts])

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar />
        <Search onOpen={onOpen}></Search>
        <ContactCard contacts={contacts} isOpen={isOpen} onClose={onClose}></ContactCard>
        <AddAndUpdateContact isOpen={isOpen} onClose={onClose}></AddAndUpdateContact>
        <ToastContainer position='bottom-center'></ToastContainer>

      </div>

    </>
  )
}

export default App
