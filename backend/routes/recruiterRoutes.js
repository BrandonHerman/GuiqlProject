const express = require('express');
const router = express.Router();
const Recruiter = require('../models/recruiter');

router.post('/createRecruiter', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.recruiter.createRecruiter(body.first_name, body.last_name, body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new recruiter:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/authenticateRecruiter', async (req, res, next) => {
    try {
        const username = req.params.username;
        const password = req.params.password;
        const result = await Recruiter.authenticate(username, password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current recruiter:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getRecruiterByUsername', async (req, res, next) => {
    try {
        const username = req.params.username;
        const result = await Recruiter.getByUsername(username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current recruiter:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.put('/addRecruiterBio', async (req, res, next) => {
    try {

        const recruiter_id = req.params.recruiter_id;
        const rec_bio = req.params.rec_bio;
        //console.log(team_id, name);
        const result = await req.models.recruiter.addBio(recruiter_id,rec_bio);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/getBioById', async (req, res, next) => {
    try {
        const recruiter_id = req.params.recruiter_id;
        const result = await Recruiter.getBioById(recruiter_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current recruiter:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getBioByCollege', async (req, res, next) => {
    try {
        const college_id = req.params.college_id;
        const result = await Recruiter.getBioByCollege(college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current recruiter:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.delete('/deleteRecruiter', async (req, res, next) => {
    try {
        const recruiter_id = req.params.recruiter_id;
        console.log(recruiter_id);
        const result = await req.models.recruiter.deleteRecruiter(recruiter_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete recruiter:', err);
        res.status(500).json({ message: err.toString() });
    }

    next(); 
})

module.exports = router;