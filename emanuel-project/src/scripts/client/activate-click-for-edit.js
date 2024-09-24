let avatarFileEdit
let thumbnailFileEdit
const inputFileEdit = document.querySelector('#input-avatar-edit')
inputFileEdit.addEventListener('change', (event) => {
  const file = event.target.files[0]
  const url = URL.createObjectURL(file)
  const img = document.querySelector('.client-icon-modal-edit')
  img.src = url
  avatarFileEdit = file
  img.classList.add("img-client")
})

const inputThumbEdit = document.querySelector('#input-thumbnail-edit')
inputThumbEdit.addEventListener('change', (event) => {
  const file = event.target.files[0]
  const url = URL.createObjectURL(file)
  const img = document.querySelector('.client-thumbnail-modal-edit')
  img.src = url
  thumbnailFileEdit = file
  img.classList.add("img-client")
})

let userSelected

function activateClickForEdit(id) {
  const eyeButton = document.querySelector(`#edit-${id}`)

  eyeButton.addEventListener('click', () => {
    const user = users.find(user => user.id === id)
    const avatarFileSelected = document.querySelector('.client-icon-modal-edit')
    avatarFileSelected.src = URL.createObjectURL(user.avatar)
    avatarFileSelected.classList.add("img-client")

    const thumbnailFileSelected = document.querySelector('.client-thumbnail-modal-edit')
    thumbnailFileSelected.style.display = "block"
    thumbnailFileSelected.classList.add("img-client")
    thumbnailFileSelected.src = URL.createObjectURL(user.thumbnail)

    const modal = document.querySelector('#edit-client-modal')
    modal.style.display = "flex"

    userSelected = user

    const name = document.querySelector('#input-name-edit')
    const email = document.querySelector('#input-email-edit')
    const phone = document.querySelector('#input-phone-edit')
    const plan = document.querySelector('#select-plan-edit')
    const status = document.querySelector('#select-status-edit')
    const maturity = document.querySelector('#select-maturity-edit')
    const discord = document.querySelector('#input-discord-edit')
    const skype = document.querySelector('#input-skype-edit')

    name.value = user.name
    email.value = user.email
    phone.value = user.phone
    plan.value = user.plan
    status.value = user.status
    maturity.value = user.maturity
    discord.value = user.discord
    skype.value = user.skype
  })
}

const formEdit = document.querySelector('#form-edit')

formEdit.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('#input-name-edit').value
  const email = document.querySelector('#input-email-edit').value
  const phone = document.querySelector('#input-phone-edit').value
  const plan = document.querySelector('#select-plan-edit').value
  const status = document.querySelector('#select-status-edit').value
  const maturity = document.querySelector('#select-maturity-edit').value
  const discord = document.querySelector('#input-discord-edit').value
  const skype = document.querySelector('#input-skype-edit').value

  const user = {
    ...userSelected,
    avatar: avatarFileEdit || userSelected.avatar,
    thumbnail: thumbnailFileEdit || userSelected.thumbnail,
    name,
    email,
    phone,
    plan,
    status,
    maturity,
    discord,
    skype
  }

  const index = users.findIndex(user => user.id === userSelected.id)
  users[index] = user
  formEdit.reset()
  const iconModalEdit = document.querySelector('.client-icon-modal-edit')
  iconModalEdit.src = "../images/icons/upload-icon.png"
  iconModalEdit.classList.remove("img-client")

  const thumbnailEdit = document.querySelector('.client-thumbnail-modal-edit')
  thumbnailEdit.src = ""
  thumbnailEdit.style.display = "none"
  thumbnailEdit.classList.remove("img-client")

  const modal = document.querySelector('#edit-client-modal')
  modal.style.display = "none"

  renderClients()
})

const btnCloseEdit = document.querySelector('#cancel-btn-edit')

btnCloseEdit.addEventListener('click', () => {
  const modal = document.querySelector('#edit-client-modal')
  modal.style.display = "none"
})

const emptyContainerEdit = document.querySelector('#empty-container-edit')
emptyContainerEdit.addEventListener('click', () => {
  const modal = document.querySelector('#edit-client-modal')
  modal.style.display = "none"
})