/*import { useState } from 'react'
import useDragonBallAPI from '../../hooks/useDragonBallAPI'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import DragonBallLoader from '../../components/Loader/Loader'
import { useCharacters } from '../../context/CharacterContext'
import './Home.css'

const Home = () => {
  const [page, setPage] = useState(1)

  const {
    characters: apiCharacters,
    loading,
    pagination
  } = useDragonBallAPI(page)

  const { characters: userCharacters } = useCharacters()

  const totalPages = pagination?.totalPages || 1
  const isLastPage = page === totalPages

  const combinedCharacters = isLastPage
    ? [...apiCharacters, ...userCharacters]
    : apiCharacters

  return (
    <div className='home-container'>
      <h1>Dragon Ball Characters</h1>

      {loading ? (
        <DragonBallLoader />
      ) : (
        <div className='character-list'>
          {combinedCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}

      <div className='pagination'>
        <button
          className='pagination-button'
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className='pagination-button'
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home*/

import { useState } from 'react'
import useDragonBallAPI from '../../hooks/useDragonBallAPI'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import DragonBallLoader from '../../components/Loader/Loader'
import { useCharacters } from '../../context/CharacterContext'
import './Home.css'

const Home = () => {
  const [page, setPage] = useState(1)

  const {
    characters: apiCharacters,
    loading,
    pagination
  } = useDragonBallAPI(page)

  const { characters: userCharacters } = useCharacters()

  const isFirstPage = page === 1

  const combinedCharacters = isFirstPage
    ? [...userCharacters, ...apiCharacters]
    : apiCharacters

  return (
    <div className='home-container'>
      <h1>Dragon Ball Characters</h1>

      {loading ? (
        <DragonBallLoader />
      ) : (
        <div className='character-list'>
          {combinedCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}

      <div className='pagination'>
        <button
          className='pagination-button'
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className='pagination-button'
          disabled={page === pagination.totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home
