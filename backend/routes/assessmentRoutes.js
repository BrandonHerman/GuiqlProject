const express = require('express');
const Assessment = require('../models/assessment');
const router = express.Router();

router.post('/createAssessment', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.assessment.createAssessment(body.assessment_id, body.assessment_link, body.prof_id, body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/searchAssessmentByLink', async (req, res, next) => {
    try {
        const assessment_link = req.params.assessment_link;
        const result = await Assessment.searchByLink(assessment_link);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

router.get('/getAssessmentLink', async (req, res, next) => {
    try {
        const assessment_id = req.params.assessment_id;
        const result = await Assessment.getAssessmentLink(assessment_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.put('/setAssessmentLink', async (req, res, next) => {
    try {

        const assessment_id = req.params.assessment_id;
        const link = req.params.link;
        //console.log(team_id, name);
        const result = await req.models.assessment.setAssessmentLink(assessment_id, link);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.put('/setFlagPublished', async (req, res, next) => {
    try {

        const assessment_id = req.params.assessment_id;
        //console.log(team_id, name);
        const result = await req.models.assessment.setFlagPublished(assessment_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

router.put('/setFlagUnpublished', async (req, res, next) => {
    try {

        const assessment_id = req.params.assessment_id;
        //console.log(team_id, name);
        const result = await req.models.assessment.setFlagUnpublished(assessment_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

module.exports = router;