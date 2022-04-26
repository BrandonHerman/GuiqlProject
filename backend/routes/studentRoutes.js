const express = require('express');
const router = express.Router();
const Student = require('../models/recruiter');

router.post('/createStudent', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.createStudent(body.student_id, body.first_name, body.last_name, body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Student:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


router.get('/authenticateStudent', async (req, res, next) => {
    try {
        const username = req.params.username;
        const password = req.params.password;
        console.log(username, password);
        const result = await Student.authenticate(username, password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchStudentByID', async (req, res, next) => {
    try {
        const student_id = req.params.student_id;
        console.log(student_id);
        const result = await Student.searchByID(student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchStudentByUsername', async (req, res, next) => {
    try {
        const username = req.params.username;
        console.log(username);
        const result = await Student.searchByUsername(username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchStudentByEmail', async (req, res, next) => {
    try {
        const email = req.params.email;
        console.log(email);
        const result = await Student.searchByEmail(email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchStudentByTeam', async (req, res, next) => {
    try {
        const team_id = req.params.team_id;
        console.log(team_id);
        const result = await Student.searchByTeam(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/getTeamStatus', async (req, res, next) => {
    try {
        const student_id = req.params.student_id;
        console.log(student_id);
        const result = await Student.getTeamStatus(student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/getStudentName', async (req, res, next) => {
    try {
        const student_id = req.params.student_id;
        console.log(student_id);
        const result = await Student.getStudentName(student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.delete('/:student_id', async (req, res, next) => {
    try {
        const student_id = req.params.student_id;
        console.log(student_id);
        console.log(recruiter_id);
        const result = await req.models.student.removeStudent(student_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete student:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
module.exports = router;