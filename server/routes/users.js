const express = require("express");
const models = require("../models");
const router = express.Router();
const { User } = require("../models");


router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log(users)
    res.send(users);

  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res) => {
  res.json(await User.findByPk(req.params.id))
});



module.exports = router;