import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { useCharacters } from '../../context/CharacterContext'
import './CharacterCard.css'

const CharacterCard = ({ character }) => {
  const { favorites, dispatch: favoritesDispatch } =
    useContext(FavoritesContext)
  const { characters, dispatch: charactersDispatch } = useCharacters()

  if (!character) return null

  const isFavorite = favorites.some((fav) => fav.id === character.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      favoritesDispatch({ type: 'REMOVE_FAVORITE', payload: character })
    } else {
      favoritesDispatch({ type: 'ADD_FAVORITE', payload: character })
    }
  }

  const handleDelete = () => {
    charactersDispatch({ type: 'REMOVE_CHARACTER', payload: character.id })
  }

  const isUserCreated = characters.some((char) => char.id === character.id)

  return (
    <article className='character-card'>
      <div className='image-container'>
        <img src={character.image} alt={character.name} />
      </div>

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

      {isUserCreated && (
        <button
          className='characterbutton delete-button'
          onClick={handleDelete}
        >
          🗑️ Eliminar Personaje
        </button>
      )}
    </article>
  )
}

export default CharacterCard
