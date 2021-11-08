const { Router } = require("express");
const Space = require("../models/").space;
const router = new Router();

// Get all spaces
router.get("/", async (req, res, next) => {
    try {
      const allSpaces = await Space.findAll();
      console.log("allSpaces requested")
      res.status(200).send(allSpaces);
    } catch (e) {
      console.log(e.message);
    }
  });


module.exports = router;