import { useState, useEffect } from 'react'

const API_URL = 'https://dragonball-api.com/api/characters'

const useDragonBallAPI = (page = 1, limit = 20) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    let isMounted = true

    const fetchCharacters = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`)
        const data = await response.json()

        if (isMounted) {
          setCharacters(data.items)
          setPagination(data.meta)
        }
      } catch (err) {
        if (isMounted) setError(err.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchCharacters()

    return () => {
      isMounted = false
    }
  }, [page, limit])

  return { characters, loading, error, pagination }
}

export default useDragonBallAPI
