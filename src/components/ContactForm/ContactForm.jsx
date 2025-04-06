import React from 'react'
import { Form, Field, Formik, ErrorMessage} from 'formik'
import s from './ContactForm.module.css'
import * as Yup from "yup";

const ContactForm = ({onAdd}) => {
  const onSubmit = (values, { resetForm }) => {
    
    onAdd({
      name: values.name,
      number: values.number,
  
    });
   
    resetForm();
  };
    const initialValues = {
        name: '',
        number: ''
    }
    const re = /^\d{3}-\d{2}-\d{2}$/;
    const feedbackSchema = Yup.object().shape({
name: Yup.string().trim().min(3, "Too Short!").max(50, "Too Long!").required(),
number:Yup.string().trim().matches(re, 'Format must be 444-44-44').required(),
    });
    
  return (
    <div>
        <Formik validationSchema={feedbackSchema} onSubmit={onSubmit} initialValues ={initialValues}>
        <Form className={s.form} >
            <label className={s.label}> Name
            <Field  type="text" className={s.field} placeholder='Name' name ='name'/>
            <ErrorMessage name ='name' className={s.error} component={'div'}/>
            </label>
            <label className={s.label}> Number
            <Field type="text"  className={s.field}   placeholder='444-44-44' name ='number'/>
            <ErrorMessage name ='number'  className={s.error}  component={'div'}/>
            </label>
            <button  className={s.button} type='submit'>Add contact</button>
        </Form>
        </Formik>
        </div>
  )
}

export default ContactForm