import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  return (
    <header className='header'>
      <img
        src='/assets/imagenes/header.jpg'
        alt='Dragon Ball Header'
        className='header-image'
      />
      <button
        className='menu-toggle'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to='/' onClick={toggleMenu}>
            🏠 Inicio
          </Link>
          <Link to='/favorites' onClick={toggleMenu}>
            ❤️ Favoritos
          </Link>
          <Link to='/add-character' onClick={toggleMenu}>
            ➕ Agregar Personaje
          </Link>
          <Link to='/videos' onClick={toggleMenu}>
            🎥 Videos
          </Link>
          <Link to='/contact' onClick={toggleMenu}>
            📩 Contacto
          </Link>
        </nav>
      </div>

      <nav className='nav-desktop'>
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
