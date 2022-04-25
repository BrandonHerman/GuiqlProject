const express = require('express');
const router = express.Router();

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
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.authenticate(body.username,body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchProfessorByID', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.searchByID(body.professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchProfessorByUsername', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.searchByUsername(body.username);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchProfessorByEmail', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.searchByEmail(body.email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getProfessorName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.professor.getProfessorName(body.professor_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

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

module.exports = router;