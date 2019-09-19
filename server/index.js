require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const authController = require('./controllers/authController')
const postsController = require('./controllers/postsController')


// auth endpoints
app.get('/auth/user', authController.getUser)
app.post('/auth/register', authController.register)
app.post('/auth/login', authController.login)
app.post('/auth/logout', authController.logout)

// forum endpoints




// posts endpoints
app.get('/api/forums', postsController.getForums)
app.get('/api/posts/:topic', postsController.topics )
app.post('/api/posts/:topic', postsController.addPost)
app.delete('/api/posts/:id', postsController.deletePost)








app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})