
const Class = require('../models/class');
const college = require('../models/college');
const professor = require('../models/professor');
const recruiter = require('../models/recruiter');
const student = require('../models/student');
const team = require('../models/team');
const users = require('../models/user_story');
const assessments = require('../models/assessment');
const meetings = require('../models/meeting');
const progress_reports = require('../models/progress');

// /**
//  * This middleware function is meant to be registered BEFORE the route handlers (see index.js)
//  * This sets up a connection to the database. We modify the request object by tacking on the
//  * models and disconnect function. Any FUTURE middleware / route handler thus has access to
//  * those models / disconnect function by virtue of the fact that the request object is the same
//  * one through the whole chain
//  */
const createModelsMiddleware = async (req, res, next) => {
    req.models = {
        class : Class, 
        college,
        professor,
        recruiter,
        student,
        team,
        users
    }
    next();
}

module.exports = {
    createModelsMiddleware
}