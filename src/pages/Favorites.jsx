import { useContext } from 'react'
import PropTypes from 'prop-types'
import { FavoritesContext } from '../context/FavoritesContext'
import CharacterCard from '../components/CharacterCard'

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)

  return (
    <div>
      <h1>Favorite Characters</h1>
      <div className='character-list'>
        {favorites.length > 0 ? (
          favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
}

export default Favorites
