const express = require('express');
const Meeting = require('../models/meeting');
const router = express.Router();

router.post('/createMeeting', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.meeting.createMeeting(body.meeting_time, body.meeting_place, body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchMeetingByTeam', async (req, res, next) => {
    try {
        const team_id= req.params.team_id;
        console.log(team_id);
        const result = await Meeting.searchByTeam(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current progress report: ', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.put('/setMeetingTime', async (req, res, next) => {
    try {

        const meeting_id = req.params.meeting_id;
        const time = req.params.time;
        //console.log(team_id, name);
        const result = await req.models.meeting.setTime(meeting_id, time);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.put('/setMeetingPlace', async (req, res, next) => {
    try {

        const meeting_id = req.params.meeting_id;
        const place = req.params.place;
        //console.log(team_id, name);
        const result = await req.models.meeting.setPlace(meeting_id, place);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.delete('/deleteMeeting', async (req, res, next) => {
    try {
        const meeting_id = req.params.meeting_id;
        console.log(meeting_id);
        const result = await req.models.meeting.deleteMeeting(meeting_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete professor:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


module.exports = router;

