const express = require('express');
const Assessment = require('../models/assessment');
const router = express.Router();

//test = failed
router.post('/createAssessment', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.assessment.createAssessment(body.assessment_link, body.prof_id, body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new Class:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.get('/searchAssessmentByLink', async (req, res, next) => {
    try {
        const assessment_link = req.query.assessment_link;
        const result = await Assessment.searchByLink(assessment_link);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
});

//test = passed
router.get('/getAssessmentLink', async (req, res, next) => {
    try {
        const assessment_id = req.query.assessment_id;
        const result = await Assessment.getAssessmentLink(assessment_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current class:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//testing needs to be done
router.put('/setAssessmentLink', async (req, res, next) => {
    try {

        const assessment_id = req.query.assessment_id;
        const assessment_link = req.query.assessment_link;
        //console.log(team_id, name);
        const result = await req.models.assessment.setAssessmentLink(assessment_id, assessment_link);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

//test = passed
router.get('/getAssessmentFlag', async (req, res, next) => {
    try {
        const assessment_id = req.query.assessment_id;
        const result = await Assessment.getAssessmentFlag(assessment_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current assessment:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//test = passed
router.get('/getFlagByProfId', async (req, res, next) => {
    try {
        const prof_id = req.query.prof_id;
        const result = await Assessment.getFlagByProfId(prof_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current assessment:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//test = passed
router.get('/getLinkByProfId', async (req, res, next) => {
    try {
        const prof_id = req.query.prof_id;
        const result = await Assessment.getLinkByProfId(prof_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current assessment:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//test = failed
router.put('/setFlagPublished', async (req, res, next) => {
    try {

        const prof_id = req.query.prof_id;
        //console.log(team_id, name);
        const result = await req.models.assessment.setFlagPublished(prof_id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to update team:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

//test = failed
router.put('/setFlagUnpublished', async (req, res, next) => {
    try {

        const assessment_id = req.query.assessment_id;
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