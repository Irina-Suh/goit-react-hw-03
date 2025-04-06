import { useEffect, useState } from 'react'
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox"
 import ContactList from "./components/ContactList/ContactList"
import './App.css'
import initialContacts from './components/data/contacts.json'
import { nanoid } from 'nanoid'

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("savedContact");
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [filter, setFilter] = useState('');



  useEffect(() => {
    localStorage.setItem("savedContact", JSON.stringify(contacts));
  }, [contacts]);




 const addContact = (newContacts) => {
 
  setContacts((prevContacts) => {
   
    return [...prevContacts, {id: nanoid() ,...newContacts}];
  });
};
const deleteContact = (contactId) => {
  
  setContacts((prevContacts) => {
    
    return prevContacts.filter((contact) => contact.id !== contactId);
  });
};

const visibleContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);


  return (
    <div className='container'>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts={visibleContacts}  onDelete={deleteContact}   /> 

</div>

  )
}

export default App
