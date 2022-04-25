const express = require('express');
const router = express.Router();

router.post('/createRecruiter', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.recruiter.createRecruiter(body.recruiter_id, body.first_name, body.last_name, body.username, password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.get('/authenticateRecruiter', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.authenticate(user.username,user.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

router.delete('/:recruiter_id', async (req, res, next) => {
    try {
        const allocation_id=req.params.recruiter_id;
        console.log(recruiter_id);
        const result = await req.models.recruiter.deleteRecruiter(recruiter_id);
        res.status(204).json(result);
    } catch (err) {
        console.error('Failed to delete allocation:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;