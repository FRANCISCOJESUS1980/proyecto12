import { FavoritesContext } from '../context/FavoritesContext'
import { useContext, useState } from 'react'

const AddCharacter = () => {
  const [name, setName] = useState('')
  const { dispatch } = useContext(FavoritesContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      dispatch({ type: 'ADD_FAVORITE', payload: { id: Date.now(), name } })
      setName('')
    }
  }

  return (
    <div>
      <h1>Add New Character</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Character Name'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddCharacter
