import PropTypes from 'prop-types'
import useFavorites from '../../hooks/useFavorites'
import './CharacterCard.css'

const CharacterCard = ({ character }) => {
  const { addFavorite } = useFavorites()

  if (!character) return null

  return (
    <div className='character-card'>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <button onClick={() => addFavorite(character)}>
        ❤️ Add to Favorites
      </button>
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
