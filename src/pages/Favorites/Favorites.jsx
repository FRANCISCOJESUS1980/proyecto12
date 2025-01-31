import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import './Favorites.css'

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
          <p>No Has Seleccionado Ningun Favorito!</p>
        )}
      </div>
    </div>
  )
}

export default Favorites
