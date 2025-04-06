import React from 'react'
import s from './Contact.module.css'

const Contact = ({name,number, onDelete,id}) => {
  return (
    <div className={s.container}>
    <div >
        <p>{name}</p>
        <p>{number}</p>
        </div>
        <button type='button' className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>  
    
    </div>
  )
}

export default Contact