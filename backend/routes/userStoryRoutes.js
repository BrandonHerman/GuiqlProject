const express = require('express');
const router = express.Router();

router.post('/createUserStory', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.createUserStory(body.story_id, body.title, body.description);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.post('/searchUserStoryById', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.createUserStory(body.story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
module.exports = router;