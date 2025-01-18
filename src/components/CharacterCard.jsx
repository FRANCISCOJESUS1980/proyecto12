import PropTypes from 'prop-types'
import { FavoritesContext } from '../context/FavoritesContext'
import { useContext } from 'react'

const CharacterCard = ({ character }) => {
  const { dispatch } = useContext(FavoritesContext)

  const addToFavorites = () => {
    dispatch({ type: 'ADD_FAVORITE', payload: character })
  }

  return (
    <div className='character-card'>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default CharacterCard
