import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SocialLinks from './SocilaLinks'

const ContactInfo = () => {
  return (
    <section className='contact-info'>
      <h2>Información de Contacto</h2>
      <p>Elige el método que prefieras para contactarnos</p>

      <address className='contact-methods'>
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
      </address>

      <SocialLinks />
    </section>
  )
}

export default ContactInfo
