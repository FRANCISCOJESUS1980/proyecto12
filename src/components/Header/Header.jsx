/*import { Link } from 'react-router-dom'
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
      </nav>
    </header>
  )
}

export default Header*/
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img
        src='/assets/imagenes/header.jpg' // Asegúrate de que la imagen exista en la ruta correcta
        alt='Dragon Ball Header'
        className='header-image'
      />
      <nav className='nav'>
        <Link to='/'>🏠 Inicio</Link>
        <Link to='/favorites'>❤️ Favoritos</Link>
        <Link to='/add-character'>➕ Agregar Personaje</Link>
      </nav>
    </header>
  )
}

export default Header
