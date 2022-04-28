const express = require('express');
const College = require('../models/college');
const router = express.Router();

router.post('/createCollege', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.createCollege(body.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new College:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});
router.get('/searchCollegeById', async (req, res, next) => {
    try {
        const college_id = req.params.college_id;
        console.log("CollegeId in searchCollegeByID: ", college_id);
        const result = await College.searchById(college_id);
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

router.get('/getCollegeId', async (req, res, next) => {
    try {
        const name = req.params.name;
        console.log(name);
        const result = await College.getId(name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getCollegeByProfId', async (req, res, next) => {
    try {
        const prof_id = req.params.prof_id;
        console.log(prof_id);
        const result = await College.getCollegeByProfId(prof_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getCollegeIdByProfId', async (req, res, next) => {
    try {
        const prof_id = req.params.prof_id;
        console.log(prof_id);
        const result = await College.getCollegeIdByProfId(prof_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current College:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})


module.exports = router;