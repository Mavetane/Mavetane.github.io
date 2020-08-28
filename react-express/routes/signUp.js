const usersModel = require('../models/usersModel');
const hashedPassword = require('../security/hashPassword');

const express = require('express');
const router = express.Router();

const users = (router) => {
  router.post('/users', async (req, res) => {
    const { email, name, hashedPassword } = req.body;
    const incryptedPassword = await hashedPassword(hashedPassword);
    console.log("I'm incrytped", incryptedPassword)
    // var compareEmail = await UsersModel.find()
    // for (var i in compareEmail) {
    //   if (req.body.email.toUpperCase().trim() == compareEmail[i].email.toUpperCase().trim()) {
    //     return res.status(500).json("Name already exist")
    //   }
    // }
    // if (req.body.email == "") {
    //   return res.status(400).json("Input field is required")
    // }
    var newUser = new usersModel({ email, name, incryptedPassword })
    try {
      const dbResult = await newUser.save();
      console.log(dbResult)
      res.send(201).json(dbResult)
    } catch (e) {
      console.log(e)
    }

  })

}

module.exports = { users };