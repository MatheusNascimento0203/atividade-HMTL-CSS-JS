function handleCloseEditModal() {
  const btn = document.querySelector('#empty-container')

  btn.addEventListener('click', () => {
    const modal = document.querySelector('#show-details-modal')
    console.log(modal);

    modal.style.display = 'none'
  })
}