import { useState, useEffect } from 'react'
import './App.css'
import ConstactList from './ContactList.jsx'
import ContactForm from './ContactFrom.jsx'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch('http://127.0.0.1:5000/contacts')
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }
  return <>
  
  <ConstactList contacts={contacts} />
  <ContactForm />
  </>
  
  
}

export default App
