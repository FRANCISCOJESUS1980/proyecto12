import { useContext, useState } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import './AddCharacter.css'

const AddCharacter = () => {
  const { dispatch } = useContext(FavoritesContext)

  const [name, setName] = useState('')
  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')
  const [ki, setKi] = useState('')
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

    if (
      !name.trim() ||
      !race.trim() ||
      !gender.trim() ||
      !ki.trim() ||
      !image
    ) {
      alert(
        'Por favor, completa todos los campos antes de agregar el personaje.'
      )
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      const newCharacter = {
        id: Date.now(),
        name,
        race,
        gender,
        ki,
        image: reader.result
      }

      dispatch({ type: 'ADD_FAVORITE', payload: newCharacter })

      setName('')
      setRace('')
      setGender('')
      setKi('')
      setImage(null)
      setPreview(null)
    }
  }

  return (
    <div className='add-character-container'>
      <h1>➕ Agregar Nuevo Personaje</h1>
      <form onSubmit={handleSubmit} className='add-character-form'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Nombre del personaje'
        />

        <input
          type='text'
          value={race}
          onChange={(e) => setRace(e.target.value)}
          placeholder='Raza del personaje'
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value=''>Selecciona género</option>
          <option value='Masculino'>Masculino</option>
          <option value='Femenino'>Femenino</option>
          <option value='Otro'>Otro</option>
        </select>

        <input
          type='number'
          value={ki}
          onChange={(e) => setKi(e.target.value)}
          placeholder='Nivel de Ki'
        />

        <input type='file' accept='image/*' onChange={handleImageChange} />

        {preview && (
          <img src={preview} alt='Vista previa' className='preview-image' />
        )}

        <button type='submit'>✅ Guardar Personaje</button>
      </form>
    </div>
  )
}

export default AddCharacter
