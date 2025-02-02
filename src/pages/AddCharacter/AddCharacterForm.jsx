import { useState } from 'react'

const AddCharacterForm = ({ handleFormSubmit }) => {
  const [formState, setFormState] = useState({
    name: '',
    race: '',
    gender: '',
    ki: '',
    preview: null
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormState((prevState) => ({ ...prevState, preview: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const resetForm = () => {
    setFormState({
      name: '',
      race: '',
      gender: '',
      ki: '',
      preview: null
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleFormSubmit(formState, resetForm)
  }

  return (
    <form onSubmit={onSubmit} className='add-character-form'>
      <input
        type='text'
        name='name'
        value={formState.name}
        onChange={handleChange}
        placeholder='Nombre del personaje'
      />

      <input
        type='text'
        name='race'
        value={formState.race}
        onChange={handleChange}
        placeholder='Raza del personaje'
      />

      <select name='gender' value={formState.gender} onChange={handleChange}>
        <option value=''>Selecciona género</option>
        <option value='Masculino'>Masculino</option>
        <option value='Femenino'>Femenino</option>
        <option value='Otro'>Otro</option>
      </select>

      <input
        type='number'
        name='ki'
        value={formState.ki}
        onChange={handleChange}
        placeholder='Nivel de Ki'
      />

      <input type='file' accept='image/*' onChange={handleImageChange} />

      {formState.preview && (
        <img
          src={formState.preview}
          alt='Vista previa'
          className='preview-image'
        />
      )}

      <button type='submit'>✅ Guardar Personaje</button>
    </form>
  )
}

export default AddCharacterForm
