//import { useState } from 'react'
import ContactForm from "./components/ContactForm"
import SearchBox from "./components/SearchBox"
import ContactList from "./components/ContactList"
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <ContactForm />
<SearchBox />
<ContactList/>
    </>
  )
}

export default App
