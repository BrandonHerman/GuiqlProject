const express = require('express');
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
        const body = req.body;
        console.log(body);
        const result = await req.models.class.searchByID(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getStartTimeOfClass', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.getStartTime(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getEndTimeOfClass', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.getEndTime(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getProfessor', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.getProfessor(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getNumberOfGroups', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.getNumGroups(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getAverageGroupSizes', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.getAvgGroupSize(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
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
        const body = req.body;
        console.log(body);
        const result = await req.models.class.getPeerReview(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/makePeerReviewVisible', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.makePeerReviewVisible(body.class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;