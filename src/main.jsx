import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CharactersProvider } from './context/CharacterContext'
import { FavoritesProvider } from './context/FavoritesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
)
