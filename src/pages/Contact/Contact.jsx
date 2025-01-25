import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Contact.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

L.Marker.prototype.options.icon = DefaultIcon

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const position = [40.4168, -3.7038]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setSending(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSending(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className='contact-page'>
      <div className='contact-header'>
        <h1>📩 Contacto</h1>
        <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
      </div>

      <div className='contact-container'>
        <div className='contact-info'>
          <h2>Información de Contacto</h2>
          <p>Elige el método que prefieras para contactarnos</p>

          <div className='contact-methods'>
            <div className='contact-method'>
              <MapPin className='icon' />
              <div>
                <h3>Ubicación</h3>
                <p>Madrid, España</p>
              </div>
            </div>

            <div className='contact-method'>
              <Phone className='icon' />
              <div>
                <h3>Teléfono</h3>
                <p>+34 123 456 789</p>
              </div>
            </div>

            <div className='contact-method'>
              <Mail className='icon' />
              <div>
                <h3>Email</h3>
                <p>info@tudominio.com</p>
              </div>
            </div>

            <div className='contact-method'>
              <Clock className='icon' />
              <div>
                <h3>Horario</h3>
                <p>Lun-Vie: 9:00-18:00</p>
              </div>
            </div>
          </div>

          <div className='social-links'>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='icon' />
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='icon' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter className='icon' />
            </a>
          </div>

          <div className='contact-map'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>Nuestra ubicación en Madrid</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className='contact-form'>
          {submitted ? (
            <div className='success-message'>
              <div className='success-icon'>✨</div>
              <h2>¡Gracias por tu mensaje!</h2>
              <p>Te responderemos lo antes posible. 😊</p>
              <button
                className='send-another'
                onClick={() => setSubmitted(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  placeholder='Tu Nombre'
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <span className='error-message'>{errors.name}</span>
                )}
              </div>

              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  placeholder='Tu Correo Electrónico'
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className='error-message'>{errors.email}</span>
                )}
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Asunto (opcional)'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <textarea
                  name='message'
                  placeholder='Tu Mensaje'
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
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
                {sending ? (
                  <span className='sending-text'>
                    <div className='spinner'></div>
                    Enviando...
                  </span>
                ) : (
                  <span className='submit-text'>
                    <Send className='icon' />
                    Enviar Mensaje
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
