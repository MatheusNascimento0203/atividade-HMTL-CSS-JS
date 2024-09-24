function handleCloseEditModal(idClick, idClose) {
  const btn = document.querySelector(`#${idClick}`)

  btn.addEventListener('click', () => {
    const modal = document.querySelector(`#${idClose}`)
    modal.style.display = 'none'
  })
}