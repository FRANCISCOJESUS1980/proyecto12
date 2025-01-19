import { createContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'

const FavoritesContext = createContext()

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return state.some((fav) => fav.id === action.payload.id)
        ? state
        : [...state, action.payload]
    case 'REMOVE_FAVORITE':
      return state.filter((character) => character.id !== action.payload)
    default:
      return state
  }
}

const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [])

  const value = useMemo(() => ({ favorites, dispatch }), [favorites])

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { FavoritesContext, FavoritesProvider }
