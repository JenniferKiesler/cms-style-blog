const logout = document.getElementById('logout')

logout.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('/api/users/logout', {
    method: 'POST'
  })
  .then(response => {
    //response.ok === true?
    if (response.ok) {
      window.location.href = '/login'
    }
  })
  .catch(err => console.log(err))
})