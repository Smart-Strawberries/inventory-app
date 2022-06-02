const express = require("express");
const router = express.Router();
const { Item } = require("../models");


router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/items/:id", async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
})

module.exports = router;

