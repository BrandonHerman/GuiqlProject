const express = require('express');
const router = express.Router();

router.post('/createTeam', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.createTeam(body.team_id,body.team_name,body.team_num);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchTeamById', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.searchByID(body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchTeamByName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.searchByName(body.team_name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.update('/setTeamSize', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.setTeamSize(body.team_id,body.num);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


router.get('/getTeamSize', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.getTeamSize(body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.update('/setTeamName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.setTeamName(body.team_id,body.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/getTeamName', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.getTeamName(body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;


