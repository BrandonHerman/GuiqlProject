const knex = require('../database/knex');
const bcrypt = require('bcrypt');
const e = require('express');

const STUDENT_TABLE = 'Student';

const createStudent = async (student_id, first_name, last_name, username, password) => {
    // check if student already exists
    const id = await searchByID(student_id);
    const userName = await searchByUsername(username);
    const eMail = await searchByEmail(email);

    if (id) {
        return "Student has already been added";
    } else if (userName) {
        return "Username taken!";
    } else if (eMail) {
        return "Email already associated with another account!";
    } else {  //if student does not already exist, add their info to the table
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const query = await knex(STUDENT_TABLE).insert({student_id,first_name,last_name,email,username,password: hashedPassword,salt});
        const returnValue = await knex(STUDENT_TABLE).select('Student.student_id','Student.first_name','Student.last_name','Student.email','Student.username');
        return returnValuel
    }
}

const authenticate = async (username,password) => {
    const validUsername = await searchByUsername(username);

    // check if username exists
    if (validUsername == false) {
        return "Username does not exist!";
    } else {
        // check if password is correct
        const validPassword = await findUserByPassword(username,password);
         if (validPassword.length !== 0) {;
            const query = await knex(USER_TABLE).where({username,password: validPassword[0].password});
            return query;
        } else {
            return "Password is incorrect!";
        }
    }
}

const searchByID = async (student_id) => {
    const query = await knex(STUDENT_TABLE).where({ student_id });
    const result = await query;
    return result;
}

const searchByUsername = async (username) => {
    const query = await knex(STUDENT_TABLE).where({ username });
    const result = await query;
    return result;
}

const searchByEmail = async (email) => {
    const query = await knex(STUDENT_TABLE).where({ email });
    const result = await query;
    return result;
}

const searchByTeam = async (team_id) => {
    const query = await knex(STUDENT_TABLE).where({ team_id });
    const result = await query;
    return result;
}

const getTeamStatus = async (student_id) => {
    const query = await knex(STUDENT_TABLE).select('in_team').where({student_id});
    const result = await query;
    return result;
}

const getStudentName = async (student_id) => {
    const query = await knex(STUDENT_TABLE).select('first_name','last_name').where({student_id});
    const result = await query;
    return result;
}

const removeStudent = async (student_id) => {
    const query = await knex(STUDENT_TABLE).where({student_id}).del();
    const result = await query;
    return result;
}

module.exports = {
    createStudent,
    authenticate,
    searchByID,
    searchByEmail,
    searchByUsername,
    searchByTeam,
    getTeamStatus,
    getStudentName,
    removeStudent
}