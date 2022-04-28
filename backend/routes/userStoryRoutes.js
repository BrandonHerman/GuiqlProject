const express = require('express');
const router = express.Router();
const User_story = require('../models/user_story');

//test = failed
router.post('/createUserStory', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.createUserStory(body.title, body.description);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
//test = passed
router.get('/searchUserStoryById', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        console.log(story_id);
        const result = await User_story.searchByID(story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user story:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/searchUserStoryByTitle', async (req, res, next) => {
    try {
        const title = req.params.title;
        console.log(title);
        const result = await User_story.searchByTitle(title);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user story:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.put('/setUserStoryStatus', async (req, res, next) => {
    try {
        const story_id = req.params.story_id;
        const stat = req.params.stat;
        console.log(story_id, stat);
        const result = await req.models.user_story.setStatus(story_id, stat);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.put('/setUserStoryAsFavorite', async (req, res, next) => {
    try {
        const story_id = req.params.story_id;
        console.log(story_id);
        const result = await req.models.user_story.setAsFavorite(story_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.put('/unfavorite', async (req, res, next) => {
    try {
        const story_id = req.params.story_id;
        console.log(story_id);
        const result = await req.models.user_story.unfavorite(story_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.put('/setUserStoryDescription', async (req, res, next) => {
    try {
        const story_id = req.params.story_id;
        const descp = req.params.descp;
        console.log(story_id, descp);
        const result = await req.models.user_story.setDescription(story_id, descp);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
router.put('/setUserStoryTitle', async (req, res, next) => {
    try {
        const story_id = req.params.story_id;
        const title = req.params.title;
        console.log(story_id, title);
        const result = await req.models.user_story.setDescription(story_id, title);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.delete('/removeUserStory', async (req, res, next) => {
    try {
        const story_id = req.params.story_id;
        console.log(story_id);
        const result = await req.models.user_story.removeStory(story_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


module.exports = router;