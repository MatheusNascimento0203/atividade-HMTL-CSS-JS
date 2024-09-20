function activateClickForEye(id) {
  const eyeButton = document.querySelector(`#eye-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    const username = user.name.split(" ")

    const modal = document.querySelector('#show-details-modal')

    modal.style.display = 'flex'

    modal.innerHTML = `
      <div id="empty-container" class="empty-container"></div>
      <div class="container-modal">
        <img src="../images/image 2.png" alt="thumbnail">

        <div class="container-data">
          <div class="container-avatar">
            <img src="https://github.com/EmanuelBacalhau.png" alt="Avatar Modal" class="avatar-client-modal">
    
            <div class="container-client-modal-texts">
              <div class="container-titles">
                <h2 class="client-name">${username[0]} ${username[1]}</h2>
                <span class="client-email">${user.email}</span>
              </div>
            </div>
          </div>

          <div class="container-cards">
            <div class="card-client">
              <p>12 <img src="../images/icons/rappel-icon.png" alt="Icone Rapel"><br>Rapel</p>
            </div>
            <div class="card-client">
              <p>10 <img src="../images/icons/fish-icon.png" alt="Icone Rapel"><br>Pesca</p>
            </div>
            <div class="card-client">
              <p>6 <img src="../images/icons/cart-icon.png" alt="Icone Rapel"><br>Raly</p>
            </div>
            <div class="card-client">
              <p>4 <img src="../images/icons/trail-icon.png" alt="Icone Rapel"><br>Trilhas</p>
            </div>
          </div>

          <div class="container-details">
            <div class="card-data">
              <div class="card-detail">
                <span class="label-detail">Nome Completo</span>
                <span class="value-detail">${user.name}</span>
              </div>
              <div class="card-detail">
                <span class="label-detail">Plano</span>
                <span class="value-detail">${user.plan}</span>
              </div>
              <div class="card-detail">
                <span class="label-detail">Telefone</span>
                <span class="value-detail">${user.phone}</span>
              </div>
              <div class="card-detail">
                <span class="label-detail">Skype</span>
                <span class="value-detail">${user.skype}</span>
              </div>
            </div>
            <div class="card-data">
              <div class="card-detail">
                <span class="label-detail">E-mail</span>
                <span class="value-detail">${user.email}</span>
              </div>
              <div class="card-detail">
                <span class="label-detail">Vencimento</span>
                <span class="value-detail">${user.maturity}</span>
              </div>
              <div class="card-detail">
                <span class="label-detail">Discord</span>
                <span class="value-detail">${user.discord}</span>
              </div>
              <div class="card-detail">
                <span class="label-detail">Data de cadastro</span>
                <span class="value-detail">${user.createdAt}</span>
              </div>
            </div>
            <div class="card-data">
              <div class="card-detail">
                <span class="label-detail">Status</span>
                <span class="value-detail">${user.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    handleCloseEditModal()

    renderClients()
  })
}
