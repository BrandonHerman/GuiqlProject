const express = require('express');
const router = express.Router();
const Professor = require('../models/professor');

router.post('/createProfessor', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.createProfessor(body.professor_id, body.first_name, body.last_name, body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new professor:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/authenticateProfessor', async (req, res, next) => {
    try {
        const username = req.params.username;
        const password = req.params.password;
        console.log(username, password);
        const result = await Professor.authenticate(username, password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current professor:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/searchProfessorByID', async (req, res, next) => {
    try {
        const professor_id = req.params.professor_id;
        console.log(professor_id);
        const result = await Professor.searchByID(professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current professor:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/searchProfessorByUsername', async (req, res, next) => {
    try {
        const username = req.params.username;
        console.log(username);
        const result = await Professor.searchByUsername(username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current professor:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/searchProfessorByEmail', async (req, res, next) => {
    try {
        const email = req.params.email;
        console.log(email);
        const result = await Professor.searchByEmail(email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current professor:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getProfessorName', async (req, res, next) => {
    try {
        const professor_id = req.params.professor_id;
        console.log(professor_id);
        const result = await Professor.getProfessorNamel(professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current professor:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})


router.delete('/removeProfessor', async (req, res, next) => {
    try {
        const professor_id = req.params.professor_id;
        console.log(professor_id);
        const result = await req.models.professor.removeProfessor(professor_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete professor:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;