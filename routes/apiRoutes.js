const router = require("express").Router();
const db = require("../models");

router.get("/recipes", (req, res) => {
  
  db.Recipe.find({
    title: { $regex: new RegExp(req.query.q, "i") },
  })
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(422).end());
});

module.exports = router;
