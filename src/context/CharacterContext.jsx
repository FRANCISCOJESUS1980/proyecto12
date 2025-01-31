import { createContext, useReducer, useContext, useMemo } from 'react'

const initialState = {
  characters: JSON.parse(localStorage.getItem('characters')) || []
}

const charactersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER': {
      const updatedCharacters = [...state.characters, action.payload]
      localStorage.setItem('characters', JSON.stringify(updatedCharacters))
      return { characters: updatedCharacters }
    }
    default:
      return state
  }
}

export const CharactersContext = createContext()

export const CharactersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialState)

  const contextValue = useMemo(
    () => ({ characters: state.characters, dispatch }),
    [state.characters]
  )

  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharacters = () => useContext(CharactersContext)
