const express = require('express')
const connect = require('./configs/db')
const userController = require('./controllers/user.controller')

const app = express()

app.use(express.json())

// Static
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')

// home page
app.get('', (req, res) => {
  res.render('index')
})

// blockchain
app.get('/upgrad/blockchain', (req, res) => {
  res.render('blockchain')
})

// form
app.get('/upgrad/form', (req, res) => {
  res.render('form.ejs')
})

// preview
app.get('/upgrad/preview', (req, res) => {
  res.render('preview.ejs')
})

// welcome
app.get('/upgrad/welcome', (req, res) => {
  res.render('welcome.ejs')
})

// profile
app.get('/profile', (req, res) => {
  res.render('profileHome.ejs')
})

// my courses
app.get('/profile/myCourses', (req, res) => {
  res.render('myCourses.ejs')
})

// user
app.use('/users', userController)

app.listen(5000, () => {
  // connect()
  console.log('Listening on port 5000');
})