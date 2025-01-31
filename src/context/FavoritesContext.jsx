import { createContext, useReducer, useEffect } from 'react'

const FavoritesContext = createContext()

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const updatedFavorites = [...state, action.payload]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return updatedFavorites
    }

    case 'REMOVE_FAVORITE': {
      const updatedFavorites = state.filter(
        (char) => char.id !== action.payload.id
      )
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return updatedFavorites
    }

    default:
      return state
  }
}

export const FavoritesProvider = ({ children }) => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
  const [favorites, dispatch] = useReducer(favoritesReducer, storedFavorites)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext }
