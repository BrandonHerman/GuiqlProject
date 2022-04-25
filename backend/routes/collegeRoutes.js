const express = require('express');
const User = require('../models/college');
const router = express.Router();

router.post('/createCollege', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.createCollege(body.college_id, body.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
/*
router.get('/searchCollegeByID', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.searchByID(body.college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
*/
router.get('/searchCollegeByID', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.searchByID(user.college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchCollegeByName', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.searchByName(user.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/getCollegeName', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getName(user.college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getCollegeID', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getID(user.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})


module.exports = router;