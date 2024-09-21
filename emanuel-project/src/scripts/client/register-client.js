let avatarFile
let thumbnailFile
const inputFile = document.querySelector('#input-avatar')
inputFile.addEventListener('change', (event) => {
  const file = event.target.files[0]
  const url = URL.createObjectURL(file)
  const img = document.querySelector('.client-icon-modal')
  img.src = url
  avatarFile = file
  img.classList.add("img-client")
})

const inputThumb = document.querySelector('#input-thumbnail')
inputThumb.addEventListener('change', (event) => {
  const file = event.target.files[0]
  const url = URL.createObjectURL(file)
  const img = document.querySelector('.client-thumbnail-modal')
  img.style.display = "block"
  img.src = url
  thumbnailFile = file
  img.classList.add("img-client")
})

const form = document.querySelector('#form-register')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.querySelector('#input-name').value
  const email = document.querySelector('#input-email').value
  const phone = document.querySelector('#input-phone').value
  const plan = document.querySelector('#select-plan').value
  const status = document.querySelector('#select-status').value
  const maturity = document.querySelector('#select-maturity').value
  const createdAt = new Date().toLocaleDateString()

  const user = {
    id: users.length + 1,
    avatar: avatarFile,
    thumbnail: thumbnailFile,
    initials: name.slice(0, 2).toUpperCase(),
    name,
    email,
    phone,
    plan,
    status,
    maturity,
    createdAt
  }

  users.push(user)
  form.reset()
  document.querySelector('.client-icon-modal').src = "../images/icons/upload-icon.png"
  document.querySelector('.client-thumbnail-modal').src = ""
  document.querySelector('.client-icon-modal').classList.remove("img-client")
  const img = document.querySelector('.client-thumbnail-modal')
  img.style.display = "none"
  img.classList.remove("img-client")

  const modal = document.querySelector('#register-client-modal')
  modal.style.display = "none"

  renderClients()
})

handleCloseEditModal("empty-container-register", 'register-client-modal')

const cancelBtn = document.querySelector('#cancel-btn')
cancelBtn.addEventListener('click', () => {
  const modal = document.querySelector(`#register-client-modal`)
  modal.style.display = 'none'
})