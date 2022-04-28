const knex = require('../database/knex');
//const bcrypt = require('bcrypt');
const e = require('express');

const PROFESSOR_TABLE = 'Professor';

const createProfessor = async (first_name,last_name,username,email,password,college_id) => {
    //const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(password,salt);
    const hashedPassword = password;
    const query = await knex(PROFESSOR_TABLE).insert({first_name,last_name,email,username,password: hashedPassword,college_id});
    const result = await query;
    return result;
}

const authenticate = async (username,password) => {
    const professors = await searchByUsername(username);

    // check if username exists
    if (validUsername.length === 0) {
        console.error(`No professors matched the username: ${username}`);
        return null;
    }
    // check if password is correct
    const prof = professors[0];
    const validPassword = await findUserByPassword(username,password);
    if (validPassword.length !== 0) {;
        delete prof.password;
        return prof;
    }
    return null;
}

const findByUsername = async (username) => {
    const query = await knex(PROFESSOR_TABLE).where({username});
    
    if (query.length === 0) {
        return false;
    } else {
        return query;
    }
}

const findByEmail = async (email) => {
    const query = await knex(PROFESSOR_TABLE).where({email});

    if (query.length === 0) {
        return false;
    } else {
        return query;
    }
}

const searchById = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).where({ prof_id });
    const result = await query;
    return result;
}

const searchByUsername = async (username) => {
    const query = await knex(PROFESSOR_TABLE).where({ username });
    const result = await query;
    return result;
}

const findUserByPassword = async (username, password) => {
    const query = await knex(PROFESSOR_TABLE).where({username,password});
    const result = await query;
    return result;
}

const searchByEmail = async (email) => {
    const query = await knex(PROFESSOR_TABLE).where({ email });
    const result = await query;
    return result;
}

const searchByCollege = async (college_id) => {
    const query = await knex(PROFESSOR_TABLE).where({college_id});
    const result = await query;
    return result;
}

const getProfessorName = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).select('first_name','last_name').where({prof_id});
    const result = await query;
    return result;
}

const getCollegeIdByProfId = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).select('college_id').where({prof_id});
    const result = await query;
    return result;
}

const getCollegeByProfId = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).where({prof_id});
    const result = await query;
    return result;
}

const removeProfessor = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).where({prof_id}).del();
    const result = await query;
    return result; 
}

module.exports = {
    createProfessor,
    authenticate,
    findByUsername,
    findByEmail,
    searchById,
    searchByEmail,
    searchByUsername,
    searchByCollege,
    getProfessorName,
    getCollegeIdByProfId,
    getCollegeByProfId,
    removeProfessor
}