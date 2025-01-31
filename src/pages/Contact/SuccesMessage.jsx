const SuccessMessage = ({ setSubmitted }) => {
  return (
    <div className='success-message'>
      <div className='success-icon'>✨</div>
      <h2>¡Gracias por tu mensaje!</h2>
      <p>Te responderemos lo antes posible. 😊</p>
      <button className='send-another' onClick={() => setSubmitted(false)}>
        Enviar otro mensaje
      </button>
    </div>
  )
}

export default SuccessMessage
