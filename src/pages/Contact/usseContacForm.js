import { useState, useRef } from 'react'

export const useContactForm = () => {
  const formRef = useRef({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formRef.current.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formRef.current.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formRef.current.email)) {
      newErrors.email = 'Email inválido'
    }
    if (!formRef.current.message.trim())
      newErrors.message = 'El mensaje es requerido'
    return newErrors
  }

  const handleSubmit = async () => {
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setSending(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSending(false)
      setSubmitted(true)
      formRef.current = { name: '', email: '', subject: '', message: '' }
    } else {
      setErrors(newErrors)
    }
  }

  return {
    formRef,
    submitted,
    setSubmitted,
    errors,
    sending,
    handleSubmit
  }
}
