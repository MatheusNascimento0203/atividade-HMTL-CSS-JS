function activateClickForEye(id) {
  const eyeButton = document.querySelector(`#eye-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    const username = user.name.split(" ")

    const modal = document.querySelector('#show-details-modal')

    modal.style.display = 'flex'

    modal.innerHTML = `
      <div id="empty-container-details"></div>
      <div class="container">
        <div class="thumbnail-container-details">
          <img src=${URL.createObjectURL(user.thumbnail)} alt="client-icon-modal" class="client-thumbnail-modal-details">
        </div>

        <div class="container-data">
          <div class="container-profile-basic">
            <div class="container-avatar-details">
              <img src=${URL.createObjectURL(user.avatar)} alt="client-icon-modal" class="client-icon-modal-details">
            </div>

            <div>
              <h2 class="client-name-details">${username[0]} ${username[1]}</h2>
              <p class="client-email-details">${user.email}</p>
            </div>
          </div>

          <div class="container-cards">
            <div class="card">
              <span>12 <img src="../images/icons/rappel-icon.png" alt=""><br>Rapel</span>
            </div>
            <div class="card">
              <span>10 <img src="../images/icons/fish-icon.png" alt=""><br>Pesca</span>
            </div>
            <div class="card">
              <span>6 <img src="../images/icons/cart-icon.png" alt=""><br>Raly</span>
            </div>
            <div class="card">
              <span>4 <img src="../images/icons/trail-icon.png" alt=""><br>Trilha</span>
            </div>
          </div>

          <div class="container-full-data">
            <div class="container-col-data">
              <div class="col-data">
                <h4>Nome completo</h4>
                <p>${user.name}</p>
              </div>
              <div>
                <h4>Plano</h4>
                <p>${user.plan}</p>
              </div>
              <div>
                <h4>Telefone</h4>
                <p>${user.phone}</p>
              </div>
              <div>
                <h4>Skype</h4>
                <p>${user.skype}</p>
              </div>
            </div>
            <div class="container-col-data">
              <div class="col-data">
                <h4>E-mail</h4>
                <p>${user.email}</p>
              </div>
              <div>
                <h4>Vencimento</h4>
                <p>${user.maturity}</p>
              </div>
              <div>
                <h4>Discord</h4>
                <p>${user.discord}</p>
              </div>
              <div>
                <h4>Data de cadastro</h4>
                <p>${user.createdAt}</p>
              </div>
            </div>
            <div class="container-col-data">
              <div class="col-data">
                <h4>Status</h4>
                <p>${user.status === 'true' ? 'Ativo' : 'Inativo'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    handleCloseEditModal('empty-container-details', 'show-details-modal')

    renderClients()
  })
}
