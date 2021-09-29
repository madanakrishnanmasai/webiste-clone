const express = require('express')
const User = require('../models/user.model')

const router = express.Router()

// create user
router.post('', async (req, res) => {
  const user = await User.create(req.body)

  return res.status(201).send({
    user
  })
})

module.exports = router

// get all user
router.get('', async (req, res) => {
  const user = await User.find().lean().exec()

  return res.status(200).send({
    user
  })
})