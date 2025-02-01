import { createContext, useReducer, useContext, useEffect } from 'react'

const initialState = {
  characters: JSON.parse(localStorage.getItem('characters')) || []
}

const charactersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      const updatedCharacters = [...state.characters, action.payload]
      localStorage.setItem('characters', JSON.stringify(updatedCharacters))
      return { ...state, characters: updatedCharacters }

    case 'REMOVE_CHARACTER':
      const filteredCharacters = state.characters.filter(
        (char) => char.id !== action.payload
      )
      localStorage.setItem('characters', JSON.stringify(filteredCharacters))
      return { ...state, characters: filteredCharacters }

    default:
      return state
  }
}

export const CharactersContext = createContext()

export const CharactersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialState)

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(state.characters))
  }, [state.characters])

  return (
    <CharactersContext.Provider
      value={{ characters: state.characters, dispatch }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharacters = () => useContext(CharactersContext)
