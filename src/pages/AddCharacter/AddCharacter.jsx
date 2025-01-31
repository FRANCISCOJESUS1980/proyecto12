import { useAddCharacter } from '../../hooks/useAddCharacter'
import './AddCharacter.css'

const AddCharacter = () => {
  const { state, handleChange, handleImageChange, handleSubmit, preview } =
    useAddCharacter()

  return (
    <div className='add-character-container'>
      <h1>➕ Agregar Nuevo Personaje</h1>
      <form onSubmit={handleSubmit} className='add-character-form'>
        <input
          type='text'
          name='name'
          value={state.name}
          onChange={handleChange}
          placeholder='Nombre del personaje'
        />

        <input
          type='text'
          name='race'
          value={state.race}
          onChange={handleChange}
          placeholder='Raza del personaje'
        />

        <select name='gender' value={state.gender} onChange={handleChange}>
          <option value=''>Selecciona género</option>
          <option value='Masculino'>Masculino</option>
          <option value='Femenino'>Femenino</option>
          <option value='Otro'>Otro</option>
        </select>

        <input
          type='number'
          name='ki'
          value={state.ki}
          onChange={handleChange}
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
