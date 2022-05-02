const knex = require('../database/knex');
// const bcrypt = require('bcrypt');
const e = require('express');

const STUDENT_TABLE = 'Student';

const createStudent = async (username,password,first_name,last_name,email,class_type,prof_id,class_id,college_id) => {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password,salt);
        const hashedPassword = password;
        const query = await knex(STUDENT_TABLE).insert({username,password: hashedPassword,first_name,last_name,email,class_type,prof_id,class_id,college_id});
        const result = await query;
        return result;
}

const authenticate = async (username,password) => {
    const students = await searchByUsername(username);

    // check if username exists
    if (validUsername.length === 0) {
        console.error(`No students matched the username: ${username}`);
        return null;
    }
    // check if password is correct
    const student = students[0];
    const validPassword = await findUserByPassword(username,password);
    if (validPassword.length !== 0) {;
        delete student.password;
        return student;
    }
    return null;
}

const searchById = async (student_id) => {
    const query = await knex(STUDENT_TABLE).where({ student_id });
    const result = await query;
    return result;
}

const searchByUsername = async (username) => {
    const query = await knex(STUDENT_TABLE).where({ username });
    const result = await query;
    return result;
}

const findUserByPassword = async (username,password) => {
    const query = await knex(STUDENT_TABLE).where({username,password});
    const result = await query;
    return result;
}

const searchByEmail = async (email) => {
    const query = await knex(STUDENT_TABLE).where({ email });
    const result = await query;
    return result;
}

const searchByCollege = async (college_id) => {
    const query = await knex(STUDENT_TABLE).where({college_id});
    const result = await query;
    return result;
}

const updateTeam = async (student_id,team) => {
    const query = await knex(STUDENT_TABLE).where({student_id}).update('team_id', team);
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
    searchById,
    searchByEmail,
    searchByUsername,
    findUserByPassword,
    searchByCollege,
    updateTeam,
    searchByTeam,
    getTeamStatus,
    getStudentName,
    removeStudent
}