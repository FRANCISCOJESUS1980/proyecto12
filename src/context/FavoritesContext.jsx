import { createContext, useReducer, useContext } from 'react'

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const updatedFavorites = [...state.favorites, action.payload]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return { ...state, favorites: updatedFavorites }

    case 'REMOVE_FAVORITE':
      const filteredFavorites = state.favorites.filter(
        (char) => char.id !== action.payload.id
      )
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
      return { ...state, favorites: filteredFavorites }

    default:
      return state
  }
}

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)

  return (
    <FavoritesContext.Provider value={{ favorites: state.favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)
