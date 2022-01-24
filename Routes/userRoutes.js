const express = require('express');
const User = require('../model/ToDoRegister');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const router = express.Router();


router.post("/register", async (req, res) => {
    const { body } = req;
  
    try {
      const password = await bcrypt.hash(body.password, 10);
  
      
      const user = await User.create({
        username: body.username,
        email: body.email,
        password,
      });   
      res.status(200).json(user);
    } catch (error) {
      return res.send(error);
   
    }
  
    
});
router.post ("/login", async (req, res) => {
    const { username, password } = req.body;

  try {
    // guard that password exists 💂
    if (!password) {
      //return res.status(500).send("No password given");
      throw "No password given"; // hole in the code flow
    }

    // 1. Find the user
    // find (array of documents) vs. findOne (one document) ?
    const user = await User.findOne({ username });

    // if user === null, there is no user
    // guard that the user exists 💂
    if (user === null) {
      //return res.status(500).send("No user found");
      throw "No user found";
    }

    const match = await bcrypt.compare(password, user.password);

    // if password does not match
    // guard if the password matches 💂
    if (!match) {
      throw "Password does not match";
    } 
    const token = jwt.sign(
      { sub: user._id, email:user.email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // send JWT to client
    res.status(200).cookie("valueofTOKEN", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    }).send({ message: "You are logged in", token});
  } catch (error) {
    return res.status(500).send(error);
  }
  });
  
  

module.exports = router;