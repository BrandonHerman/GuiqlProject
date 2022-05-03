const express = require('express');
const Meeting = require('../models/meeting');
const router = express.Router();

//test = passed
router.post('/createMeeting', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await Meeting.createMeeting(body.meeting_time, body.meeting_place, body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.get('/searchMeetingByTeam', async (req, res, next) => {
    try {
        const team_id= req.query.team_id;
        console.log(team_id);
        const result = await Meeting.searchByTeam(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current progress report: ', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//test = passed
router.put('/setMeetingTime', async (req, res, next) => {
    try {

        const meeting_id = req.query.meeting_id;
        const meeting_time = req.query.meeting_time;
        //console.log(team_id, name);
        const result = await Meeting.setTime(meeting_id, meeting_time);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

//test = passed
router.put('/setMeetingPlace', async (req, res, next) => {
    try {

        const meeting_id = req.query.meeting_id;
        const meeting_place = req.query.meeting_place;
        //console.log(team_id, name);
        const result = await Meeting.setPlace(meeting_id, meeting_place);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});


//test = passed
router.delete('/deleteMeeting', async (req, res, next) => {
    try {
        const meeting_id = req.query.meeting_id;
        console.log(meeting_id);
        const result = await Meeting.deleteMeeting(meeting_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete professor:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})


module.exports = router;

