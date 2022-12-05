const router = require('express').Router()
const {User, Blog, Comment} = require('../models')

router.get('/', async (req, res) => {
    try {
        let blogs = await Blog.findAll({
            include: User
        })
        blogs = blogs.map(blog => blog.get({plain: true}))
        console.log(req.originalUrl)
        res.render('home', {
            blogs,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// router.get('/dashboard', async (req, res) => {
//     try {
//         let blogs = await Blog.findOne({
//             where: {
//                 username: req.session.user_id
//             },
//             include: User
//         })
//         blogs = blogs.map(blog => blog.get({plain: true}))
//         console.log(blogs)
//         res.render('dashboard', {
//             blogs,
//             logged_in: req.session.logged_in
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

router.get('/login', (req, res) => {
    res.render('login')
  })

module.exports = router