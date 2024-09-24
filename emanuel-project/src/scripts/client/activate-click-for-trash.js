function activateClickForTrash(id) {
  const eyeButton = document.querySelector(`#trash-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.findIndex(user => user.id === id)
    users.splice(user, 1)
    renderClients()
  })
}
