const newPost = document.getElementById('newPost')
const createCard = document.getElementById('createPost')
const createBlog = document.getElementById('createBlog')

newPost.addEventListener('click', (event) => {
  createCard.setAttribute('class', 'card my-3 visible')
})

createBlog.addEventListener('submit', (event) => {
  event.preventDefault()

  const {
    title: titleInput,
    content: contentInput
  } = event.target.elements

  const blogData = {
    title: titleInput.value,
    content: contentInput.value
  }

  fetch('/api/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogData)
  })
  .then(response => {
    if (response.status === 200) {
      window.location.href = '/dashboard'
      createCard.setAttribute('class', 'card my-3 invisible')
    }
  })
  .catch(err => console.log(err))
})