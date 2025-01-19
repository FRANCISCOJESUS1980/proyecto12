import { useContext, useCallback } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

const useFavorites = () => {
  const { favorites, dispatch } = useContext(FavoritesContext)

  const addFavorite = useCallback(
    (character) => {
      dispatch({ type: 'ADD_FAVORITE', payload: character })
    },
    [dispatch]
  )

  const removeFavorite = useCallback(
    (id) => {
      dispatch({ type: 'REMOVE_FAVORITE', payload: id })
    },
    [dispatch]
  )

  return { favorites, addFavorite, removeFavorite }
}

export default useFavorites
