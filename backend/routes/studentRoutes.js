const express = require('express');
const router = express.Router();

router.post('/createStudent', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.createStudent(body.student_id, body.first_name, body.last_name, body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


router.get('/authenticateStudent', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.authenticate(body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchStudentByID', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.searchByID(body.student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchStudentByUsername', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.searchByUsername(body.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchStudentByEmail', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.searchByEmail(body.email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchStudentByTeam', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.searchByTeam(body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getTeamStatus', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.getTeamStatus(body.student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getStudentName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.getStudentName(body.student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.delete('/removeStudent', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.removeStudent(body.student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
module.exports = router;