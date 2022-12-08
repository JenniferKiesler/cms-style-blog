const logout = document.getElementById('logout')

logout.addEventListener('click', (event) => {
  event.preventDefault()

  //log out user
  fetch('/api/users/logout', {
    method: 'POST'
  })
  .then(response => {
    if (response.ok) {
      window.location.href = '/login'
    }
  })
  .catch(err => console.log(err))
})