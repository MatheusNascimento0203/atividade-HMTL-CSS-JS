const renderDataListInput = () => {
  const input = document.querySelector('#client-input')
  const datalist = document.querySelector('#clients-list')

  if (input.value !== '') {
    users.filter(user => user.name.includes(input.value)).forEach(user => {
      const option = document.createElement('option')
      option.value = user.name
      datalist.appendChild(option)
    })
  } else {
    users.sort().forEach(user => {
      const option = document.createElement('option')
      option.value = user.name
      datalist.appendChild(option)
    })
  }
}

renderDataListInput()

const renderClients = () => {
  const clientsTable = document.querySelector('#clients-table')

  clientsTable.innerHTML = ''

  users.forEach(user => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="container-name">
        <div class="avatar-table">
          <span>${user.initials}</span>
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
        <span class=${user.status === true ? 'status-active' : 'status-inactive'}>${user.status === true ? 'Ativo' : 'Inativo'}</span>
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

function activateClickForEye(id) {
  const eyeButton = document.querySelector(`#eye-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    console.log('eye', user);
    renderClients()
  })
}

function activateClickForEdit(id) {
  const eyeButton = document.querySelector(`#edit-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    console.log('edit', user);
    renderClients()
  })
}

function activateClickForTrash(id) {
  const eyeButton = document.querySelector(`#trash-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    console.log('trash', user);
    renderClients()
  })
}

renderClients()