import Swal from 'sweetalert2'

export const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: 'success',
    title,
    text,
    confirmButtonText: 'Aceptar'
  })
}

export const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonText: 'Entendido'
  })
}

export const showConfirmationAlert = async (title, text) => {
  const result = await Swal.fire({
    icon: 'question',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Sí, enviar',
    cancelButtonText: 'Cancelar'
  })
  return result.isConfirmed
}
