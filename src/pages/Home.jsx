import PropTypes from 'prop-types'
import useDragonBallAPI from '../hooks/useDragonBallAPI.js'
import CharacterCard from '../components/CharacterCard'

const Home = () => {
  const { characters, loading } = useDragonBallAPI()

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Dragon Ball Characters</h1>
      <div className='character-list'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

Home.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  loading: PropTypes.bool
}

export default Home
