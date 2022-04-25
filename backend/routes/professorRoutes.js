const express = require('express');
const router = express.Router();
const User = require('../models/professor');

router.post('/createProfessor', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.createProfessor(body.professor_id, body.first_name, body.last_name, body.username, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/authenticateProfessor', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.authenticate(user.username,user.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/searchProfessorByID', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.searchByID(user.professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/searchProfessorByUsername', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.searchByUsername(user.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/searchProfessorByEmail', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.searchByEmail(user.email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.get('/getProfessorName', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.getProfessorNamel(user.professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})
/*
router.delete('/removeProfessor', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.removeProfessor(body.professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})
*/
    next();
router.delete('/:professor_id', async (req, res, next) => {
    try {
        const allocation_id=req.params.professor_id;
        console.log(professor_id);
        const result = await req.models.professor.removeProfessor(professor_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;