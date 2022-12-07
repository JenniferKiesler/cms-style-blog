const editBlog = document.getElementById('editBlog')

editBlog.addEventListener('submit', (event) => {
  event.preventDefault()

  const {
    title: titleInput,
    content: contentInput
  } = event.target.elements

  const updatedBlog = {
    title: titleInput.value,
    content: contentInput.value
  }
  console.log(updatedBlog)
  const blogid = event.target.dataset.blogid

  if (event.submitter.innerHTML === 'Update Post') {
    fetch(`/api/blogs/${blogid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBlog)
    })
    .then(response => {
      if (response.status === 200) {
        window.location.href = '/dashboard'
        editPost.setAttribute('class', 'card my-3 invisible')
      }
    })
    .catch(err => console.log(err))
  } else if (event.submitter.innerHTML === 'Delete') {
    console.log('hi')
    fetch(`/api/blogs/${blogid}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/dashboard'
        editPost.setAttribute('class', 'card my-3 invisible')
      }
    })
    .catch(err => console.log(err))
  }
})