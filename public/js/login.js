const signupForm = document.getElementById('signup')
const loginForm = document.getElementById('login')

const handleSubmit = (event) => {
  event.preventDefault()

  const formId = event.target.id
  if (formId === "signup") {
    url = '/api/users'
  } else {
    url = '/api/users/login'
  }

  const {
    username: usernameInput, 
    password: passwordInput
  } = event.target.elements

  const userData = {
    username: usernameInput.value,
    password: passwordInput.value
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.status === 200) {
      window.location.href = '/'
    }
  })
  .catch(err => console.log(err))
}

signupForm.addEventListener('submit', handleSubmit)
loginForm.addEventListener('submit', handleSubmit)