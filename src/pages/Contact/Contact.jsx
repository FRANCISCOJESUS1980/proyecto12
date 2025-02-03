import { useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import './Contact.css'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  console.log('me renderizo en contactos')
  return (
    <section className='contact-page'>
      <header className='contact-header'>
        <h1>📩 Contacto</h1>
        <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
      </header>

      <div className='contact-container'>
        <ContactInfo />
        <ContactForm submitted={submitted} setSubmitted={setSubmitted} />
        <ContactMap />
      </div>
    </section>
  )
}

export default Contact
