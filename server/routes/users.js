const express = require("express");
const models = require("../models");
const router = express.Router();
const { User } = require("../models");


router.get("/user", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});



module.exports = router;

module.exports = router;
