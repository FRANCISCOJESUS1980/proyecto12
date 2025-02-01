import SuccessMessage from './SuccesMessage'
import { useContactForm } from './usseContacForm'
import {
  showSuccessAlert,
  showErrorAlert,
  showConfirmationAlert
} from '../../utils/alertService'

const ContactForm = () => {
  const { formRef, errors, sending, submitted, setSubmitted, handleSubmit } =
    useContactForm()

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!formRef.current.name.trim()) {
      return showErrorAlert('Campo Requerido', 'El nombre es obligatorio.')
    }
    if (!formRef.current.email.trim()) {
      return showErrorAlert(
        'Campo Requerido',
        'El correo electrónico es obligatorio.'
      )
    }
    if (!/\S+@\S+\.\S+/.test(formRef.current.email)) {
      return showErrorAlert(
        'Correo Inválido',
        'Ingresa un correo electrónico válido.'
      )
    }
    if (!formRef.current.message.trim()) {
      return showErrorAlert(
        'Campo Requerido',
        'El mensaje no puede estar vacío.'
      )
    }
    if (formRef.current.message.length < 10) {
      return showErrorAlert(
        'Mensaje Muy Corto',
        'El mensaje debe tener al menos 10 caracteres.'
      )
    }

    const confirm = await showConfirmationAlert(
      '¿Enviar mensaje?',
      '¿Estás seguro de que quieres enviar este mensaje?'
    )

    if (!confirm) return

    try {
      await handleSubmit()
      showSuccessAlert('¡Enviado!', 'Tu mensaje ha sido enviado con éxito.')
      setSubmitted(true)
    } catch (error) {
      showErrorAlert('Error', 'Hubo un problema al enviar el mensaje.')
    }
  }

  return (
    <div className='contact-form'>
      {submitted ? (
        <SuccessMessage setSubmitted={setSubmitted} />
      ) : (
        <form onSubmit={handleFormSubmit}>
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
