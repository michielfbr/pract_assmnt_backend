const { Router } = require("express");
const Story = require("../models/").story;
const router = new Router();

// Get all stories
router.get("/", async (req, res, next) => {
    try {
      const allStories = await Story.findAll();
      console.log("allSpaces requested")
      res.status(200).send(allStories);
    } catch (e) {
      console.log(e.message);
    }
  });


module.exports = router;