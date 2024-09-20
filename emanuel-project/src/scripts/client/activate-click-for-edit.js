function activateClickForEdit(id) {
  const eyeButton = document.querySelector(`#edit-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    console.log('edit', user);
    renderClients()
  })
}