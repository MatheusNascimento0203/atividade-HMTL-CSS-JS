function activateClickForEye(id) {
  const eyeButton = document.querySelector(`#eye-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    console.log('eye', user);
    renderClients()
  })
}