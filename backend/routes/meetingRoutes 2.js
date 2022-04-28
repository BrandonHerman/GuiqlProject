const express = require('express');
const Assessment = require('../models/meeting');
const router = express.Router();

router.post('/createMeeting', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.meeting.createMeeting(body.meeting_id, body.meeting_time, body.meeting_place, body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
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


module.exports = router;

