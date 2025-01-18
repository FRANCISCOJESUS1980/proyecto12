import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const FavoritesContext = createContext()

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload]
    case 'REMOVE_FAVORITE':
      return state.filter((character) => character.id !== action.payload)
    default:
      return state
  }
}

const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [])

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { FavoritesContext, FavoritesProvider }
