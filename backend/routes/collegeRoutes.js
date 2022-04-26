const express = require('express');
const College = require('../models/college');
const router = express.Router();

router.post('/createCollege', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.createCollege(body.college_id, body.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new College:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});
router.get('/searchCollegeByID', async (req, res, next) => {
    try {
        const college_id = req.params.college_id;
        console.log(college_id);
        const result = await College.searchByID(college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchCollegeByName', async (req, res, next) => {
    try {
        const name = req.params.name;
        console.log(name);
        const result = await College.searchByName(name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/getCollegeName', async (req, res, next) => {
    try {
        const college_id = req.params.college_id;
        console.log(college_id);
        const result = await College.getName(college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getCollegeID', async (req, res, next) => {
    try {
        const name = req.params.name;
        console.log(name);
        const result = await College.getID(name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})


module.exports = router;