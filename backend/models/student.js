const knex = require('../database/knex');

const STUDENT_TABLE = 'Student';

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
    searchByID,
    searchByEmail,
    searchByUsername,
    searchByTeam,
    getTeamStatus,
    getStudentName,
    removeStudent
}