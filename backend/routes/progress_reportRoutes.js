const express = require('express');
const router = express.Router();
const Progress_Report = require('../models/progress_report');

//test = failed
router.post('/createProgressReport', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.progress_report.createProgressReport(body.sprint, body.report, body.team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new progress report:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

//test = passed
router.get('/searchProgressReportById', async (req, res, next) => {
    try {
        const report_id= req.query.report_id;
        console.log(report_id);
        const result = await Progress_Report.searchById(report_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current progress report: ', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//test = passed
router.get('/searchProgressReportByTeamId', async (req, res, next) => {
    try {
        const team_id= req.query.team_id;
        console.log(team_id);
        const result = await Progress_Report.searchByTeamId(team_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current progress report: ', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

//test= passed
router.delete('/deleteReport', async (req, res, next) => {
    try {
        const report_id = req.query.report_id;
        console.log(report_id);
        const result = await Progress_Report.deleteReport(report_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete professor:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;