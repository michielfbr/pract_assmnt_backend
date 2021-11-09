const { Router } = require("express");
const Space = require("../models").space;
const Stories = require("../models").story;
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

  // Get space with stories by :id
router.get("/:spaceId", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.spaceId);
    console.log("Space requested with id:", spaceId)
    const spaceById = await Space.findByPk(spaceId);
    const stories = await Stories.findAll({ where: { spaceId: spaceId }})
    const response = {spaceById, stories}
    if(!spaceById){
      res.status(404).send("Space not found.");
    } else {
    res.status(200).send(response);
    }
  } catch (e) {
    console.log(e.message);
  }
});


module.exports = router;