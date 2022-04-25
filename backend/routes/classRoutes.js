const express = require('express');
const User = require('../models/class');
const router = express.Router();

router.post('/createClass', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.createClass(body.class_id,body.start_time,body.end_time,body.prof_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchClassByID', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.searchByID(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getStartTimeOfClass', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getStartTime(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getEndTimeOfClass', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getEndTime(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getProfessor', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getProfessor(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getNumberOfGroups', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getNumGroups(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getAverageGroupSizes', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getAvgGroupSize(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.post('/addPeerReview', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.addPeerReview(body.class_id,body.link);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getPeerReview', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getPeerReview(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/makePeerReviewVisible', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.makePeerReviewVisible(user.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

module.exports = router;