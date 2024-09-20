const renderDatalistInput = () => {
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

renderDatalistInput()