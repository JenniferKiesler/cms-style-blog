const newPost = document.getElementById('newPost')

// links New Post button to createblog view
newPost.addEventListener('click', (event) => {
  window.location.href = '/createblog'
})