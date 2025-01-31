# 🐉 Dragon Ball Characters App

Aplicación web de personajes de Dragon Ball donde los usuarios pueden agregar sus propios personajes y guardarlos en favoritos.  
Desarrollado con **React, Context API, React Router y LocalStorage**.

## 🚀 Características

- 📌 **Lista de personajes:** Se muestran los personajes almacenados.
- ➕ **Agregar personajes personalizados.**
- ⭐ **Guardar personajes en favoritos.**
- 🔄 **Persistencia con LocalStorage** (los personajes agregados permanecen tras recargar la página).
- 📄 **Paginación** para recorrer los personajes.

## 🛠️ Tecnologías utilizadas

- React.js ⚛️
- React Router 🛤️
- Context API 🎛️
- useReducer y useContext 📌
- LocalStorage 📂
- Vite ⚡

## 📦 Instalación y uso

### 1️⃣ Clona el repositorio

```sh
git clone https://github.com/tu_usuario/dragon-ball-app.git
cd dragon-ball-app
2️⃣ Instala las dependencias
sh
Copiar
Editar
npm install
3️⃣ Ejecuta el proyecto
sh
Copiar
Editar
npm run dev
Abre http://localhost:5173 en el navegador.

📂 Estructura del Proyecto
bash
Copiar
Editar
src/
│── components/
│   ├── CharacterCard/
│   ├── Header/
│   ├── Loader/
│── context/
│   ├── CharactersContext.jsx
│   ├── FavoritesContext.jsx
│── pages/
│   ├── Home/
│   ├── Favorites/
│   ├── AddCharacter/
│   ├── Contact/
│── hooks/
│   ├── useDragonBallAPI.js
│── App.jsx
│── main.jsx
│── styles.css
🏗️ Optimización del Código
✅ Persistencia con LocalStorage
Se han implementado cambios para que los personajes agregados se guarden en LocalStorage.
Si el usuario recarga la página, los datos se mantendrán.

CharactersProvider (uso de LocalStorage)
jsx
Copiar
Editar
import { createContext, useReducer, useContext, useEffect } from 'react';

const initialState = {
  characters: JSON.parse(localStorage.getItem('characters')) || []
};

const charactersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      const newCharacters = [...state.characters, action.payload];
      localStorage.setItem('characters', JSON.stringify(newCharacters));
      return { ...state, characters: newCharacters };
    default:
      return state;
  }
};

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  return (
    <CharactersContext.Provider value={{ characters: state.characters, dispatch }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);

👨‍💻 Autor
Proyecto desarrollado por FRANCISCO JESUS 🤵
```
