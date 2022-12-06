const newPost = document.getElementById('newPost')
const createCard = document.getElementById('createPost')
const createBlog = document.getElementById('createBlog')
const exitPost = document.getElementById('exitCreate')
const blogPostsContainer = document.getElementById('blogPosts')
const editPost = document.getElementById('editPost')
const fillTitle = document.getElementById('title')
const fillContent = document.getElementById('content')
const exitEdit = document.getElementById('exitEdit')

newPost.addEventListener('click', (event) => {
  createCard.setAttribute('class', 'card my-3 visible')
})

exitPost.addEventListener('click', (event) => {
  createCard.setAttribute('class', 'card my-3 invisible')
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

blogPostsContainer.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    editPost.setAttribute('class', 'card my-3 w-100 position-absolute top-50 start-50 translate-middle visible')

    const titleValue = event.target.childNodes[1].innerHTML
    fillTitle.setAttribute('value', titleValue)
    const contentValue = event.target.childNodes[3].innerHTML
    fillContent.textContent = contentValue
  }
})

exitEdit.addEventListener('click', (event) => {
  editPost.setAttribute('class', 'card my-3 w-100 position-absolute top-50 start-50 translate-middle invisible')
})