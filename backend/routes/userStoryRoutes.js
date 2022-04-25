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

router.get('/searchUserStoryById', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.searchByID(body.story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchUserStoryByTitle', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.searchByTitle(body.title);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.update('/setUserStoryStatus', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.setStatus(body.story_id,body.stat);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.update('/setUserStoryAsFavorite', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.setAsFavorite(body.story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.update('/unfavoriteUserStory', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.unfavorite(body.story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.update('/setUserStoryDescription', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.setDescription(body.story_id,body.desc);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
router.update('/setUserStoryTitle', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.setTitle(body.story_id, body.title);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.delete('/removeUserStory', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.user_story.removeStory(body.story_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


module.exports = router;