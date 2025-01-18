import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AddCharacter from './pages/AddCharacter'
import { FavoritesProvider } from './context/FavoritesContext'
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/favorites'>Favorites</Link>
          <Link to='/add-character'>Add Character</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/add-character' element={<AddCharacter />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}

export default App
