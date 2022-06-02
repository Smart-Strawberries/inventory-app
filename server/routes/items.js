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
// Post
router.post('/items/:id',async (req, res) => {
  await Item.create(req.body, {
      where: {id: req.params.id}
  });
  res.send('Item created!');
});



// Update 
router.put('/items/:id',async (req, res) => {
  await Item.update(req.body, {
      where: {id: req.params.id}
  });
  res.send('Updated Items!');
});

 // delete
 router.delete('/items/:id', async(req,res)=>{
  await Item.destroy({
      where: {id: req.params.id}
  });
  res.send('Deleted!')
})





module.exports = router;
