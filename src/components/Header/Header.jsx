import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img
        src='/assets/imagenes/header.jpg'
        alt='Dragon Ball Header'
        className='header-image'
      />
      <nav className='nav'>
        <Link to='/'>🏠 Inicio</Link>
        <Link to='/favorites'>❤️ Favoritos</Link>
        <Link to='/add-character'>➕ Agregar Personaje</Link>
        <Link to='/videos'>🎥 Videos</Link>
        <Link to='/contact'>📩 Contacto</Link>
      </nav>
    </header>
  )
}

export default Header
