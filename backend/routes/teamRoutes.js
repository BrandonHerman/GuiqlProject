const express = require('express');
const router = express.Router();
const Team = require('../models/team');

router.post('/createTeam', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.team.createTeam(body.team_name,body.team_num);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/searchTeamById', async (req, res, next) => {
    try {
        const team_id = req.query.team_id;
        console.log(team_id);
        const result = await Team.searchByID(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current team:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/searchTeamByName', async (req, res, next) => {
    try {
        const team_name = req.query.team_name;
        console.log(team_name);
        const result = await Team.searchByName(team_name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current team:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.put('/setTeamSize', async (req, res, next) => {
    try {

        const team_id = req.query.team_id;
        const num = req.query.num;
        console.log(team_id, num);
        const result = await req.models.team.setTeamSize(team_id, num);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});


router.get('/getTeamSize', async (req, res, next) => {
    try {
        const team_id = req.query.team_id;
        console.log(team_id);
        const result = await Team.getTeamSize(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current team:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.put('/setTeamName', async (req, res, next) => {
    try {

        const team_id = req.query.team_id;
        const name = req.query.name;
        console.log(team_id, name);
        const result = await req.models.team.setTeamSize(team_id, name);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.get('/getTeamName', async (req, res, next) => {
    try {
        const team_id = req.query.team_id;
        console.log(team_id);
        const result = await Team.getTeamName(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current team:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.delete('/deleteTeam', async (req, res, next) => {
    try {
        const team_id = req.query.team_id;
        console.log(team_id);
        const result = await req.models.student.removeTeam(team_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;


