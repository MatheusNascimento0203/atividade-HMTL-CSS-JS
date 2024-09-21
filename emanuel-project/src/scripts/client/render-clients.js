const renderClients = () => {
  const clientsTable = document.querySelector('#clients-table')

  clientsTable.innerHTML = ''

  users.forEach(user => {
    console.log(user);

    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="container-name">
        <div class="avatar-table">
          <img src=${URL.createObjectURL(user.avatar)} alt="client-icon-modal" class="client-thumbnail-modal-details">
        </div>

        <div class="container-name-and-email">
          <span class="name-table">${user.name}</span>
          <span class="email-table">${user.email}</span>
        </div>
      </td>
      <td>
        <span>${user.phone}</span>
      </td>
      <td>
        <span>${user.plan}</span>
      </td>
      <td>
        <span class=${user.status === 'true' ? 'status-active' : 'status-inactive'}>${user.status === 'true' ? 'Ativo' : 'Inativo'}</span>
      </td>
      <td>
        <span>10</span>
      </td>
      <td class="container-btn-table">
        <button id=${"eye-" + user.id} class="btn-edit">
          <img src="../images/icons/eye-icon.png" alt="edit-icon">
        </button>
        <button id=${"edit-" + user.id} class="btn-edit">
          <img src="../images/icons/edit-icon.png" alt="edit-icon">
        </button>
        <button  id=${"trash-" + user.id} class="btn-edit">
          <img src="../images/icons/trash-icon.png" alt="edit-icon">
        </button>
      </td>
    `

    clientsTable.appendChild(tr)

    activateClickForEye(user.id)
    activateClickForEdit(user.id)
    activateClickForTrash(user.id)
  })
}

renderClients()