const express = require('express');
const Class = require('../models/class');
const router = express.Router();

router.post('/createClass', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.class.createClass(body.class_time, body.prof_id,body.group_count, body.size, body.college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchClassById', async (req, res, next) => {
    try {
        // console.log("Params in class: ", req.q)
        const class_id = req.query.class_id;
        // console.log("Classid in searchClassbyId: ", {class_id});
        const result = await Class.searchById(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getStartTimeOfClass', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        console.log(class_id);
        const result = await Class.getStartTime(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getEndTimeOfClass', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        console.log(class_id);
        const result = await Class.getEndTime(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getClass', async (req, res, next) => {
    try {
        const class_time = req.params.class_time;
        const college_id = req.params.college_id;
        console.log(class_time, college_id);
        const result = await Class.getClass(class_time, college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getClassesByProfId', async (req, res, next) => {
    try {
        const prof_id = req.params.prof_id;
        console.log(prof_id);
        const result = await Class.getClassesByProfId(prof_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load classes: ', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getProfessor', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        console.log(class_id);
        const result = await Class.getProfessor(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getNumberOfGroups', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        console.log(class_id);
        const result = await Class.getNumGroups(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getAverageGroupSizes', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        console.log(class_id);
        const result = await Class.getAvgGroupSize(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
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
        console.error('Failed to create new class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getPeerReview', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        const result = await Class.getPeerReview(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/makePeerReviewVisible', async (req, res, next) => {
    try {
        const class_id = req.params.class_id;
        const result = await Class.makePeerReviewVisible(class_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

module.exports = router;