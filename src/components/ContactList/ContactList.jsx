import React from 'react'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({onDelete, contacts}) => {

  return (
    
         <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact name={contact.name} number={contact.number} id={contact.id} onDelete={onDelete} />
        </li>
      ))}
    </ul> 
  )
}

export default ContactList