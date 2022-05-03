const express = require('express');
const router = express.Router();
const User_story = require('../models/user_story');

//test = passed
router.post('/createUserStory', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.createUserStory(body.title, body.description, body.student_id, body.team_id);
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
        const result = await User_story.searchById(story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user story:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/searchUserStoryByTitle', async (req, res, next) => {
    try {
        const title = req.query.title;
        console.log(title);
        const result = await User_story.searchByTitle(title);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user story:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.put('/setUserStoryStatus', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        const status = req.query.status;
        console.log(story_id, stat);
        const result = await User_story.setStatus(story_id, status);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.put('/setUserStoryAsFavorite', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        console.log(story_id);
        const result = await User_story.setAsFavorite(story_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.put('/unfavorite', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        console.log(story_id);
        const result = await User_story.unfavorite(story_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.put('/setUserStoryDescription', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        const description = req.query.description;
        console.log(story_id, descp);
        const result = await User_story.setDescription(story_id, description);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.put('/setUserStoryTitle', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        const title = req.query.title;
        console.log(story_id, title);
        const result = await User_story.setTitle(story_id, title);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.delete('/removeUserStory', async (req, res, next) => {
    try {
        const story_id = req.query.story_id;
        console.log(story_id);
        const result = await User_story.removeStory(story_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete user story:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


module.exports = router;