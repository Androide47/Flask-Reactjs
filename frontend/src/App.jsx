import { useState, useEffect } from 'react'
import './App.css'
import ConstactList from './ContactList.jsx'
import ContactForm from './ContactFrom.jsx'

function App() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch('http://127.0.0.1:5000/contacts')
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  const toggleModal = () => {
    setIsModalOpen(false)
  }
  const openCreateModal = () => {
    if (!isModalOpen)  setIsModalOpen(true)
  }
  return <div className='bg-light'>
  
  <ConstactList contacts={contacts} />
  <button className="btn btn-primary mb-3" onClick={openCreateModal}>Create</button>
  {isModalOpen && <div className='modal-overlay'>
    <button className='btn btn-danger mb-3' onClick={toggleModal}>Close</button>
    <ContactForm />
    </div>}
  </ div>
  
  
}

export default App
