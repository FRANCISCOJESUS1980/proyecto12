import { useState, useEffect } from 'react'

const API_URL = 'https://dragonball-api.com/api/characters'

const useDragonBallAPI = (page = 1, limit = 10) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: limit,
    totalPages: 0,
    currentPage: page
  })

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`)
        const data = await response.json()
        setCharacters(data.items)
        setPagination(data.meta)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [page, limit])

  return { characters, loading, error, pagination }
}

export default useDragonBallAPI
