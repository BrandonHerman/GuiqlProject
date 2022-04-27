const jwt = require('jsonwebtoken');
const Prof = require('../models/professor');
const Stud = require('../models/student');
const Recr = require('../models/recruiter');

const accessTokenSecret = 'secret';

// methods that create a new user accounts
const createNewProfessor = async (prof_id,first_name,last_name,username,email,password) => {
    const prof = await Prof.createProfessor(prof_id,first_name,last_name,username,email,password);
    return prof;
}

const createNewStudent = async (student_id,first_name,last_name,username,email,password) => {
    const stud = await Stud.createStudent(student_id,first_name,last_name,username,email,password);
    return stud;
}

const createNewRecruiter = async (recruiter_id,first_name,last_name,username,email,password) => {
    const rec = await Recr.createRecruiter(recruiter_id,first_name,last_name,username,email,password);
    return rec;
}

// method that checks whether user exists or not
const authenticateProf = async (username,password) => {
    const prof = await Prof.authenticate(username,password);

    // check if user exists
    if (prof === "Username does not exist!" || prof === "Password is incorrect!") {
        return prof;
    } else { 
        // create a token
        const accessToken = jwt.sign({...prof[0], claims: ['professor']}, accessTokenSecret);
        return accessToken; 
    }
}

const authenticateStudent = async (username,password) => {
    const stud = await Stud.authenticate(username,password);

    if (stud === "Username does not exist!" || stud === "Password is incorrect!") {
        return stud;
    } else {
        const accessToken = jwt.sign({...stud[0], claims: ['student']}, accessTokenSecret);
        return accessToken;
    }
}

const authenticateRecruiter = async (username,password) => {
    const recr = await Recr.authenticate(username,password);

    if (recr === "Username does not exist!" || recr === "Password is incorrect!") {
        return recr;
    } else {
        const accessToken = jwt.sign({...recr[0], claims: ['recruiter']}, accessTokenSecret);
        return accessToken;
    }
}

// method that checks if token is valid to user
const checkProfToken = async (token) => {
    const decode = jwt.verify(token, accessTokenSecret);

    if (decode.prof_id === null || decode.first_name === null || decode.last_name === null || decode.username === null || decode.email === null || decode.password === null) {
        return "Token is invalid!";
    } else {
        return {
            prof_id: decode.prof_id,
            first_name: decode.first_name,
            last_name: decode.last_name,
            username: decode.username,
            email: decode.email,
        } 
    }
}

const checkStudentToken = async (token) => {
    const decode = jwt.verify(token, accessTokenSecret);

    if (decode.student_id === null || decode.first_name === null || decode.last_name === null || decode.username === null || decode.email === null || decode.password === null) {
        return "Token is invalid!";
    } else {
        return {
            student_id: decode.student_id,
            first_name: decode.first_name,
            last_name: decode.last_name,
            username: decode.username,
            email: decode.email,
        } 
    }
}

const checkRecruiterToken = async (token) => {
    const decode = jwt.verify(token, accessTokenSecret);

    if (decode.recruiter_id === null || decode.first_name === null || decode.last_name === null || decode.username === null || decode.email === null || decode.password === null) {
        return "Token is invalid!";
    } else {
        return {
            recruiter_id: decode.recruiter_id,
            first_name: decode.first_name,
            last_name: decode.last_name,
            username: decode.username,
            email: decode.email,
        } 
    }
}

module.exports = {
    createNewProfessor,
    createNewStudent,
    createNewRecruiter,
    authenticateProf,
    authenticateStudent,
    authenticateRecruiter,
    checkProfToken,
    checkStudentToken,
    checkRecruiterToken
};
