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
      <h2>{character.name}</h2>
      <p>
        <strong>Raza:</strong> {character.race}
      </p>
      <p>
        <strong>Género:</strong> {character.gender}
      </p>

      <p>
        <strong>Ki:</strong> {character.ki}
      </p>
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
    image: PropTypes.string.isRequired,
    race: PropTypes.string,
    gender: PropTypes.string,
    ki: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
}

export default CharacterCard
