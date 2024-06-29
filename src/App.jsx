
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { useState } from 'react'
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "./config/firebase"
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useCustom from './hooks/useCustom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoContact from './components/NoContact'


const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useCustom();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
        // const contactsSnapshot = await getDocs(contactsRef);
      }
      catch (err) {
        console.log(err)
      }
    }
    getContacts()

  }, [])


  const filterContacts = (e) => {
    console.log("filtering")
    const val = e.target.value;

    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter(con => con.name.toLowerCase().includes(val.toLowerCase()));
      console.log(filteredContacts)

      setContacts(filteredContacts);
      return filteredContacts;
    })



  }

  // console.log(...contacts + "j")
  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar />
        <Search filterContacts={filterContacts} onOpen={onOpen}></Search>
        {
          contacts.length < 1 ? <NoContact></NoContact> : <ContactCard contacts={contacts} isOpen={isOpen} onClose={onClose}></ContactCard>
        }

        <AddAndUpdateContact isOpen={isOpen} onClose={onClose}></AddAndUpdateContact>
        <ToastContainer position='bottom-center'></ToastContainer>

      </div>

    </>
  )
}

export default App
