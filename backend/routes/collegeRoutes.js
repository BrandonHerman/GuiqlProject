const express = require('express');
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

router.get('/searchCollegeByName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.searchByName(body.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getCollegeName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.getName(body.college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getID', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.college.getID(body.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


module.exports = router;