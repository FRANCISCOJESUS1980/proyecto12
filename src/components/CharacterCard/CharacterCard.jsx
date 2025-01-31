import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import './CharacterCard.css'

const CharacterCard = ({ character }) => {
  const { favorites, dispatch } = useContext(FavoritesContext)

  if (!character) return null

  const isFavorite = favorites.some((fav) => fav.id === character.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: character })
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: character })
    }
  }

  return (
    <article className='character-card'>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>
        <strong>Raza:</strong> {character.race || 'Desconocido'}
      </p>
      <p>
        <strong>Género:</strong> {character.gender || 'Desconocido'}
      </p>
      <p>
        <strong>Ki:</strong> {character.ki || 'Desconocido'}
      </p>
      <button className='characterbutton' onClick={toggleFavorite}>
        {isFavorite ? '❌ Eliminar de Favoritos' : '❤️ Agregar a Favoritos'}
      </button>
    </article>
  )
}

export default CharacterCard
