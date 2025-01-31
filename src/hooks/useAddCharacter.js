import { useReducer, useRef, useState } from 'react'
import { useCharacters } from '../context/CharacterContext'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

const initialState = {
  name: '',
  race: '',
  gender: '',
  ki: ''
}

const formReducer = (state, action) => {
  return { ...state, [action.field]: action.value }
}

export const useAddCharacter = () => {
  const { dispatch: dispatchCharacters } = useCharacters()
  const { dispatch: dispatchFavorites } = useContext(FavoritesContext)

  const [state, dispatchForm] = useReducer(formReducer, initialState)
  const imageRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    dispatchForm({ field: e.target.name, value: e.target.value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      imageRef.current = file
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !state.name.trim() ||
      !state.race.trim() ||
      !state.gender.trim() ||
      !state.ki.trim() ||
      !imageRef.current
    ) {
      alert(
        'Por favor, completa todos los campos antes de agregar el personaje.'
      )
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(imageRef.current)
    reader.onloadend = () => {
      const newCharacter = {
        id: Date.now(),
        ...state,
        image: reader.result
      }

      dispatchCharacters({ type: 'ADD_CHARACTER', payload: newCharacter })

      dispatchFavorites({ type: 'ADD_FAVORITE', payload: newCharacter })

      dispatchForm({ field: 'name', value: '' })
      dispatchForm({ field: 'race', value: '' })
      dispatchForm({ field: 'gender', value: '' })
      dispatchForm({ field: 'ki', value: '' })
      imageRef.current = null
      setPreview(null)
    }
  }

  return { state, handleChange, handleImageChange, handleSubmit, preview }
}
