import SuccessMessage from './SuccesMessage'
import { useContactForm } from './usseContacForm'

const ContactForm = () => {
  const { formRef, errors, sending, submitted, setSubmitted, handleSubmit } =
    useContactForm()

  return (
    <div className='contact-form'>
      {submitted ? (
        <SuccessMessage setSubmitted={setSubmitted} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleSubmit()
          }}
        >
          <div className='form-group'>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Tu Nombre'
              defaultValue={formRef.current.name}
              className={errors.name ? 'error' : ''}
              onChange={(e) => (formRef.current.name = e.target.value)}
            />
            {errors.name && (
              <span className='error-message'>{errors.name}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Correo Electrónico:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Tu Correo Electrónico'
              defaultValue={formRef.current.email}
              className={errors.email ? 'error' : ''}
              onChange={(e) => (formRef.current.email = e.target.value)}
            />
            {errors.email && (
              <span className='error-message'>{errors.email}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Mensaje:</label>
            <textarea
              id='message'
              name='message'
              placeholder='Tu Mensaje'
              defaultValue={formRef.current.message}
              className={errors.message ? 'error' : ''}
              onChange={(e) => (formRef.current.message = e.target.value)}
              rows='5'
            />
            {errors.message && (
              <span className='error-message'>{errors.message}</span>
            )}
          </div>

          <button
            type='submit'
            className={`submit-button ${sending ? 'sending' : ''}`}
            disabled={sending}
          >
            {sending ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
