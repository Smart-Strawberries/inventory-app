const express = require("express");
const models = require("../models");
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

router.get("/items/:id", async (req, res) => {
  res.json(await Item.findByPk(req.params.id))
});

router.put("/items/:id/update", async (req, res, next) => {
  try {
    await Item.update(req.body, {
      where: {id: req.params.id}
    });
    res.send('item update complete!')
  } catch (error) {
    next(error)
  }
});

module.exports = router;