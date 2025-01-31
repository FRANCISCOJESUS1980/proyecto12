import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Favorites from './pages/Favorites/Favorites.jsx'
import AddCharacter from './pages/AddCharacter/AddCharacter.jsx'
import Contact from './pages/Contact/Contact'
import Videos from './pages/PaginaVideos/videos.jsx'
import { FavoritesProvider } from './context/FavoritesContext'
import Header from './components/Header/Header.jsx'
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/add-character' element={<AddCharacter />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/videos' element={<Videos />} />
      </Routes>
    </FavoritesProvider>
  )
}

export default App
