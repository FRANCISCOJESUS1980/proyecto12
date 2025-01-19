import { useContext, useState } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import './AddCharacter.css'

const AddCharacter = () => {
  const { dispatch } = useContext(FavoritesContext)

  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '' || !image) {
      alert('Por favor, ingresa un nombre y selecciona una imagen.')
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      const newCharacter = {
        id: Date.now(),
        name,
        image: reader.result
      }

      dispatch({ type: 'ADD_FAVORITE', payload: newCharacter })

      setName('')
      setImage(null)
      setPreview(null)
    }
  }

  return (
    <div className='add-character-container'>
      <h1>Add New Character</h1>
      <form onSubmit={handleSubmit} className='add-character-form'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Nombre del personaje'
        />

        <input type='file' accept='image/*' onChange={handleImageChange} />

        {preview && (
          <img src={preview} alt='Vista previa' className='preview-image' />
        )}

        <button type='submit'>➕ Agregar Personaje</button>
      </form>
    </div>
  )
}

export default AddCharacter
