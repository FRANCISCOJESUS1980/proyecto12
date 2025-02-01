import { useAddCharacter } from '../../hooks/useAddCharacter'
import { showSuccessAlert, showErrorAlert } from '../../utils/alertService'
import './AddCharacter.css'

const AddCharacter = () => {
  const { state, handleChange, handleImageChange, handleSubmit, preview } =
    useAddCharacter()

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!state.name.trim()) {
      return showErrorAlert(
        'Campo Requerido',
        'El nombre del personaje es obligatorio.'
      )
    }
    if (!state.race.trim()) {
      return showErrorAlert(
        'Campo Requerido',
        'La raza del personaje es obligatoria.'
      )
    }
    if (!state.gender) {
      return showErrorAlert('Campo Requerido', 'Debes seleccionar un género.')
    }
    if (!state.ki || state.ki <= 0) {
      return showErrorAlert(
        'Valor Inválido',
        'El nivel de Ki debe ser un número positivo.'
      )
    }
    if (!preview) {
      return showErrorAlert(
        'Campo Requerido',
        'Debes subir una imagen del personaje.'
      )
    }

    try {
      await handleSubmit(e)
      showSuccessAlert('¡Éxito!', 'Personaje agregado correctamente.')
    } catch (error) {
      showErrorAlert('Error', 'No se pudo agregar el personaje.')
    }
  }

  return (
    <div className='add-character-container'>
      <h1>➕ Agregar Nuevo Personaje</h1>
      <form onSubmit={handleFormSubmit} className='add-character-form'>
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
