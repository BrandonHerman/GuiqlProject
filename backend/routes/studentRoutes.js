const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//test = passed
router.post('/createStudent', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.student.createStudent( body.username, body.password,body.first_name, body.last_name, body.email, body.class_type, body.prof_id,body.class_id, body.college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Student:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.get('/authenticateStudent', async (req, res, next) => {
    try {
        const username = req.query.username;
        const password = req.query.password;
        console.log(username, password);
        const result = await Student.authenticate(username, password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/searchStudentById', async (req, res, next) => {
    try {
        const student_id = req.query.student_id;
        console.log(student_id);
        const result = await Student.searchById(student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/getStudentByUsername', async (req, res, next) => {
    try {
        const username = req.query.username;
        console.log(username);
        const result = await Student.searchByUsername(username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/searchStudentByEmail', async (req, res, next) => {
    try {
        const email = req.query.email;
        console.log(email);
        const result = await Student.searchByEmail(email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/searchStudentByCollege', async (req, res, next) => {
    try {
        const college_id = req.query.college_id;
        console.log(college_id);
        const result = await Student.searchByCollge(college_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.put('/updateTeam', async (req, res, next) => {
    try {

        const student_id = req.query.student_id;
        const team_id = req.query.team_id;
        //console.log(team_id, name);
        const result = await Student.updateTeam(student_id, team_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

//test = passed
router.get('/searchStudentByTeam', async (req, res, next) => {
    try {
        const team_id = req.query.team_id;
        console.log(team_id);
        const result = await Student.searchByTeam(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/getTeamStatus', async (req, res, next) => {
    try {
        const student_id = req.query.student_id;
        console.log(student_id);
        const result = await Student.getTeamStatus(student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/getStudentName', async (req, res, next) => {
    try {
        const student_id = req.query.student_id;
        console.log(student_id);
        const result = await Student.getStudentName(student_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current Student:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.delete('/deleteStudent', async (req, res, next) => {
    try {
        const student_id = req.query.student_id;
        console.log(student_id);
        //console.log(recruiter_id);
        const result = await Student.removeStudent(student_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete student:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
module.exports = router;