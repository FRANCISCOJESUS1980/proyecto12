import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className='contact-container'>
      <h1>📩 Contacto</h1>
      {submitted ? (
        <p className='success-message'>
          ¡Gracias por tu mensaje! Te responderemos pronto. 😊
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Tu Nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Tu Correo Electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder='Tu Mensaje'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type='submit'>Enviar</button>
        </form>
      )}
    </div>
  )
}

export default Contact
