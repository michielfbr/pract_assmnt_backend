const { Router } = require("express");
const Story = require("../models/").story;
const router = new Router();
const authMiddleware = require("../auth/middleware");

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

// Get story by id
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const story = await Story.findByPk(id);
  if (!story) {
    res.status(404).send("Story not found");
  } else {
    res.send(story);
  }
});

// Delete story by id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    // console.log("Delete the story with id", id)
    const toDelete = await Story.findByPk(id);
    // console.log("toDelete", toDelete)
    if (!toDelete) {
      res.status(404).send("Story not found");
    } else {
      const deleted = await toDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

// Create a story
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { name, content, imageUrl, spaceId } = req.body;
    console.log(req.body);

    if (!name || !spaceId ) {
      res.status(400).send("Oops, more parameters are required.");
    } else {
      const story = await Story.create({
        name: name,
        content: content,
        imageUrl: imageUrl,
        spaceId: spaceId
      });
      res.status(201).send({ message: "New story created", newStory: story });
    }
  } catch (e) {
      next(e);
     }
});


module.exports = router;