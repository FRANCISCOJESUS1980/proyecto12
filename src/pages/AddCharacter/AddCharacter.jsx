import { showSuccessAlert, showErrorAlert } from '../../utils/alertService'
import AddCharacterForm from './AddCharacterForm'
import { useCharacters } from '../../context/CharacterContext'
import './AddCharacter.css'

const AddCharacter = () => {
  const { dispatch } = useCharacters()
  console.log('me renderizo en agregar personaje')
  const handleFormSubmit = async (formState, resetForm) => {
    if (!formState.name.trim()) {
      showErrorAlert(
        'Campo Requerido',
        'El nombre del personaje es obligatorio.'
      )
      return false
    }
    if (!formState.race.trim()) {
      showErrorAlert('Campo Requerido', 'La raza del personaje es obligatoria.')
      return false
    }
    if (!formState.gender) {
      showErrorAlert('Campo Requerido', 'Debes seleccionar un género.')
      return false
    }
    if (!formState.ki || formState.ki <= 0) {
      showErrorAlert(
        'Valor Inválido',
        'El nivel de Ki debe ser un número positivo.'
      )
      return false
    }
    if (!formState.preview) {
      showErrorAlert('Campo Requerido', 'Debes subir una imagen del personaje.')
      return false
    }

    try {
      const newCharacter = {
        id: Date.now(),
        name: formState.name,
        race: formState.race,
        gender: formState.gender,
        ki: formState.ki,
        image: formState.preview
      }

      dispatch({ type: 'ADD_CHARACTER', payload: newCharacter })
      showSuccessAlert('¡Éxito!', 'Personaje agregado correctamente.')

      resetForm()
      return true
    } catch (error) {
      showErrorAlert('Error', 'No se pudo agregar el personaje.')
      return false
    }
  }

  return (
    <div className='add-character-container'>
      <h1>➕ Agregar Nuevo Personaje</h1>
      <AddCharacterForm handleFormSubmit={handleFormSubmit} />
    </div>
  )
}

export default AddCharacter
